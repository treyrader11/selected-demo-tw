/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pp: ["var(--font-pp-)"],
    },
    extend: {
      animation: {
        popping: "popping 0.25s ease-in-out infinite alternate",
        rotate: "rotate 5s linear infinite",
      },
      keyframes: {
        popping: {
          to: { top: "-24px" },
        },
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
