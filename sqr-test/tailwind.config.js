/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        footer: '#3C4950',
        green: '#5bc993',
        red: '#fb2325',
        blue: '#2e5dd8',
        bg: '#2b3538',
        white: '#ffffff',
        gold: '#CFAF64',
        wh: '#E7E9D8',
        lig: '#365057',
        green2: '#2D7766',
        blue2: '#3F6274',
        lig2: '#2D7768',
        green3: '#365057',
      },
      fontFamily: {
        Oswald: 'Oswald, sans-serif',
        Kelly: 'Kelly Slab, cursive',
        Kenia: 'Kenia, cursive',
      },
    },
  },
  plugins: [],
};
