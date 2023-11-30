/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowCuiaba: "#F4DD2E",
        greenCuiaba: "#066334",
        greenCuiaba2: "#0E4323",
        green3: "#7D967D",
      },
      fontFamily: {
        anton: "Anton,sans-serif",
        inter: "Inter,sans-serif",
      },

      keyframes: {
        slideBottom: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        slideBottom:
          "slideBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      backgroundImage: {
        timeBackground: "url('/src/assets/background1.png')",
        estadioBackground: "url('/src/assets/background2.png')",
        backgroundCampo: "url('/src/assets/background3.png')",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
