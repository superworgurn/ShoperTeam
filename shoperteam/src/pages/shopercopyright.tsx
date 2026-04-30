import React from 'react';
import { Link } from 'react-router-dom';

const Shopercopyright: React.FC = () => {
  const copyrightSeries = [
    {
      id: 10,
      title: "Shoper Copyright",
      url: "https://www.blockdit.com/posts/63df6abd9293b8f75640d018",
      desc: "Status",
      // ไอคอน Blockdit (Official Blue)
      icon: (
        <svg className="w-10 h-10 shadow-sm rounded-lg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="#0077FF"/>
          <path d="M12 14H36V18H12V14ZM12 22H36V26H12V22ZM12 30H26V34H12V30Z" fill="white"/>
        </svg>
      )
    },
    {
      id: 11,
      title: "Shoper Copyright",
      url: "https://www.tiktok.com/@shopercopyright",
      desc: "Tiktok",
      // ไอคอน TikTok (Brand Black)
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.617a8.13 8.13 0 0 0 5.373 1.934V7.1a4.78 4.78 0 0 1-1.603-.414z"/>
        </svg>
      )
    },
    {
      id: 12,
      title: "Shoper Copyright 1",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZEwqLcY2Qe_o4k-u3KKat5P5&si=CSSaRwWA-AbeC4In",
      desc: "Video Playlist For Charifkub",
      icon: (
        <svg className="w-10 h-10 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 13,
      title: "Shoper Copyright 2",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZEw4yhsKnu8X3q8T0JZXkkOA&si=xbTWo6rfuUzsb4xO",
      desc: "Video Playlist For Jasmin",
      icon: (
        <svg className="w-10 h-10 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 14,
      title: "Shoper Copyright 3",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZExFLNjlzuaFT7p91Jcx3QB5&si=Q0nczxvVV6RQ8lRA",
      desc: "Video Playlist For Nanook",
      icon: (
        <svg className="w-10 h-10 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); background: rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 35px rgba(255,255,255,0.6); background: rgba(255,255,255,0.2); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .profile-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .btn-hover-lift { transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .btn-hover-lift:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 25px 40px -12px rgba(0,0,0,0.25); }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-[#064e3b] via-[#059669] to-[#34d399] flex flex-col items-center py-16 px-4 font-sans relative overflow-hidden">
        
        <div className="relative z-10 w-full max-w-md">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12 animate-fade-in-up">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-36 h-36 rounded-full profile-glow"></div>
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white z-10">
                <img src="/shopercopyright.webp" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <h1 className="text-3xl font-black text-white mb-2 tracking-tight drop-shadow-md text-center">Shoper Copyright</h1>
            <div className="px-6 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <p className="text-white font-bold text-sm tracking-wide">Series</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-5">
            {copyrightSeries.map((series, index) => (
              <a
                key={series.id}
                href={series.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center w-full bg-white/95 hover:bg-white text-green-900 py-4 px-5 rounded-[22px] shadow-xl border-b-[5px] border-green-700/80 active:border-b-0 active:translate-y-1 btn-hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.12 + 0.2}s` }}
              >
                {/* Left Icon Slot */}
                <div className="flex-shrink-0 mr-5 group-hover:scale-110 transition-transform duration-500">
                  {series.icon}
                </div>

                {/* Text Content Slot */}
                <div className="flex flex-col items-start flex-grow overflow-hidden">
                  <span className="font-black text-[20px] leading-tight truncate w-full group-hover:text-green-800">
                    {series.title}
                  </span>
                  <span className="text-green-700/60 text-[14px] font-bold mt-0.5 truncate w-full">
                    {series.desc}
                  </span>
                </div>

                {/* Right Arrow Decor */}
                <div className="flex-shrink-0 ml-2 text-green-200 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}

            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/" className="flex items-center justify-center w-full bg-[#064e3b]/40 backdrop-blur-md border-2 border-white/40 text-white py-4.5 rounded-2xl font-black hover:bg-[#064e3b]/60 shadow-lg transition-all active:scale-95">
                กลับสู่หน้าหลัก SHOPER TEAM
              </Link>
            </div>
          </div>

          <footer className="mt-12 text-center text-white/50 text-[11px] font-black tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Shoper Copyright
          </footer>
        </div>
      </div>
    </>
  );
};

export default Shopercopyright;
