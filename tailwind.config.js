/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./standalone.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./oceana_vibe_beach_tour.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
