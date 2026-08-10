import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// ใช้ React.lazy โหลดแยกไฟล์ JS ของแต่ละหน้า (Code-Splitting)
const App = lazy(() => import('./App.tsx'))
const Watermelon = lazy(() => import('./pages/watermelon.tsx'))
const Nature = lazy(() => import('./pages/nature.tsx'))
const Shopermini = lazy(() => import('./pages/shopermini.tsx'))
const Shopermeme = lazy(() => import('./pages/shopermeme.tsx'))
const Shopercopyright = lazy(() => import('./pages/shopercopyright.tsx'))
const ShopercatPage = lazy(() => import('./pages/shopercat.tsx'))

// Component แสดงผลระหว่างรอโหลดแต่ละหน้า
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-[#8B4513] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-bold text-[#8B4513] tracking-widest uppercase">Loading...</span>
    </div>
  </div>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* ต้องใช้ Suspense ครอบ Routes เมื่อใช้ React.lazy */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/watermelon" element={<Watermelon />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/shopermini" element={<Shopermini />} />
          <Route path="/shopermeme" element={<Shopermeme />} />
          <Route path="/shopercopyright" element={<Shopercopyright />} />
          <Route path="/shopercat" element={<ShopercatPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)