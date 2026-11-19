import { img } from './images'

/**
 * Case study content. Every project follows the same shape so the
 * <CaseStudy /> page can render any of them.
 */
export const projects = [
  {
    slug: 'sjc-care',
    title: 'SJC Care',
    subtitle: 'Guidance Information System',
    tagline: 'Supporting students, one session at a time.',
    accent: 'bg-sage',
    accentHex: '#8EAF92',
    summary:
      "A centralized web platform for St. Joseph College – Olongapo Inc.'s guidance office to manage student records, counseling appointments, testing, and reports.",
    cover: { ...img('sjc-dashboard.webp'), alt: 'SJC Care admin dashboard with session counts, appointments, a 7-day trend chart and a referral pie chart' },
    role: 'Main Developer · Documentation Lead · Team Lead',
    team: 'SAL Solutions (Team of 3)',
    timeline: '2 months, from preparation to presentation',
    stack: ['React', 'Supabase', 'Figma', 'Vercel'],
    status: 'Deployed — under revision for future implementations',
    links: {
      live: 'https://sdcc-gis.vercel.app/',
      repo: null, // private client repository
      repoNote: 'Source repository is private (client project)',
    },

    overview:
      "SJC Care is a guidance information system built for the guidance office of St. Joseph College – Olongapo Inc. Counselors and administrators use it to add and manage student guidance records, track concerns and sessions, book counseling appointments, run testing schedules, and generate session and counseling reports. Security is built in, with two-factor authentication and a Data Privacy Act consent step at sign-in.",
    problem:
      'The guidance office needed one secure, centralized place to keep student guidance records, follow concerns from first contact to closure, schedule counseling, manage testing, and produce reports — instead of handling each of those separately.',
    users: [
      'Guidance office administrators',
      'Student Development and Counseling Center at St. Joseph College – Olongapo Inc.',
    ],

    ownership: {
      role: 'Main developer, documentation lead, and overall team lead.',
      summary:
        'I set the direction for the project, delegated tasks, and owned both the frontend and the backend, while the team of three delivered it together.',
      contributions: [
        'Developed the full stack: the React interface and the Supabase backend and database.',
        "Led the team's direction and deliverables, and delegated tasks across the team of three.",
        'Led the documentation, including requirements gathered from the guidance office.',
        'Took part in the one-on-one interviews with the beneficiary and helped turn their answers into wireframes and mockups in Figma.',
      ],
    },

    process: [
      {
        title: 'Listen',
        text: "We held one-on-one interviews with the beneficiary, the guidance office, to learn what they needed and wanted from the system.",
      },
      {
        title: 'Sketch',
        text: 'Before writing code, we made wireframes and mockups in Figma so the guidance office could see our plan and react to it early.',
      },
      {
        title: 'Build',
        text: 'I developed the frontend in React and the backend on Supabase, and coordinated the team so deliverables stayed on schedule.',
      },
      {
        title: 'Present & deploy',
        text: 'The whole cycle, from preparation to development to presentation, took two months. The system was deployed on Vercel.',
      },
      {
        title: 'Revise',
        text: 'The system is under revision for future implementations. It will be redeployed once the beneficiary and our adviser approve the changes.',
      },
    ],

    gallery: [
      { ...img('sjc-login.webp'), alt: 'SJC Care sign-in screen with a green panel, feature list, email and password fields and a Data Privacy Act consent checkbox', caption: 'Sign in, with a Data Privacy Act consent step.' },
      { ...img('sjc-dashboard.webp'), alt: 'SJC Care dashboard showing totals for records, sessions and cases, today\'s appointments, a 7-day session trend and referral types', caption: "Dashboard: today's sessions, case totals and trends at a glance." },
      { ...img('sjc-records.webp'), alt: 'SJC Care counseling records page with search, date range and category filters above a table of records', caption: 'Counseling records, filterable by grade, referral and status.' },
      { ...img('sjc-reports.webp'), alt: 'SJC Care reports page with summary cards, a 7-day trend line chart and pie charts for session status and referral type', caption: 'Reports & analytics for sessions and appointments.' },
      { ...img('sjc-sessions.webp'), alt: 'Two bar charts: sessions by section and appointment status breakdown', caption: 'Sessions by section and appointment status.' },
      { ...img('sjc-counselors.webp'), alt: 'SJC Care counselors page with a card for each counselor showing their total cases (contact details blurred for privacy)', caption: 'Counselor management (contact details blurred for privacy).' },
      { ...img('sjc-testing.webp'), alt: 'SJC Care testing management page with tabs for schedules, applicants, results and reports, plus masterlist download and permit printing', caption: 'Testing management: masterlist export and permit printing.' },
    ],

    decisions: [
      {
        title: 'Design before code',
        text: 'I chose to put wireframes and mockups in front of the guidance office first, so they could react to a concrete plan instead of an idea.',
      },
      {
        title: 'One person across the stack',
        text: 'Building both the frontend and backend myself kept the interface and the data model consistent, so screens map cleanly to the records behind them.',
      },
      {
        title: 'A calm green-and-gold identity',
        text: 'The green and gold palette and a persistent sidebar give a calm, institutional feel suited to an office that works in the system all day.',
      },
    ],

    result:
      'SJC Care is deployed and live. It covers student records, appointments, testing management (masterlist export and permit printing), counselor management, and dashboards with reports, all behind two-factor authentication. It is currently under revision with the beneficiary and our adviser, and will be redeployed once the changes are approved.',

    lessons: [
      'Communicate closely with your beneficiary. They are the ones who will use the system long-term, so their input is what lets you customize it to what they actually need and want.',
      'Detail-orientation and time management carry a project. A two-month timeline leaves little room to miss small requirements.',
    ],
  },

  {
    slug: 'mindbloom',
    title: 'MindBloom',
    subtitle: 'AI-powered stress detection and emotional pattern tracking',
    tagline: 'Your mind deserves to bloom.',
    accent: 'bg-coral',
    accentHex: '#F58F9A',
    summary:
      'A daily-journaling web app that uses AI sentiment analysis to help young people notice stress and understand their emotional patterns over time.',
    cover: { ...img('mb-home.webp'), alt: 'MindBloom home screen greeting Lorraine, with shortcuts to write, review past entries and see patterns, and a list of recent journal entries' },
    role: 'Solo Full-Stack Developer',
    team: 'Solo project',
    timeline: null,
    stack: ['React', 'Supabase', 'Hugging Face (NLP)', 'Vercel'],
    status: 'Deployed',
    links: {
      live: 'https://mindbloom-frontend-jrta9yrnh-azucenaslorraine818s-projects.vercel.app/',
      repo: 'https://github.com/azucenaslorraine818/mindbloom-frontend',
      repoNote: null,
    },

    overview:
      'MindBloom is an AI-powered application for stress detection and emotional pattern tracking through daily journaling. Users write freely; the app analyzes each entry with NLP-based sentiment analysis and labels it positive, neutral, or negative. Over time, weekly mood charts, streaks and a history view help users move from "I feel bad" to "I understand why." It supports UN SDG 3: Good Health and Well-being.',
    problem:
      "Stress and burnout are common among students and young adults, who often feel overwhelmed by school, work and social expectations but can't clearly tell what triggers those feelings. Without awareness, stress can build up over time and affect mental health and daily life.",
    users: [
      'Young individuals who want a safe, interactive digital space to monitor their mood and reflect through journaling',
      'Students, the primary audience',
      'Anyone seeking non-clinical wellness support, with motivational support and wellness resources',
    ],

    ownership: {
      role: 'Full-stack developer. MindBloom is my solo project.',
      summary:
        'I owned every part of MindBloom, from the interface and the backend to the AI integration and deployment.',
      contributions: [
        'Built the React frontend: landing page, journaling flow, history with filters, trends dashboard, profile, settings and dark mode.',
        'Built the backend and data layer on Supabase.',
        'Integrated sentiment analysis through Hugging Face so each journal entry is classified automatically.',
        'Designed the identity: the tulip "bloom" mark, the soft pink palette and a calm, approachable tone.',
        'Deployed the app on Vercel.',
      ],
    },

    process: [
      {
        title: 'Define the why',
        text: 'I started with the purpose of the system, who it is for and why it should exist: stress awareness for young people, aligned with SDG 3.',
      },
      {
        title: 'Design',
        text: 'I shaped a soft, private-feeling interface: a calm journaling space first, with insights kept one tap away.',
      },
      {
        title: 'Build',
        text: 'I built the journaling flow and accounts on Supabase, with a React frontend for writing, history and trends.',
      },
      {
        title: 'Add the AI',
        text: 'I connected Hugging Face NLP sentiment analysis so every entry is labeled positive, neutral or negative automatically.',
      },
      {
        title: 'Visualize & deploy',
        text: 'I turned the labels into weekly mood statistics, streaks and an entry breakdown, then deployed to Vercel.',
      },
    ],

    gallery: [
      { ...img('mb-landing.webp'), alt: 'MindBloom landing page with the headline "Your mind deserves to bloom", a short description and a log in / sign up form', caption: 'Landing page with log in and sign up.' },
      { ...img('mb-features.webp'), alt: 'MindBloom features section with four cards: daily journaling, AI emotion detection, stress pattern tracking, and private and secure', caption: 'Features: journaling, AI emotion detection, patterns, privacy.' },
      { ...img('mb-about.webp'), alt: 'MindBloom about section explaining who the app is built for, with a pink quote card listing target users', caption: 'About: the problem and the people it is for.' },
      { ...img('mb-home.webp'), alt: 'MindBloom home screen with a greeting, three shortcut cards and recent entries color-coded by sentiment', caption: 'Home: write, revisit and see patterns.' },
      { ...img('mb-history.webp'), alt: 'MindBloom journal history with filter pills for positive, neutral and negative and entries tagged by sentiment', caption: 'Journal history, filterable by sentiment.' },
      { ...img('mb-trends.webp'), alt: 'MindBloom trends page with a weekly mood bar chart, a streak counter, the most common mood and an entry breakdown', caption: 'Trends: weekly mood statistics, streaks and breakdown.' },
    ],

    decisions: [
      {
        title: 'Sentiment you can see at a glance',
        text: 'Each entry carries a color-coded sentiment label and accent edge, so patterns in a long history are easy to scan.',
      },
      {
        title: 'A soft, private-feeling identity',
        text: 'Pink and a tulip "bloom" mark give MindBloom a gentle, personal tone that suits a space for honest reflection.',
      },
      {
        title: 'Privacy as a feature',
        text: 'Journals are private to each user, and that promise is stated in the product itself rather than buried in policy.',
      },
    ],

    result:
      'MindBloom is deployed and working end to end: users can sign up, write entries, get automatic sentiment labels, browse their history by sentiment, and view weekly trends, streaks and breakdowns, with a dark mode for comfort.',

    lessons: [
      'Know exactly what you are building: its intentions, its purpose, who it is for and why. Every design and technical choice gets easier once those are clear.',
      'Detail-orientation and time management matter just as much on a solo project, where nobody else is there to catch the small things.',
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
