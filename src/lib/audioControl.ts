/**
 * audioControl — singleton para pausar la música desde cualquier componente.
 * AudioPlayer registra el elemento <audio> aquí al montarse.
 */
let _audio: HTMLAudioElement | null = null;

export function registerAudio(el: HTMLAudioElement | null) {
  _audio = el;
}

export function pauseAudio() {
  if (_audio && !_audio.paused) {
    _audio.pause();
  }
}
