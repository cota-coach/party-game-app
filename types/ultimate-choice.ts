export type UltimateChoiceLevel = "family" | "adult" | "hard";
export type UltimateChoice = { id: string; optionA: string; optionB: string; categories: string[]; level: UltimateChoiceLevel };
