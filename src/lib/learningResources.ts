// Curated learning resource links for missing skills.
// Returns a list of {label, url} for a given skill.
export interface LearningResource {
  label: string;
  url: string;
}

const CURATED: Record<string, LearningResource[]> = {
  "python": [
    { label: "Python.org Tutorial", url: "https://docs.python.org/3/tutorial/" },
    { label: "freeCodeCamp – Python", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
  ],
  "javascript": [
    { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { label: "JavaScript.info", url: "https://javascript.info/" },
  ],
  "typescript": [
    { label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
  ],
  "react": [
    { label: "React Docs", url: "https://react.dev/learn" },
  ],
  "docker": [
    { label: "Docker Get Started", url: "https://docs.docker.com/get-started/" },
  ],
  "kubernetes": [
    { label: "Kubernetes Basics", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
  ],
  "aws": [
    { label: "AWS Skill Builder", url: "https://skillbuilder.aws/" },
  ],
  "sql": [
    { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
  ],
  "machine learning": [
    { label: "Andrew Ng – ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
  ],
  "tensorflow": [
    { label: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" },
  ],
  "pytorch": [
    { label: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
  ],
};

export function getLearningResources(skill: string): LearningResource[] {
  const key = skill.toLowerCase();
  if (CURATED[key]) return CURATED[key];
  // Fallback: high-signal search links
  const q = encodeURIComponent(skill);
  return [
    { label: "Search on YouTube", url: `https://www.youtube.com/results?search_query=${q}+tutorial` },
    { label: "Search on Coursera", url: `https://www.coursera.org/search?query=${q}` },
    { label: "Search on freeCodeCamp", url: `https://www.freecodecamp.org/news/search/?query=${q}` },
  ];
}
