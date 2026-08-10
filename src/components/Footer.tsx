import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, ArrowUp, MapPin, Copy, Check } from 'lucide-react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/fahimmm0786-ai',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fahim-shah-ab808930b',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/FahimShah0007',
    icon: Twitter,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:fahimmm0786@gmail.com',
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('fahimmm0786@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="relative border-t border-white/5 py-16 sm:py-20">
      {/* Background accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent-cyan/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block font-mono text-sm text-accent-amber">{'// 04. Contact'}</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl lg:text-5xl">
            Let's Build <span className="text-gradient-amber">Something</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-secondary sm:text-base">
            Open to full-stack and AI engineering roles, freelance projects, and collaborations.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fahimmm0786@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose email in Gmail"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-emerald px-6 py-3.5 text-sm font-semibold text-bg-deep transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/25 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              Compose in Gmail
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address to clipboard"
              className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-semibold text-ink-primary transition-all hover:scale-105 hover:border-accent-cyan/40 hover:shadow-lg hover:shadow-accent-cyan/15 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-accent-emerald" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-accent-cyan" />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.external ? '_blank' : '_self'}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-xl glass-panel text-ink-secondary transition-all hover:scale-110 hover:border-white/20 hover:text-ink-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <MapPin className="h-4 w-4 text-accent-cyan" />
            <span>Available Worldwide • Remote-friendly</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-ink-muted">
              © {new Date().getFullYear()} Fahim Shah. Built with React + Three.js.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-11 w-11 items-center justify-center rounded-lg glass-panel text-ink-secondary transition-all hover:scale-110 hover:text-accent-cyan"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
