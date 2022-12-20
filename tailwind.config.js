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
      linearBorderGradients: {
        directions: { // defaults to these values
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: { // defaults to {}
          'red': '#f00',
          'red-blue': ['#f00', '#00f'],
          'blue-green': ['#0000ff', '#00FF00'],
          'red-green-blue': ['#f00', '#0f0', '#00f'],
          'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
          'blue-purple': ['#2ad7d6', '#6831a8'],
        },
        background: {
          'gray-50': '#F9FAFB',
          'gray-900':'#111827',
          'transparent': 'transparent',
          'purple': '#2f084b',
        },
        borders: { // defaults to these values (optional)
          '1': '1px',
          '2': '2px',
          '4': '4px',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
