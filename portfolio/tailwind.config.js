/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      tajawal: ['Tajawal', 'sans-serif'],
      hind: ['Hind', 'sans-serif'],
      zillaSlab: ['Zilla Slab', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.0s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },
    },
  },
  plugins: [],
}


