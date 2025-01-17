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
        'account-bg-1': "url('/assets/images/account-bg-1.png')",
        'account-bg-2': "url('/assets/images/account-bg-2.png')",
        'account-bg-3': "url('/assets/images/account-3.png')",
        'profile-img': "url('/assets/images/profile.svg')",


      },
      colors:{
        primary:"#2058C0",
        secondary:"#2F5FB9",
        yellow:"#FFBB2C",
        dark:"#34342A"
      },
      fontFamily: {
        generalSans: ['GeneralSans'],
      },
      
  },
  plugins: [],
} 
};
