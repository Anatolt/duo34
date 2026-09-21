import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises';
import {stories} from '../stories.js';
import {optionText, storySupports, textFor} from '../story-languages.js';
import audio from '../audio-manifest.js';

const languages = ['ru', 'es', 'zh', 'uk', 'ja'];
const model = 'gpt-4o-mini-tts-2025-12-15';
// A character keeps the same voice in every story and language.
const voices = {narrator: 'cedar', max: 'ash', zoya: 'marin', dad: 'onyx', son: 'echo', roxy: 'coral', chad: 'ballad', krinzh: 'nova'};
const directions = {
  ru: 'Speak in natural contemporary Russian with clear pronunciation and a conversational, moderately paced delivery.',
  es: 'Speak in natural European Spanish with clear pronunciation and a conversational, moderately paced delivery.',
  zh: 'Speak in natural Standard Mandarin Chinese with clear pronunciation and a conversational, moderately paced delivery.',
  uk: 'Speak in natural Ukrainian with clear pronunciation and a conversational, moderately paced delivery.',
  ja: 'Speak in natural contemporary Japanese with clear pronunciation and a conversational, moderately paced delivery. Preserve the intended adult humor without euphemizing it.'
};
const roleDirections = {
  narrator: 'Use a composed storyteller voice with dry humor.',
  max: 'Sound like a young adult man reacting naturally in an awkward situation.',
  zoya: 'Sound like a confident young adult woman reacting naturally in an awkward situation.',
  dad: 'Sound like a blunt, self-assured middle-aged man.',
  son: 'Sound like a dry, slightly embarrassed young adult man.',
  roxy: 'Sound like a confident adult woman with lively conversational timing.',
  chad: 'Sound like a self-assured young adult man who is trying to be charming.',
  krinzh: 'Sound like a witty young adult woman reacting naturally to an awkward situation.'
};

function items(selectedLanguages = languages) {
  return selectedLanguages.flatMap(lang => stories.filter(story => storySupports(story, lang)).flatMap(story => story.nodes.flatMap((node, index) => {
    const text = node.type === 'choice' ? optionText(node, node.correct, lang) : textFor(node, 'line', lang);
    if (!text) return [];
    const who = node.type === 'scene' ? 'narrator' : node.who;
    return [{story: story.id, index, lang, text, who, voice: voices[who]}];
  })));
}

function outputName(item) {
  return `${item.lang}/${item.story}-${String(item.index).padStart(2, '0')}.mp3`;
}

function job(item, prefix = '') {
  return {
    input: item.text,
    voice: item.voice,
    model,
    response_format: 'mp3',
    speed: 1,
    instructions: `${directions[item.lang]} ${roleDirections[item.who]}`,
    out: `${prefix}${outputName(item)}`
  };
}

async function prepare(pilot = false, selectedLanguages = languages) {
  const all = items(selectedLanguages);
  const selected = pilot
    ? [all.find(x => x.lang === 'es' && x.index === 1), all.find(x => x.lang === 'zh' && x.index === 2), all.find(x => x.lang === 'uk' && x.index === 0)]
    : all;
  const label = selectedLanguages.length === 1 ? selectedLanguages[0] : 'multilingual';
  const target = pilot ? `tmp/speech/${label}-pilot.jsonl` : `tmp/speech/${label}.jsonl`;
  await mkdir('tmp/speech', {recursive: true});
  await writeFile(target, selected.map(item => JSON.stringify(job(item, pilot ? 'pilot/' : ''))).join('\n') + '\n');
  console.log(`Prepared ${selected.length} jobs in ${target}.`);
}

async function exists(path) {
  try { await readFile(path); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

function duration(path) {
  return Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', path], {encoding: 'utf8'}).trim());
}

async function integrate(selectedLanguages = languages) {
  const selected=new Set(selectedLanguages);
  const clips = Object.fromEntries(Object.entries(audio.clips).filter(([key]) => !selected.has(key.split(':')[0])));
  await mkdir('audio', {recursive: true});
  for (const item of items(selectedLanguages)) {
    const generated = `output/speech/${outputName(item)}`;
    if (!await exists(generated)) throw new Error(`Missing generated audio: ${generated}`);
    const data = await readFile(generated);
    const sha256 = createHash('sha256').update(data).digest('hex');
    const src = `audio/${sha256}.mp3`;
    if (!await exists(src)) await copyFile(generated, src);
    clips[`${item.lang}:${item.story}:${item.index}`] = {
      text: item.text,
      who: item.who,
      lang: item.lang,
      voice: item.voice,
      model,
      src,
      duration: duration(generated),
      sha256
    };
  }
  const manifest = {
    ...audio,
    version: 2,
    provider: 'Piper + OpenAI',
    config: {...audio.config, openai: {model, voices, languages: [...new Set([...(audio.config?.openai?.languages||[]),...selectedLanguages])] }},
    clips
  };
  await writeFile('audio-manifest.js', `// English audio uses Piper; Russian, Spanish, Chinese, and Ukrainian use OpenAI TTS.\nexport default ${JSON.stringify(manifest, null, 2)};\n`);
  console.log(`Integrated ${items(selectedLanguages).length} ${selectedLanguages.join(', ')} clips; manifest now has ${Object.keys(clips).length} clips.`);
}

const command = process.argv[2];
if (command === 'prepare') await prepare(false);
else if (command === 'prepare-pilot') await prepare(true);
else if (command === 'prepare-ru') await prepare(false, ['ru']);
else if (command === 'prepare-ja') await prepare(false, ['ja']);
else if (command === 'integrate') await integrate();
else if (command === 'integrate-ja') await integrate(['ja']);
else throw new Error('Usage: node ops/generate-multilingual-audio.mjs prepare|prepare-pilot|prepare-ru|prepare-ja|integrate|integrate-ja');
