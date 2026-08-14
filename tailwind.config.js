/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0b0f17',
        cardBg: '#0d1424',
        accentGreen: '#10b981',
      }
    },
  },
  plugins: [],
}