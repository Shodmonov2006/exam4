/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'phone': {max:'1000px'},
      //max-width: 700px//
      'phon': {max:'1000px'}
    },
  },
  plugins: [],
}