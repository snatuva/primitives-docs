/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2622D',
        'primary-hover': '#AC5527',
        secondary: '#6B6862',
        background: '#FAF9F5',
        surface: '#FFFFFF',
        'surface-hover': '#F0EEE6',
        border: '#E5E3DB',
        ink: '#1F1E1D',
        'ink-muted': '#73706B',
        code: '#302F2D',
        'code-foreground': '#E8E6E1'
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}
