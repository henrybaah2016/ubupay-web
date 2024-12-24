import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'banner-img': "url('/assets/images/banner-img.png')",
        'vertical': "url('/assets/images/vertical.png')",
        'vertical-2': "url('/assets/images/vertical.png')",
        'color-splash': "url('/assets/images/color-splash.png')",
      },
      colors:{
        primary:'#3E76DE',
        secondary:'#2F5FB9'
      },
      fontFamily: {
        gilroy: ['Gilroy'],
      },
  },
  plugins: [],
} 
};
