/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {},
    screens:{
      "xl":"1600px",
       "lg":"1280px",
      "md":"900px",
       "sm":"400px" 
      
    }
  },
  plugins: [],
}
// "desktop": "1800px",
// "laptops": "1500px",
// "tablets": "900px",
// "mobiles": "400px"


