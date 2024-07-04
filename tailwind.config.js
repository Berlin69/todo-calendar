/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'plt-primary': '#09090b',
        'plt-secondary': '#030712',
        'plt-white': '#e5e7eb',
        'plt-accent': '#7c3aed',
      },
      animation: {
        'fade-in': 'fade-in 5s linear ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
