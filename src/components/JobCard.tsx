import { Job } from "@/data/jobs";
import { Region, formatSalary } from "@/lib/regions";
import { computeSkillGap } from "@/lib/skillGap";
import { getLearningResources } from "@/lib/learningResources";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MapPin, DollarSign, Briefcase, Wifi, Bookmark, Check, X, ChevronDown, GraduationCap, ExternalLink } from "lucide-react";
import { useState } from "react";

interface JobCardProps {
  job: Job;
  rank?: number;
  score?: number; // 0..1 cosine
  region: Region;
  userSkills: string[];
  isSaved: boolean;
  onToggleSave: () => void;
}

export default function JobCard({ job, rank, score, region, userSkills, isSaved, onToggleSave }: JobCardProps) {
  const [open, setOpen] = useState(false);
  const [copiedResourceUrl, setCopiedResourceUrl] = useState<string | null>(null);
  const gap = computeSkillGap(userSkills, job);
  const matchPct = userSkills.length > 0 ? gap.matchPercent : (score !== undefined ? Math.round(score * 100) : 0);
  const showSimilarity = score !== undefined;
  const isEmbeddedPreview = (() => {
    try {
      return window.top !== window.self;
    } catch {
      return true;
    }
  })();

  const openLearningResource = (event: React.MouseEvent<HTMLElement>, url: string) => {
    event.preventDefault();
    event.stopPropagation();

    if (isEmbeddedPreview) {
      navigator.clipboard?.writeText(url).catch(() => undefined);
      setCopiedResourceUrl(url);
      window.setTimeout(() => {
        setCopiedResourceUrl((current) => (current === url ? null : current));
      }, 2200);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderLearningResourceLinks = (skill: string) => (
    <>
      <div className="space-y-1.5">
        {getLearningResources(skill).map(r => (
          <button
            key={r.url}
            type="button"
            onClick={(e) => openLearningResource(e, r.url)}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex w-full items-center justify-between gap-2 text-left text-xs text-foreground/90 hover:text-primary transition-colors cursor-pointer"
          >
            <span>{r.label}</span>
            {isEmbeddedPreview && copiedResourceUrl === r.url ? (
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary">Copied</span>
            ) : (
              <ExternalLink className="w-3 h-3 opacity-60" />
            )}
          </button>
        ))}
      </div>
      {isEmbeddedPreview && (
        <p className="mt-2 text-[10px] text-muted-foreground">
          Preview blocks some external sites, so clicking here copies the link for a new tab.
        </p>
      )}
    </>
  );

  return (
    <Card className={`glass-card border-border/40 hover-glow transition-all duration-300 ${open ? "border-primary/30 shadow-glow-sm" : ""}`}>
      <CardHeader className="px-5 pt-4 pb-3 cursor-pointer" onClick={() => setOpen(o => !o)}>
        <div className="flex items-start gap-4">
          {rank !== undefined && (
            <div className="w-7 h-7 rounded-md glass border border-primary/20 flex items-center justify-center text-[11px] font-mono font-semibold text-primary shrink-0">
              {rank}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold leading-snug">{titleCase(job.title)}</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.locations.join(", ")}</span>
              <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{formatSalary(job.salaryMin, region)} – {formatSalary(job.salaryMax, region)}</span>
              <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.jobType}</span>
              <span className="flex items-center gap-1"><Wifi className="w-3 h-3" />{job.workMode}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {/* Match ring */}
            <div className="text-right">
              <div className={`text-lg font-bold font-mono leading-none ${matchPct >= 60 ? "text-primary" : matchPct >= 30 ? "text-foreground" : "text-muted-foreground"}`}>
                {matchPct}%
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                {userSkills.length > 0 ? "skill match" : showSimilarity ? "relevance" : "match"}
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
              className={`h-8 w-8 ${isSaved ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              aria-label={isSaved ? "Remove bookmark" : "Save job"}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
            </Button>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
          </div>
        </div>
        {/* Match bar */}
        <div className="mt-3 h-1 w-full bg-secondary/60 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full gradient-neon transition-all duration-700"
            style={{ width: `${matchPct}%` }}
          />
        </div>
      </CardHeader>

      {open && (
        <CardContent className="px-5 pb-4 pt-0 animate-fade-in">
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">{job.description}</p>

          {userSkills.length > 0 && (gap.matched.length > 0 || gap.missing.length > 0) ? (
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-primary mb-2">
                  <Check className="w-3 h-3" /> You have ({gap.matched.length})
                </div>
                <div className="flex flex-wrap gap-1">
                  {gap.matched.length > 0 ? gap.matched.map(s => (
                    <Badge key={s} className="bg-primary/15 text-primary border-0 text-[10px] font-normal">{s}</Badge>
                  )) : <span className="text-[11px] text-muted-foreground">None yet</span>}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/15">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-destructive mb-2">
                  <X className="w-3 h-3" /> To learn ({gap.missing.length})
                </div>
                <div className="flex flex-wrap gap-1">
                  {gap.missing.length > 0 ? gap.missing.map(s => (
                    <Popover key={s}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 rounded-md border border-destructive/30 bg-transparent px-2 py-0.5 text-[10px] text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          <GraduationCap className="w-2.5 h-2.5" />
                          {s}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-64 glass-strong border-primary/20 p-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider text-primary mb-2">
                          Learn {s}
                        </div>
                        {renderLearningResourceLinks(s)}
                      </PopoverContent>
                    </Popover>
                  )) : <span className="text-[11px] text-muted-foreground">You're fully covered!</span>}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-1 mb-2">
              {job.skills.map(s => (
                <Popover key={s}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-transparent px-2 py-0.5 text-[10px] text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <GraduationCap className="w-2.5 h-2.5" />
                      {s}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-64 glass-strong border-primary/20 p-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-primary mb-2">
                      Learn {s}
                    </div>
                    {renderLearningResourceLinks(s)}
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

function titleCase(s: string) {
  return s.toLowerCase().split(" ").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ");
}
