module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "font-weight": "500",
            },
            h2: {
              "font-weight": "500",
            },
            h3: {
              "font-weight": "500",
            },
            h4: {
              "font-weight": "500",
            },
            h5: {
              "font-weight": "500",
            },
            h6: {
              "font-weight": "500",
            },
            strong: {
              "font-weight": "500",
            },
          },
        },
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        reveal: {
          "0%": {
            mask: "linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 150% 0 / 400% no-repeat)",
            opacity: 0,
          },
          "100%": {
            mask: "linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 0 / 400% no-repeat)",
            opacity: 1,
          },
        },
      },
      animation: {
        reveal: "reveal 1s ease-in-out forwards",
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
