/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Monstserrat", "sans-serif"],
        ubuntu: ["Ubuntu Mono", "sans-serif"],
        lora: ["Lora", "serif"],
        spaceMono: ["Space Mono", "sans-serif"],
        muli: ["Mulish", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

