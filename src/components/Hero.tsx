import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Sparkles } from 'lucide-react';

const Hero3DScene = lazy(() => import('./Hero3DScene'));

function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-accent-cyan/20 border-t-accent-cyan" />
        <p className="font-mono text-xs text-ink-muted">Initializing 3D environment…</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<SceneFallback />}>
          <Hero3DScene />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-bg-deep/40 via-transparent to-bg-deep" />
      <div className="pointer-events-none absolute inset-0 z-10 grid-bg opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />

      {/* Content overlay */}
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
          <span className="font-mono text-xs tracking-wide text-ink-secondary">
            Available for opportunities
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse-slow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block text-ink-primary">Fahim Shah</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 text-lg font-medium sm:text-2xl"
        >
          <span className="text-gradient-cyan">Full-Stack Engineer</span>
          <span className="text-ink-muted"> & </span>
          <span className="text-gradient-amber">Generative AI Developer</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base"
        >
          Building scalable MERN applications integrated with Gemini API, LLM prompt engineering
          pipelines, and real-time backend microservices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-emerald px-6 py-3.5 text-sm font-semibold text-bg-deep transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/25 active:scale-95"
          >
            <FolderGit2 className="h-4 w-4" />
            View Featured Projects
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1cyw9sT2ZklOsh4kRl8vQ3JIO7NI5uG9g/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-semibold text-ink-primary transition-all hover:border-white/20 hover:bg-white/5 active:scale-95"
          >
            <Download className="h-4 w-4 text-accent-cyan transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-ink-muted">Scroll</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-ink-faint p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1 w-1 rounded-full bg-accent-cyan"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
