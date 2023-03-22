/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#3D3659",
        },
        orange: {
          100: "#FFA319",
        },
      },
    },
  },
  plugins: [],
}
