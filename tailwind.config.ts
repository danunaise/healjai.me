import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sky: {
          light: "#E3F2FD", // ฟ้าอ่อน (พื้นหลังหลัก)
          default: "#90CAF9", // ฟ้ากลาง (ปุ่มหลัก)
          dark: "#42A5F5", // ฟ้าน้ำทะเล (ไฮไลท์)
        },
        cloud: {
          light: "#FFFFFF", // ขาวสะอาด (พื้นหลัง)
          default: "#F8FAFC", // ขาวหม่น (พื้นหลัง card)
          dark: "#D7E3FC", // ฟ้าหม่น (พื้นหลังรอง)
        },
        text: {
          primary: "#1E3A5F", // ฟ้าเทาเข้ม (ข้อความหลัก)
          secondary: "#5C6BC0", // ฟ้านวล (ข้อความรอง)
          muted: "#94A3B8", // เทาอ่อน (ข้อความจาง)
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Chrome, Safari, Edge */
          '-ms-overflow-style': 'none', /* IE and Edge */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
} satisfies Config;
