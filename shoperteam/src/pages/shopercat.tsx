// src/pages/shopercat.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../compo/FadeIn';
import { catShowcase, catVideos, catPlaylists } from '../data';

/* ================= Inline SVG Icons ================= */
type IconProps = { className?: string };

const IconPaw: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="5.6" cy="9.5" r="2.1" />
    <circle cx="9.7" cy="6.2" r="2.1" />
    <circle cx="14.3" cy="6.2" r="2.1" />
    <circle cx="18.4" cy="9.5" r="2.1" />
    <path d="M12 10.5c-3.5 0-6.5 2.5-6.5 5.5 0 2 1.5 3.5 3 3.5h7c1.5 0 3-1.5 3-3.5 0-3-3-5.5-6.5-5.5z" />
  </svg>
);

const IconYouTube: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconFacebook: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IconTikTok: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const IconVideo: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
  </svg>
);

const IconTv: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
  </svg>
);

const IconCamera: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="3.2"/>
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

const IconSparkle: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/>
  </svg>
);

const IconHeart: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const IconArrowLeft: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const IconHome: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

/* ================= Helper Function ================= */
const cleanEmoji = (text: string): string => {
  return text.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
};

/* ================= Social Links Data ================= */
const socialLinks = [
  {
    title: 'YouTube Channel',
    url: 'https://www.youtube.com/@shopercat',
    description: 'ดูคลิปวิดีโอน้องแมวสุดน่ารัก',
    icon: 'youtube',
    badge: 'YouTube',
    bgGradient: 'from-[#8B4513] via-[#A0522D] to-[#CD853F]',
    shadowColor: 'shadow-[#8B4513]/25',
  },
  {
    title: 'Facebook Page',
    url: 'https://www.facebook.com/profile.php?id=100090715877048',
    description: 'ติดตามข่าวสารและภาพน่ารักๆ',
    icon: 'facebook',
    badge: 'Facebook',
    bgGradient: 'from-[#6E330C] via-[#8B4513] to-[#A0522D]',
    shadowColor: 'shadow-[#8B4513]/25',
  },
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@shopercat',
    description: 'คลิปสั้นฟินๆ ฮีลใจสายทาส',
    icon: 'tiktok',
    badge: 'TikTok',
    bgGradient: 'from-[#A0522D] via-[#8B4513] to-[#B8860B]',
    shadowColor: 'shadow-[#8B4513]/25',
  },
];

const getSocialIcon = (type: string, className: string) => {
  switch (type) {
    case 'youtube':
      return <IconYouTube className={className} />;
    case 'facebook':
      return <IconFacebook className={className} />;
    case 'tiktok':
      return <IconTikTok className={className} />;
    default:
      return null;
  }
};

