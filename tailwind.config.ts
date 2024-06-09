/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      code: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "790px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      custombp: { raw: "(min-height: 680px)" },
    },
    extend: {
      colors: {
        dark: "#181818",
        darkGrey: "#aaaaaa",
        secondary: "#272727",
      },
      keyframes: {
        spinBounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "none",
          },
        },
        heroImage: {
          "0%": {
            width: "0px",
            height: "0px",
          },
          "50%": {
            width: "480px",
            height: "480px",
          },
          "100%": {
            width: "400px",
            height: "400px",
          },
        },
        barWobble: {
          "0%, 100%": { transform: "translateX(-95%)" },
          "50%": { transform: "translateX(95%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spinBounce: "1.5s spinBounce ease 0s infinite",
        barWobble: "barWobble 1.7s ease-in-out infinite",
        heroImage: "1.5s heroImage ease",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
