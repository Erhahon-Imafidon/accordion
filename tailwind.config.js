/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        whiteFaq: 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        "medium-purple": '#A822E3',
        'gray-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)'
      },
      backgroundColor: {
        whiteFaq: 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'gray-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)'
      },
      backgroundImage: {
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
        mobile: "url('/src/assets/images/background-pattern-mobile.svg')",

      }
    },
  },
  plugins: [],
}

