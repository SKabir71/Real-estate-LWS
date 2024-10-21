/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "your-custom-dark-color",
      },
    },
  },
  darkMode: "class",
};

module.exports = {
  darkMode: "class",
};
