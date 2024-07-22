/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-custom": "#2D3333",
        "green-custom": "#9ECE9A"
      }
    },
  },
  plugins: [],
}

