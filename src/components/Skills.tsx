import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
import type { SkillCategory, Skill } from '@/data/portfolio';

const accentMap = {
  cyan: {
    text: 'text-accent-cyan',
    bar: 'from-accent-cyan to-accent-cyan/60',
    icon: 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5',
    glow: 'hover:shadow-accent-cyan/10',
  },
  emerald: {
    text: 'text-accent-emerald',
    bar: 'from-accent-emerald to-accent-emerald/60',
    icon: 'text-accent-emerald border-accent-emerald/30 bg-accent-emerald/5',
    glow: 'hover:shadow-accent-emerald/10',
  },
  amber: {
    text: 'text-accent-amber',
    bar: 'from-accent-amber to-accent-amber/60',
    icon: 'text-accent-amber border-accent-amber/30 bg-accent-amber/5',
    glow: 'hover:shadow-accent-amber/10',
  },
} as const;

function SkillBar({ skill, delay, accent }: { skill: Skill; delay: number; accent: keyof typeof accentMap }) {
  const styles = accentMap[accent];
  const SkillIcon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {SkillIcon && <SkillIcon className={`h-3.5 w-3.5 ${styles.text}`} />}
          <span className="text-sm font-medium text-ink-primary">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-ink-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: delay + 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${styles.bar}`}
        />
      </div>
    </motion.div>
  );
}

function SkillColumn({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const accent = accentMap[category.accent];
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group rounded-2xl glass-panel p-6 transition-all duration-300 hover:border-white/15 hover:shadow-xl ${accent.glow} sm:p-7`}
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accent.icon}`}
        >
          <Icon className="h-5.5 w-5.5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink-primary">{category.title}</h3>
          <p className="font-mono text-xs text-ink-muted">
            {category.skills.length} skills
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={i * 0.08}
            accent={category.accent}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-accent-emerald/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-2/3 h-72 w-72 rounded-full bg-accent-amber/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-3 font-mono text-sm text-accent-emerald">{'// 03. Skills'}</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl lg:text-5xl">
            Interactive <span className="text-gradient-cyan">Skills Matrix</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ink-secondary sm:text-base">
            A breakdown of my technical toolkit across AI/LLM integration, full-stack development,
            and core computer science fundamentals.
          </p>
        </motion.div>

        {/* Skill columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillColumn key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
