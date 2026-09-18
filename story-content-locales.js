// Explicit migration data for legacy fields that were Russian-only. Keeping it
// separate makes missing locale data visible instead of hiding it in a runtime
// fallback to another language.
const englishStoryFields = {
  'dad-dating': {
    subtitle: 'Experienced father. Inexperienced app user.',
    place: 'Kitchen, 20:36',
    topic: 'Profiles and dating: daddy, seeing someone, casual, serious'
  },
  'return-hoodie': {
    subtitle: 'He wants everything back. She wants one specific thing.',
    place: 'Messages, 01:48',
    topic: 'Exes and boundaries: get back together, come over, closure, move on'
  },
  'size-isnt-the-point': {
    subtitle: 'He feared he did not measure up. She wanted him to stop measuring and start listening.',
    place: 'Bedroom, 23:14',
    topic: 'Intimacy and communication: penetration, come, go down on, sixty-nine'
  },
  dad: {
    subtitle: 'One son. One dad. Far too many synonyms.',
    place: 'Kitchen, 11:43',
    topic: 'Anatomy, slang, and literal meaning'
  },
  'change-mind': {
    subtitle: 'A date is not a mortgage contract.',
    place: 'Bar, 22:16',
    topic: 'Refusal, intentions, and changing your mind'
  },
  compliment: {
    subtitle: 'Chad saves on articles. Bad idea.',
    place: "Roxy's apartment, 19:05",
    topic: 'Shit / the shit, insult / compliment'
  },
  netflix: {
    subtitle: 'He brought a hint. She brought a notebook.',
    place: 'Sofa, 21:00',
    topic: 'Hints, literally, and being into something'
  },
  translator: {
    subtitle: 'Five drafts. One button. Total disaster.',
    place: 'Messages, 00:14',
    topic: 'Drafts, get lost, send / delete'
  }
};

const englishSceneLines = {
  dad: {
    0: 'Saturday morning. Lyosha, 23, has returned from his girlfriend Anna, 24. Dad, 52, has already put the kettle on and prepared an intrusive question.'
  },
  'change-mind': {
    0: 'Roxy, 29, arrives at a bar after a date with Max, 28. Zoya, 31, has ordered fries and is ready to debrief.'
  },
  compliment: {
    0: 'Chad, 27, visits Roxy, 29. She plays her new DJ set. He has decided to sound like a native speaker.'
  },
  netflix: {
    0: 'Max, 28, has invited Krinzhina, 26, over for Netflix and chill. She brings a notebook labelled “URBAN INFRASTRUCTURE”.'
  },
  translator: {
    0: 'Krinzhina, 26, wants to reject a persistent acquaintance, 30. Zoya, 31, is helping make the English message less explosive.',
    11: 'Krinzhina stares at five blue check marks.'
  }
};

export function applyExplicitLocaleMigration(stories) {
  for (const story of stories) {
    const fields = englishStoryFields[story.id];
    if (fields) {
      story.i18n ||= {};
      for (const [field, text] of Object.entries(fields)) {
        story.i18n[field] = {...story.i18n[field], en: text};
      }
    }
    for (const [index, text] of Object.entries(englishSceneLines[story.id] || {})) {
      const node = story.nodes[Number(index)];
      node.i18n = {...node.i18n, line: {...node.i18n?.line, en: text}};
    }
  }
  return stories;
}
