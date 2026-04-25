import { useMemo, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import { jobs } from "@/data/jobs";
import { REGIONS, type Region } from "@/lib/regions";
import AppShell from "@/components/AppShell";
import JobCard from "@/components/JobCard";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark } from "lucide-react";

export default function Saved() {
  const { profile, skills, savedJobIds, toggleSavedJob } = useProfile();
  const region: Region = REGIONS.find(r => r.id === (profile?.preferred_region ?? "us").toLowerCase()) ?? REGIONS[0];

  const savedJobs = useMemo(
    () => jobs.filter(j => savedJobIds.has(j.id)),
    [savedJobIds]
  );

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        <div>
          <div className="flex items-center gap-2 text-primary mb-1">
            <Bookmark className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-wider">Bookmarks</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Saved jobs</h1>
          <p className="text-sm text-muted-foreground mt-1">{savedJobs.length} job{savedJobs.length === 1 ? "" : "s"} saved</p>
        </div>

        {savedJobs.length === 0 ? (
          <Card className="glass-card border-border/40">
            <CardContent className="py-14 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold mb-1">No saved jobs yet</h3>
              <p className="text-sm text-muted-foreground">Tap the bookmark icon on any job to save it for later.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2.5 stagger">
            {savedJobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                region={region}
                userSkills={skills}
                isSaved
                onToggleSave={() => toggleSavedJob(job.id)}
              />
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
