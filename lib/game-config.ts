import type { CommandId, EventDensity, ExplosionMode } from "../types/bomb";
export const EXPLOSION_RANGES: Record<ExplosionMode, { min: number; max: number }> = { short:{min:10,max:40}, normal:{min:20,max:70}, long:{min:50,max:120}, chaos:{min:10,max:120} };
export const EVENT_INTERVALS: Record<EventDensity, { min: number; max: number }> = { low:{min:18,max:30}, normal:{min:12,max:22}, high:{min:8,max:15}, brutal:{min:6,max:11} };
export const COMMAND_WEIGHTS: Record<CommandId, number> = { reverse:25, skipOne:25, skipTwo:15, repeatTwo:20, repeatThree:15 };
export const COMMAND_PROTECTION_SECONDS: Partial<Record<CommandId, number>> = { repeatTwo:5, repeatThree:7 };
export const COMMAND_DISPLAY_MS = 4500;
export const FAKE_SOUND_INTERVAL = { min: 9, max: 20 };
export const FAIL_TROMBONE_DELAY_MS = 1250;
export const ROULETTE_DECISION_TIME_MS = 5200;
export const BOMB_BGM_VOLUMES = {
  ticking: { normalVolume: 0.85, duckedVolume: 0.22 },
  timer: { normalVolume: 0.45, duckedVolume: 0.12 }
} as const;
export const SOUND_PATHS = {
  ticking: "/sounds/bomb/ticking/ticking.mp3",
  timer: "/sounds/bomb/ticking/timer.mp3",
  explosion: { main: "/sounds/bomb/explosion/explosion.mp3", failTrombone: "/sounds/bomb/explosion/fail-trombone.mp3" },
  commands: { reverse:"/sounds/bomb/commands/reverse.mp3", skipOne:"/sounds/bomb/commands/skip-one.mp3", skipTwo:"/sounds/bomb/commands/skip-two.mp3", repeatTwo:"/sounds/bomb/commands/repeat-two.mp3", repeatThree:"/sounds/bomb/commands/repeat-three.mp3" },
  fake: ["/sounds/bomb/fake/fart-1.mp3", "/sounds/bomb/fake/fart-2.mp3", "/sounds/bomb/fake/fanfare.mp3"],
  roulette: "/sounds/bomb/roulette/drumroll.mp3"
} as const;

export const GAME_AUDIO_SOURCES = [...Object.values(SOUND_PATHS.explosion), ...Object.values(SOUND_PATHS.commands), ...SOUND_PATHS.fake] as const;
