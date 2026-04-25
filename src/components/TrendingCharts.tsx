/**
 * TrendingCharts.tsx
 *
 * Renders three market-intelligence visualizations on the dashboard:
 *   1. "In-Demand Technical Skills" — horizontal bar chart of the TOP 12
 *      technical skills (filtered through the curated whitelist in skills.ts)
 *      ranked by how often they appear across the job dataset.
 *   2. "Top Job Role Categories" — buckets every raw job title into a small
 *      set of broad role families (Engineering, Data/ML, Design, etc.) so the
 *      chart shows MEANINGFUL differences instead of one bar per unique title.
 *   3. "6-Month Demand Trajectory" — synthetic time series showing relative
 *      demand growth for the top 3 skills over the last 6 months.
 *
 * All counts are derived locally from the in-memory `jobs` dataset — no
 * network calls, fully client-side (matches the privacy-first architecture).
 */

import { useMemo } from "react";
import { jobs } from "@/data/jobs";
import { extractTechnicalSkills } from "@/lib/skills";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ResponsiveContainer, XAxis, YAxis, Tooltip,
  BarChart, Bar, AreaChart, Area, CartesianGrid, Legend, Cell,
} from "recharts";
import { TrendingUp, Code2, Sparkles, Briefcase } from "lucide-react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Generate N visually distinct neon HSL colors for chart bars. */
function buildPalette(n: number): string[] {
  const base = [195, 220, 280, 165, 320, 30, 260, 150, 340, 90, 240, 60];
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    const h = base[i % base.length] + Math.floor(i / base.length) * 15;
    const s = 90 - (i % 3) * 8;
    const l = 60 + (i % 2) * 5;
    out.push(`hsl(${h} ${s}% ${l}%)`);
  }
  return out;
}

/**
 * Bucket raw job titles into broad role families so the chart actually shows
 * variation. Without this each title (≈289 unique strings) gets count=1.
 *
 * Order matters — first matching pattern wins.
 */
const ROLE_BUCKETS: { label: string; patterns: RegExp[] }[] = [
  { label: "Data & ML",       patterns: [/data scien|machine learning|\bml\b|\bai\b|deep learning|nlp|computer vision|analytics|statistic|big data/i] },
  { label: "Software Engineering", patterns: [/software|backend|full[- ]?stack|frontend|web develop|mobile develop|ios|android|developer|programmer|engineer$/i] },
  { label: "DevOps & Cloud",  patterns: [/devops|sre|site reliab|cloud|kubernetes|infrastructure|platform|systems? admin|network/i] },
  { label: "Security",        patterns: [/security|cyber|infosec|penetration|cryptograph/i] },
  { label: "Product & PM",    patterns: [/product manager|project manager|scrum|agile|program manager/i] },
  { label: "Design & UX",     patterns: [/design|\bux\b|\bui\b|user experience|user interface|accessibility/i] },
  { label: "QA & Testing",    patterns: [/\bqa\b|quality|test|automation engineer/i] },
  { label: "Database & BI",   patterns: [/database|\bdba\b|warehouse|\betl\b|business intelligence|\bbi\b|tableau|power bi/i] },
  { label: "Sales & Marketing", patterns: [/sales|marketing|growth|customer success|account/i] },
  { label: "Hardware & Embedded", patterns: [/hardware|embedded|firmware|electrical|robotics|iot/i] },
  { label: "Game & Graphics", patterns: [/game|graphics|render|unity|unreal/i] },
  { label: "Blockchain",      patterns: [/blockchain|crypto|web3|solidity/i] },
];

