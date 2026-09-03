/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'JetBrains Mono', 'monospace'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        canvas: '#0a0a0c',
        surface: {
          50: '#1c1c21',
          100: '#16161a',
          200: '#121215',
          300: '#0e0e11',
          DEFAULT: '#121215',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          hover: 'rgba(255, 255, 255, 0.22)',
        }
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      }
    },
  },
  plugins: [],
}
