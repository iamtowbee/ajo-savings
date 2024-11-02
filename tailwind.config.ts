import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f8ff",
          100: "#b3e7ff",
          200: "#80d6ff",
          300: "#4dc4ff",
          400: "#1ab3ff",
          500: "#00a1e6",
          600: "#007db3",
          700: "#005980",
          800: "#00364d",
          900: "#00131a",
        },
        secondary: {
          50: "#e6f9fa",
          100: "#b3ecef",
          200: "#80dfe4",
          300: "#4dd2d9",
          400: "#1ac5ce",
          500: "#00b7c0",
          600: "#008e95",
          700: "#00666a",
          800: "#003d3f",
          900: "#001415",
        },
        accent: {
          50: "#fff2e6",
          100: "#ffd9b3",
          200: "#ffc080",
          300: "#ffa64d",
          400: "#ff8d1a",
          500: "#e67300",
          600: "#b35900",
          700: "#804000",
          800: "#4d2600",
          900: "#1a0d00",
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
