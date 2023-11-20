/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sea-green': '#2f7f5f',
        'ocean-green': '#4da879',
        'shadow-green': '#93c8a8',
        'tulip-tree': '#e8a745',
        'carnation': '#f25f5f',
        // One way is to use the sea- green as the primary color for your website,
        // since it is the darkest and most saturated color in your palette.You can
        // use it for the background, the navigation bar, the buttons, and other
        // elements that you want to stand out.The ocean- green can be used as a
        // secondary color, for example, for the headings, the links, the icons,
        // and other elements that you want to contrast with the primary color.The
        // shadow- green can be used as a tertiary color, for example, for the text
        // , the borders, the shadows, and other elements that you want to blend in
        // with the primary color.The tulip- tree and the carnation can be used as
        // accent colors, for example, for the logos, the badges, the highlights,
        // and other elements that you want to add some warmth and vibrancy to your website. 
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
});


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./pages/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });