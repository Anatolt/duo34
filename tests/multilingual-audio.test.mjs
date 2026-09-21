import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import audio from '../audio-manifest.js';
import {stories} from '../stories.js';
import {optionText, storySupports, textFor} from '../story-languages.js';
import {revealedClip,supportsStoryAudio} from '../story-audio.js';
import {storyScreen} from '../story-ui.js';

test('Previously voiced Spanish, Chinese, and Ukrainian stories retain complete audio', () => {
  let count = 0;
  for (const story of stories) for (const lang of ['es', 'zh', 'uk']) {
    if (!supportsStoryAudio(story, lang)) continue;
    for (const [index, node] of story.nodes.entries()) {
      const progress = {index, answers: {[index]: node.correct}};
      const clip = revealedClip(story, progress, audio, index, lang);
      const text = node.type === 'choice' ? optionText(node, node.correct, lang) : textFor(node, 'line', lang);
      assert.equal(clip.key, `${lang}:${story.id}:${index}`);
      assert.equal(clip.text, text);
      assert.ok(clip.src, clip.key);
      const data = readFileSync(new URL('../' + clip.src, import.meta.url));
      assert.equal(createHash('sha256').update(data).digest('hex'), audio.clips[clip.key].sha256);
      assert.ok(audio.clips[clip.key].duration > 0.15);
      count++;
    }
    const html = storyScreen({storyProgress: {[story.id]: {index: 1, answers: {}}}}, story.id, {source: lang, target: 'en'});
    assert.ok(html.includes(`data-clip-key="${lang}:${story.id}:1"`));
    assert.ok(html.includes('OpenAI TTS'));
  }
  assert.equal(count, 155);
});

test('Russian has complete AI audio for all nine stories', () => {
  let count = 0;
  for (const story of stories) {
    for (const [index, node] of story.nodes.entries()) {
      const progress = {index, answers: {[index]: node.correct}};
      const clip = revealedClip(story, progress, audio, index, 'ru');
      const text = node.type === 'choice' ? optionText(node, node.correct, 'ru') : textFor(node, 'line', 'ru');
      assert.equal(clip.key, `ru:${story.id}:${index}`);
      assert.equal(clip.text, text);
      assert.ok(clip.src, clip.key);
      const data = readFileSync(new URL('../' + clip.src, import.meta.url));
      assert.equal(createHash('sha256').update(data).digest('hex'), audio.clips[clip.key].sha256);
      assert.ok(audio.clips[clip.key].duration > 0.15);
      count++;
    }
    const html = storyScreen({storyProgress: {[story.id]: {index: 1, answers: {}}}}, story.id, {source: 'ru', target: 'en', ui: 'en'});
    assert.ok(html.includes(`data-clip-key="ru:${story.id}:1"`));
    assert.ok(html.includes('AI-generated voices'));
  }
  assert.equal(count, 185);
});

test('Japanese has complete AI audio for all nine stories', () => {
  let count = 0;
  for (const story of stories) {
    for (const [index, node] of story.nodes.entries()) {
      const progress = {index, answers: {[index]: node.correct}};
      const clip = revealedClip(story, progress, audio, index, 'ja');
      const text = node.type === 'choice' ? optionText(node, node.correct, 'ja') : textFor(node, 'line', 'ja');
      assert.equal(clip.key, `ja:${story.id}:${index}`);
      assert.equal(clip.text, text);
      assert.ok(clip.src, clip.key);
      const data = readFileSync(new URL('../' + clip.src, import.meta.url));
      assert.equal(createHash('sha256').update(data).digest('hex'), audio.clips[clip.key].sha256);
      assert.ok(audio.clips[clip.key].duration > 0.15);
      count++;
    }
    const html = storyScreen({storyProgress: {[story.id]: {index: 1, answers: {}}}}, story.id, {study: 'ja', translation: 'en', ui: 'ja', pedagogy: 'ja'});
    assert.ok(html.includes(`data-clip-key="ja:${story.id}:1"`));
    assert.ok(html.includes('AI生成音声'));
  }
  assert.equal(count, 185);
});
