import { img } from './images'

export const profile = {
  name: 'Lorraine Azucenas',
  firstName: 'Lorraine',
  tagline: 'A little bit of everything, always learning.',
  traits: [
    { label: 'Ambitious', color: 'bg-periwinkle', rotate: '-rotate-3' },
    { label: 'Versatile', color: 'bg-sage', rotate: 'rotate-2' },
    { label: 'Driven', color: 'bg-butter', rotate: '-rotate-2' },
  ],
  status: '3rd-year BSCS student · Gordon College',
  email: 'azucenaslorraine@gmail.com',
  github: 'https://github.com/azucenaslorraine818',

  bio: [
    "Hi, I'm Lorraine, a 3rd-year BSCS student at Gordon College who likes building things end to end. I've led a team through a full guidance information system for a school, built an AI journaling app on my own, and I'm president of the Society of Programming Enthusiasts in Computer Science.",
    "I'm happiest when I'm learning something new and putting it to work — whether that's a React interface, a Supabase backend, a requirements interview, or a microphone and a room full of people.",
  ],

  facts: [
    { label: 'Studying', value: 'BS Computer Science, 3rd year' },
    { label: 'School', value: 'Gordon College' },
    { label: 'Leading', value: 'SPECS, President A.Y. 2026–2027' },
    { label: 'Languages', value: 'Filipino (native), English (proficient)' },
  ],

  skills: [
    {
      group: 'Technical',
      color: 'bg-periwinkle',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Supabase',
        'Python',
        'Java',
        'C',
        'Figma',
        'Microsoft Word',
        'Excel',
        'PowerPoint',
        'Documentation',
        'Requirements Gathering',
      ],
    },
    {
      group: 'Communication & Leadership',
      color: 'bg-sage',
      items: [
        'Public Speaking',
        'Event Hosting',
        'Leadership',
        'Team Coordination',
        'Communication Skills',
        'Adaptability',
        'Time Management',
        'Problem Solving',
      ],
    },
    {
      group: 'Languages',
      color: 'bg-butter',
      items: ['Filipino (native)', 'English (proficient)'],
    },
  ],

  beyondCode: [
    {
      title: 'President, SPECS',
      org: 'Society of Programming Enthusiasts in Computer Science',
      meta: 'Gordon College · A.Y. 2026–2027',
      text: 'Leading the programming and computer science student org: coordinating officers, planning activities, and keeping the community learning together.',
      color: 'bg-coral',
      photo: {
        ...img('specs-cutout.webp'),
        alt: 'Lorraine in her SPECS organizational shirt',
      },
    },
    {
      title: 'Event host & student volunteer',
      org: 'Olongapo City Robotics Cup 2026',
      meta: 'Event hosting · Volunteer',
      text: 'One of the event hosts and student volunteers for the Olongapo City Robotics Cup 2026 — public speaking, crowd energy, and keeping a busy program on time.',
      color: 'bg-periwinkle',
      photo: {
        ...img('event-host.webp'),
        alt: 'Lorraine smiling on stage, holding a microphone and the event program in front of the Olongapo City Robotics Cup backdrop',
      },
    },
  ],

  photos: {
    cutout: {
      ...img('specs-cutout.webp'),
      alt: 'Lorraine smiling in her SPECS organizational shirt',
    },
    matcha: {
      ...img('matcha.webp'),
      alt: 'Lorraine enjoying her iced matcha latte',
    },
    event: {
      ...img('event-host.webp'),
      alt: 'Lorraine smiling on stage, holding a microphone and the event program',
    },
  },
}
