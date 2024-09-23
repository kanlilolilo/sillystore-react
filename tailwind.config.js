/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},  // no options to configure
  variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure
  ],
}

