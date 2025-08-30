/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient": "linear-gradient(195deg, #42424a, #191919)",
        "red-gradient": "linear-gradient(195deg, #e25656, #ff0000)",
        "blue-gradient": "linear-gradient(195deg, #6fc7ce, #004cff)",
         
      },
    },
  },
  plugins: [],
};
