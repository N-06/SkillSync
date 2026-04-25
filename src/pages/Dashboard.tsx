// Dashboard.tsx — main authenticated landing page.
// Combines four things:
//   1. A search bar + filter row (location / salary / job-type / work-mode).
//   2. Trending market-intelligence charts (skills + role categories).
//   3. The TF-IDF + cosine-similarity recommendation engine, run client-side
//      against the user's saved skills and target roles.
//   4. A list of ranked JobCard results with skill-gap + learning resources.
//
// All ranking math runs in the browser — nothing about the user's skills or
// queries is sent to a server (privacy-first college-project design).

import { useEffect, useMemo, useRef, useState } from "react";
import { jobs } from "@/data/jobs";
import { findMatchingJobs } from "@/lib/tfidf";
import { computeSkillGap } from "@/lib/skillGap";
import { REGIONS, type Region, formatSalary } from "@/lib/regions";
import { projectJobsToRegion } from "@/lib/regionJobs";
import { useProfile } from "@/hooks/useProfile";
import AppShell from "@/components/AppShell";
import TrendingCharts from "@/components/TrendingCharts";
import JobCard from "@/components/JobCard";
import RegionSelector from "@/components/RegionSelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, DollarSign, Briefcase, Wifi, Target, BarChart3, TrendingUp } from "lucide-react";

// Salary filters are stored as USD bounds (the dataset's native currency).
// We display the labels converted into the active region's currency below.
const SALARY_FILTERS_USD = [
  { label: "Any salary",     min: 0,      max: Infinity },
  { label: "Under $60K",     min: 0,      max: 60000 },
  { label: "$60K – $90K",    min: 60000,  max: 90000 },
  { label: "$90K – $120K",   min: 90000,  max: 120000 },
  { label: "$120K – $150K",  min: 120000, max: 150000 },
  { label: "$150K+",         min: 150000, max: Infinity },
];

