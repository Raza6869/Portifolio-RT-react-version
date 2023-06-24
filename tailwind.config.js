module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
        'adamcg': ['ADAMCG','sans-serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
    
        backgroundImage: {
          'raza-logo': "url('/imagens/raza-logo-semfundo.png')",
          'home': 'url("/imagens/download.jpeg")',
          
        },
    },
      plugins: [],
  }
}