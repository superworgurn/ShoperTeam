// src/App.tsx
import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Header from './compo/Header';
import FadeIn from './compo/FadeIn';
import { videoPlaylists, showcaseItems } from './data';

const BioLayout = lazy(() => import('./compo/BioLayout'));

const LazyIframe: React.FC<{ src: string; title: string; isDragging: boolean }> = ({ src, title, isDragging }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative w-full h-full rounded-2xl overflow-hidden bg-slate-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border-4 border-white">
      {isDragging && <div className="absolute inset-0 z-10" />}
      {!isLoaded && isIntersecting && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50 animate-pulse">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {isIntersecting && (
        <iframe 
          className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={src} 
          title={`วิดีโอแนะนำ: ${title}`} 
          onLoad={() => setIsLoaded(true)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen 
          loading="lazy" 
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

const useDraggableScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const walk = (e.pageX - ref.current.offsetLeft - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return { ref, isDragging, events: { onMouseDown, onMouseLeave, onMouseUp, onMouseMove } };
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoSlider = useDraggableScroll();
  const showcaseSlider = useDraggableScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 relative flex items-center min-h-[50vh]">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-6">
                Shoper <span className="text-indigo-600">Team</span>
              </h1>
              <p className="text-xl text-blue-700/90 mb-2 font-medium">- When we come together, everything is possible. -</p>
              <p className="text-lg text-blue-600/80">- เมื่อเรารวมกัน ทุกอย่างก็เป็นไปได้ -</p>
            </FadeIn>
          </div>
        </section>

        <section id="videos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn><h2 className="text-3xl font-bold text-center text-blue-800 mb-10">วิดีโอแนะนำ</h2></FadeIn>
            <div className="relative group">
              <div 
                ref={videoSlider.ref} {...videoSlider.events}
                className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-4 ${videoSlider.isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                style={{ scrollBehavior: videoSlider.isDragging ? 'auto' : 'smooth' }}
              >
                {videoPlaylists.map((video) => (
                  <div key={video.id} className="flex-shrink-0 w-[85%] md:w-[45%] snap-center aspect-video">
                    <LazyIframe src={video.src} title={video.title} isDragging={videoSlider.isDragging} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <BioLayout />
        </Suspense>

        <section id="showcase" className="py-20 bg-gradient-to-b from-indigo-50 to-blue-100">
          <div className="container mx-auto px-4">
            <FadeIn><h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Showcase ผลงาน</h2></FadeIn>
            <div 
              ref={showcaseSlider.ref} {...(isMobile ? showcaseSlider.events : {})}
              className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-10 ${isMobile ? (showcaseSlider.isDragging ? 'cursor-grabbing select-none' : 'cursor-grab') : ''}`}
              style={{ scrollBehavior: showcaseSlider.isDragging ? 'auto' : 'smooth' }}
            >
              {showcaseItems.map(item => (
                <div key={item.id} className="flex-shrink-0 w-[80%] md:w-[35%] snap-center">
                  <a 
                    href={item.link} target="_blank" rel="noopener noreferrer" title={`ดูผลงาน ${item.title}`}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl h-full border border-white/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl cursor-pointer block"
                    onClick={(e) => { if (isMobile && showcaseSlider.isDragging) e.preventDefault(); }}
                  >
                    <img 
                      src={item.img} alt={`ตัวอย่างผลงาน ${item.title}`} 
                      className="w-full h-56 object-cover pointer-events-none" 
                      width="400" height="224" loading="lazy" decoding="async" 
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-indigo-700 mb-2">{item.title}</h3>
                      <p className="text-blue-600/80 line-clamp-3 text-sm">{item.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-blue-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img src="/shoperteam.webp" alt="Shoper Team Logo" className="h-8 w-8 rounded-lg mr-3 object-cover" width="32" height="32" loading="lazy" decoding="async" />
              <span className="text-lg font-bold text-indigo-900">Shoper <span className="text-blue-600">Team</span></span>
            </div>
            <div className="text-sm text-gray-500 font-medium">© {new Date().getFullYear()} Shoper Team. All rights reserved.</div>
          </div>
        </div>
      </footer>

      <button 
        onClick={scrollToTop} aria-label="เลื่อนกลับไปด้านบน"
        className={`fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center z-50 hover:bg-indigo-700 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
      </button>
    </div>
  );
};

export default App;