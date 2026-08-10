import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { projects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';

const accentMap = {
  cyan: {
    text: 'text-accent-cyan',
    bg: 'bg-accent-cyan',
    border: 'border-accent-cyan/30',
    glow: 'hover:shadow-accent-cyan/10',
    gradient: 'from-accent-cyan/20 to-transparent',
    badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
  },
  emerald: {
    text: 'text-accent-emerald',
    bg: 'bg-accent-emerald',
    border: 'border-accent-emerald/30',
    glow: 'hover:shadow-accent-emerald/10',
    gradient: 'from-accent-emerald/20 to-transparent',
    badge: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
  },
  amber: {
    text: 'text-accent-amber',
    bg: 'bg-accent-amber',
    border: 'border-accent-amber/30',
    glow: 'hover:shadow-accent-amber/10',
    gradient: 'from-accent-amber/20 to-transparent',
    badge: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  },
} as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentMap[project.accent];
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group relative overflow-hidden rounded-2xl glass-panel p-6 transition-all duration-300 hover:border-white/15 hover:shadow-xl ${accent.glow} sm:p-7`}
    >
      {/* Gradient glow on hover */}
      <div
        className={`pointer-events-none absolute -top-24 left-0 h-48 w-full bg-gradient-to-b ${accent.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Header */}
      <div className="relative mb-5 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accent.border} bg-white/5`}
        >
          <Icon className={`h-6 w-6 ${accent.text}`} />
        </div>
        <span
          className={`rounded-full border px-3 py-1 font-mono text-xs font-medium ${accent.badge}`}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative mb-3 text-xl font-bold text-ink-primary sm:text-2xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="relative mb-5 text-sm leading-relaxed text-ink-secondary">
        {project.description}
      </p>

      {/* Features */}
      <ul className="relative mb-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-ink-secondary">
            <Check className={`h-3.5 w-3.5 flex-shrink-0 ${accent.text}`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="relative mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-ink-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.link ?? '#'}
        className="relative flex items-center gap-1.5 text-sm font-medium text-ink-primary transition-colors hover:text-ink-primary"
      >
        <span className={accent.text}>View Project</span>
        <ArrowUpRight
          className={`h-4 w-4 ${accent.text} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
        />
      </a>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-3 font-mono text-sm text-accent-cyan">{'// 02. Projects'}</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl lg:text-5xl">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ink-secondary sm:text-base">
            A selection of full-stack and AI-driven applications showcasing real-world engineering
            and prompt engineering expertise.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
