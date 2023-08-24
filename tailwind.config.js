/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    plugins: [],
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      l: "1150px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
};
