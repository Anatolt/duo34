export const storyLanguages=[
 {code:'en',short:'EN',label:'English',native:'English',html:'en'},
 {code:'ru',short:'RU',label:'Russian',native:'Русский',html:'ru'},
 {code:'es',short:'ES',label:'Spanish',native:'Español',html:'es'},
 {code:'zh',short:'ZH',label:'Chinese',native:'中文',html:'zh'},
 {code:'uk',short:'UK',label:'Ukrainian',native:'Українська',html:'uk'}
];
export const languageByCode=Object.fromEntries(storyLanguages.map(l=>[l.code,l]));
const codeSet=new Set(storyLanguages.map(l=>l.code));
export const defaultStoryLangs={study:'en',translation:'ru',ui:'ru',pedagogy:'ru'};

export function cleanStoryLang(code,fallback='en'){return codeSet.has(code)?code:fallback;}
export function compatibleTarget(study,translation){return study===translation?(study==='en'?'ru':'en'):translation;}
export function normalizeStoryLangs(input=defaultStoryLangs){
 const study=cleanStoryLang(input.study??input.source,'en');
 const translation=compatibleTarget(study,cleanStoryLang(input.translation??input.target,'ru'));
 const ui=cleanStoryLang(input.ui,translation);
 const pedagogy=cleanStoryLang(input.pedagogy,translation);
 return {study,translation,ui,pedagogy};
}
export function routeStoryLangs(input=defaultStoryLangs){const x=normalizeStoryLangs(input);return {source:x.study,target:x.translation};}

export function storySupports(story,lang){return lang==='en'||lang==='ru'||story?.i18n?.[lang]===true;}
export function isLimitedStory(story){return storyLanguages.some(l=>!['en','ru'].includes(l.code)&&storySupports(story,l.code));}
export function languagesForStory(story){return storyLanguages.filter(l=>storySupports(story,l.code));}
export function storyVisibleForLangs(story,study='en',translation='ru'){return storySupports(story,study)&&storySupports(story,translation);}
export function availableStories(stories,study='en',translation='ru'){return stories.filter(s=>storyVisibleForLangs(s,study,translation));}

// Lookups are deliberately exact. Missing content is caught by validation and
// is never silently replaced with a third language.
export function textFor(entity,field,lang){
 if(!entity||!codeSet.has(lang))return '';
 const localized=entity.i18n?.[field]?.[lang];
 if(localized)return localized;
 if(field==='title')return lang==='en'?(entity.enTitle||''):lang==='ru'?(entity.title||''):'';
 if(field==='line')return lang==='en'?(entity.en||''):lang==='ru'?(entity.ru||''):'';
 if(['subtitle','place','topic'].includes(field))return lang==='ru'?(entity[field]||''):'';
 return '';
}
export function optionText(node,index,lang){
 if(!node||!codeSet.has(lang))return '';
 if(lang==='en')return node.options?.[index]||'';
 if(lang==='ru')return node.optionsRu?.[index]||'';
 return node.i18n?.options?.[lang]?.[index]||'';
}
export function promptText(node,lang){
 if(!node||!codeSet.has(lang))return '';
 if(lang==='en')return node.prompt||'';
 if(lang==='ru')return node.promptRu||'';
 return node.i18n?.prompt?.[lang]||'';
}
export function endingText(story,lang){
 if(!story||!codeSet.has(lang))return '';
 if(lang==='en'||lang==='ru')return story.ending?.[lang]||'';
 return story.i18n?.ending?.[lang]||'';
}

const explanationCopy={
 en:{before:'Why this works:',meaning:'Meaning:',after:'This line matches the situation; the alternatives change the meaning.'},
 ru:{before:'Почему это подходит:',meaning:'Смысл:',after:'Эта реплика соответствует ситуации; остальные варианты меняют смысл.'},
 es:{before:'Por qué funciona:',meaning:'Significado:',after:'Esta frase corresponde a la situación; las otras opciones cambian el significado.'},
 zh:{before:'为什么合适：',meaning:'含义：',after:'这句话符合当前语境；其他选项改变了意思。'},
 uk:{before:'Чому це підходить:',meaning:'Зміст:',after:'Ця репліка відповідає ситуації; інші варіанти змінюють значення.'}
};
export function explanationSegments(node,study='en',pedagogy='ru'){
 const resolvedPedagogy=cleanStoryLang(pedagogy,'ru'),copy=explanationCopy[resolvedPedagogy],gloss=optionText(node,node.correct,resolvedPedagogy);
 const segments=[
  {role:'pedagogy',lang:resolvedPedagogy,text:copy.before},
  {role:'study-quote',lang:study,text:optionText(node,node.correct,study)}
 ];
 if(gloss&&resolvedPedagogy!==study)segments.push({role:'pedagogy',lang:resolvedPedagogy,text:copy.meaning},{role:'pedagogy-gloss',lang:resolvedPedagogy,text:gloss});
 segments.push({role:'pedagogy',lang:resolvedPedagogy,text:copy.after});
 return segments;
}
export function noteText(node,study='en',pedagogy='ru'){return explanationSegments(node,study,pedagogy).map(x=>x.text).join(' ');}

export function validateStoryLocale(story,lang){
 const missing=[];
 for(const field of ['title','subtitle','place','topic'])if(!textFor(story,field,lang))missing.push(`story.${field}`);
 if(!endingText(story,lang))missing.push('story.ending');
 for(const [index,node] of story.nodes.entries()){
  if((node.type==='scene'||node.type==='line')&&!textFor(node,'line',lang))missing.push(`${index}.line`);
  if(node.type==='choice'){
   if(!promptText(node,lang))missing.push(`${index}.prompt`);
   for(let option=0;option<node.options.length;option++)if(!optionText(node,option,lang))missing.push(`${index}.option.${option}`);
  }
 }
 return missing;
}
