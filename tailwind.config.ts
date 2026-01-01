import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack: {
          light: "#333333",
          base: "#242424",
          dark: "#1a1a1a",
        },
        myWhite: {
          light: "#fde8c5",
          base: "#f9d8a7",
          dark: "#ffce85",
        },
        myPink: {
          lighter: "#fac3e3",
          light: "#eda6d0",
          base: "#e381ba",
          dark: "#e0389a",
        },
        myBlue: {
          lighter: "#97dff7",
          light: "#64d4fa",
          base: "#47bee6",
          dark: "#04485e",
        }
      },
      animation: {
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-right-slower": "slide-in-right 1.5s ease-out",
        "slide-in-right-slowest": "slide-in-right 2s ease-in-out",
        "fade-in-slowest": "fade-in 3.5s ease-out",
      },
      keyframes: {
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
