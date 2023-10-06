/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8257e5',
        'primary-hover': '#9466ff',
        'primary-border': '#6833e4',
        'primary-text': '#a8a8b3',
        'primary-gradient-top': 'linear-gradient(180deg,#1d1929,rgba(18,18,20,0))',
      },
    },
  },
  plugins: [],
}
