/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansKR: ["Noto Sans KR", "sans-serif"],
      },
      fontSize: {
        14: "14px",
      },
    },
  },
  plugins: [],
};
