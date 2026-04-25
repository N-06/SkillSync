// TF-IDF and Cosine Similarity implementation

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s+#]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1);
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
  'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
  'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these',
  'those', 'it', 'its', 'as', 'if', 'not', 'no', 'so', 'up', 'out',
  'about', 'into', 'over', 'after', 'all', 'also', 'each', 'every',
]);

function removeStopWords(tokens: string[]): string[] {
  return tokens.filter(t => !STOP_WORDS.has(t));
}

function computeTF(tokens: string[]): Map<string, number> {
  const freq = new Map<string, number>();
  for (const t of tokens) {
    freq.set(t, (freq.get(t) || 0) + 1);
  }
  const tf = new Map<string, number>();
  const len = tokens.length || 1;
  for (const [term, count] of freq) {
    tf.set(term, count / len);
  }
  return tf;
}

function computeIDF(documents: string[][]): Map<string, number> {
  const docCount = documents.length;
  const df = new Map<string, number>();
  for (const doc of documents) {
    const unique = new Set(doc);
    for (const term of unique) {
      df.set(term, (df.get(term) || 0) + 1);
    }
  }
  const idf = new Map<string, number>();
  for (const [term, count] of df) {
    idf.set(term, Math.log((docCount + 1) / (count + 1)) + 1);
  }
  return idf;
}

function computeTFIDF(tf: Map<string, number>, idf: Map<string, number>): Map<string, number> {
  const tfidf = new Map<string, number>();
  for (const [term, tfVal] of tf) {
    const idfVal = idf.get(term) || Math.log(2) + 1;
    tfidf.set(term, tfVal * idfVal);
  }
  return tfidf;
}

function cosineSimilarity(a: Map<string, number>, b: Map<string, number>): number {
  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (const [term, val] of a) {
    magA += val * val;
    const bVal = b.get(term);
    if (bVal !== undefined) {
      dot += val * bVal;
    }
  }
  for (const [, val] of b) {
    magB += val * val;
  }

  const denom = Math.sqrt(magA) * Math.sqrt(magB);
  return denom === 0 ? 0 : dot / denom;
}

export interface MatchResult {
  jobIndex: number;
  score: number;
}

export function findMatchingJobs(
  query: string,
  jobTexts: string[],
  topK: number = 20
): MatchResult[] {
  const queryTokens = removeStopWords(tokenize(query));
  const jobTokensList = jobTexts.map(t => removeStopWords(tokenize(t)));

  const allDocs = [queryTokens, ...jobTokensList];
  const idf = computeIDF(allDocs);

  const queryTFIDF = computeTFIDF(computeTF(queryTokens), idf);

  const results: MatchResult[] = jobTokensList.map((tokens, i) => {
    const jobTFIDF = computeTFIDF(computeTF(tokens), idf);
    const score = cosineSimilarity(queryTFIDF, jobTFIDF);
    return { jobIndex: i, score };
  });

  return results
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
