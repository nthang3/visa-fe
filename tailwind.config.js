import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#364F8D",
        white: "#FFFFFF",
        grey: "#F2F5F7",
        blue: "#0085FF"
      },
      transitionDuration: {
        0: "0ms",
        '100': "100ms",
        '200': "200ms",
        '300': "300ms",
      }
    },
    colors: {
      'primary': "#364F8D",
      'white': "#FFFFFF",
      'grey': "#F2F5F7",
      blue: "#0085FF",
    },
    borderRadius: {
      '35': '35px',
    },
    fontSize: {
      base: '20px'
    },
    mytheme: {
      colors: {
        blue: "#0085FF",
      },
    },
  },
  plugins: [nextui({
    prefix: "myapp",
  })],
};
export default config;
