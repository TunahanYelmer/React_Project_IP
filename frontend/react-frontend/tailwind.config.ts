import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include the components folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/static/images/hero-bg.png')",
        "footer-bg": "url('/static/images/footer-bg.png')",
      },
      colors: {
        "custom-blue": "#041858",
        "custom-yellow": "#d8bf36",
      },
      width: {
        550: "550px",
        350: "350px",
      },
      height: {
        350: "350px",
        550: "550px",
      },
      maxHeight: {
        350: "350px",
        550: "550px",
      },
      maxWidth: {
        350: "350px",
        550: "550px",
      },
    }, // Moved the closing bracket here
  }, // Moved the closing bracket here
  plugins: [],
};

export default config;
