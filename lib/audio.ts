export class AudioManager {
  private ticking: HTMLAudioElement | null = null;
  private effects = new Set<HTMLAudioElement>();
  startTicking(src: string) { this.stopTicking(); const audio = this.create(src); audio.loop = true; this.ticking = audio; void audio.play().catch(() => undefined); }
  play(src: string) { const audio = this.create(src); this.effects.add(audio); const remove = () => this.effects.delete(audio); audio.addEventListener("ended", remove, { once: true }); audio.addEventListener("error", remove, { once: true }); void audio.play().catch(remove); return audio; }
  stopTicking() { if (this.ticking) { this.stop(this.ticking); this.ticking = null; } }
  stopEffects() { this.effects.forEach((audio) => this.stop(audio)); this.effects.clear(); }
  stopAll() { this.stopTicking(); this.stopEffects(); }
  private create(src: string) { const audio = new Audio(src); audio.preload = "auto"; return audio; }
  private stop(audio: HTMLAudioElement) { audio.pause(); audio.currentTime = 0; audio.removeAttribute("src"); audio.load(); }
}
