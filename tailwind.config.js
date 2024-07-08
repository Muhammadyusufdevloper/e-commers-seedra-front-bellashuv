/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      width: {
        container: '100%',
        maxContainer: '1142px',
      },
      backgroundImage: {
        'hero': "url('/assets/images/page/home/hero.svg')",
      },
    },
  },
  plugins: [],
}
