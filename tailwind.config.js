const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      purple: colors.purple,
      red: colors.rose,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
