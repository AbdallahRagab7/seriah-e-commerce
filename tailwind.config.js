/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },

      container: {
        center: true,
        padding: "2.5rem",
      },
      screens: {
        xs: "500px", // Minimum width 500px
        sm: "640px", // Minimum width 640px
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
