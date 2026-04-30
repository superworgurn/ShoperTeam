import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'; // สำหรับเปลี่ยนหน้าภายในแท็บเดิม
import { bioLinks } from '../data'; // ดึงข้อมูลสมาชิก
import FadeIn from './FadeIn';

const BioLayout: React.FC = React.memo(() => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = useCallback((id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  }, []);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn direction="down">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">สมาชิกของ Shoper Team</h2>
        </FadeIn>
        
        {/* ปรับจาก grid เป็น flex เพื่อให้แถวสุดท้ายจัดกึ่งกลางได้ */}
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 md:gap-x-10">
          {bioLinks.map((link, index) => {
            // ตรวจสอบประเภทลิงก์: เริ่มด้วย / คือลิงก์ภายใน
            const isInternal = link.url.startsWith('/');
            
            // สไตล์ส่วนประกอบของปุ่ม
            const linkClass = "w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-lg transition-transform duration-300 group-hover:scale-110 block cursor-pointer";

            const linkContent = (
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                {link.imageUrl && !imageErrors[link.id] ? (
                  <img 
                    src={link.imageUrl} alt={`โปรไฟล์ของ ${link.title}`} 
                    className="w-full h-full object-cover"
                    width="96" height="96"
                    onError={() => handleImageError(link.id)}
                    loading="lazy" decoding="async"
                  />
                ) : (
                  <span className="text-2xl font-bold text-indigo-600">{link.title.charAt(0)}</span>
                )}
              </div>
            );

            return (
              <FadeIn 
                key={link.id} 
                delay={index * 50} 
                // กำหนดความกว้างคงที่เพื่อให้ไอเทมเรียงตัวสวยงามเหมือนตาราง
                className={`flex justify-center relative w-[140px] md:w-[180px] ${activeCard === link.id ? 'z-50' : 'z-0'}`}
              >
                <div 
                  className="flex flex-col items-center group w-full"
                  onMouseEnter={() => setActiveCard(link.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* แยกการทำงานระหว่าง Link (SPA) และ a tag (External) */}
                  {isInternal ? (
                    <Link to={link.url} className={linkClass}>
                      {linkContent}
                    </Link>
                  ) : (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`ไปที่ช่องของ ${link.title}`} 
                      className={linkClass}
                    >
                      {linkContent}
                    </a>
                  )}

                  {/* Tooltip แสดงรายละเอียดเมื่อ Hover */}
                  <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50 w-64 p-5 rounded-2xl border border-white/40 shadow-2xl transition-all duration-300 backdrop-blur-xl bg-white/80 pointer-events-none ${activeCard === link.id ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'}`}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/80 rotate-45 border-l border-t border-white/40"></div>
                    <div className="text-center">
                      <h3 className="font-bold text-indigo-900 text-lg mb-2">{link.title}</h3>
                      <div className="space-y-2">
                        {link.descriptionen && <p className="text-xs text-blue-700 italic leading-tight">"{link.descriptionen}"</p>}
                        {link.descriptionth && <p className="text-xs text-indigo-900 font-medium leading-tight">{link.descriptionth}</p>}
                      </div>
                    </div>
                  </div>

                  <span className="mt-4 text-indigo-900 text-sm font-semibold group-hover:text-blue-600 transition-colors pointer-events-none text-center">
                    {link.title}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default BioLayout;