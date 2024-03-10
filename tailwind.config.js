/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: {
            950: "#000000",
            900: "#0E0E0E",
          },

          blue: {
            500: "#326CF9",
          },

          gray: {
            600: "#707070",
            500: "#919191",
          },
          green: "#0FC65C",
        },
      },

      width: {
        313: "313px",
      },
    },
  },
  plugins: [],
};
