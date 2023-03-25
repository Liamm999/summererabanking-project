/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        purple: {
          100: "#443C68",
          200: "#18122B",
          300: "#635985",
          login: "#5E5389",
        },
        pink: {
          trash: "#ffc0c0",
        },
        blue: {
          edit: "#EAF3FB",
        },
      },
    },
  },
  plugins: [],
}
