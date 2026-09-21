import test from 'node:test';
import assert from 'node:assert/strict';
import {parseRoute,storyHref,viewHref,createHashRouter} from '../story-routes.js';
import {stories,storyById} from '../stories.js';
import {roadmap,storyFinish} from '../story-ui.js';

test('New and legacy routes expose the saved or initial pair in the URL',()=>{
 const pair={source:'ru',target:'en'},saved={source:'zh',target:'uk'};
 for(const s of stories)assert.deepEqual(parseRoute(storyHref(s.id),storyById),{view:'story',id:s.id,langs:pair,hash:storyHref(s.id,pair),explicitPair:false});
 for(const hash of ['','#/','#/stories'])assert.deepEqual(parseRoute(hash,storyById),{view:'stories',langs:pair,hash:viewHref('stories',pair),explicitPair:false});
 assert.equal(parseRoute('#/story/%64ad/',storyById).hash,'#/story/dad/ru/en');
 assert.equal(parseRoute('#/course',storyById,saved).hash,'#/course/zh/uk');
 assert.equal(parseRoute('#/story/hot-mic',storyById,saved).hash,'#/story/hot-mic/zh/uk');
 assert.equal(parseRoute('#/story/dad',storyById,saved).view,'stories');
 for(const hash of ['#/story/missing','#/story/toString','#/story/__proto__','#/story/%E0%A4%A','#/story/dad/extra','#garbage'])assert.deepEqual(parseRoute(hash,storyById),{view:'stories',langs:pair,hash:'#/stories/ru/en',explicitPair:false});
});
test('Language-pair story links accept valid pairs and reject same, unknown, and unavailable pairs',()=>{
 const valid={source:'zh',target:'uk'},hash=storyHref('hot-mic',valid);
 assert.equal(hash,'#/story/hot-mic/zh/uk');
 assert.deepEqual(parseRoute(hash,storyById),{view:'story',id:'hot-mic',langs:valid,hash,explicitPair:true});
 assert.deepEqual(parseRoute('#/story/dad/ru/en',storyById,{source:'zh',target:'uk'}),{view:'story',id:'dad',langs:{source:'ru',target:'en'},hash:'#/story/dad/ru/en',explicitPair:true});
 assert.equal(parseRoute('#/stories/es/ru',storyById).hash,'#/stories/es/ru');
 for(const invalid of ['#/story/dad/en/en','#/story/dad/xx/ru','#/story/dad/en/xx']){
  assert.deepEqual(parseRoute(invalid,storyById),{view:'stories',langs:{source:'ru',target:'en'},hash:'#/stories/ru/en',explicitPair:false},invalid);
 }
});
test('Router dispatches once for paired history events and preserves pathname/query',()=>{
 let url=new URL('https://example.test/t/duo34/?release=current#/story/dad');
 const events=new Map(),visits=[],pushes=[];
 const win={get location(){return url;},history:{pushState(_s,_t,hash){url=new URL(hash,url);pushes.push(url.href);},replaceState(_s,_t,hash){url=new URL(hash,url);}},addEventListener(type,fn){events.set(type,fn);},removeEventListener(type){events.delete(type);}};
 const router=createHashRouter({window:win,stories:storyById,onRoute:r=>visits.push(r)});
 router.start();assert.equal(visits.length,1);assert.equal(visits[0].id,'dad');assert.equal(url.hash,'#/story/dad/ru/en');
 router.navigate(storyHref('dad-dating'));assert.equal(visits.length,2);
 assert.equal(url.pathname,'/t/duo34/');assert.equal(url.search,'?release=current');
 events.get('hashchange')();events.get('popstate')();assert.equal(visits.length,2);
 url=new URL('#/story/dad',url);events.get('popstate')();events.get('hashchange')();
 assert.equal(visits.length,3);assert.equal(visits.at(-1).id,'dad');assert.equal(pushes.length,1);
 router.refresh();assert.equal(visits.length,4);assert.equal(pushes.length,1);
 url=new URL('#/story/missing',url);events.get('hashchange')();assert.equal(url.hash,'#/stories/ru/en');assert.equal(visits.at(-1).view,'stories');
 router.dispose();assert.equal(events.size,0);
});
test('Story covers and next-story navigation expose real links',()=>{
 const html=roadmap({storyCompleted:{},storyProgress:{}});
 for(const s of stories)assert.ok(html.includes(`<a href="${storyHref(s.id,{source:'ru',target:'en'})}" class="story-cover`));
 assert.ok(storyFinish({id:stories[0].id,score:4,total:4,xp:40}).includes(`href="${storyHref(stories[1].id,{source:'ru',target:'en'})}"`));
});
