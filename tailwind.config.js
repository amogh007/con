/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/test.svg')",
        'flame':"url('../public/images/flame.svg')",
        "herosm":"url('../public/images/herosm.svg')"
      },
      fontFamily:{
        custom1: ["Custom-1", "sans-serif"],  
      },
      colors:{
        textColor:"#000000",
        textHoverColor:"#374062"
      }
    },
  },
  plugins: [],
}
