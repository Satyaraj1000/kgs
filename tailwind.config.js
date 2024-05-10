/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green":"#89c440",
        "pink":"#ed1479",
        "blue":"#53a3da",
        "yellow":"#f9cc12"
      },
      clipPath: {
        'custom-polygon': 'polygon(68% 8%, 100% 0, 100% 43%, 100% 90%, 70% 100%, 34% 89%, 0 92%, 6% 49%, 0 0)',
      },

    },
  },
  plugins: [],
}