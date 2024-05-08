/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {},
    screens:{
      "sm":"1600px",
       "md":"1280px",
      "lg":"900px",
       "xl":"400px" 
      
    }
  },
  plugins: [],
}
// "desktop": "1800px",
// "laptops": "1500px",
// "tablets": "900px",
// "mobiles": "400px"


