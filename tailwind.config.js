/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0c',
          card: '#121216',
          surface: '#18181f',
          border: '#27272a',
          hoverBorder: '#3f3f46',
        },
        editorial: {
          light: '#f4f4f5',
          muted: '#a1a1aa',
          dim: '#71717a',
          accent: '#ffffff',
          highlight: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.35em',
      }
    },
  },
  plugins: [],
};
