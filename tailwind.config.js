/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#0C0B08",
        golden: "#DCCA87",
        grey: "#AAAAAA",
      },
      backgroundImage: {
        textureBg: "url('/src/assets/images/bg.png')",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
