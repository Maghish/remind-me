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
        palette1: "#10002b",
        palette2: "#240046",
        palette3: "#3c096c",
        palette4: "#5a189a",
        palette5: "#7b2cbf",
        palette6: "#9d4edd",
        palette7: "#c77dff",
        palette8: "#e0aaff",
      },
    },
  },
  plugins: [],
};
export default config;
