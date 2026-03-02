import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        meadow: {
          50: "#eef7eb",
          100: "#d7ebd0",
          500: "#4c8b4a",
          700: "#2f5e30",
          900: "#1d3a1f"
        },
        amberleaf: {
          50: "#fff7ea",
          100: "#ffedd0",
          500: "#d8892b",
          700: "#a45f11"
        }
      },
      backgroundImage: {
        "bunny-hero":
          "linear-gradient(120deg, rgba(21,46,25,0.84), rgba(29,58,31,0.5)), url('https://commons.wikimedia.org/wiki/Special:FilePath/Flemish%20Giant%20rabbit.jpg')"
      },
      boxShadow: {
        soft: "0 12px 32px rgba(23, 43, 20, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
