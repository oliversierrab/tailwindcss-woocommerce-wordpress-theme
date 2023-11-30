/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./template-parts/**/*.php",
  "./inc/**/*.php",
    "./*.php",
      "./js/*.js"
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
  ],
}

