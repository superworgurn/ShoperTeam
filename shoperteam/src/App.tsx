// App.tsx
import React, { useState, useEffect } from 'react';
import Header from './compo/Header';
import BioLayout from './compo/BioLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const videoPlaylists = [
    {
      id: 1,
      src: "https://www.youtube-nocookie.com/embed/videoseries?si=vjM8a-9vdDBvY58d&amp;list=PLAmmJmTX1UDA60iCwln4FqAgXAQHybelq",
      title: "Shoper Team Playlist 1"
    },
    {
      id: 2,
      src: "https://www.youtube-nocookie.com/embed/videoseries?si=0VKhHeDi19eYIO5z&amp;list=PL6475yVcKBeKWCb70dAPu2Uxd7_VY7nw9",
      title: "Shoper Team Playlist 2"
    },
    {
      id: 3,
      src: "https://www.youtube-nocookie.com/embed/videoseries?si=3pStiVZr90z8H5MH&amp;list=PLn9b5l_mIoaxlp_hHFDhimq8IA-eRKMvm",
      title: "Shoper Team Playlist 3"
    },
    {
      id: 4,
      src: "https://www.youtube-nocookie.com/embed/videoseries?si=sxDvlTxRvT9rRsAY&amp;list=PLt7bGzU_AlQpcU3RqZnLOHTO_YP1Y6r4a",
      title: "Shoper Team Playlist 4"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden">
      
      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Content หลัก */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-blue-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-6 leading-tight">
                Shoper <span className="text-indigo-600">Team</span>
              </h1>
              <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg md:text-xl text-blue-700/90 mb-4 leading-relaxed">
                - When we come together, everything is possible. -
              </p>
              <p className="text-lg md:text-xl text-indigo-700/90 mb-8 leading-relaxed">
                - เมื่อเรารวมกัน ทุกอย่างก็เป็นไปได้ -
              </p>
              <div className="flex justify-center gap-4 mt-10">
                <a href="#videos" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30">
                  ดูวิดีโอของเรา
                </a>
                <a href="#team" className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                  รู้จักทีมเรา
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Slider Section */}
        <section id="videos" className="py-16 md:py-24 bg-gradient-to-b from-white/80 to-blue-50/50 relative">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">วิดีโอแนะนำ</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-blue-600/80 max-w-2xl mx-auto">
                ผลงาน Video Playlist ของสมาชิก Shoper Team ที่เราภูมิใจนำเสนอ
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              <Swiper
                slidesPerView={isMobile ? 1 : 2}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                  el: '.custom-pagination',
                  renderBullet: function (_index, className) {
                    return `<span class="${className} !w-3 !h-3 !bg-blue-500 !mx-1.5"></span>`;
                  },
                }}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                modules={[Pagination, Navigation]}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                {videoPlaylists.map((video) => (
                  <SwiperSlide key={video.id}>
                    <div className="group relative aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Overlay ที่มี gradient เมื่อ hover - ปรับ pointer-events */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                      
                      {/* iframe วิดีโอ - ต้องสามารถคลิกได้ */}
                      <iframe 
                        className="w-full h-full"
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      
                      {/* ข้อความด้านล่าง - ปรับ pointer-events */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                        <h3 className="text-lg font-semibold">{video.title}</h3>
                        <p className="text-blue-200 text-sm mt-1">ชมเพลย์ลิสต์</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <div className="custom-prev absolute top-1/2 -left-4 md:-left-6 z-10 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-blue-300/50 border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="custom-next absolute top-1/2 -right-4 md:-right-6 z-10 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-blue-300/50 border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Custom Pagination */}
              <div className="custom-pagination flex justify-center mt-8 space-x-2"></div>
            </div>
          </div>
        </section>

        {/* Bio Layout */}
        <BioLayout />
      </main>

      {/* Floating Sidebar ด้านขวา ชิดสุดจอ */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button 
          onClick={scrollToTop} 
          className={`bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-blue-900 to-blue-950 text-white mt-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="h-px w-16 bg-blue-500"></div>
          </div>
          <p className="text-blue-300 mb-2">ร่วมเป็นส่วนหนึ่งของความสำเร็จกับเรา</p>
          <div className="mt-8 text-center text-sm text-blue-200/80">
            &copy; {new Date().getFullYear()} Shoper Team. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;