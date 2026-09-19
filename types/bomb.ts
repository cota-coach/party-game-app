export type TongueDifficulty = "easy" | "normal" | "hard";
export type DifficultySetting = TongueDifficulty | "random";
export type ExplosionMode = "short" | "normal" | "long" | "chaos";
export type EventDensity = "low" | "normal" | "high" | "brutal";
export type CommandId = "reverse" | "skipOne" | "skipTwo" | "repeatTwo" | "repeatThree";
export type TongueTwister = { id: string; text: string; difficulty: TongueDifficulty };
export type BombSettings = { selectedPlayerIds: string[]; difficulty: DifficultySetting; explosionMode: ExplosionMode; enabledCommands: CommandId[]; eventDensity: EventDensity; fakeSounds: boolean };