/* ================= Main Component ================= */
const ShopercatPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8 px-4">
      <FadeIn direction="down">
        {/* ✅ โลโก้รูปแมวด้านบนสุด */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            {/* วงกลมพื้นหลังแบบ gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] to-[#CD853F] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110" />
            
            {/* รูปแมว */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(139,69,19,0.3)] group-hover:shadow-[0_15px_40px_rgba(139,69,19,0.4)] transition-all duration-500 group-hover:scale-105">
              <img
                src="/shopercat.webp"
                alt="Shopercat Logo"
                className="w-full h-full object-cover"
                width="160"
                height="160"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Icon อุ้งเท้าเล็กๆ ที่มุมขวาล่าง */}
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#EADCC9]">
              <IconPaw className="w-5 h-5 text-[#8B4513]" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6E330C] mb-3">
            Shopercat 🐱
          </h1>
          <p className="text-[#8B4513] text-lg font-medium">
            - The past is the most valuable lesson. -
          </p>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* ================= Section 1: Social Links ================= */}
        <FadeIn delay={100}>
          <div className="w-full space-y-4">
            <h2 className="text-center font-extrabold text-[#6E330C] text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#D2B48C]" />
              <IconHeart className="w-4 h-4 text-[#8B4513]" />
              <span>ติดตาม Shopercat</span>
              <span className="h-px w-8 bg-[#D2B48C]" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {socialLinks.map((social, idx) => (
                <FadeIn key={social.title} delay={150 + idx * 100} direction="up">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${social.bgGradient} ${social.shadowColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6 text-white block`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {social.badge}
                        </span>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          {getSocialIcon(social.icon, 'w-6 h-6')}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{social.title}</h3>
                      <p className="text-white/90 text-sm">{social.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ================= Section 2: Cat Videos (เดี่ยว) ================= */}
        <FadeIn delay={200}>
          <div className="w-full space-y-4 pt-6">
            <h2 className="text-center font-extrabold text-[#6E330C] text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#D2B48C]" />
              <IconVideo className="w-4 h-4 text-[#8B4513]" />
              <span>คลิปวิดีโอน้องแมว</span>
              <span className="h-px w-8 bg-[#D2B48C]" />
            </h2>
            <div className="nice-scrollbar flex gap-5 overflow-x-auto overflow-y-hidden pb-4 px-1 snap-x">
              {catVideos.map((video, idx) => (
                <FadeIn key={video.id} delay={250 + idx * 100} className="snap-center shrink-0">
                  <div className="w-[280px] md:w-[360px] aspect-video rounded-2xl overflow-hidden border-4 border-[#EADCC9] shadow-[0_10px_25px_rgba(139,69,19,0.12)] bg-black relative group">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ================= Section 3: Cat Playlists ================= */}
        <FadeIn delay={300}>
          <div className="w-full space-y-4 pt-6">
            <h2 className="text-center font-extrabold text-[#6E330C] text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#D2B48C]" />
              <IconTv className="w-4 h-4 text-[#8B4513]" />
              <span>เพลย์ลิสต์วิดีโอน้องแมว</span>
              <span className="h-px w-8 bg-[#D2B48C]" />
            </h2>
            <div className="nice-scrollbar flex gap-5 overflow-x-auto overflow-y-hidden pb-4 px-1 snap-x">
              {catPlaylists.map((playlist, idx) => (
                <FadeIn key={playlist.id} delay={350 + idx * 100} className="snap-center shrink-0">
                  <div className="w-[300px] md:w-[420px] aspect-video rounded-2xl overflow-hidden border-4 border-[#EADCC9] shadow-[0_10px_25px_rgba(139,69,19,0.12)] bg-black">
                    <iframe
                      className="w-full h-full"
                      src={playlist.src}
                      title={cleanEmoji(playlist.title)}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ================= Section 4: Cat Showcase (อัลบั้มรูป) ================= */}
        <FadeIn delay={400}>
          <div className="w-full space-y-4 pt-6">
            <h2 className="text-center font-extrabold text-[#6E330C] text-sm tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#D2B48C]" />
              <IconCamera className="w-4 h-4 text-[#8B4513]" />
              <span>อัลบั้มแนะนำน้องแมว</span>
              <span className="h-px w-8 bg-[#D2B48C]" />
            </h2>

            {/* ✅ Grid - มือถือเห็นชื่อตลอด / Desktop เห็นตอน hover */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full">
              {catShowcase.map((cat, idx) => (
                <FadeIn key={cat.id} delay={450 + idx * 120} direction="up" className="w-full">
                  {/* ✅ การ์ดรูปแมว - Responsive */}
                  <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_20px_rgba(139,69,19,0.12)] hover:shadow-[0_15px_35px_rgba(139,69,19,0.25)] transition-all duration-300 hover:-translate-y-1">
                    {/* รูปแมว - ขยายเล็กน้อยตอน hover */}
                    <img
                      src={cat.image}
                      alt={cleanEmoji(cat.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* ✅ Gradient Overlay 
                        - มือถือ: opacity-100 (เห็นตลอด)
                        - Desktop: opacity-0 ก่อน แล้วค่อย opacity-100 ตอน hover 
                    */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300" />

                    {/* ✅ ชื่อแมว - มุมล่างซ้าย
                        - มือถือ: opacity-100 (เห็นตลอด)
                        - Desktop: opacity-0 ก่อน แล้วค่อย opacity-100 ตอน hover
                    */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white text-base md:text-lg font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight">
                        {cat.title}
                      </h3>
                    </div>

                    {/* ✅ Icon อุ้งเท้า - โผล่ตอน hover (เฉพาะ Desktop) */}
                    <div className="hidden md:block absolute top-2 right-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-7 h-7 rounded-full bg-[#8B4513]/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <IconPaw className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* ✅ เส้น gradient ด้านล่าง - slide in ตอน hover (เฉพาะ Desktop) */}
                    <div className="hidden md:block absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CD853F] via-[#8B4513] to-[#CD853F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ================= ปุ่ม Back to Shoper Team ================= */}
        <FadeIn direction="up" delay={100} className="w-full">
          <div className="flex justify-center pt-6">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border-2 border-[#EADCC9] shadow-[0_8px_20px_rgba(139,69,19,0.08)] hover:shadow-[0_12px_30px_rgba(139,69,19,0.18)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              {/* ไอคอนลูกศรซ้าย */}
              <span className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#8B4513] to-[#6E330C] flex items-center justify-center text-white shadow-md border border-white transform group-hover:-translate-x-1 group-hover:scale-110 transition-transform duration-300">
                <IconArrowLeft className="w-4 h-4" />
              </span>
              <span className="relative font-extrabold text-stone-800 group-hover:text-[#6E330C] transition-colors text-sm">
                Back to Shoper Team
              </span>
              {/* ไอคอนบ้าน */}
              <span className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#A0522D] to-[#8B4513] flex items-center justify-center text-white shadow-md border border-white transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <IconHome className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </FadeIn>

        {/* Footer ท้ายหน้า */}
        <FadeIn delay={500}>
          <div className="text-center text-xs text-stone-500 font-medium pt-8">
            <p className="flex items-center justify-center gap-1.5">
              <span>© {new Date().getFullYear()} Shopercat. All rights reserved.</span>
              <IconPaw className="w-3.5 h-3.5 text-[#8B4513]" />
              <IconSparkle className="w-3.5 h-3.5 text-[#CD853F]" />
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ShopercatPage;