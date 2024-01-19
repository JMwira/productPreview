/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"hsl(158, 36%, 37%)",
        "secondary":"hsl(30, 38%, 92%)",
        "tertiar":"hsl(212, 21%, 14%)",
        "quarter":"hsl(228, 12%, 48%)",
      },
      fontFamily:{
        "header":""
      }
    },
  },
  plugins: [],
}

