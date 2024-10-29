/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3yl': '0 10px 30px rgba(128, 128, 128, 0.15)'
      }
    },
  },
  plugins: [],
}

