import type { Player } from "@/types/player";

export const STORAGE_KEYS = { players: "players", tongue: "usedTongueTwisters", choices: "usedUltimateChoices" } as const;

function readArray<T>(key: string, validate: (value: unknown) => value is T): T[] {
  if (typeof window === "undefined") return [];
  try { const value: unknown = JSON.parse(localStorage.getItem(key) ?? "[]"); return Array.isArray(value) ? value.filter(validate) : []; } catch { return []; }
}
function writeArray<T>(key: string, values: T[]) { if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(values)); }
export const storage = {
  getPlayers: () => readArray<Player>(STORAGE_KEYS.players, (v): v is Player => typeof v === "object" && v !== null && typeof (v as Player).id === "string" && typeof (v as Player).name === "string"),
  setPlayers: (values: Player[]) => writeArray(STORAGE_KEYS.players, values),
  getUsedTongueTwisters: () => readArray<string>(STORAGE_KEYS.tongue, (v): v is string => typeof v === "string"),
  addUsedTongueTwister(id: string) { const current = this.getUsedTongueTwisters(); if (!current.includes(id)) writeArray(STORAGE_KEYS.tongue, [...current, id]); },
  getUsedUltimateChoices: () => readArray<string>(STORAGE_KEYS.choices, (v): v is string => typeof v === "string"),
  resetPromptHistory() { writeArray(STORAGE_KEYS.tongue, []); writeArray(STORAGE_KEYS.choices, []); }
};
