import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (per client-provided values)
        maroon: {
          DEFAULT: "#861F41",
          50: "#f5edf0",
          100: "#e9d7dd",
          200: "#d1aab7",
          300: "#b97d91",
          400: "#9e4c67",
          500: "#861F41",
          600: "#721a37",
          700: "#5b152c",
          800: "#431020",
          900: "#2b0a15",
        },
        orange: {
          DEFAULT: "#E5751F",
          50: "#fdf4ed",
          100: "#fae6d7",
          200: "#f5cbaa",
          300: "#f0af7d",
          400: "#ea914c",
          500: "#E5751F",
          600: "#c3631a",
          700: "#9c5015",
          800: "#723a10",
          900: "#49250a",
        },
        // Neutral accent
        accent: {
          DEFAULT: "#75787B",
          50: "#f4f4f5",
          100: "#e6e7e7",
          200: "#c9cbcc",
          300: "#acafb1",
          400: "#8f9295",
          500: "#75787B",
          600: "#5f6265",
          700: "#484a4d",
          800: "#313234",
          900: "#1a1b1c",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