/** Return the bucket label for a job title, or "Other" if no pattern matches. */
function bucketRole(title: string): string {
  for (const b of ROLE_BUCKETS) {
    if (b.patterns.some(p => p.test(title))) return b.label;
  }
  return "Other";
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function TrendingCharts() {
  // (1) Aggregate technical-skill demand across all jobs and keep the top 12.
  const trendingSkills = useMemo(() => {
    const counts = new Map<string, number>();
    jobs.forEach(j => {
      const techs = extractTechnicalSkills(j.skills);
      techs.forEach(s => counts.set(s, (counts.get(s) ?? 0) + 1));
    });
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12); // ← only top 12 — keeps the chart scannable
  }, []);

  // (2) Aggregate openings per ROLE FAMILY (not per unique title).
  const trendingRoles = useMemo(() => {
    const counts = new Map<string, number>();
    jobs.forEach(j => {
      const bucket = bucketRole(j.title);
      counts.set(bucket, (counts.get(bucket) ?? 0) + 1);
    });
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const skillsPalette = useMemo(() => buildPalette(trendingSkills.length), [trendingSkills.length]);
  const rolesPalette  = useMemo(() => buildPalette(trendingRoles.length),  [trendingRoles.length]);

  // (3) Synthetic 6-month trajectory for the top 3 skills.
  const top3 = trendingSkills.slice(0, 3);
  const top3Palette = ["hsl(195 100% 55%)", "hsl(220 100% 65%)", "hsl(280 85% 65%)"];
  const skillTrend = useMemo(() => {
    const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
    return months.map((m, i) => {
      const row: Record<string, string | number> = { month: m };
      top3.forEach((s, idx) => {
        // gentle upward curve + per-skill jitter
        row[s.name] = Math.round(s.count * (0.55 + i * 0.08 + (idx % 5) * 0.01 + ((i * 17 + idx * 11) % 7) / 100));
      });
      return row;
    });
  }, [top3]);

  // Shared dark-themed tooltip styling.
  const tooltipStyle = {
    background: "hsl(230 35% 8% / 0.95)",
    border: "1px solid hsl(195 100% 55% / 0.3)",
    borderRadius: 10,
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 24px hsl(195 100% 55% / 0.2)",
    color: "hsl(0 0% 95%)",
  } as const;

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2 text-primary mb-1">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider">Market Intelligence</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight">Trending right now</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* ----- Top 12 in-demand technical skills ------------------------- */}
        <Card className="glass-card border-border/40 hover-glow overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              Top 12 In-Demand Skills
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              Most-requested technical skills across {jobs.length} job listings
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={380}>
              <BarChart
                data={trendingSkills}
                layout="vertical"
                margin={{ left: 8, right: 32, top: 4, bottom: 4 }}
                barCategoryGap={6}
              >
                <CartesianGrid horizontal={false} stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={11}
                  width={110}
                  tick={{ fill: "hsl(var(--foreground))" }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  cursor={{ fill: "hsl(var(--primary) / 0.08)" }}
                  formatter={(v: number) => [`${v} listings`, "Demand"]}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {trendingSkills.map((_, i) => (
                    <Cell key={i} fill={skillsPalette[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ----- Job role categories --------------------------------------- */}
        <Card className="glass-card border-border/40 hover-glow overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Job Roles by Category
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              Openings grouped into {trendingRoles.length} role families
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={380}>
              <BarChart
                data={trendingRoles}
                layout="vertical"
                margin={{ left: 8, right: 32, top: 4, bottom: 4 }}
                barCategoryGap={8}
              >
                <CartesianGrid horizontal={false} stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={11}
                  width={150}
                  interval={0}
                  tick={{ fill: "hsl(var(--foreground))" }}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  cursor={{ fill: "hsl(var(--primary) / 0.08)" }}
                  formatter={(v: number) => [`${v} openings`, "Listings"]}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {trendingRoles.map((_, i) => (
                    <Cell key={i} fill={rolesPalette[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ----- 6-month trajectory --------------------------------------- */}
      <Card className="glass-card border-border/40 hover-glow">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            6-Month Demand Trajectory
          </CardTitle>
          <CardDescription className="text-xs mt-1">Top 3 skills · indexed demand over time</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={skillTrend} margin={{ left: 0, right: 16, top: 8, bottom: 4 }}>
              <defs>
                {top3.map((s, i) => (
                  <linearGradient key={s.name} id={`area-${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={top3Palette[i]} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={top3Palette[i]} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" />
              {top3.map((s, i) => (
                <Area
                  key={s.name}
                  type="monotone"
                  dataKey={s.name}
                  stroke={top3Palette[i]}
                  strokeWidth={2}
                  fill={`url(#area-${i})`}
                  dot={{ r: 3, fill: top3Palette[i] }}
                  activeDot={{ r: 5, fill: top3Palette[i], stroke: "hsl(var(--background))", strokeWidth: 2 }}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
