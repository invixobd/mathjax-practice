/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rtbDarkBlue: "#0b0f2c",
        rtbPurple: "#8a56fc",
        rtbOrange: "#ff5a4d",
      },
      fontFamily: {
        sans: ["Noto Serif Bengali", 'serif'],
      },
    },
  },
  plugins: [],
}