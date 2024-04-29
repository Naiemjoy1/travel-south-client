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
    themes: [
      {
        mytheme: {
          primary: "#17b9d4",
          secondary: "#19bc9b",
          accent: "#dc2625",
          neutral: "#343434",
          "base-100": "#ffffff",
        },
      },
      "light",
      "synthwave",
    ],
  },
};
