export function randomInt(min: number, max: number, random = Math.random) { return Math.floor(random() * (max - min + 1)) + min; }
export function pickRandom<T>(items: readonly T[], random = Math.random): T | undefined { return items.length ? items[Math.floor(random() * items.length)] : undefined; }
export function weightedPick<T extends string>(weights: Record<T, number>, candidates: readonly T[], random = Math.random): T | undefined {
  const total = candidates.reduce((sum, item) => sum + weights[item], 0); if (!total) return undefined;
  let point = random() * total;
  for (const item of candidates) { point -= weights[item]; if (point < 0) return item; }
  return candidates[candidates.length - 1];
}
