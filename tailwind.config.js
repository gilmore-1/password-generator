/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24252C', // dark grey
        secondary: '#1D1E27', // slightly darker grey
        accent: '#6E6F83', // medium grey
        textMain: '#E9E8EA', // light grey for text
        success: '#4AFFAF', // bright green
        warning: '#FF5A5A', // bright red
        alert: '#FFCE00', // yellow
        info: '#FFD085' // light yellow
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

