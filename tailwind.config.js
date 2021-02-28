const plugins = require('tailwindcss/plugin')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        veryberry: ['VeryBerry'],
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
