/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1200px",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        dark: "#363636",
        pink: {
          10: "#E44A7A",
        },
      },
    },
  },
  plugins: [],
};
