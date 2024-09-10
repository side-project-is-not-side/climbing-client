import { theme } from './src/shared/constants/theme';
import typography from './src/shared/constants/typography';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...theme,
    },
    fontFamily: {
      mPlus: ['var(--font-mPlus1p)'],
      cafeSurround: ['var(--font-cafeSurround)'],
    },
    extend: {
      boxShadow: {
        custom: '0px 4px 16px 0px rgba(236, 230, 223, 0.25)',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities(typography);
    },
  ],
};

export default config;
