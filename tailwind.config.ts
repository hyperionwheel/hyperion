import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      xl: '20px',
      '3xl': '30px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    colors: {
      primary: {
        main: '#2BAECE',
        light: '#55BED8',
      },
      secondary: {
        main: '#FF7BAC',
        light: '#FF95BD',
      },
      text: {
        primary: '#0D0D0D',
      },
      white: '#FFF',
      black: '#000',
      disabled: '#C2C2C2',
      error: '#FF7E7E',
      zinc: {
        ...colors.zinc,
      },
      neutral: {
        ...colors.neutral,
      },
    },
    borderRadius: {
      md: '8px',
    },
    extend: {
      animation: {
        logo: 'logo 1s linear infinite',
      },
      keyframes: {
        logo: {
          to: {
            transform: 'rotate(720deg)',
          },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(0deg, #000000 0%, rgba(102, 102, 102, 0) 88.24%)',
      },
      borderColor: {
        transparent: 'transparent',
      },
      spacing: {
        0.25: '2px',
        0.5: '4px',
        1: '8px',
        1.25: '10px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.75: '30px',
        4: '32px',
        4.5: '36px',
        5: '40px',
        6: '48px',
        7.5: '60px',
        8: '64px',
        10: '80px',
      },
    },
  },
  plugins: [],
}
export default config
