/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgcolor: '#081b29', // Ajoutez votre propre couleur avec le nom 'customColor'
        secondbgcolor: '#112e42', // Ajoutez une autre couleur si nécessaire
        textcolor:'#ededed',
        maincolor:'#00abf0'
      },
    },
  },
  plugins: [],
}

