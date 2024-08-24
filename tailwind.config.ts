import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#A0FC05',  
        secondary: '#2F2AD1',
        tertiary: '#9292E6',
        yellow: '#FFFF3B',
      },  
      borderRadius: {
        '5xl': '12.5rem'
      } ,
      margin: {
        estrutura: '120px',
        '100': '6.25rem',
        '30': '1.875rem',
        '10': '0.625rem',
      }
    },
  },
  plugins: [],
};
export default config;
