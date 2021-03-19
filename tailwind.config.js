const plugins = require('tailwindcss/plugin')
const {colors: defaultColors} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      ...{
        "custom-yellow":{
          "400": "#CF9A12",
          "500":  "#AD800B"
        },
        "custom-purple": {
          "500": "#70008B"
        }
      }
    },
    extend: {
      fontFamily: {
        italianno: ['Italianno'],
        paratype: ['ParaType'],
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
