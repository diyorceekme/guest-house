/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "main-color": "#52503B",
      "white": "#ffffff",
      "gray": "#333333",
      "input-color": "#E5E7EB"
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}
