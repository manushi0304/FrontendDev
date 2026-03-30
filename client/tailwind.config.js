/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        arvo:   ['Arvo', 'serif'],
        mono:   ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        'softick-dark':   '#0f172a',
        'softick-gray':   '#1e293b',
        'softick-blue':   '#0ea5e9',
        'softick-cyan':   '#22d3ee',
        'softick-light':  '#e2e8f0',
        'softick-muted':  '#94a3b8',
      },
    },
  },
  plugins: [],
}