module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#A68DAD',
        'foreground': '#F0ECE3',
        'accent-1': '#C7B198',
      },
      fontFamily: {
        'main': ['Montserrat', 'sans-serif'],
        'accent-1': ['Grape Nuts', 'cursive'],
        'accent-2': ['Amatic SC', 'cursive'],
      },
    },
  },
  plugins: [],
}
