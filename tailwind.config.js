/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        skyblue: "#00C6FF",
        brandlesblue: "#0072FF",
        purple: "#820DB6",
        white: "#FAFAFA",
      },
      backgroundImage: {
        'landing': "url('/public/assets/images/landing/bg.png')",
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
