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
      transparent: "transparent",
      white: colors.white,
      black: colors.black,
      mainGold: "#dbab58",
      bgColor: "rgba(44,44,44,.923)",
      "red-600": "rgb(220 38 38)",
      brownColor: "#15120b",
    },
    fontSize: {
      sm: "0.875rem",
      md: "1rem",
      mdm: ["1.125rem", "1.75rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "0.8125rem"],
      "3xl": ["2.25rem", "2.5rem"],
      "4xl": ["3rem", "1.1"],
      "6xl": ["4.6rem", "1"],
    },
    backgroundImage: {
      dice: "url('../public/dice.jpg')",
      "background-gradient-to-right":
        "linear-gradient(90deg,#090909,rgba(44,44,44,.923))",
      "background-gradient-big-screen":
        "linear-gradient(rgba(44,44,44,.8),rgba(44,44,44,.8))",
    },
  },
  plugins: [],
};
export default config;
