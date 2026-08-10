import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    // ปรับขีดจำกัดการแจ้งเตือนขนาด Chunk เป็น 600kB
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // ทำ Vendor Chunk Splitting แยก React และ React Router ออกเป็นไฟล์แยก
        // ช่วยลดขนาด JS Bundle หลัก ผู้ใช้จะโหลดเฉพาะโค้ดที่ต้องใช้งาน ส่งผลดีต่อ SEO และ PageSpeed
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'react-router';
          }
        },
      },
    },
  },
});