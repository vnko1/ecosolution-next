import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "360px",
        tablet: "768px",
        laptop: "1440px",
      },

      spacing: {
        "0-sm": "4px",
        "0-md": "8px",
        "1-xs": "10px",
        "1-sm": "12px",
        "1-md": "14px",
        "1-lg": "16px",
        "1-xl": "18px",
        "2-xs": "20px",
        "2-sm": "22px",
        "2-md": "24px",
        "2-lg": "26px",
        "2-xl": "28px",
        "3-xs": "30px",
        "3-sm": "32px",
        "3-md": "34px",
        "3-lg": "36px",
        "3-xl": "38px",
        "4-xs": "40px",
        "4-sm": "42px",
        "4-md": "44px",
        "4-lg": "46px",
        "4-xl": "48px",
        "5-xs": "50px",
        "5-sm": "52px",
        "5-md": "54px",
        "5-lg": "56px",
        "5-xl": "58px",
      },
      colors: {
        primary: "#173D33",
        grey: "#F3F5FA",
        lightGrey: "#EAEDF1",
        darkGreen: "#173D33",
        lightGreen: "#DCEFD8",
        green: "#97D28B",
        red: "#D28B8B",
        white: "#FFF",
        black: "#292D32",
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "26px",
      },
      fontFamily: {
        fira: ["var(--font-fira-sans)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
};
export default config;
