import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001427",
        sage: "#708D81",
        cream: "#F4D03F",
        red: "#BF0603",
      },
    },
  },
  plugins: [],
};

export default config; 