/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0E6D2",
        "custom-gray-50": "#f7f8fc",
        "custom-gray-100": "#f0f1f6",
      },
      fontFamily: {
        beaufort: ["Beaufort for LOL", "sans-serif"],
      },
    },
  },
  plugins: [],
};
