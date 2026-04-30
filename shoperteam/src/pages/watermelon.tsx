import React from 'react';

const Watermelon: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center py-20 px-4 font-sans relative overflow-hidden">
      
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-green-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-green-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .link-card {
          transition: all 0.3s ease;
        }
        .link-card:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }
      `}</style>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10 animate-fade-in-up relative z-10">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5 bg-green-100 animate-float">
          <img
            src="/watermelon.webp" 
            alt="WaterMelon Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-green-800 mb-3 tracking-tight drop-shadow-sm">
           WaterMelon 🍉
        </h1>
        <div className="text-center space-y-1">
          <p className="text-green-700 font-semibold text-md">
            - Justice is the light that darkness cannot overcome -
          </p>
          <p className="text-green-600/80 text-sm italic">
            - ความยุติธรรมคือแสงสว่างที่ความมืดไม่สามารถเอาชนะได้ -
          </p>
        </div>
      </div>

      {/* Linkbio Buttons Section */}
      <div className="w-full max-w-md space-y-4 relative z-10">
        
        {/* ลิงก์หลักไปที่ Blockdit */}
        <a
          href="https://www.blockdit.com/watermelonxo"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card group flex items-center justify-between w-full bg-white border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white py-4 px-6 rounded-2xl shadow-sm animate-fade-in-up delay-200"
        >
          <span className="font-bold text-lg">📝 ติดตามบทความบน Blockdit</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>

        {/* Promote */}
        <a
          href="https://www.blockdit.com/locations/66544f7b054ca315bedfa8f5/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="link-card group flex items-center justify-between w-full bg-white border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white py-4 px-6 rounded-2xl shadow-sm animate-fade-in-up delay-400"
        >
          <span className="font-bold text-lg">🍉 Palestine From Charifkub</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>

        {/* Back to main */}
        <a
          href="/"
          className="link-card group flex items-center justify-center w-full bg-green-50 border-2 border-green-200 text-green-800 hover:bg-green-100 py-4 px-6 rounded-2xl shadow-sm mt-8 animate-fade-in-up delay-600"
        >
          <span className="font-bold">🏠 กลับสู่หน้าหลัก Shoper Team</span>
        </a>
      </div>

       <p className="text-center text-gray-400 text-xs mt-8">
          © {new Date().getFullYear()} Watermelon. News world on Blockdit.
        </p>

      {/* Floating watermelon decorations */}
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float pointer-events-none">🍉</div>
      <div className="absolute top-20 left-10 text-5xl opacity-20 animate-float animation-delay-2000 pointer-events-none">🍉</div>
    </div>
  );
};

export default Watermelon;