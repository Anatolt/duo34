import {defaultStoryLangs,languageByCode,routeStoryLangs,storySupports} from './story-languages.js';

const sections=new Set(['stories','course','words','progress','review']);
export const storyHref=(id,langs)=>`#/story/${encodeURIComponent(id)}${langs?`/${langs.source}/${langs.target}`:''}`;
export const viewHref=(view,langs)=>`#/${view}${langs?`/${langs.source}/${langs.target}`:''}`;
const validPair=(source,target)=>source!==target&&!!languageByCode[source]&&!!languageByCode[target];
export function parseRoute(hash,stories,defaultPair=routeStoryLangs(defaultStoryLangs)){
  const fallback=validPair(defaultPair.source,defaultPair.target)?defaultPair:routeStoryLangs(defaultStoryLangs);
  const list=()=>({view:'stories',langs:fallback,hash:viewHref('stories',fallback),explicitPair:false});
  if(hash===''||hash==='#/'||hash==='#/stories')return list();
  const match=/^#\/story\/([^/]+)(?:\/([^/]+)\/([^/]+))?\/?$/.exec(hash);
  if(match){
    try{
      const id=decodeURIComponent(match[1]),story=Object.hasOwn(stories,id)?stories[id]:null;
      const explicitPair=!!match[2];
      const langs=explicitPair?{source:decodeURIComponent(match[2]),target:decodeURIComponent(match[3])}:fallback;
      if(story&&validPair(langs.source,langs.target)&&storySupports(story,langs.source)&&storySupports(story,langs.target))
        return {view:'story',id,langs,hash:storyHref(id,langs),explicitPair};
    }catch{ /* Malformed percent encoding falls back to the story list. */ }
    return list();
  }
  const section=/^#\/([^/]+)(?:\/([^/]+)\/([^/]+))?\/?$/.exec(hash);
  if(section&&sections.has(section[1])){
    const explicitPair=!!section[2],langs=explicitPair?{source:section[2],target:section[3]}:fallback;
    if(validPair(langs.source,langs.target))return {view:section[1],langs,hash:viewHref(section[1],langs),explicitPair};
  }
  return list();
}
export function createHashRouter({window,stories,onRoute,getDefaultPair=()=>routeStoryLangs(defaultStoryLangs)}){
  let lastHash;
  function dispatch(force=false){
    if(!force&&window.location.hash===lastHash)return;
    const route=parseRoute(window.location.hash,stories,getDefaultPair());
    if(route.hash!==window.location.hash)window.history.replaceState(null,'',route.hash);
    lastHash=window.location.hash;
    onRoute(route);
  }
  const onChange=()=>dispatch();
  return {
    start(){window.addEventListener('hashchange',onChange);window.addEventListener('popstate',onChange);dispatch(true);},
    navigate(hash){
      if(window.location.hash!==hash)window.history.pushState(null,'',hash);
      // Synchronous dispatch preserves the audio playback user gesture.
      dispatch(true);
    },
    refresh(){dispatch(true);},
    dispose(){window.removeEventListener('hashchange',onChange);window.removeEventListener('popstate',onChange);}
  };
}
