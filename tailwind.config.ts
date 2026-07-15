import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        card: "#18181B",
        accent: "#3B82F6",
        muted: "#A1A1AA",
        foreground: "#FAFAFA",
        border: "rgba(250, 250, 250, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 50px rgba(59, 130, 246, 0.22)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(18px, -22px, 0) scale(1.05)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
