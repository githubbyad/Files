/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  darkMode: 'class', // or 'media' if you prefer automatic dark mode based on OS preference
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        segoe: ['Segoe UI', 'sans-serif'],
      } ,
      colors: {
        greenscreen: "#00FF00",
        magentascreen: "#FF00FF",
      },
      boxShadow: {
        '4xl': '0 30px 60px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        '3xl': '1920px',
      },
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

