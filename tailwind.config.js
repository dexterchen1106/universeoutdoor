// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    container: {
      center: true, // 所有 container 自動左右置中
      padding: {
        DEFAULT: '1rem', // base padding (16px)
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px', // 為大螢幕旅遊圖文頁設定更寬視口
      },
    },
    extend: {
      // 你可以在這裡加上自訂顏色 / 字體 / spacing 等
    },
  },
  plugins: [],
}
