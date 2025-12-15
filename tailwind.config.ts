import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};

export default config;
