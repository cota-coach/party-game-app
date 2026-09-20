import { COMMAND_PROTECTION_SECONDS, COMMAND_WEIGHTS, EVENT_INTERVALS, EXPLOSION_RANGES, FAKE_SOUND_INTERVAL, INITIAL_EVENT_GRACE_MS } from "./game-config";
import { randomInt, weightedPick } from "./random";
import type { BombSettings, CommandId } from "../types/bomb";

export function chooseCommand(enabled: readonly CommandId[], previous?: CommandId, random = Math.random) {
  const candidates = enabled.length > 1 ? enabled.filter((id) => id !== previous) : [...enabled];
  return weightedPick(COMMAND_WEIGHTS, candidates, random);
}
export function explosionDurationMs(settings: BombSettings, random = Math.random) { const range = EXPLOSION_RANGES[settings.explosionMode]; return randomInt(range.min, range.max, random) * 1000; }
export function nextCommandDelayMs(settings: BombSettings, previous?: CommandId, random = Math.random) { const range = EVENT_INTERVALS[settings.eventDensity]; return (randomInt(range.min, range.max, random) + (previous ? COMMAND_PROTECTION_SECONDS[previous] ?? 0 : 0)) * 1000; }
export function nextFakeDelayMs(random = Math.random) { return randomInt(FAKE_SOUND_INTERVAL.min, FAKE_SOUND_INTERVAL.max, random) * 1000; }

export class BombScheduler {
  private explosionTimer?: ReturnType<typeof setTimeout>; private commandTimer?: ReturnType<typeof setTimeout>; private fakeTimer?: ReturnType<typeof setTimeout>; private stopped = false; private previous?: CommandId;
  readonly explosionAt: number;
  constructor(private settings: BombSettings, private events: { explode:()=>void; command:(id:CommandId)=>void; fake:()=>void }, private random = Math.random, now = Date.now()) { this.explosionAt = now + explosionDurationMs(settings, random); }
  start(now = Date.now()) { this.explosionTimer = setTimeout(() => { if (!this.stopped) { this.stop(); this.events.explode(); } }, Math.max(0, this.explosionAt - now)); this.scheduleCommand(true); this.scheduleFake(true); }
  stop() { this.stopped = true; if (this.explosionTimer) clearTimeout(this.explosionTimer); if (this.commandTimer) clearTimeout(this.commandTimer); if (this.fakeTimer) clearTimeout(this.fakeTimer); }
  private scheduleCommand(initial = false) { if (this.stopped || !this.settings.enabledCommands.length) return; const delay = nextCommandDelayMs(this.settings, this.previous, this.random); this.commandTimer = setTimeout(() => { if (this.stopped || Date.now() >= this.explosionAt) return; const command = chooseCommand(this.settings.enabledCommands, this.previous, this.random); if (command) { this.previous = command; this.events.command(command); } this.scheduleCommand(); }, initial ? Math.max(INITIAL_EVENT_GRACE_MS, delay) : delay); }
  private scheduleFake(initial = false) { if (this.stopped || !this.settings.fakeSounds) return; const delay = nextFakeDelayMs(this.random); this.fakeTimer = setTimeout(() => { if (this.stopped || Date.now() >= this.explosionAt) return; this.events.fake(); this.scheduleFake(); }, initial ? Math.max(INITIAL_EVENT_GRACE_MS, delay) : delay); }
}
