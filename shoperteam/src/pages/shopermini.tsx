import React from 'react';
import { Link } from 'react-router-dom';

const Shopermini: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center py-16 px-4 font-sans overflow-hidden">

      {/* ===== Animated Sea Background ===== */}
      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-25%) translateZ(0) scaleY(0.9); }
          100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
        }

        @keyframes waveMove2 {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-15%) translateZ(0) scaleY(0.85); }
          100% { transform: translateX(-30%) translateZ(0) scaleY(1); }
        }

        @keyframes waveMove3 {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-20%) translateZ(0) scaleY(1.1); }
          100% { transform: translateX(-40%) translateZ(0) scaleY(1); }
        }

        @keyframes bubbleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.7; }
          100% { transform: translateY(-120vh) scale(0.3); opacity: 0; }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .sea-gradient {
          background: linear-gradient(-45deg, #0c4a6e, #0284c7, #38bdf8, #7dd3fc);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-size: 50% 100%;
          bottom: 0;
          left: 0;
          animation-timing-function: cubic-bezier(0.36, 0.45, 0.63, 0.53);
          animation-iteration-count: infinite;
        }

        .wave1 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0 C150,40 350,0 600,30 C850,60 1050,20 1200,0 L1200,120 L0,120 Z' fill='rgba(255,255,255,0.25)'/%3E%3C/svg%3E");
          animation-name: waveMove;
          animation-duration: 12s;
          bottom: 15%;
          height: 30%;
          opacity: 0.9;
          z-index: 1;
        }

        .wave2 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,20 C200,70 400,10 600,40 C800,70 1000,10 1200,30 L1200,120 L0,120 Z' fill='rgba(255,255,255,0.15)'/%3E%3C/svg%3E");
          animation-name: waveMove2;
          animation-duration: 18s;
          bottom: 5%;
          height: 40%;
          opacity: 0.8;
          z-index: 2;
        }

        .wave3 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,30 C300,80 600,10 900,50 C1050,80 1150,30 1200,20 L1200,120 L0,120 Z' fill='rgba(255,255,255,0.2)'/%3E%3C/svg%3E");
          animation-name: waveMove3;
          animation-duration: 14s;
          bottom: -5%;
          height: 50%;
          opacity: 0.6;
          z-index: 3;
        }

        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          bottom: -10%;
          animation: bubbleFloat linear infinite;
          z-index: 4;
          pointer-events: none;
        }
      `}</style>

      {/* Background gradient */}
      <div className="absolute inset-0 sea-gradient z-0" />

      {/* Animated waves */}
      <div className="wave wave1" />
      <div className="wave wave2" />
      <div className="wave wave3" />

      {/* Floating bubbles */}
      <div className="bubble" style={{ left: '10%', width: '20px', height: '20px', animationDuration: '14s', animationDelay: '0s' }} />
      <div className="bubble" style={{ left: '30%', width: '14px', height: '14px', animationDuration: '10s', animationDelay: '2s' }} />
      <div className="bubble" style={{ left: '55%', width: '24px', height: '24px', animationDuration: '18s', animationDelay: '4s' }} />
      <div className="bubble" style={{ left: '75%', width: '16px', height: '16px', animationDuration: '12s', animationDelay: '1s' }} />
      <div className="bubble" style={{ left: '85%', width: '18px', height: '18px', animationDuration: '16s', animationDelay: '3s' }} />
      <div className="bubble" style={{ left: '20%', width: '22px', height: '22px', animationDuration: '20s', animationDelay: '5s' }} />
      <div className="bubble" style={{ left: '60%', width: '12px', height: '12px', animationDuration: '13s', animationDelay: '6s' }} />

      {/* ===== Main Content (above waves) ===== */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 animate-fade-in-up">
          <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-white shadow-2xl mb-5 bg-blue-600 transform transition hover:scale-105 hover:rotate-1 duration-500">
            <img 
              src="/shopermini.webp" 
              alt="Shoper Mini Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-black text-white mb-2 drop-shadow-lg">Shoper Mini</h1>
          <div className="text-center">
            <p className="text-white/90 font-bold text-sm mb-1 drop-shadow">Short format content</p> 
            <p className="text-white/60 text-xs italic">เนื้อหารูปแบบสั้น</p>
          </div>
        </div>

        {/* Link Buttons Section */}
        <div className="w-full max-w-sm space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Status */}
          <a 
            href="https://www.blockdit.com/posts/63b96bf535c710beb854032c"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-4 px-6 rounded-2xl shadow-lg hover:bg-white/30 hover:scale-[1.02] transition-all duration-300"
          >
            <span className="font-bold">Status</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </a>

          {/* tiktok */}
          <a 
            href="https://www.tiktok.com/@shopermini4"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-4 px-6 rounded-2xl shadow-lg hover:bg-white/30 hover:scale-[1.02] transition-all duration-300"
          >
            <span className="font-bold">Tiktok</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </a>
          
          {/* YouTube Playlist */}
          <a 
            href="https://youtube.com/playlist?list=PLwAlfD3gBZEwc0E89YmCJC9n4JHd3QJgk&si=qMNpGo8z0iZoHWf7"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-4 px-6 rounded-2xl shadow-lg hover:bg-white/30 hover:scale-[1.02] transition-all duration-300"
          >
            <span className="font-bold">Youtube (Playlist)</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </a>

          {/* ปุ่มกลับหน้าหลัก */}
          <Link 
            to="/" 
            className="flex items-center justify-center w-full bg-white/90 text-blue-800 py-4 px-6 rounded-2xl font-bold hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            กลับสู่หน้าหลัก Shoper Team
          </Link>
        </div>

        <p className="text-center text-white/70 text-xs mt-8 drop-shadow">
          © {new Date().getFullYear()} Shoper Mini. Copyright.
        </p>
      </div>
    </div>
  );
};

export default Shopermini;