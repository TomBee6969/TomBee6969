/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0a0a0a',
        'graphite-grey': '#2a2a2a',
        'champagne-gold': '#d4af37',
        'platinum-silver': '#e5e4e2',
        'pearl-white': '#f8f8ff',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f7e98e 100%)',
        'gradient-silver': 'linear-gradient(135deg, #e5e4e2 0%, #c0c0c0 100%)',
      },
    },
  },
  plugins: [],
};