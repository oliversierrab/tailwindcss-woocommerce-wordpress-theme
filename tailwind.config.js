/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./template-parts/**/*.php",
  "./inc/**/*.php",
    "./*.php",
      "./js/*.js"
  ],
theme: {
  extend: {},
},
plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
 ],
}

