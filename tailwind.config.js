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
      },
      boxShadow: {
        card: " rgba(0, 0, 0, 0.1) 3px 8px 12px 0;"
      },
      keyframes: {
        "fade-in": {
          from: {
            marginLeft: "-200px",
            opacity: "0",
            transform: "rotate-X(-10deg)"
          },
          to: {
            marginLeft: "0",
            opacity: "1",
            transform: "rotate-X(0)"
          }
        },
        "fade-in-mobile": {
          from: {
            opacity: "0",
            transform: "rotate-X(-10deg)"
          },
          to: {
            opacity: "1",
            transform: "rotate-X(0)"
          }
        },
        write: {
          from: {
            width: "0"
          },
          to: {
            width: "100%"
          }
        },
        "write-border": {
          "50%": {
            borderColor: "rgba(255, 255, 255, 0)"
          }
        }
      },
      animation: {
        write: "write 2.5s, write-border 1s infinite",
        "fade-in": "fade-in 0.7s",
        "fade-in-mobile": "fade-in-mobile 0.7s",
        "fade-in-bounce": "fade-in 0.7s, bounce 1s infinite"
      }
    },
    plugins: []
  }
}
