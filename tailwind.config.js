/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'basicblue': '#7eabeb',
      'basiccyan': '#46CC9C',
      'borderblue': '#3D58BA',
      'hoverblue': '#98c1f9',
      'hoverblue90': '#98c1f990',
      'hyperblue': '#adf2ff',
      'basicbluedark': '#849fe2',
      'transparentbg': '#adf2ff50',
    },
  },  // no options to configure
  variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure
  ],
}

