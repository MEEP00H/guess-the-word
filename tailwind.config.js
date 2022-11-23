/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/*.{html,js,jsx}", "./components/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
