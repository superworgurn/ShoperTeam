import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Watermelon from './pages/watermelon.tsx' 
import Nature from './pages/nature.tsx'
import Shopermini from './pages/shopermini.tsx'
import Shopermeme from './pages/shopermeme.tsx'
import Shopercopyright from './pages/shopercopyright.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/watermelon" element={<Watermelon />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/shopermini" element={<Shopermini />} />
        <Route path="/shopermeme" element={<Shopermeme />} />
         <Route path="/shopercopyright" element={<Shopercopyright />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)