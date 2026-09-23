export const cv = {
  name: 'Maksym Berezhnyi',
  role: 'Senior React / Front-End Developer',
  roleBadge: 'SENIOR REACT / FRONT-END',
  location: 'Kyiv, Ukraine',
  email: 'm.berezhnyi.dev@gmail.com',
  phone: '+380 63 766 24 74',
  phoneHref: '+380637662474',
  linkedIn: {
    url: 'https://linkedin.com/in/mberezhnyi-dev',
    label: 'linkedin.com/in/mberezhnyi-dev',
    shortLabel: 'in/mberezhnyi-dev',
  },
  avatarSrc: `${import.meta.env.BASE_URL}avatar.jpg`,
  cvPdfSrc: `${import.meta.env.BASE_URL}maksym-berezhnyi-cv.pdf`,
  available: true,
  summary:
    'Senior Front-End Developer with 10+ years of experience specializing in React, TypeScript, MobX, and Tailwind CSS, with a proven track record of modernizing legacy ASP.NET (WebForms/MVC) systems. Progressed from UI Developer to technical lead on front-end initiatives, mentoring engineers and architecting complex web tools (site and reporting builders). Early adopter of AI-assisted development (Cursor IDE), meaningfully cutting feature delivery time while maintaining clean architecture and design precision.',
  summaryHighlights: [
    'React, TypeScript, MobX, and Tailwind CSS',
    'modernizing legacy ASP.NET',
    'AI-assisted development',
  ],
  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'MobX',
    'Tailwind CSS',
    'HTML5/CSS3',
    'Less/SCSS',
    'ASP.NET FE',
    'REST APIs',
    'Webpack/Vite',
    'Cursor IDE',
    'Git',
    'Figma',
  ],
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'Advanced' },
  ],
  experience: [
    {
      title: 'Senior Front-End Developer',
      company: 'Brightgrove',
      period: '2018 — Present',
      current: true,
      bullets: [
        'Lead front-end development across key web products, mentor junior developers, conduct structured code reviews, and streamline team onboarding — cutting new-hire ramp-up time roughly in half.',
        'Integrated Cursor IDE and AI-driven workflows into daily development, noticeably speeding up component generation, refactoring, and complex logic implementation.',
        'Architect and deliver state-driven web applications using React, TypeScript, MobX, and Tailwind CSS, ensuring high modularity and long-term maintainability.',
        'Drive front-end refactoring for legacy ASP.NET (WebForms/MVC) applications, trimming bundle sizes and bringing initial page load times down by roughly a third.',
      ],
    },
    {
      title: 'UI / Front-End Developer',
      company: 'Brightgrove',
      period: '2014 — 2018',
      current: false,
      bullets: [
        'Developed pixel-perfect, cross-browser responsive interfaces from Figma/design specifications using CSS/LESS and modern JS.',
        'Created modular HTML email templates and maintained UI style guides across company products.',
      ],
    },
    {
      title: 'UI / Front-End Developer',
      company: 'KiwiArt',
      period: 'Mar 2014 — Aug 2014',
      current: false,
      bullets: [
        'Developed custom responsive themes for WordPress, PrestaShop, and Shopify; integrated custom jQuery/JS plugins.',
      ],
    },
    {
      title: 'UI Developer',
      company: 'NitraLabs',
      period: 'Jun 2013 — Mar 2014',
      current: false,
      bullets: [
        'Built semantic HTML/CSS layouts for e-commerce platforms and internal management software.',
      ],
    },
  ],
  projects: [
    {
      title: 'Custom Drag-and-Drop Site Builder',
      stack: 'React / MobX / Tailwind',
      description:
        'Architected an interactive site constructor enabling non-technical users to build customizable web pages, cutting typical setup time from hours to minutes.',
    },
    {
      title: 'Interactive Report Constructor',
      stack: 'React / TypeScript',
      description:
        'Designed and implemented a complex reporting tool featuring dynamic charts and filterable data tables for enterprise analytics.',
    },
    {
      title: 'ASP.NET Legacy Application Redesign',
      stack: 'React / ASP.NET',
      description:
        'Engineered the front-end overhaul of an established enterprise product, replacing outdated server-rendered layouts with modern React components without breaking backend logic.',
    },
  ],
  education: [
    {
      title: "Master's Degree in Foreign Languages",
      subtitle: 'H. S. Skovoroda Kharkiv National Pedagogical University',
      year: '2006 — 2011',
      description:
        'English Philology — Advanced (C1) English communication, strong technical documentation, and effective teaching/mentoring capabilities.',
      kind: 'school' as const,
    },
    {
      title: 'Understanding TypeScript',
      subtitle: 'Maximilian Schwarzmüller · Udemy',
      year: 'Cert',
      description: 'TypeScript fundamentals through advanced patterns for large-scale applications.',
      kind: 'verified' as const,
    },
    {
      title: 'React Marathon',
      subtitle: 'SoftServe',
      year: 'Cert',
      description: 'Intensive React training covering modern patterns and application architecture.',
      kind: 'verified' as const,
    },
  ],
} as const

export type CvData = typeof cv
