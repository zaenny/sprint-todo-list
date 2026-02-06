import type { Config } from 'tailwindcss';
import pxToRem from 'tailwindcss-preset-px-to-rem';

const config: Config = {
  presets: [pxToRem],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: { 'btn-dark': '4px 4px 0px 0px #0F172A' },
    },
  },
};

export default config;
