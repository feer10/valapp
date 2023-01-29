/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.33%',
        '1/2': '50%',
        '3/4': '75%',
      }, 
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      },
      boxShadow: {
        up: '1px -11px 15px -3px rgba(0, 0, 0, 10%), 1px -5px 6px -2px rgba(0, 0, 0, 5%)',
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      borderWidth: ['first', 'last'],
    },
  },
  plugins: [],
}