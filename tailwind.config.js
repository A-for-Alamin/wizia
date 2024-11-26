/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#002228",
        primary: "#0FF1F6",
      },
    },
  },
  plugins: [],
}

