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
    extend: {
      fontFamily: {
        pp: ["var(--font-pp-)"],
      },
      colors: {
        primary: "#fe4e01",
        secondary: "#a58725",
        foreground: "#eeece5",
        // background: "#08350e",
        "dark-green": "#08350e",
        // primary: "hsl(var(--primary))",
        // secondary: "hsl(var(--secondary))",
        // "dark-green": "hsl(var(--dark-green))",
      },
      boxShadow: {
        primary:
          "0 0 0 2px #08350e, inset 0 0 0 #fe4e01, 0 0 0 20px #eeece5, 0 0 0 22px #fe4e01",
        secondary: "0 0 0 2px #a58725, 0 0 0 0 #eeece5, 0 0 0 0 #fe4e01",
      },
      transitionTimingFunction: {
        //use on social icons
        transform: "cubic-bezier(1, 0.885, 0.32, 1) 0.6s transform",
      },
      animation: {
        popping: "popping 0.25s ease-in-out infinite alternate", // used on loader
        rotate: "rotate 5s linear infinite", //used on loader
        "back-n-forth": "0.5s ease-in-out infinite alternate", //used on back button
        waving: "waving 3s linear infinite",
      },
      keyframes: {
        popping: {
          to: { top: "-24px" },
        },
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
        waving: {
          to: { "background-position": "200px 65px" },
        },
        waving2: {
          to: { "background-position": "200px 0px" },
        },
        "back-n-forth": {
          to: { transform: "translateX(-2.5px))" },
        },
      },
    },
  },
  plugins: [],
};
