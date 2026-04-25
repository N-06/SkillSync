import type { Job } from "@/data/jobs";
import { extractTechnicalSkills, normalizeSkill } from "@/lib/skills";

export interface SkillGap {
  matched: string[];
  missing: string[];
  matchPercent: number; // 0-100
}

export function computeSkillGap(userSkills: string[], job: Job): SkillGap {
  const userSet = new Set(
    userSkills.map(s => normalizeSkill(s) ?? s.toLowerCase())
  );
  const jobSkills = extractTechnicalSkills(job.skills);
  // If extractor finds nothing, fall back to raw skills
  const required = jobSkills.length > 0 ? jobSkills : job.skills;

  const matched: string[] = [];
  const missing: string[] = [];
  for (const skill of required) {
    const canonical = normalizeSkill(skill) ?? skill.toLowerCase();
    if (userSet.has(canonical) || userSet.has(skill.toLowerCase())) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  }
  const total = matched.length + missing.length;
  const matchPercent = total === 0 ? 0 : Math.round((matched.length / total) * 100);
  return { matched, missing, matchPercent };
}
