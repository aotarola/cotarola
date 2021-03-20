const plugins = require('tailwindcss/plugin')
const {colors: defaultColors} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      ...{
        "primary":{
          "title-500":"#AD800B",
          "title-400":"#CF9A12",
          "title": "#DDC586",
          "paragraph":  "#8B8B8B"
        },
        "button": {
          "500": "#70008B"
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
    plugins(function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          background:
            'linear-gradient(var(--overlay-angle, 90deg), var(--overlay-colors)), var(--overlay-image)',
          'background-position': 'center',
          'background-size': 'cover',
        },
      })
    }),
  ],
}
