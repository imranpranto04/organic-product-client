/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ytail: ["Yellowtail", "cursive"],
      },

      colors: {
        primary: "#274C5B",
        secondary: "#525C60",
      },
    },
  },
  plugins: [require("daisyui")],
};
