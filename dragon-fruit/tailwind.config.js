const { Square } = require("lucide-react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
    },
    extend: {},
  },
  variants: {
    aspectRatio: ["responsive"],
  },
  plugins: [
    require("tailwindcss-aspect-ratio"),
    require("tailwindcss-responsive-embed"),
  ],
};
