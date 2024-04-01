/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.tsx"],
  darkMode: "class",
  theme: {
    screens: {
      sssm: '350px',
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        'sans': ['Ubuntu'],
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(1rem)' },
          '100%': { transform: 'translateY(0rem)' },
        },
      },
      animation: {
        moveUp: 'moveUp 2s',
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /bg-(red|green|blue|yellow|pink|orange|indigo|gray)-(100|200|300|400|500)/ },
  ],

}

