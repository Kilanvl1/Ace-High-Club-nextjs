import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: ["class"],
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
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
