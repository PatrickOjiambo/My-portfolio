/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        pPurple: "#1A0B2E",
      },
      boxShadow: {
        cusomShadow: "0px 6px 22px -3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        'inter': ['Inter', 'sans'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans'],
        'preahvihear': ['Preahvihear', 'sans'],
      },
    },
  },
  plugins: [],
};
