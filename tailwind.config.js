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
        'blackRed':'#3B0000',
      },
      fontFamily: {
        'gothic': 'Nanum Gothic, sans-serif',
        'delaGothic': 'Dela Gothic One, cursive',
        'justAnotherHand': 'Just Another Hand, cursive',
        'vampiroOne': 'Vampiro One, cursive',
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
