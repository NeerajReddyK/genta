import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pretendard: ['pretendard', 'sans-serif'],
      },
      lineHeight: {
        'company': '190.94px',
        'compnay-m': '76.38px',
        'company-desc': '36.24px',
      },
      letterSpacing: {
        'company': '6.4px',
        'company-m': '2.56px',
      },

    },
  },
  plugins: [],
};
export default config;
