/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "serif"],
        custom: ["Courier New", "Courier", "monospace"],
      },
      colors: {
        dark: "#1B1F2B",
        darkSecondary: "#384764",
        darkBlue: "#3CA0F5",
        lightBlue: "#0083FC",
      },
    },
  },
  plugins: [],
};
