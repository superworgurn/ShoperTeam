// src/compo/BioLayout.tsx
import React, { useState, useCallback } from 'react';
import { bioLinks } from '../data';
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
          {bioLinks.map((link, index) => (
            <FadeIn key={link.id} delay={index * 50} className={`flex justify-center relative ${activeCard === link.id ? 'z-50' : 'z-0'}`}>
              <div 
                className="flex flex-col items-center group w-full"
                onMouseEnter={() => setActiveCard(link.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <a 
                  href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`ไปที่ช่องของ ${link.title}`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-lg transition-transform duration-300 group-hover:scale-110 block cursor-pointer"
                >
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
                </a>

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

                <span className="mt-4 text-indigo-900 text-sm font-semibold group-hover:text-blue-600 transition-colors pointer-events-none">
                  {link.title}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
});

export default BioLayout;