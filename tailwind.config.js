/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/hero-bg.jpeg')",
        "hero-cards-bg":
          "url('https://www.mensjournal.com/.image/t_share/MTk2MTM2ODQ5MDcxNDE2ODM3/sydney-main.jpg')",
      },
    },
  },
  plugins: [],
};
