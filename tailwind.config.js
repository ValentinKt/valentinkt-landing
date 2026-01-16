module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050B10",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16,185,129,0.22), 0 0 50px rgba(20,184,166,0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
