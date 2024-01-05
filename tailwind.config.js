/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.tsx"],
  darkMode: "class",
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        'sans': ['Ubuntu'],
      },
    },
  },
  plugins: [],
}

