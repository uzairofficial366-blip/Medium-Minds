export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF5E2C",
          hover: "#e04c1f",
        },
        dark: {
          bg: "#0f0f11",
          card: "#1a1a1c",
          border: "#262626",
          text: "#f3f4f6",
          muted: "#9ca3af",
        },
        light: {
          bg: "#ffffff",
          card: "#f9fafb",
          border: "#e5e7eb",
          text: "#111827",
          muted: "#6b7280",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
