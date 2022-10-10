/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#0f172a'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["night"]

    // themes: [{
    //    mytheme: {
    //     "primary": "#05b230",
    //     "secondary": "#72ea31",
    //     "accent": "#2845ba",
    //     "neutral": "#171B2B",
    //     "base-100": "#2B2D4F",
    //     "info": "#386FE5",
    //     "success": "#60E1B2",
    //     "warning": "#F9B858",
    //     "error": "#E25081",
    //   },
    // }]
  }
};
