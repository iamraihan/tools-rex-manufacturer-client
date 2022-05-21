module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffc10a",

          secondary: "#151515",

          accent: "#e8e8e8",

          neutral: "#C6FFE0",

          info: "#E5E5E5",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}