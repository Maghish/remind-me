/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
        colors: {
            'form-input-color': '#33302e',
            'form-submit-btn-color': '#BF55EC'
        }
    },
  },
  plugins: [],
}


