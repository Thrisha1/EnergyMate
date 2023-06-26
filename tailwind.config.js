module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'em-gray-light': '#DADADA',
        'em-green-dark': '#006156',
        'em-gray': '#979AA5',
        'em-background-light':'#4C7380'
      },
    },
  },
  plugins: [],
};
