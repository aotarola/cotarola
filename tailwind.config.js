const {colors: defaultColors} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      ...{
        "primary":{
          "title-400":"#CF9A12",
          "title": "#AD800B",
          "paragraph":  "#8B8B8B"
        },
        "button": {
          "500": "#70008B"
        }
      }
    },
    extend: {
      backgroundImage: () => ({
        'hero-image': 'url(/playa.jpg)'
      }),
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
