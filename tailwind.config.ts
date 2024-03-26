import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        400: '#f95552',
      },
      neutral: {
        50: '#f4f7f8',
        300: '#c4c4c4',
        400: '#8b8d8e',
        700: '#222427',
        800: '#151518',
        black: '#000000',
        white: '#ffffff',
      },
      red: {
        50: '#ffecef',
        100: '#ffced4',
        200: '#f59c9c',
        300: '#ed7676',
        400: '#f95552',
        500: '#ff4538',
        600: '#f03b37',
        700: '#dd3031',
        800: '#d0292a',
        900: '#c21b1d',
      },
      grayscale: {
        50: '#f4f7f8',
        100: '#e9e9e9',
        200: '#d9d9d9',
        300: '#c4c4c4',
        400: '#8b8d8e',
        500: '#7b7b7b',
        600: '#555555',
        700: '#222427',
        800: '#151518',
        black: '#000000',
        white: '#ffffff',
      },
      white: '#ffffff',
    },
  },
};

export default config;
