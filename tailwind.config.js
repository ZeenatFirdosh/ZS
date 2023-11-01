/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      colors : {
       'primary-white' : '#FFF',
       'primary-off-white' : '#F4F1EA',
       'dark-green': '#1E665A',
       'dark-red': '#793100',
       'dark-grey': '#4E4E4E',
       'primary-yellow': '#DEE26A',
       'grass-green' : '#A3CB49',
       'primary-leaf-green': '#518645',
       'secondary-leaf-green': '#3B663C',
       'olive-green' : '#6D8F3C',
       'secondary-yellow' : '#A0C848',
       'primary-purple': '#642265'
      },
      fontFamily: {
        primary: "Praline",
        secondary : "Montserrat"
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'bounce-slow': 'bounce 35s linear infinite'
      },
      backgroundImage: {
        'hero': "url('../src/assets/images/Vector.png')",
        'summary': "url('../src/assets/images/Checkout.png')",
        'checked' : "url('../src/assets/icons/Frame 15.svg')"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
],
})

