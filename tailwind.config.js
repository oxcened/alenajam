/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,css}'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
      animation: {
        'fade-in-t1': 'fade-in 1s ease-in-out .5s both',
        'fade-in-t2': 'fade-in 1s ease-in-out 2s both',
        'fade-in-t3': 'fade-in 1s ease-in-out 5s both',
        'fade-in-t4': 'fade-in 1s ease-in-out 7s both'
      }
    },
  },
  plugins: [],
}
