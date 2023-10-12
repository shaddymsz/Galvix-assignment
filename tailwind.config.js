module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        lime: { 500: "#c1d738" },
        deep_purple: { 900: "#2f1893", A100: "#cb9bfa" },
        gray: { 50: "#f9f9f9", 200: "#eaeaed", "900_66": "#15143866" },
        red: { A100: "#ff7c7c" },
        green: { A200: "#70ddb1" },
        black: { 900: "#000000" },
        yellow: { A100: "#f8fd91" },
        indigo: { 900: "#1e0d62" },
        blue: { 200: "#90d7ff" },
        white: { A700: "#ffffff" },
        pink: { 400: "#e8397d" },
      },
      fontFamily: { dmsans: "DM Sans", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
