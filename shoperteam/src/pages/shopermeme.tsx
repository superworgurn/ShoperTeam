import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Shopermeme: React.FC = () => {
  // 🎬 ข้อมูลวิดีโอ (YouTube Shorts หรือวิดีโอแนวตั้ง)
  const videos = [
    {
      src: 'https://www.youtube.com/embed/hc210xecI9E?si=vNRmlB0G58cIxYDl',
      title: 'มีมตลก 1',
    },
    {
      src: 'https://www.youtube.com/embed/hm2YwR3lUgw?si=V8lpoPp_-uQo8jKj',
      title: 'มีมตลก 2',
    },
    {
      src: 'https://www.youtube.com/embed/yz2jSIwIOSE?si=dyD4rRuUuMg6rwel',
      title: 'มีมตลก 3',
    },
  ];

  // 👆 State และ Ref สำหรับจัดการการปัด (Swipe)
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // เริ่มต้นแตะหน้าจอ: บันทึกตำแหน่งจุดเริ่ม
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX; // ป้องกันค่าค้างจากครั้งก่อน
  };

  // ขณะลากนิ้ว: อัปเดตตำแหน่งจุดสุดท้าย
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // เมื่อปล่อยนิ้ว: คำนวณระยะทางและทิศทาง
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // ระยะขั้นต่ำที่จะให้นับเป็นการปัด (px)

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // ปัดนิ้วไปทางซ้าย (นิ้วเคลื่อนจากขวาไปซ้าย) -> คลิปถัดไป
        setCurrent((prev) => (prev + 1) % videos.length);
      } else {
        // ปัดนิ้วไปทางขวา (นิ้วเคลื่อนจากซ้ายไปขวา) -> คลิปก่อนหน้า
        setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 flex flex-col items-center py-16 px-4 font-sans">
      
      {/* ========== 🎨 แบ็คกราวน์แอนิเมชันสุดหรรษา ========== */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        {/* จุดและวงกลมเคลื่อนไหว */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#f472b6_0%,transparent_50%),radial-gradient(circle_at_70%_80%,#60a5fa_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#fbbf24_0%,transparent_50%)] animate-gradient-move"></div>
        {/* ระลอกคลื่นเล็ก ๆ */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-spin-slow-reverse"></div>
        {/* ปาร์ตี้อิโมจิ */}
        <span className="absolute top-10 left-[5%] text-4xl animate-float-1">😂</span>
        <span className="absolute top-20 right-[10%] text-5xl animate-float-2 delay-500">🤣</span>
        <span className="absolute bottom-40 left-[15%] text-3xl animate-float-3 delay-1000">🎉</span>
        <span className="absolute bottom-20 right-[5%] text-5xl animate-float-1 delay-700">💀</span>
        <span className="absolute top-1/3 left-[80%] text-3xl animate-float-2 delay-300">🍿</span>
        <span className="absolute top-2/3 left-[10%] text-4xl animate-float-3 delay-1500">🎬</span>
      </div>

      {/* ========== 🧑‍🎤 โปรไฟล์ ========== */}
      <div className="relative z-10 flex flex-col items-center mb-10 animate-fade-in-up">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5 bg-white p-1 hover:scale-110 transition-transform duration-500 group">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <img src="/shopermeme.webp" alt="Profile" className="w-full h-full rounded-full object-cover" />
            {/* รัศมีเรืองแสงเมื่อ hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400/30 via-transparent to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 mb-2 tracking-tight drop-shadow-md">
          Shoper Meme
        </h1>
        <p className="text-blue-700 font-bold animate-pulse text-center px-4 flex items-center gap-2">
          <span>เนื้อหาสนุกสนานและบันเทิง</span> 
          <span className="text-2xl animate-wiggle">🤣</span>
        </p>
      </div>

      {/* ========== 🔗 ปุ่มนำทาง ========== */}
      <div className="relative z-10 w-full max-w-sm space-y-4 mb-10">
        {/* ปุ่ม YouTube Playlist (มีไฟวิ่ง) */}
        <a 
          href="https://youtube.com/playlist?list=PLwAlfD3gBZEyvyvuB-9ehJWoLLJt_nmkq" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-all overflow-hidden"
        >
          {/* เอฟเฟกต์วิ่งผ่านปุ่ม */}
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          <span className="relative z-10 font-bold text-lg">ดูเพลย์ลิสต์บน YouTube</span>
        </a>

        {/* ปุ่มกลับหน้าหลัก */}
        <Link 
          to="/" 
          className="group flex items-center justify-center w-full bg-white border-2 border-blue-200 text-blue-800 py-4 rounded-2xl font-bold hover:bg-blue-50 hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          กลับสู่หน้าหลัก
        </Link>
      </div>

      {/* ========== 🎥 หัวข้อวิดีโอ ========== */}
      <div className="relative z-10 mb-8 animate-bounce-in">
        <h2 className="text-2xl md:text-3xl font-black text-center px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm inline-block">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            🎬 ตัวอย่างคลิปของเรา 🍿
          </span>
        </h2>
      </div>

      {/* ====== 📱 ส่วนแสดงผลมือถือ: Carousel แบบ Swipe ซ้าย-ขวา ====== */}
      <div 
        className="md:hidden relative z-10 w-full max-w-[320px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* กรอบมือถือสไตล์ปาร์ตี้ */}
        <div className="relative rounded-3xl shadow-2xl bg-black border-[3px] border-pink-200 p-2 overflow-hidden backdrop-blur-sm">
          {/* ไฟกระพริบขอบ */}
          <div className="absolute inset-0 rounded-3xl border-4 border-transparent animate-border-glow pointer-events-none"></div>
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {videos.map((video, idx) => (
                <div key={idx} className="w-full flex-shrink-0 aspect-[9/16]">
                  <iframe 
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* จุดบอกตำแหน่ง (Dots) แบบมีชีวิตชีวา */}
        <div className="flex justify-center mt-5 gap-2">
          {videos.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 scale-150 shadow-lg shadow-pink-300' 
                  : 'bg-gray-300 hover:bg-pink-200'
              }`}
            />
          ))}
        </div>
        {/* ข้อความเชิญชวนปัด */}
        <p className="text-center text-pink-600/80 text-sm mt-4 font-bold animate-bounce flex items-center justify-center gap-2">
          <span>←</span> ปัดซ้ายหรือขวาเพื่อเปลี่ยนคลิป <span>→</span>
        </p>
      </div>

      {/* ====== 🖥️ ส่วนแสดงผลเดสก์ท็อป: แบบตาราง (Grid) ====== */}
      <div className="hidden md:grid grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {videos.map((video, idx) => (
          <div 
            key={idx} 
            className="group aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black transform hover:-translate-y-2 transition-all duration-500 border-2 border-white hover:border-pink-300 relative"
          >
            {/* แสงเรืองเมื่อ hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <iframe 
              className="w-full h-full"
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {/* ป้ายชื่อคลิปเล็ก ๆ */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className="text-white text-xs font-bold">{video.title}</p>
            </div>
          </div>
        ))}

      </div>

              <p className="text-center text-gray/70 text-xs mt-8 drop-shadow">
          © {new Date().getFullYear()} Shoper Mini. Copyright.
        </p>

      {/* ========== 🎈 CSS แอนิเมชันทั้งหมด ========== */}
      <style>{`
        /* แบ็คกราวน์เคลื่อนไหว */
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 12s ease infinite;
        }

        /* หมุนช้า ๆ สำหรับระลอก */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }

        /* ลอยตัวอิโมจิ */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(10deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-22px) rotate(-4deg); }
        }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 3.5s ease-in-out infinite; }

        /* ขยับโยกอิโมจิ */
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }

        /* ขึ้นจากล่าง */
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

        /* เด้งเข้า */
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.08); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }

        /* เส้นขอบเรืองแสงรอบ ๆ มือถือ */
        @keyframes border-glow {
          0%, 100% { box-shadow: inset 0 0 15px rgba(244,114,182,0.5), 0 0 15px rgba(244,114,182,0.5); }
          50% { box-shadow: inset 0 0 30px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.6); }
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Shopermeme;