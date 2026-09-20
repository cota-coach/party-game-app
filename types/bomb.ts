export type TongueDifficulty = "family" | "standard" | "hard" | "adult";
export type DifficultySetting = Exclude<TongueDifficulty, "adult"> | "random";
export type ExplosionMode = "short" | "normal" | "long" | "chaos";
export type EventDensity = "low" | "normal" | "high" | "brutal";
export type CommandId = "reverse" | "skipOne" | "skipTwo" | "repeatTwo" | "repeatThree";
export type TongueTwister = { id: string; text: string; reading: string; difficulty: TongueDifficulty };
export type BombSettings = { selectedPlayerIds: string[]; difficulty: DifficultySetting; includeAdult: boolean; explosionMode: ExplosionMode; enabledCommands: CommandId[]; eventDensity: EventDensity; fakeSounds: boolean };
