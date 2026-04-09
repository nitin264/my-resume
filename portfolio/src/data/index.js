export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  name: 'Sai Nitin Bogavarapu',
  title: 'Software Engineer | Python Backend Developer',
  tagline:
    'Backend engineer with 3+ years of experience building enterprise insurance systems and automation tools.',
  linkedin: 'https://www.linkedin.com/in/sai-nitin-bogavarapu/',
  email: 'bnitinx51@gmail.com',
};

export const about = {
  summary:
    'Software Engineer with 3+ years of experience building backend systems for enterprise insurance platforms using Python and SQL.',
  highlights: [
    'Backend API development',
    'Database optimization using Oracle / PL-SQL',
    'Python automation tools using Flask',
    'Production issue investigation and resolution',
    'Writing maintainable backend systems for real business workflows',
  ],
  closing:
    'I focus on engineering reliable, maintainable backend systems that solve real-world problems.',
};

export const skills = [
  {
    category: 'Languages',
    icon: 'code',
    items: ['Python', 'SQL', 'JavaScript (basic)'],
  },
  {
    category: 'Frameworks',
    icon: 'layers',
    items: ['Flask', 'FastAPI', 'Django'],
  },
  {
    category: 'Databases',
    icon: 'database',
    items: ['Oracle', 'PL/SQL'],
  },
  {
    category: 'Libraries',
    icon: 'package',
    items: ['Pandas', 'NumPy', 'Requests', 'AsyncIO'],
  },
  {
    category: 'Tools',
    icon: 'tool',
    items: ['Git', 'Azure DevOps', 'Jira', 'OneShield'],
  },
];

export const experience = [
  {
    date: 'May 2022',
    title: 'Joined ValueMomentum',
    type: 'milestone',
  },
  {
    dateRange: 'Aug 2022 – Mar 2025',
    title: 'Leading UK-based Insurance Company',
    responsibilities: [
      'Delivered UI and product enhancements improving usability across a digital insurance platform',
      'Engineered scalable quote retrieval workflows for reliable policy processing',
      'Built a Flask-based automation tool reducing manual maintenance effort by ~40%',
      'Automated Azure DevOps pipelines, cutting deployment time by ~20%',
      'Resolved critical production issues to maintain system stability',
      'Mentored 15+ engineers, accelerating onboarding and team productivity',
    ],
  },
  {
    dateRange: 'Apr 2025 – Present',
    title: 'Global Specialty Insurer (Policy & Claims Systems)',
    responsibilities: [
      'Investigating high-priority production issues and performing root cause analysis to maintain system reliability and uptime',
      'Developing complex SQL queries (joins, subqueries) to support business-critical insurance workflows',
      'Optimizing database operations through PL/SQL packages, procedures, and schema modifications to improve performance and maintainability',
      'Validating and testing SQL and PL/SQL logic to ensure accuracy, efficiency, and compliance with client requirements',
      'Collaborating with QA and business teams to ensure timely resolution of production issues in a fast-paced environment',
    ],
  },
];

export const projects = [
  {
    title: 'Chat-Based Automation Tool',
    tech: ['Python', 'REST APIs', 'AsyncIO'],
    description:
      'Backend system for managing real-time chat interactions using asynchronous architecture.',
  },
  {
    title: 'Server Automation Tool',
    tech: ['Python', 'Flask'],
    description:
      'Automation platform that manages server restarts, environment resets, and cleanup tasks for development environments.',
  },
  {
    title: 'API Data Automation Tool',
    tech: ['Python', 'FastAPI', 'Pandas'],
    description:
      'Backend service that collects API data, processes it using Pandas, and exposes structured endpoints.',
  },
  {
    title: 'AI Document Search Tool',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'Vector Database'],
    description:
      'Document assistant that allows users to upload PDFs and ask questions using semantic search.',
  },
  {
    "title": "Developer Portfolio Platform",
    "description": "Production-ready portfolio application showcasing projects and experience with a focus on performance, responsive design, and clean UI architecture.",
    "highlights": [
      "Implemented multi-environment deployment workflow (dev/staging/production) using Git branching and Vercel preview deployments",
      "Designed reusable component architecture with React and Tailwind CSS for consistent layout and spacing",
      "Optimized rendering and layout behavior to ensure uniform card alignment and responsive UI across devices"
    ],
    "tech": ["React", "Vite", "Tailwind CSS", "Vercel", "Git"],
    "features": [
      "Dynamic project rendering",
      "Responsive grid and layout system",
      "Consistent spacing using flex/grid gap strategy",
      "Preview deployments for staging branches"
    ],
    "deployment": {
      "platform": "Vercel",
      "productionBranch": "main",
      "stagingBranch": "staging",
      "developmentBranch": "dev"
    },
  },
];

export const contact = {
  email: 'bnitinx51@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sai-nitin-bogavarapu/',
};
