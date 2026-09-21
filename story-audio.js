import {optionText, textFor} from './story-languages.js';

export const spokenStoryLanguages = ['en', 'ru', 'es', 'zh', 'uk', 'ja'];
export function supportsStoryAudio(story, lang) {
  return spokenStoryLanguages.includes(lang) && story?.i18n?.[lang] === true;
}
export function supportsNodeAudio(story,node,lang){
  if(!supportsStoryAudio(story,lang))return false;
  if(node?.type!=='scene')return true;
  return !!node.i18n?.line?.[lang];
}
export function storyAudioKey(story, index, lang = 'en') {
  return lang === 'en' ? `${story.id}:${index}` : `${lang}:${story.id}:${index}`;
}

// Only revealed narration and dialogue may be replayed; unanswered choices stay silent.
export function revealedClip(story, progress, manifest, index = progress?.index, lang = 'en') {
  if (!Number.isInteger(index) || index < 0 || index > progress?.index) return null;
  const node = story?.nodes[index];
  if (!node) return null;
  if (node.type === 'scene') {
    const sceneText = node.i18n?.line?.[lang];
    if (!sceneText) return null;
  }
  if (node.type === 'choice' && progress.answers[index] === undefined) return null;
  const text = node.type === 'choice' ? optionText(node, node.correct, lang) : textFor(node, 'line', lang);
  if (!text) return null;
  const who = node.type === 'scene' ? 'narrator' : node.who;
  const key = storyAudioKey(story, index, lang);
  const clip = manifest.clips?.[key];
  return {key, text, who, lang, src: clip?.text === text && clip?.who === who ? clip.src : null};
}

export const currentClip = revealedClip;

export class StoryAudio {
  constructor({audio, enabled = true, onChange = () => {}, persist = () => {}}) {
    this.audio = audio; this.enabled = enabled; this.onChange = onChange; this.persist = persist;
    this.clip = null; this.current = null; this.status = 'idle'; this.version = 0;
  }
  notify() { this.onChange(this); }
  stop() {
    this.version++;
    this.audio.onended = null; this.audio.onerror = null;
    this.audio.pause();
    this.audio.removeAttribute('src'); this.audio.load();
    this.status = 'idle';
  }
  leave() { this.stop(); this.clip = null; this.current = null; this.notify(); }
  show(clip) {
    if (this.current?.key === clip?.key && this.current?.src === clip?.src) return;
    this.stop(); this.current = clip; this.clip = clip;
    if (clip && this.enabled) this.play(); else this.notify();
  }
  replay(clip) {
    if (!clip) return;
    if (this.clip?.key === clip.key && ['loading', 'playing'].includes(this.status)) {
      this.stop(); this.notify(); return;
    }
    this.clip = clip;
    this.play(true);
  }
  play(manual = false) {
    this.stop();
    if ((!manual && !this.enabled) || !this.clip) { this.notify(); return; }
    if (!this.clip.src) { this.status = 'missing'; this.notify(); return; }
    const version = this.version;
    const update = status => { if (version === this.version) { this.status = status; this.notify(); } };
    this.audio.src = this.clip.src;
    this.audio.onended = () => update('idle');
    this.audio.onerror = () => update('error');
    update('loading');
    try {
      // Called synchronously from the user's click, including on mobile Safari.
      Promise.resolve(this.audio.play()).then(() => update('playing'), error => {
        update(error?.name === 'NotAllowedError' ? 'blocked' : 'error');
      });
    } catch (error) { update(error?.name === 'NotAllowedError' ? 'blocked' : 'error'); }
  }
  toggle() {
    this.enabled = !this.enabled;
    try { this.persist(this.enabled); } catch { /* Sound preferences must not affect progress. */ }
    if (this.enabled) { this.clip = this.current; this.play(); } else { this.stop(); this.notify(); }
  }
}
