/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        customPeach: '#F9A778',
        customApricot: '#FBCBB5',
        customPowderPink: '#EBD9D5',
        customTurquoiseGreen: '#4BB79D',
        customTeal: '#1C697C',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

