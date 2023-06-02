/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      height: {
        42: "10rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        142: "36rem",
      },
      width: {
        112: "28rem",
      },
      fontFamily: {
        dancing: ["var(--font-dancing-script)"],
      },
    },
  },
  plugins: [],
};
