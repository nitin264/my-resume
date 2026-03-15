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
    company: 'ValueMomentum',
    role: 'Software Engineer',
    duration: 'May 2022 – Present',
    projects: [
      {
        name: 'Allied World',
        responsibilities: [
          'Production issue analysis and root cause investigation',
          'SQL query development with joins and subqueries',
          'Database optimization using PL/SQL packages and procedures',
          'Collaboration with QA and business teams',
        ],
      },
      {
        name: 'Hiscox Insurance',
        responsibilities: [
          'Built product and UI enhancements',
          'Implemented quote retrieval workflows',
          'Built a Python Flask automation tool for server restart and cleanup',
          'Automated deployments with Azure DevOps pipelines',
          'Mentored 15+ new engineers',
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: 'Chat-Based Automation Tool',
    tech: ['Python', 'REST APIs', 'AsyncIO'],
    description:
      'Backend system for managing real-time chat interactions using asynchronous architecture.',
    icon: '💬',
  },
  {
    title: 'Server Automation Tool',
    tech: ['Python', 'Flask'],
    description:
      'Automation platform that manages server restarts, environment resets, and cleanup tasks for development environments.',
    icon: '⚙️',
  },
  {
    title: 'API Data Automation Tool',
    tech: ['Python', 'FastAPI', 'Pandas'],
    description:
      'Backend service that collects API data, processes it using Pandas, and exposes structured endpoints.',
    icon: '🔄',
  },
  {
    title: 'AI Document Search Tool',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'Vector Database'],
    description:
      'Document assistant that allows users to upload PDFs and ask questions using semantic search.',
    icon: '🤖',
  },
  {
    title: 'Insurance Data Analyzer',
    tech: ['Python', 'Pandas', 'FastAPI'],
    description:
      'Backend analytics service that processes insurance datasets and exposes aggregated insights through APIs.',
    icon: '📊',
  },
];

export const contact = {
  email: 'bnitinx51@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sai-nitin-bogavarapu/',
};
