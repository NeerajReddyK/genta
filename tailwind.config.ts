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
        fontFamily: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          poppins: ['Poppins', 'sans-serif'],
        }
      },
    },
  },
  plugins: [],
};
export default config;
