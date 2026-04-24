import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinY: {
          "0%":   { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        // 주기 3.8s = 페이드인 0.8s(약 21%) + 유지 3s(약 79%)
        // 사이클 끝에서 opacity가 0으로 리셋되며 반복
        fadeInHold: {
          "0%":    { opacity: "0" },
          "21.05%": { opacity: "1" },
          "100%":  { opacity: "1" },
        },
      },
      animation: {
        "spin-y":       "spinY 3s linear infinite",
        "fade-in-hold": "fadeInHold 3.8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
