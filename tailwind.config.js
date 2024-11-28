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

      // Add Custom Font Family
      fontFamily: {
        "montserrat" : ["Montserrat"],
        "workSans" : ["Work Sans"],
      },

      // Add Required Color Theme 
      colors: {
        themeColor: "#002228",
        primary: "#0FF1F6",
      },

      // Add Button Shadow 
      boxShadow:{
        "btnShadow": "0 0 45px rgba(15, 241, 246, 0.25)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

