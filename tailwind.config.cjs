/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e2a47",
        secondary: "#e2e8f0",
        text1: "#e2e8f0",
        text2:"#94a3b8",
        bg1: {
          DEFAULT: "#030929",
          gradient: "linear-gradient(147deg, #4d4855 0%, #000000 74%",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// background-color: #0d0a0b;
// background-image: linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%);
/*
background-color: #4d4855;
background-image: linear-gradient(147deg, #4d4855 0%, #000000 74%);

*/