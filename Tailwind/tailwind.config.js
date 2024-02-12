/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['"Star jedi"'],
      },

      colors: {
        'amarilloPollo': 'rgba(255,215,0, 0.5)',
        'fondoMain': 'hsla(177, 100%, 88%, 1)'
      },

      listStyleType: {
        square: 'square' 
      },

      listStyleImage: {
        tick: 'url(../img/tick.png)' 
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

