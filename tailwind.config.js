/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: 'var(--black-100)',
          200: 'var(--black-200)',
        },

        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)'
        },
        
        blue: 'var(--blue)',

        yellow: 'var(--yellow)',

        brown: 'var(--brown)'
      }
    },
  },
  plugins: [],
}