/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "d-",
  },
};
