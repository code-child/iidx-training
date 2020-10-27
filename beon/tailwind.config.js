const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        pink: {
          700: "#a6498d",
          800: "#a60c8b"
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
