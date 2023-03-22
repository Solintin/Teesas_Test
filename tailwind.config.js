/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inter"],
        body: ["Poppins"],
      },

      colors: {
        primary: {
          100: "#015398",
          200: "rgba(1, 83, 152, 0.1)",
          300: "rgba(1, 83, 152, 0.2)",
        },
      },

      boxShadow: {
        "black-1xl": "0px 4px 9px rgba(0, 0, 0, 0.1)",
        "blue-1xl": "0px 8px 53px rgba(1, 83, 152, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
