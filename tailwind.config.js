/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"]
      },
      colors: {
        primary: "#bf3030",
        card: "#262626",
        "card-border": "#404040",
        default: "#1a1a1a",
        "white-85": "#d9d9d9"
      },
      backgroundImage: {
        introduction:
          "linear-gradient(105deg, rgba(191,48,48,1) 50%, rgba(26,26,26,1) 50%)"
      }
    }
  },
  plugins: []
}
