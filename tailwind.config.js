/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#4B46E5",
        discord: "#36393f",
        "discord-dark": "#202225",
        blurple: "#5865f2",
      },
      fontFamily: {
        sans: [
          "Pretendard Std",
          "Pretendard",
          "-apple-system",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        aspectRatio: { 1610: "8 / 5" },
      },
    },
  },

  corePlugins: {
    container: false,
  },
}
