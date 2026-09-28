/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe6ff",
          200: "#bfd3ff",
          300: "#93b4ff",
          400: "#608aff",
          500: "#3b64f5",
          600: "#2547dc",
          700: "#1e3ab4",
          800: "#1c3390",
          900: "#1c2f74",
        },
        // Warm terracotta accent — used sparingly for callouts,
        // category tags, and moments where the cool blue palette
        // benefits from a warm counterpoint.
        accent: {
          50: "#fdf6f1",
          100: "#fbe7d5",
          200: "#f6c9a3",
          300: "#efa572",
          400: "#e78349",
          500: "#d96934",
          600: "#c05625",
          700: "#9a4520",
          800: "#78381e",
          900: "#5f2f1c",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Fraunces",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
