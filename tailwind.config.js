/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
        background: '#0f172a',
        surface: '#1e293b',
        border: '#334155'
      },
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}
