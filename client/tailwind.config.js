/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zText: "#1f1f1f",
        zGreen: "#31ad31",
        zGreenHover: "#cfd7e3",
        zPurple: "#d367d3",
        zRed: "#ff5e6c",
        zLightRed: "#ff6e6e",
        zYellow: "#ebda00",
        zGray: "#a7a7a7",
        zLightGray: " #f1f1f1",
        zWarning: "#af0000",
        zWarningHover: "#8f0000",

        zBasketballCourt: "#69676d",

        zCalendar: "#cfd7e3",
      },
    },
  },
  plugins: [],
};
