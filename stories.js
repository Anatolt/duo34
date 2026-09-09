import {storyData} from './content.generated.js';
export const {cast,stories}=storyData;
export const storyById=Object.fromEntries(stories.map(s=>[s.id,s]));
