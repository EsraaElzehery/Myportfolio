/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      sans:["Popins","sans-serif"],
      cursive:["Pacifico","Sriracha","cursive"],
      cursive2:["Sriracha", "cursive"]
    }
  },
  },
  plugins: [],
}

