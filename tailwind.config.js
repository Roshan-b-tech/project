/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9f2bea",
        secondary: "#40f99b",
        dark: "#1a0b2e",
        "dark-light": "#2a1b3e"
      }
    },
  },
  plugins: [],
}