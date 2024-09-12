import type { Config } from "tailwindcss";
import theme from "./src/theme/theme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: theme.colors.primary.main,
          light: theme.colors.primary.light,
          dark: theme.colors.primary.dark,
          darker: theme.colors.primary.darker,
        },
        white: theme.colors.white,
        gray: theme.colors.gray,
        darkGray: theme.colors.darkGray,
        black: theme.colors.black,
        darkBlack: theme.colors.darkBlack,
      },
      fontFamily: {
        sans: [theme.typography.fontFamily, "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
