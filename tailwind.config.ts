import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '530px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          50: '#F2F5FC',
          100: '#E1E8F8',
          200: '#CAD8F3',
          300: '#A6BFEA',
          400: '#7C9DDE',
          500: '#5D7DD4',
          600: '#4962C7',
          700: '#3F51B6',
          800: '#384495',
          900: '#2B3467',
          DEFAULT: '#222749'
        },
        secondary: {
          50: '#F0FDF9',
          100: '#CCFBEE',
          200: '#99F6DE',
          300: '#5EEACB',
          DEFAULT: '#43D9BC',
          500: '#14B89B',
          600: '#0D947F',
          700: '#0F7667',
          800: '#115E54',
          900: '#134E46',
          950: '#042F2B'
        },
        tertiary: {
          50: '#FEF2F3',
          100: '#FEE5E7',
          200: '#FCCFD4',
          300: '#F9A8B1',
          400: '#F47888',
          DEFAULT: '#EB455F',
          600: '#D8264A',
          700: '#B61A3E',
          800: '#98193A',
          900: '#821937',
          950: '#490819'
        },
        quaternary: {
          DEFAULT: '#FCFFE7',
          100: '#F7FEC9',
          200: '#ECFD99',
          300: '#DCF85E',
          400: '#C8EE2D',
          500: '#AAD40E',
          600: '#83AA06',
          700: '#63810A',
          800: '#4E650F',
          900: '#425611',
          950: '#223003'
        }
      },
      fontSize: {
        paragraph: '18px',
        titleH1: '60px',
        titleH2: '32px',
        titleH3: '28px'
      }
  },
},
  plugins: [],
};
export default config;
