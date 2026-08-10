/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#05060a',
          surface: '#0a0d14',
          elevated: '#111521',
        },
        accent: {
          cyan: '#22d3ee',
          'cyan-dim': '#0891b2',
          emerald: '#10b981',
          'emerald-dim': '#059669',
          amber: '#f59e0b',
          'amber-dim': '#d97706',
        },
        ink: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#64748b',
          faint: '#475569',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at center, rgba(34,211,238,0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
