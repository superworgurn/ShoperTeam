import React, { useState, useCallback } from 'react';

interface BioLink {
  id: number;
  title: string;
  url: string;
  descriptionen?: string;
  descriptionth?: string;
  icon?: string;
  imageUrl?: string;
}

const BioLayout: React.FC = React.memo(() => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = useCallback((id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  }, []);

  const bioLinks: BioLink[] = [
    {
      id: 1,
      title: "Shoper Team",
      url: "https://www.youtube.com/@shoperteam2788",
      descriptionen: "- When we come together, everything is possible.-",
      descriptionth: "- เมื่อเรารวมกัน ทุกอย่างก็เป็นไปได้ -",
      imageUrl: "shoperteam.webp"
    },
    {
      id: 2,
      title: "Shoper Gamer",
      url: "https://shopergamer.vercel.app/",
      descriptionen: "- Daily learning shapes a brighter tomorrow -",
      descriptionth: "- การเรียนรู้ทุกวันสร้างอนาคตที่สดใสยิ่งขึ้น -",
      imageUrl: "shopergamer.webp"
    },
    {
      id: 3,
      title: "Charifkub",
      url: "https://charifkub.vercel.app/",
      descriptionen: "- On the day I achieve success, I will not forget those who have supported me -",
      descriptionth: "- ในวันที่ฉันประสบความสำเร็จ ฉันจะไม่ลืมคนที่ซัพพอร์ตฉัน -",
      imageUrl: "charifkub.webp"
    },
    {
      id: 4,
      title: "Shoper Cat",
      url: "https://linkbio.co/shopercat",
      descriptionen: "- The past is the most valuable lesson. -",
      descriptionth: "- อดีตคือบทเรียนอันล้ำค่าที่สุด -",
      imageUrl: "shopercat.webp"
    },
    {
      id: 5,
      title: "Animexo",
      url: "https://linkbio.co/animexo1234",
      descriptionen: "- Art and AI A Perfect Collaboration -",
      descriptionth: "- ศิลปะ และ AI ความร่วมมือที่สมบูรณ์แบบ -",
      imageUrl: "animexo.webp"
    },
    {
      id: 6,
      title: "Nature",
      url: "https://www.blockdit.com/nature",
      descriptionen: "Connecting with the natural world",
      descriptionth: "เชื่อมต่อกับโลกธรรมชาติ",
      imageUrl: "nature.webp"
    },
    {
      id: 7,
      title: "WaterMelon",
      url: "https://www.blockdit.com/watermelonxo",
      descriptionen: "- Justice is the light that darkness cannot overcome -",
      descriptionth: "- ความยุติธรรมคือแสงสว่างที่ความมืดไม่สามารถเอาชนะได้ -",
      imageUrl: "watermelon.webp"
    },
    {
      id: 8,
      title: "Shoper Meme",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZEyvyvuB-9ehJWoLLJt_nmkq&si=3VS7rpFB463LwWS_",
      descriptionen: "Funny and entertaining content",
      descriptionth: "เนื้อหาสนุกสนานและบันเทิง",
      imageUrl: "shopermeme.webp"
    },
    {
      id: 9,
      title: "Shoper Mini",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZEwc0E89YmCJC9n4JHd3QJgk&si=qMNpGo8z0iZoHWf7",
      descriptionen: "Short format content",
      descriptionth: "เนื้อหารูปแบบสั้น",
      imageUrl: "shopermini.webp"
    },
    {
      id: 10,
      title: "Shoper Copyright 1",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZEwqLcY2Qe_o4k-u3KKat5P5&si=CSSaRwWA-AbeC4In",
      descriptionen: "Copyright information series",
      descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์",
      imageUrl: "shopercopyright.webp"
    },
    {
      id: 11,
      title: "Shoper Copyright 2",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZEw4yhsKnu8X3q8T0JZXkkOA&si=xbTWo6rfuUzsb4xO",
      descriptionen: "Copyright information series",
      descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์",
      imageUrl: "shopercopyright.webp"
    },
    {
      id: 12,
      title: "Shoper Copyright 3",
      url: "https://youtube.com/playlist?list=PLwAlfD3gBZExFLNjlzuaFT7p91Jcx3QB5&si=Q0nczxvVV6RQ8lRA",
      descriptionen: "Copyright information series",
      descriptionth: "ซีรีย์ข้อมูลลิขสิทธิ์",
      imageUrl: "shopercopyright.webp"
    }
  ];

  return (
    <section  id="team"  className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">สมาชิกของ Shoper Team</h2>
        <p className="text-center text-blue-600 mb-10 max-w-2xl mx-auto">
         ช่องทางติดต่อของสมาชิกช่อง Shoper Team รวมถึง Website
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {bioLinks.map(link => (
            <div 
              key={link.id} 
              className="relative flex flex-col items-center"
              onMouseEnter={() => setActiveCard(link.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-2xl text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
              >
                {link.imageUrl && !imageErrors[link.id] ? (
                  <img 
                    src={link.imageUrl} 
                    alt={link.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(link.id)}
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                ) : (
                  <span>{link.icon}</span>
                )}
              </a>
              
              {/* Card that appears on hover */}
              <div 
                className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-20 w-64 bg-white rounded-xl shadow-2xl p-4 transition-all duration-300 ${
                  activeCard === link.id 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible translate-y-2'
                }`}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                
                <h3 className="font-bold text-blue-800 text-lg mb-2 text-center">{link.title}</h3>
                
                {link.descriptionen && (
                  <p className="text-blue-600 text-sm mb-2 text-center italic">{link.descriptionen}</p>
                )}
                
                {link.descriptionth && (
                  <p className="text-blue-700 text-sm text-center">{link.descriptionth}</p>
                )}
                
                <div className="mt-3 text-center">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="inline-block px-4 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Visit Channel
                  </a>
                </div>
              </div>
              
              <span className="mt-2 text-blue-800 text-xs font-medium text-center truncate w-20">
                {link.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default BioLayout;