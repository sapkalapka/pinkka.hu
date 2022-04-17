module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "accent-1": ["Grape Nuts", "cursive"],
        "accent-2": ["Amatic SC", "cursive"],
        main: ["Libre Baskerville"],
      },
    },
  },
  plugins: [],
}
