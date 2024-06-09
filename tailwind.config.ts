import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "450px",
        // => @media (min-width: 450px) { ... }
  
        sm: "575px",
        // => @media (min-width: 576px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "992px",
        // => @media (min-width: 992px) { ... }
  
        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
  
        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }
      },
      colors: {
        lightOrange: '#FCECCC',
        orange: "#F59300",
        green: "#73BF0A",
        red: "#CF0000",
        secondaryGrey: "#CACACA",
        lightRed: "#E6340C",
        primaryGrey: "#E8E5E5",
        customBlack: "#110011",
        lightGreen: "#A1CF62",
        lighterGreen: "#F6FFE9",
        teritaryGrey: "#737373",
        lighterRed: "#FFF8F6",
        lightRed2: "#EE4924",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [],
  },
};
export default config;