export default function Dashboard() {
  const { profile, skills, savedJobIds, toggleSavedJob, updateProfile } = useProfile();

  // Default region from the user's saved profile (set during onboarding).
  // Falls back to US only if the profile hasn't loaded yet.
  const initialRegion = REGIONS.find(r => r.id === (profile?.preferred_region ?? "us").toLowerCase()) ?? REGIONS[0];
  const [region, setRegion] = useState<Region>(initialRegion);

  // Profile is fetched async — when it arrives, sync the region picker so
  // users see their chosen country/currency by default instead of US/USD.
  useEffect(() => {
    if (profile?.preferred_region) {
      const r = REGIONS.find(x => x.id === profile.preferred_region.toLowerCase());
      if (r && r.id !== region.id) setRegion(r);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.preferred_region]);

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("all");
  const [salaryFilter, setSalaryFilter] = useState("0");
  const [jobType, setJobType] = useState("all");
  const [workMode, setWorkMode] = useState("all");
  const [searched, setSearched] = useState(false);
  const resultsRef = useRef<HTMLElement>(null);

  // Localized salary-filter labels (e.g. "₹50L – ₹75L" instead of "$60K – $90K").
  const salaryFilters = useMemo(() => SALARY_FILTERS_USD.map(s => {
    if (s.max === Infinity && s.min === 0) return { ...s, displayLabel: s.label };
    if (s.max === Infinity) return { ...s, displayLabel: `${formatSalary(s.min, region)}+` };
    if (s.min === 0)        return { ...s, displayLabel: `Under ${formatSalary(s.max, region)}` };
    return { ...s, displayLabel: `${formatSalary(s.min, region)} – ${formatSalary(s.max, region)}` };
  }), [region]);

  // Project the synthetic dataset into the active region so locations + listings
  // make sense for IN/UK/DE/CA users (the raw dataset only has US cities).
  const regionJobs = useMemo(() => projectJobsToRegion(jobs, region), [region]);

  const filteredJobs = useMemo(() => {
    return regionJobs.filter(j => {
      if (location !== "all" && !j.locations.includes(location)) return false;
      const sal = SALARY_FILTERS_USD[parseInt(salaryFilter)];
      if (j.salaryMax < sal.min || j.salaryMin > sal.max) return false;
      if (jobType !== "all" && j.jobType !== jobType) return false;
      if (workMode !== "all" && j.workMode !== workMode) return false;
      return true;
    });
  }, [regionJobs, location, salaryFilter, jobType, workMode]);

  // Build query for the TF-IDF ranking engine.
  // - If the user has typed an explicit search, rank ONLY by that search term
  //   (their saved skills/target roles are intentionally excluded so results
  //   reflect what they're actively looking for).
  // - If no search is typed, fall back to auto-personalization using saved
  //   skills + target roles so the dashboard still feels tailored.
  // Note: saved skills are still passed to JobCard for skill-gap evaluation
  // regardless of which branch runs here.
  const effectiveQuery = useMemo(() => {
    if (query.trim()) return query.trim();
    const parts: string[] = [];
    if (skills.length > 0) parts.push(skills.join(" "));
    if (profile?.target_roles && profile.target_roles.length > 0) parts.push(profile.target_roles.join(" "));
    return parts.join(" ");
  }, [query, skills, profile?.target_roles]);

  // Auto-personalized recommendations qualify a job if ANY of these hold:
  //
  // 1. EXACT-NAME ROLE MATCH: The job title contains a saved target role as
  //    a contiguous phrase (e.g. saving "Java Architect" matches a job
  //    titled "Senior Java Architect" but NOT "Cloud Architect"). We use
  //    word-boundary checks so "Java Architect" never matches "JavaScript
  //    Architect" or just "Architect" alone.
  //
  // 2. ROLE-SKILLSET MATCH: We build a "canonical skill profile" from jobs
  //    whose title exactly matches a saved target role. Any other job that
  //    shares a STRONG portion (>=60%) of its required skills with that
  //    profile qualifies as a role-similar job. The high threshold prevents
  //    tangentially related jobs (e.g. Cloud Architect sharing only AWS
  //    with Java Architect) from sneaking in.
  //
  // 3. SAVED-SKILL MATCH: Job requires at least 2 of the user's saved
  //    technical skills (or all of them if the user has fewer than 2).
  //    Single-skill coincidences (e.g. "knows SQL" matching every DB job)
  //    are filtered out.
  //
  // When the user types an explicit search query, we skip all three passes
  // and just rank jobs by that query via TF-IDF (search intent wins).
  const recommendations = useMemo(() => {
    if (!effectiveQuery.trim() || filteredJobs.length === 0) return [];
    const texts = filteredJobs.map(j => `${j.title} ${j.skills.join(" ")} ${j.description}`.toLowerCase());
    const matches = findMatchingJobs(effectiveQuery, texts, 200);

    const isAutoPersonalized = !query.trim();
    if (!isAutoPersonalized) {
      // Explicit search: trust TF-IDF ranking as-is.
      return matches.slice(0, 30).map(m => ({ job: filteredJobs[m.jobIndex], score: m.score }));
    }

    const targetRoles = (profile?.target_roles ?? []).map(r => r.toLowerCase().trim()).filter(Boolean);
    const savedSkillsLower = skills.map(s => s.toLowerCase().trim());
    const savedSkillsSet = new Set(savedSkillsLower);

    // Word-boundary phrase test: "java architect" matches "Senior Java Architect"
    // but NOT "JavaScript Architect" or "Cloud Architect".
    const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const titleHasRole = (title: string, role: string) => {
      const re = new RegExp(`(^|\\W)${escapeRegex(role)}(\\W|$)`, "i");
      return re.test(title);
    };

    // --- Build canonical skill profile from EXACT title matches only ---
    const roleSkillProfile = new Set<string>();
    for (const role of targetRoles) {
      for (const job of regionJobs) {
        if (titleHasRole(job.title, role)) {
          job.skills.forEach(s => roleSkillProfile.add(s.toLowerCase().trim()));
        }
      }
    }

    // Minimum saved-skill overlap to qualify on skill grounds alone.
    const MIN_SAVED_SKILL_OVERLAP = Math.min(2, savedSkillsLower.length);
    // Role-similar jobs must share >=60% of their skills with the role profile.
    const ROLE_SIMILARITY_THRESHOLD = 0.6;

    const filtered = matches.filter(m => {
      const job = filteredJobs[m.jobIndex];
      const jobSkillsLower = job.skills.map(s => s.toLowerCase().trim());
      const titleLower = job.title.toLowerCase();

      // 1. Exact-name role match (word-boundary aware).
      if (targetRoles.some(role => titleHasRole(titleLower, role))) return true;

      // 2. Role-skillset match: strong overlap with the canonical profile.
      if (roleSkillProfile.size > 0 && jobSkillsLower.length > 0) {
        const overlap = jobSkillsLower.filter(s => roleSkillProfile.has(s)).length;
        const ratio = overlap / jobSkillsLower.length;
        if (ratio >= ROLE_SIMILARITY_THRESHOLD && overlap >= 2) return true;
      }

      // 3. Saved-skill match: meaningful overlap with user's profile skills.
      if (savedSkillsLower.length > 0) {
        const skillOverlap = jobSkillsLower.filter(s => savedSkillsSet.has(s)).length;
        if (skillOverlap >= MIN_SAVED_SKILL_OVERLAP) return true;
      }

      // No target roles AND no saved skills: fall back to raw TF-IDF.
      return targetRoles.length === 0 && savedSkillsLower.length === 0;
    });

    return filtered.slice(0, 30).map(m => ({ job: filteredJobs[m.jobIndex], score: m.score }));
  }, [effectiveQuery, filteredJobs, regionJobs, query, profile?.target_roles, skills]);

  const handleSearch = () => {
    setSearched(true);
    // Scroll the results into view so users don't have to scroll manually.
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // Show results when user searches OR has skills (auto-personalization)
  const showResults = searched || (skills.length > 0 && effectiveQuery.trim().length > 0);
  const results = showResults ? recommendations : [];

  // Stats
  const avgMatch = useMemo(() => {
    if (skills.length === 0 || results.length === 0) return null;
    const top = results.slice(0, 5);
    const sum = top.reduce((acc, r) => acc + computeSkillGap(skills, r.job).matchPercent, 0);
    return Math.round(sum / top.length);
  }, [results, skills]);

  const handleRegionChange = async (r: Region) => {
    setRegion(r);
    setLocation("all");
    if (profile) await updateProfile({ preferred_region: r.id.toUpperCase() });
  };

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero */}
        <section className="animate-fade-in">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-primary mb-1">
                {profile?.display_name ? `Welcome back, ${profile.display_name.split(" ")[0]}` : "Welcome"}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {skills.length > 0 ? "Your personalized matches" : "Find your next role"}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {skills.length > 0
                  ? `Ranked using TF-IDF + cosine similarity against your ${skills.length} skill${skills.length === 1 ? "" : "s"}.`
                  : "Search by skill or role. Add skills in your profile to unlock personalized matches."}
              </p>
            </div>
            <RegionSelector region={region} onRegionChange={handleRegionChange} compact />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by skill, role, technology..."
                className="h-11 pl-9 bg-secondary/40 border-border/50 focus:border-primary/50"
                maxLength={120}
              />
            </div>
            <FilterSelect className="md:col-span-2" value={location} onChange={setLocation} icon={<MapPin className="w-3.5 h-3.5" />} placeholder="Location">
              <SelectItem value="all">All locations</SelectItem>
              {region.locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </FilterSelect>
            <FilterSelect className="md:col-span-2" value={salaryFilter} onChange={setSalaryFilter} icon={<DollarSign className="w-3.5 h-3.5" />}>
              {salaryFilters.map((s, i) => <SelectItem key={i} value={String(i)}>{s.displayLabel}</SelectItem>)}
            </FilterSelect>
            <FilterSelect className="md:col-span-1" value={jobType} onChange={setJobType} icon={<Briefcase className="w-3.5 h-3.5" />} placeholder="Type">
              <SelectItem value="all">Any type</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </FilterSelect>
            <FilterSelect className="md:col-span-1" value={workMode} onChange={setWorkMode} icon={<Wifi className="w-3.5 h-3.5" />} placeholder="Mode">
              <SelectItem value="all">Any mode</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="On-site">On-site</SelectItem>
            </FilterSelect>
            <div className="md:col-span-1">
              <Button onClick={handleSearch} className="w-full h-11 gradient-neon text-primary-foreground shadow-glow hover:opacity-95">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-muted-foreground font-mono uppercase tracking-wider">Your skills:</span>
              {skills.slice(0, 8).map(s => (
                <Badge key={s} variant="outline" className="border-primary/20 text-primary text-[10px]">{s}</Badge>
              ))}
              {skills.length > 8 && <span className="text-muted-foreground">+{skills.length - 8} more</span>}
            </div>
          )}
        </section>

        {/* Trending */}
        <section className="animate-slide-up">
          <TrendingCharts />
        </section>

        {/* Stats */}
        {results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 stagger">
            <StatCard icon={<Target className="w-4 h-4" />} value={String(results.length)} label="Recommendations" />
            <StatCard
              icon={<BarChart3 className="w-4 h-4" />}
              value={`${Math.round(results[0].score * 100)}%`}
              label="Top relevance score"
            />
            <StatCard
              icon={<TrendingUp className="w-4 h-4" />}
              value={avgMatch !== null ? `${avgMatch}%` : formatSalary(
                Math.round(results.slice(0, 5).reduce((s, r) => s + (r.job.salaryMin + r.job.salaryMax) / 2, 0) / Math.min(results.length, 5)),
                region
              )}
              label={avgMatch !== null ? "Avg skill match (top 5)" : "Avg salary (top 5)"}
            />
          </div>
        )}

        {/* Results */}
        {showResults && (
          <section ref={resultsRef} className="space-y-3 animate-fade-in scroll-mt-20">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {skills.length > 0 ? "Recommended for you" : "Search results"}
              </h2>
              <span className="text-xs text-muted-foreground">{results.length} jobs</span>
            </div>
            {results.length === 0 ? (
              <EmptyState
                icon={<Search className="w-6 h-6" />}
                title="No matches found"
                desc="Try a different search or adjust your filters."
              />
            ) : (
              <div className="space-y-2.5 stagger">
                {results.map(({ job, score }, i) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    rank={i + 1}
                    score={score}
                    region={region}
                    userSkills={skills}
                    isSaved={savedJobIds.has(job.id)}
                    onToggleSave={() => toggleSavedJob(job.id)}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {!showResults && (
          <EmptyState
            icon={<Search className="w-6 h-6" />}
            title="Start your search"
            desc={`Type a skill or role above. Our TF-IDF engine ranks ${jobs.length} jobs by relevance.`}
          />
        )}
      </div>
    </AppShell>
  );
}

function FilterSelect({ value, onChange, icon, children, className, placeholder }: {
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-11 bg-secondary/40 border-border/50">
          <span className="mr-1.5 text-muted-foreground">{icon}</span>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="glass-strong">{children}</SelectContent>
      </Select>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <Card className="glass-card border-border/40 hover-glow group">
      <CardContent className="py-4 px-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg gradient-neon/10 bg-primary/10 flex items-center justify-center text-primary group-hover:shadow-glow-sm transition-all">
          {icon}
        </div>
        <div>
          <p className="text-xl font-bold font-mono leading-none">{value}</p>
          <p className="text-[11px] text-muted-foreground mt-1">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="glass-card border-border/40 animate-fade-in">
      <CardContent className="py-14 text-center">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
          {icon}
        </div>
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">{desc}</p>
      </CardContent>
    </Card>
  );
}
