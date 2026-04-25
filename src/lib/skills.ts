// Curated catalog of technical skills for onboarding & trending charts.
// Used to (a) suggest skills users can pick from and (b) filter dataset
// skills down to genuine technical terms (vs generic words).

export const SKILL_CATEGORIES: Record<string, string[]> = {
  Languages: [
    "Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "Go", "Rust",
    "Ruby", "PHP", "Swift", "Kotlin", "Scala", "R", "MATLAB", "SQL", "Bash",
  ],
  Frontend: [
    "React", "Next.js", "Vue", "Angular", "Svelte", "HTML", "CSS",
    "Tailwind CSS", "Sass", "Redux", "GraphQL",
  ],
  Backend: [
    "Node.js", "Express", "Django", "Flask", "FastAPI", "Spring Boot",
    "Ruby on Rails", "ASP.NET", "REST APIs", "Microservices",
  ],
  "Data & ML": [
    "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Pandas",
    "NumPy", "Scikit-learn", "NLP", "Computer Vision", "Data Analysis",
    "Statistics", "Big Data", "Hadoop", "Spark", "ETL",
  ],
  "Cloud & DevOps": [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
    "Jenkins", "CI/CD", "Linux", "Git", "Ansible", "Prometheus",
  ],
  Databases: [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB",
    "Cassandra", "Snowflake", "BigQuery",
  ],
  "Mobile & Other": [
    "React Native", "Flutter", "iOS", "Android", "Cybersecurity",
    "Blockchain", "Solidity", "Game Development", "Unity",
  ],
};

export const ALL_TECHNICAL_SKILLS: string[] = Array.from(
  new Set(Object.values(SKILL_CATEGORIES).flat())
);

const NORMALIZED = new Map<string, string>();
ALL_TECHNICAL_SKILLS.forEach(s => NORMALIZED.set(s.toLowerCase(), s));

// Map a raw skill string from the dataset (or user input) to a canonical
// technical skill, or null if it isn't a recognized technical skill.
export function normalizeSkill(raw: string): string | null {
  if (!raw) return null;
  const k = raw.toLowerCase().trim();
  if (NORMALIZED.has(k)) return NORMALIZED.get(k)!;

  // Substring match for things like "Python Programming" -> "Python"
  for (const [low, canonical] of NORMALIZED) {
    // word-boundary match
    const re = new RegExp(`\\b${low.replace(/[.+*?^$()[\]{}|\\]/g, "\\$&")}\\b`, "i");
    if (re.test(k)) return canonical;
  }
  return null;
}

export function extractTechnicalSkills(rawSkills: string[]): string[] {
  const out = new Set<string>();
  for (const s of rawSkills) {
    const n = normalizeSkill(s);
    if (n) out.add(n);
  }
  return Array.from(out);
}
