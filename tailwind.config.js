/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["General Sans", "sans-serif"],
        nippo: ["Nippo", "sans-serif"],
      },
      gridTemplateColumns: {
        details: "1.2fr 2.6fr",
        detailsTwo: "2.6fr 1.2fr",
      },
    },
  },
  plugins: [],
};
