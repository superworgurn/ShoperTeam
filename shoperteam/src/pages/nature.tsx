import React from 'react';

const Nature: React.FC = () => {
  const naturePhotos = [
    { id: 1, url: 'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:ujxtkygx675dxxk65ayhzpqs/bafkreig6s3hc2p53nfzlgyiqpibvirl4krnxsekpc2tjpd7dqbqmmh3a4y', alt: 'Forest path' },
    { id: 2, url: 'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:ujxtkygx675dxxk65ayhzpqs/bafkreigwjvbv6gjvxpihk7q2z5ny3o3ochzatomuxbxrewykgx5ipaml6u', alt: 'Mountain mist' },
    { id: 3, url: 'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:ujxtkygx675dxxk65ayhzpqs/bafkreidvghl5mmelsrgrfwiixbvx5cwxnp5vso7p6bcvlgheg6fbuzo4re', alt: 'Nature bridge' },
    { id: 4, url: 'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:ujxtkygx675dxxk65ayhzpqs/bafkreiadwiwxhbvbccpl3kfgwrcfo475xjjxd724wpkeubbophbfvrzvqu', alt: 'Green landscape' },
  ];

  return (
    <>
      {/* กำหนด keyframes และคลาสแอนิเมชันทั้งหมด */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes lineGrow {
            from { width: 0; }
            to { width: 2rem; }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s ease-out forwards;
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-scale-in {
            animation: scaleIn 0.5s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          .animate-slide-in-right {
            animation: slideInRight 0.6s ease-out forwards;
          }
          .gallery-item {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .hover-glow:hover {
            box-shadow: 0 0 25px rgba(34,197,94,0.4);
          }
          .line-animate {
            animation: lineGrow 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-b from-green-50/50 via-white to-white flex flex-col items-center py-16 px-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 animate-fade-in-up">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-300 shadow-lg mb-4 profile-img-wrapper hover-glow transition-all duration-500 hover:scale-105">
            <img
              src="/nature.webp"
              alt="Nature Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-2 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Nature
          </h1>
          <div
            className="text-center px-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-green-700 font-medium text-sm">
              ✨ Pure Nature. Pure Moments
            </p>
            <p className="text-green-500/70 text-xs italic">
              สัมผัสธรรมชาติ ผ่านภาพถ่าย
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full max-w-sm space-y-3 mb-12">
          <a
            href="https://bsky.app/profile/naturexo.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in-left"
            style={{ animationDelay: '0.3s' }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
            </svg>
            Follow on Bluesky
          </a>

          <a
            href="/"
            className="flex items-center justify-center w-full bg-white border-2 border-green-200 text-green-800 py-4 px-6 rounded-full font-bold hover:bg-green-50 hover:border-green-300 transition-all duration-300 animate-slide-in-right"
            style={{ animationDelay: '0.5s' }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            Back to Shoper Team
          </a>
        </div>

        {/* Photography Gallery */}
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-bold text-green-900 mb-8 flex items-center justify-center animate-fade-in">
            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-green-300 mr-3 line-animate" />
            <span className="bg-green-50 px-4 py-1 rounded-full">
              📷 Nature Photography
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-green-300 ml-3 line-animate" />
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {naturePhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md gallery-item hover:shadow-2xl transition-shadow duration-500 group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* overlay ตอน hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          

          <p
            className="text-center text-gray-400 text-xs mt-10 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            © {new Date().getFullYear()} Nature. Captured with passion. 🌿
          </p>
        </div>
      </div>
    </>
  );
};

export default Nature;