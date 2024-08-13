/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#110C06",
        brown: "#70471B",
        gold: "#AF7E2F",
        light: "#E8D6A2",
      },
    },
  },
  plugins: [],
};
