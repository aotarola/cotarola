const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      ...{
        "primary": {
          "title-400": "#441257",
          "title": "#441257",
          "paragraph": "#644B6D"
        },
        "button": {
          "500": "#551A25"
        }
      }
    },
    extend: {
      fontFamily: {
        belleza: ['Belleza'],
        dancingscript: ['DancingScript'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
