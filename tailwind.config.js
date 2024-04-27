/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif ",
        reenie: "'Reenie Beanie', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "synthwave"],
  },
};
