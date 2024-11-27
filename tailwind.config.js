/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "montserrat" : ["Montserrat"],
        "workSans" : ["Work Sans"],
      },
      colors: {
        themeColor: "#002228",
        primary: "#0FF1F6",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

