import {
  Brain,
  Cpu,
  Code2,
  Database,
  Server,
  Sparkles,
  Zap,
  Bot,
  MessageSquare,
  GitBranch,
  Layers,
  Globe,
  Wand2,
  BrainCircuit,
  Coffee,
  type LucideIcon,
} from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  accent: 'cyan' | 'emerald' | 'amber';
  icon: LucideIcon;
  link?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: 'cyan' | 'emerald' | 'amber';
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: LucideIcon;
}

export const projects: Project[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    category: 'Full-Stack • Generative AI',
    description:
      'A full-stack application built with React, Node.js, Express, MongoDB, and the Google Gemini API. Features prompt engineering pipelines and JSON schema validation for real-time resume parsing, delivering structured candidate insights with sub-second latency.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    features: [
      'Prompt engineering pipelines',
      'JSON schema validation',
      'Real-time resume parsing',
      'Structured AI scoring output',
    ],
    accent: 'cyan',
    icon: Bot,
    link: '#',
  },
  {
    id: 'agile-web-platform',
    title: 'Agile Web Application Platform',
    category: 'Web Development • Internship',
    description:
      'A web development project from the Prodigy InfoTech internship focused on bug fixes, performance tuning, and responsive UI components. Shipped iterative improvements across the sprint cycle with measurable load-time reductions.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Bug fixes & stability improvements',
      'Performance tuning',
      'Responsive UI components',
      'Sprint-based iterative delivery',
    ],
    accent: 'emerald',
    icon: Zap,
    link: '#',
  },
  {
    id: 'fiestron-dashboard',
    title: 'Fiestron Tech Fest Dashboard',
    category: 'Full-Stack • Event Management',
    description:
      'A full-stack event coordination and live tracking dashboard built for the CS department fest. Managed registrations, event scheduling, and real-time attendance tracking across multiple concurrent venues.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    features: [
      'Live event tracking',
      'Real-time attendance',
      'Multi-venue coordination',
      'Registration management',
    ],
    accent: 'amber',
    icon: Layers,
    link: '#',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-llm',
    title: 'AI & LLMs',
    icon: Brain,
    accent: 'cyan',
    skills: [
      { name: 'Google Gemini API', level: 90, icon: Sparkles },
      { name: 'Prompt Engineering', level: 88, icon: MessageSquare },
      { name: 'Claude', level: 87, icon: Brain },
      { name: 'Claude Code', level: 85, icon: Wand2 },
      { name: 'OpenAI API / ChatGPT', level: 86, icon: BrainCircuit },
      { name: 'DeepSeek', level: 82, icon: Bot },
      { name: 'Workflow Automation (Zapier/Make)', level: 80, icon: Zap },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack',
    icon: Server,
    accent: 'emerald',
    skills: [
      { name: 'MongoDB', level: 85, icon: Database },
      { name: 'Express.js', level: 85, icon: Server },
      { name: 'React', level: 88, icon: Globe },
      { name: 'Node.js', level: 85, icon: Server },
      { name: 'REST APIs', level: 87, icon: GitBranch },
      { name: 'SQL', level: 78, icon: Database },
      { name: 'PHP', level: 72, icon: Code2 },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS & Languages',
    icon: Cpu,
    accent: 'amber',
    skills: [
      { name: 'Python', level: 88, icon: Code2 },
      { name: 'C++', level: 82, icon: Cpu },
      { name: 'Java', level: 84, icon: Coffee },
      { name: 'Git', level: 85, icon: GitBranch },
      { name: 'System Architecture', level: 80, icon: Layers },
    ],
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
