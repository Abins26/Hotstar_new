/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {},
    screens:{
      "desktop": "1800px",
      "laptops": "1500px",
      "tablets": "900px",
      "mobiles": "400px"
    }
  },
  plugins: [],
}