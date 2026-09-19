export class AudioManager {
  private backgrounds: { audio: HTMLAudioElement; normalVolume: number; duckedVolume: number }[] = [];
  private effects = new Set<HTMLAudioElement>();
  private prepared = new Map<string, HTMLAudioElement>();
  private effectCleanups = new Map<HTMLAudioElement, () => void>();

  unlock(sources: readonly string[]) {
    sources.forEach((src) => {
      const audio = this.getOrCreate(src);
      audio.muted = true;
      void audio.play().then(() => { audio.pause(); audio.currentTime = 0; audio.muted = false; }, () => { audio.muted = false; });
    });
  }

  startBackgrounds(tracks: readonly { src: string; normalVolume: number; duckedVolume: number }[]) {
    this.stopBackgrounds();
    this.backgrounds = tracks.map((track) => {
      const audio = this.create(track.src);
      audio.loop = true;
      audio.volume = track.normalVolume;
      void audio.play().catch(() => undefined);
      return { audio, normalVolume: track.normalVolume, duckedVolume: track.duckedVolume };
    });
  }
  play(src: string, options: { loop?: boolean; duckBackgrounds?: boolean } = {}) {
    const audio = this.getOrCreate(src);
    this.effectCleanups.get(audio)?.();
    this.stop(audio);
    audio.loop = options.loop ?? false;
    this.effects.add(audio);
    if (options.duckBackgrounds) this.duckBackgrounds();
    const remove = () => { audio.removeEventListener("ended", remove); audio.removeEventListener("error", remove); this.effects.delete(audio); this.effectCleanups.delete(audio); if (options.duckBackgrounds) this.restoreBackgrounds(); };
    this.effectCleanups.set(audio, remove);
    audio.addEventListener("ended", remove, { once: true });
    audio.addEventListener("error", remove, { once: true });
    void audio.play().catch(remove);
    return audio;
  }
  duckBackgrounds() { this.backgrounds.forEach((track) => { track.audio.volume = track.duckedVolume; }); }
  restoreBackgrounds() { this.backgrounds.forEach((track) => { track.audio.volume = track.normalVolume; }); }
  stopBackgrounds() { this.backgrounds.forEach((track) => this.stop(track.audio)); this.backgrounds = []; }
  stopEffects() { [...this.effects].forEach((audio) => { this.effectCleanups.get(audio)?.(); this.stop(audio); }); this.effects.clear(); }
  stopAll() { this.stopBackgrounds(); this.stopEffects(); }
  private create(src: string) { const audio = new Audio(src); audio.preload = "auto"; return audio; }
  private getOrCreate(src: string) { const current = this.prepared.get(src); if (current) return current; const audio = this.create(src); this.prepared.set(src, audio); return audio; }
  private stop(audio: HTMLAudioElement) { audio.pause(); try { audio.currentTime = 0; } catch { /* Missing or not-yet-loaded audio is safe to ignore. */ } }
}
