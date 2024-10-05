/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#3238f2',
        'rishabh': '#fff222'
      },
      fontFamily:{
        'rishabh': ["Bebas Neue"],
        'display':['poppings', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

