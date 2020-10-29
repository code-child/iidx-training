const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    fonts: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif"
      ],
      serif: [
        "Constantia",
        "Lucida Bright",
        "Lucidabright",
        "Lucida Serif",
        "Lucida",
        "DejaVu Serif",
        "Bitstream Vera Serif",
        "Liberation Serif",
        "Georgia",
        "serif"
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace"
      ]
    },
    extend: {
      colors: {
        pink: {
          100: "#d9c5d4",
          200: "#fed7e2",
          300: "#bf8fb3",
          400: "#f687b3",
          500: "#ed64a6",
          600: "#d53f8c",
          700: "#a6498d",
          800: "#a60c8b",
          900: "#702459"
        }
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
