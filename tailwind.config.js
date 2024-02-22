const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#ff4500',
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
}

