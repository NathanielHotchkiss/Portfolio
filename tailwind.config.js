module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-purple": "#1d2671",
        "custom-magenta": "#c33764",
        "dark-gray": "#121212",
      },
      fontFamily: {
        'lora': ['Lora', 'serif'] 
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
