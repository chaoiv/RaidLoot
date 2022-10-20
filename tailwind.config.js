/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/global.css",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/forms')
],
}
