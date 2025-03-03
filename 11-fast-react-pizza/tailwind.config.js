
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pizza: "#123456",
      },
      height:{
        screen: '100dvh '
      }
    },
    fontFamily: {
      pizza: 'Roboto Mono, monospace',
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
