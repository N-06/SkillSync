import type { Job } from "@/data/jobs";
import type { Region } from "@/lib/regions";

// Deterministically remap each job's locations to the active region's city pool.
// The dataset itself only contains US cities (it is synthetic), so we project
// each job into the chosen region so users in IN/UK/DE/CA still see jobs.
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}

export function projectJobsToRegion(jobs: Job[], region: Region): Job[] {
  if (region.id === "us") return jobs;
  const pool = region.locations.filter(l => !l.toLowerCase().startsWith("remote"));
  const remoteLabel = region.locations.find(l => l.toLowerCase().startsWith("remote")) ?? `Remote (${region.label})`;
  return jobs.map(j => {
    const seed = hash(`${j.id}-${region.id}`);
    const count = (seed % 3) + 1; // 1-3 cities
    const picked = new Set<string>();
    for (let i = 0; i < count; i++) {
      const idx = (seed + i * 31) % pool.length;
      picked.add(pool[idx]);
    }
    // 25% of jobs are remote
    const locations = (seed % 4 === 0) ? [remoteLabel] : Array.from(picked);
    return { ...j, locations };
  });
}
