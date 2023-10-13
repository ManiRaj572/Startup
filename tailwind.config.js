/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#2f1893",
        "background-light": "#fff",
        "action-third": "#e93a7d",
        "colors-heading": "#1e0e62",
        "colors-text": "rgba(21, 20, 57, 0.4)",
        "colors-grey": "#ebeaed",
        "action-primary": "#25dac5",
        "action-secondary": "#482be7",
        "socials-twitter": "#1da1f2",
      },
      spacing: {},
      fontFamily: {
        "heading-h2-header": "'DM Sans'",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lg: "18px",
      "39xl": "58px",
      "3xl": "22px",
      "23xl": "42px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
