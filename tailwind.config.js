/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        skyblue: "#e7fafe",
        "secondary-black": "rgba(0, 0, 0, 0.6)",
        "secondary-white": "rgba(255, 255, 255, 0.6)",
        red: "#ff7967",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
      backgroundImage: {
        "food-back-bg": "url('/assets/food-card-back.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        h1: {
          "@apply text-[64px] font-semibold tracking-[-0.04em] text-black font-inter":
            {},
        },
        h2: {
          "@apply text-[48px] font-semibold tracking-[-0.04em] text-black font-inter":
            {},
        },
        h3: {
          "@apply text-[36px] font-semibold tracking-[-0.04em] text-black font-inter":
            {},
        },
        h4: {
          "@apply text-[24px] font-semibold leading-[150%] tracking-[-0.04em] text-black font-inter":
            {},
        },
        h5: {
          "@apply text-[18px] font-semibold tracking-[-0.02em] text-black font-inter":
            {},
        },
        h6: {
          "@apply text-[16px] leading-[175%] text-secondary-black font-inter":
            {},
        },
        a: {
          "@apply text-sm md:text-[16px] tracking-[-0.02em] text-black font-medium font-inter":
            {},
        },
        input: {
          "@apply bg-inherit rounded-2xl border border-[rgba(0,0,0,0.1)] py-2 px-3 font-inter text-sm tracking-[-0.02rem] text-black placeholder:text-secondary-black":
            {},
        },
        textarea: {
          "@apply bg-inherit rounded-2xl border border-[rgba(0,0,0,0.1)] py-2 px-3 font-inter text-sm tracking-[-0.02rem] text-black placeholder:text-secondary-black":
            {},
        },
        label: {
          "@apply font-inter font-medium text-xs leading-[167%] tracking-[0.08rem] uppercase text-secondary-black":
            {},
        },
      });
      addComponents({
        ".lobster": {
          "@apply font-lobster text-[24px] text-white": {},
        },
        ".black-button": {
          "@apply rounded-2xl bg-black font-inter text-sm font-semibold tracking-[-0.02em] text-white border border-black gap-2 hover:text-black hover:bg-inherit transition-all duration-300":
            {},
        },
        ".skyblue-button": {
          "@apply rounded-2xl bg-skyblue font-inter text-base font-semibold text-black tracking-[-0.02em] border border-skyblue hover:bg-blue-200 transition-all duration-300":
            {},
        },
      });
    }),
  ],
};
