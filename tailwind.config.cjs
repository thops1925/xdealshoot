/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thops: ['PT Serif', 'serif'],
        cursive: ['Grey Qo', ' cursive'],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
