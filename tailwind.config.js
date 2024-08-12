/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `var(--col-primary)`,
        primary: `var(--col-primary)`,
        "primary-bg": `var(--col-primary-bg)`,
        "secondary-bg": `var(--col-secondary-bg)`,
      },
    },
  },
  plugins: [],
};
