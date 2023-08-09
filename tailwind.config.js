/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': '#fa0000',
      },
      fontFamily: {
        'gothic': 'Nanum Gothic, sans-serif',
        'delaGothic': 'Dela Gothic One, cursive'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
