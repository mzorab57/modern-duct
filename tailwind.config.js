/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'duct-yellow': '#b7a801',
        'duct-blue': '#5DB6E5',
        'duct-white': '#FFFFFFCC',
        'duct-black': '#000000',
      },
      fontFamily: {
        'modern': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}