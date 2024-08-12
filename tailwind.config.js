/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xs': '20rem', // 320px
        'sm': '24rem', // 384px
        'md': '28rem', // 448px
        'lg': '32rem', // 512px
        'xl': '36rem', // 576px
        '2xl': '42rem', // 672px,
      },
      colors: {
        primary: "#0070f3",
        secondary: "#f81ce5",
        accent: "#ff0080",
        black: "#000",
        white: "#fff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

