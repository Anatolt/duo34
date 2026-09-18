import {languageByCode,storySupports} from './story-languages.js';

// Keep shareable URLs independent of the reader's local bookmark.
const sections=new Set(['stories','course','words','progress','review']);
export const storyHref=(id,langs)=>`#/story/${encodeURIComponent(id)}${langs?`/${langs.source}/${langs.target}`:''}`;
export const viewHref=view=>view==='stories'?'#/':`#/${view}`;
export function parseRoute(hash,stories){
  if(hash===''||hash==='#/'||hash==='#/stories')return {view:'stories',hash:hash===''?'':'#/'};
  const match=/^#\/story\/([^/]+)(?:\/([^/]+)\/([^/]+))?\/?$/.exec(hash);
  if(match){
    try{
      const id=decodeURIComponent(match[1]),story=Object.hasOwn(stories,id)?stories[id]:null;
      if(story&&!match[2])return {view:'story',id,hash:storyHref(id)};
      const source=decodeURIComponent(match[2]||''),target=decodeURIComponent(match[3]||'');
      if(story&&source!==target&&languageByCode[source]&&languageByCode[target]&&storySupports(story,source)&&storySupports(story,target)){
        const langs={source,target};
        return {view:'story',id,langs,hash:storyHref(id,langs)};
      }
    }catch{ /* Malformed percent encoding falls back to the story list. */ }
  }
  const view=hash.slice(2);
  if(hash.startsWith('#/')&&sections.has(view))return {view,hash:viewHref(view)};
  return {view:'stories',hash:'#/'};
}
export function createHashRouter({window,stories,onRoute}){
  let lastHash;
  function dispatch(force=false){
    if(!force&&window.location.hash===lastHash)return;
    const route=parseRoute(window.location.hash,stories);
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
