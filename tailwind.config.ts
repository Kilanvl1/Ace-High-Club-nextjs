import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gold: {
        100: "#FFD700",
        200: "#FFDF00",
        300: "#F6C324",
        400: "#D1A227",
      },
      
    },
    extend: {
      backgroundImage: {
        'dice': "url('../public/dice.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
