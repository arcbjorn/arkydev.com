const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      '2xs': '325px',
      xs: '475px',
      ...defaultTheme.screens
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
