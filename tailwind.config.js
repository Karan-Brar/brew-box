/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "sans-serif"],
        comforta: ["Comfortaa", "sans-serif"],
      },
      colors: {
        green: {
          100: "#006241",
        },
        gray: {
          700: "#222222",
        },
        yellow: {
          100: "#F3EBE4",
        },
      },
    },
  },
  plugins: [],
};
