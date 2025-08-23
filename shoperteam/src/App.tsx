// App.tsx
import React, { useState, useEffect, useRef } from 'react';
import Header from './compo/Header';
import BioLayout from './compo/BioLayout';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Video Slider State
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoSliderRef = useRef<HTMLDivElement>(null);

  // Showcase Slider State
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const showcaseSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // ซ่อน loading screen เมื่อแอปโหลดเสร็จ
    if (typeof document !== 'undefined') {
      document.body.classList.add('loaded');
    }
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ข้อมูลวิดีโอ
  const videoPlaylists = [
    { id: 1, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PLAmmJmTX1UDA60iCwln4FqAgXAQHybelq", 
      title: "Shoper Team Playlist 1" },
    { id: 2, src: "https://www.youtube-nocookie.com/embed/videoseries?list=PL6475yVcKBeKWCb70dAPu2Uxd7_VY7nw9", 
      title: "Shoper Team Playlist 2" },
    { id: 3, src: "https://www.youtube-nocookie.com/embed/videoseries?si=sxDvlTxRvT9rRsAY&amp;list=PLt7bGzU_AlQpcU3RqZnLOHTO_YP1Y6r4a", 
      title: "Shoper Team Playlist 3" },
    { id: 4, src: "https://www.youtube-nocookie.com/embed/videoseries?si=3pStiVZr90z8H5MH&amp;list=PLn9b5l_mIoaxlp_hHFDhimq8IA-eRKMvm", 
      title: "Shoper Team Playlist 4" },
    { id: 5, src: "https://www.youtube-nocookie.com/embed/videoseries?si=q7EtbOGAZnOoNZ35&amp;list=PLn9b5l_mIoayda1Kms9MqR5k9RAHuEvPq", 
      title: "Shoper Team Playlist 5" },
    { id: 6, src: "https://www.youtube-nocookie.com/embed/videoseries?si=TELh_VWQi1WJ1Xf7&amp;list=PLn9b5l_mIoaz--_FiBSOc-Lx770_rSBB4", 
      title: "Shoper Team Playlist 6" },
  ];

  // ข้อมูล Show Case (รูปภาพผลงาน)
  const showcaseItems = [
    { id: 1, img: "https://t1.blockdit.com/photos/2025/08/68a7ecb34bea27541107d39a_800x0xcover_Gmc6Ex9b.jpg", 
      title: "LinkLift", desc: "เครื่องมือถอดรหัส URL ฟรีที่ช่วยแปลง encoded URL เป็นรูปแบบปกติพร้อมแสดงตัวอย่างหน้าเว็บ ✨ คุณสมบัติ🔓 ถอดรหัส URL ที่ถูกเข้ารหัส👀 แสดงพรีวิวเว็บไซต์ก่อนเข้าชม📱 ออกแบบมาให้ใช้งานง่ายทั้งบนมือถือและเดสก์ท็อป🌐 รองรับสองภาษา (ไทยและอังกฤษ)🔒 ปลอดภัย 100% - ไม่มีการเก็บข้อมูล URL📋 คัดลอก URL หลังถอดรหัสได้ทันที",
      link:"https://github.com/ShoperGamer/-LinkLift"},
    { id: 2, img: "https://yt3.ggpht.com/eKJHphggazTNduWB1GH3sVAkkylMSuW0tGlYf2f_1KtXvItCGgU1Gr2B78xIjuEYn55VYnyeWk2W0g=s1600-nd-v1-rwa", 
      title: "AuraTime", desc: "AuraTime คือเว็บแอปพลิเคชันนาฬิกาที่ออกแบบมาอย่างสวยงามและครอบคลุมทุกฟังก์ชันการใช้งาน ไม่ว่าจะเป็นการตั้งปลุกในชีวิตประจำวัน, การจับเวลาทำงาน, หรือดูเวลาทั่วโลก โปรเจกต์นี้สร้างขึ้นด้วย HTML, CSS, และ JavaScript ล้วนๆ ทำให้เป็นโปรเจกต์ที่เบา, รวดเร็ว, และสามารถเปิดใช้งานได้บนทุกเว็บเบราว์เซอร์โดยไม่ต้องติดตั้งอะไรเพิ่มเติม",
      link:"https://github.com/ShoperGamer/AuraTime" },
    { id: 3, img: "https://yt3.ggpht.com/XzPyHnUhKTJ5yD8tVTNZaesv_YzYpSAU6ZmRd-rVsVyvvPvPK7-LDLLWqN_p045Pj4cMaqFavbyl=s1600-rw-nd-v1", 
      title: "Simple-Image-Converter", desc: "ยินดีต้อนรับสู่ Simple Image Converter! 👋 โปรเจกต์นี้คือเว็บแอปพลิเคชันที่สร้างขึ้นเพื่อแก้ปัญหาความยุ่งยาก, ข้อจำกัด, และการสิ้นเปลืองทรัพยากรและเวลาในการแปลงไฟล์รูปภาพและ PDF 🚀 ด้วย Simple Image Converter คุณสามารถแปลงรูปภาพเป็นนามสกุลต่างๆ หรือรวมรูปภาพและ PDF หลายไฟล์ให้เป็น PDF เดียวได้อย่างง่ายดายและรวดเร็ว",
      link: "https://github.com/ShoperGamer/Simple-Image-Converter"},
    { id: 4, img: "https://yt3.ggpht.com/4ed5k4p9IIcDhWZiOqSvQqADRHR1ihVp3ZXlJTCNKaywqo8dtyTooLdomE5g0OEOdTy90TMoVlHmwg=s880-c-fcrop64=1,44460000bbb9ffff-rw-nd-v1", 
      title: "SlicePix", desc: "เว็บแอปพลิเคชันโอเพนซอร์สที่ช่วยให้คุณ ✂️ แบ่งภาพถ่ายออกเป็นส่วนย่อย ๆ ได้อย่างง่ายดายและรวดเร็ว ไม่ว่าจะเป็นการสร้างภาพ Grid สำหรับ Instagram หรือเตรียมภาพสำหรับเว็บไซต์",
      link: "https://github.com/ShoperGamer/SlicePix" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Video Slider Controls
  const nextVideo = () => setCurrentVideoIndex(prev => prev === videoPlaylists.length - 1 ? 0 : prev + 1);
  const prevVideo = () => setCurrentVideoIndex(prev => prev === 0 ? videoPlaylists.length - 1 : prev - 1);

  // Showcase Slider Controls
  const nextShowcase = () => setCurrentShowcaseIndex(prev => prev === showcaseItems.length - 1 ? 0 : prev + 1);
  const prevShowcase = () => setCurrentShowcaseIndex(prev => prev === 0 ? showcaseItems.length - 1 : prev - 1);

  // Slider Scroll Effect
  useEffect(() => {
    if (videoSliderRef.current) {
      const slideWidth = isMobile ? videoSliderRef.current.offsetWidth : videoSliderRef.current.offsetWidth / 2;
      videoSliderRef.current.scrollTo({ left: currentVideoIndex * slideWidth, behavior: 'smooth' });
    }
  }, [currentVideoIndex, isMobile]);

  useEffect(() => {
    if (showcaseSliderRef.current) {
      const slideWidth = isMobile ? showcaseSliderRef.current.offsetWidth : showcaseSliderRef.current.offsetWidth / 2;
      showcaseSliderRef.current.scrollTo({ left: currentShowcaseIndex * slideWidth, behavior: 'smooth' });
    }
  }, [currentShowcaseIndex, isMobile]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Shoper <span className="text-indigo-600">Team</span></h1>
            <p className="text-lg text-blue-700/90 mb-4">- When we come together, everything is possible. -</p>
             <p className="text-lg text-blue-700/90 mb-4">- เมื่อเรารวมกัน ทุกอย่างก็เป็นไปได้ -</p>
          </div>
        </section>

        {/* Video Slider Section */}
        <section id="videos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">วิดีโอแนะนำ</h2>
            <div className="relative">
              <div ref={videoSliderRef} className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth">
                {videoPlaylists.map((video) => (
                  <div key={video.id} className={`flex-shrink-0 w-full ${isMobile ? '' : 'md:w-1/2'} p-4 snap-start`}>
                    <iframe className="w-full aspect-video rounded-lg shadow-lg" src={video.src} title={video.title} allowFullScreen />
                  </div>
                ))}
              </div>
              <button onClick={prevVideo} className="absolute top-1/2 -left-6 bg-white rounded-full shadow-md p-3">◀</button>
              <button onClick={nextVideo} className="absolute top-1/2 -right-6 bg-white rounded-full shadow-md p-3">▶</button>
            </div>
          </div>
        </section>

        {/* Bio Layout */}
        <BioLayout />

        {/* Showcase Section */}
        <section id="showcase" className="py-16 bg-gradient-to-b from-indigo-50 to-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Show Case</h2>
            <div className="relative">
              <div ref={showcaseSliderRef} className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth">
                {showcaseItems.map(item => (
                  <div key={item.id} className={`flex-shrink-0 w-full ${isMobile ? '' : 'md:w-1/2'} p-4 snap-start`}>
                    <div className="rounded-xl overflow-hidden shadow-xl bg-white group cursor-pointer" onClick={() => window.open(item.link, '_blank')}>
                      <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-blue-600 line-clamp-2">{item.desc}</p>
                        <div className="mt-3 text-sm text-indigo-500 font-medium flex items-center">
                          คลิกเพื่อดูผลงาน
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={prevShowcase} className="absolute top-1/2 -left-6 bg-white rounded-full shadow-md p-3">◀</button>
              <button onClick={nextShowcase} className="absolute top-1/2 -right-6 bg-white rounded-full shadow-md p-3">▶</button>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6">
        <button onClick={scrollToTop} className={`bg-blue-600 text-white w-14 h-14 rounded-full shadow-xl transition-all ${isScrolled ? '' : 'opacity-0 pointer-events-none'}`}>
          ↑
        </button>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Shoper Team. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;