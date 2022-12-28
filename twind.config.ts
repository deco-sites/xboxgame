/**
 * @format
 * @type {import('$fresh/plugins/twind').Options}
 */

export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontSize: {},

      colors: {
        white: "#fff",
        primary: "#3B44F6",
        "primary-light": "##D8DAFD",
        pink: "#FC326F",
        black: "#0E0E0E",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
