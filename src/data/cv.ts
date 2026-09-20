export const cv = {
  name: 'Maksym Berezhnyi',
  role: 'Senior React Developer',
  roleBadge: 'SENIOR REACT DEVELOPER',
  location: 'Kyiv, Ukraine',
  email: 'maksym.dev@example.com',
  phone: '+380 50 123 45 67',
  phoneHref: '+380501234567',
  linkedIn: {
    url: 'https://linkedin.com/in/mberezhnyi',
    label: 'linkedin.com/in/mberezhnyi',
    shortLabel: 'in/mberezhnyi',
  },
  avatarSrc: `${import.meta.env.BASE_URL}avatar.svg`,
  cvPdfSrc: `${import.meta.env.BASE_URL}maksym-berezhnyi-cv.pdf`,
  available: true,
  summary:
    'Results-oriented Senior Front-End Developer with expertise in building scalable UI architectures and modernizing legacy React applications. Passionate about clean code, performance optimization, and developer experience.',
  summaryHighlights: ['scalable UI architectures', 'performance optimization'],
  skills: [
    'React',
    'TypeScript',
    'MobX',
    'Tailwind CSS',
    'HTML5/CSS3',
    'Git',
    'Figma',
  ],
  languages: [
    { name: 'English', level: 'Advanced' },
    { name: 'Ukrainian', level: 'Native' },
  ],
  experience: [
    {
      title: 'Senior Front-End Developer',
      company: 'Brightgrove',
      period: '2014 — Present',
      current: true,
      bullets: [
        'Led the modernization of enterprise-scale React applications, improving initial load times by 40% through code-splitting and memoization strategies.',
        'Architected a reusable component library used across 5+ international projects, ensuring UI consistency and reducing development time by 30%.',
        'Mentored junior developers on best practices in TypeScript, unit testing, and state management using MobX and Redux.',
      ],
    },
    {
      title: 'UI Developer / CMS Specialist',
      company: 'KiwiArt',
      period: '2014',
      current: false,
      bullets: [
        'Developed complex custom CMS themes with focus on accessibility and high-speed rendering.',
        'Collaborated with design teams to translate high-fidelity Figma mockups into pixel-perfect responsive templates.',
      ],
    },
    {
      title: 'Markup Developer',
      company: 'NitraLabs',
      period: '2013 — 2014',
      current: false,
      bullets: [
        'Created semantic, SEO-optimized markup for high-traffic e-commerce platforms.',
        'Implemented cross-browser compatible layouts before the widespread adoption of Flexbox and Grid.',
      ],
    },
  ],
  education: [
    {
      title: 'React Marathon',
      subtitle: 'Intensive Frontend Bootcamp',
      year: '2022',
      description:
        'Advanced patterns, performance tuning, and architecture of modern web apps.',
      kind: 'school' as const,
    },
    {
      title: 'TypeScript Mastery',
      subtitle: 'Enterprise Dev Course',
      year: '2021',
      description:
        'Mastering static typing, generics, and large-scale application design patterns.',
      kind: 'verified' as const,
    },
  ],
} as const

export type CvData = typeof cv
