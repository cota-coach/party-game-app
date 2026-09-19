export class AudioManager {
  private ticking: HTMLAudioElement | null = null;
  private effects = new Set<HTMLAudioElement>();
  private prepared = new Map<string, HTMLAudioElement>();
  private effectCleanups = new Map<HTMLAudioElement, () => void>();
  private readonly tickingVolume = 0.75;

  unlock(sources: readonly string[]) {
    sources.forEach((src) => {
      const audio = this.getOrCreate(src);
      audio.muted = true;
      void audio.play().then(() => { audio.pause(); audio.currentTime = 0; audio.muted = false; }, () => { audio.muted = false; });
    });
  }

  startTicking(src: string) { this.stopTicking(); const audio = this.create(src); audio.loop = true; audio.volume = this.tickingVolume; this.ticking = audio; void audio.play().catch(() => undefined); }
  play(src: string, options: { loop?: boolean; duckTicking?: boolean } = {}) {
    const audio = this.getOrCreate(src);
    this.effectCleanups.get(audio)?.();
    this.stop(audio);
    audio.loop = options.loop ?? false;
    this.effects.add(audio);
    if (options.duckTicking) this.duckTicking();
    const remove = () => { audio.removeEventListener("ended", remove); audio.removeEventListener("error", remove); this.effects.delete(audio); this.effectCleanups.delete(audio); if (options.duckTicking) this.restoreTicking(); };
    this.effectCleanups.set(audio, remove);
    audio.addEventListener("ended", remove, { once: true });
    audio.addEventListener("error", remove, { once: true });
    void audio.play().catch(remove);
    return audio;
  }
  duckTicking() { if (this.ticking) this.ticking.volume = 0.2; }
  restoreTicking() { if (this.ticking) this.ticking.volume = this.tickingVolume; }
  stopTicking() { if (this.ticking) { this.stop(this.ticking); this.ticking = null; } }
  stopEffects() { [...this.effects].forEach((audio) => { this.effectCleanups.get(audio)?.(); this.stop(audio); }); this.effects.clear(); }
  stopAll() { this.stopTicking(); this.stopEffects(); }
  private create(src: string) { const audio = new Audio(src); audio.preload = "auto"; return audio; }
  private getOrCreate(src: string) { const current = this.prepared.get(src); if (current) return current; const audio = this.create(src); this.prepared.set(src, audio); return audio; }
  private stop(audio: HTMLAudioElement) { audio.pause(); try { audio.currentTime = 0; } catch { /* Missing or not-yet-loaded audio is safe to ignore. */ } }
}
