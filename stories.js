import {storyData} from './content.generated.js';
import {newStories} from './stories-new.js';
import {applyExplicitLocaleMigration} from './story-content-locales.js';
export const cast=storyData.cast;
export const stories=applyExplicitLocaleMigration([...newStories,...storyData.stories]);
export const storyById=Object.fromEntries(stories.map(s=>[s.id,s]));
