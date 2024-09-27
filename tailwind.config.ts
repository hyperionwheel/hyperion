import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-mobile": "url('/images/1080x1920_2_11zon.webp')",
        "banner-tablet": "url('/images/1536x2048_3_11zon.webp')",
        "banner-desktop": "url('/images/1920x1080_4_11zon.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
