// src/compo/Header.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { navItems } from '../data';

interface HeaderProps { isScrolled?: boolean; }

const Header: React.FC<HeaderProps> = React.memo(({ isScrolled = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="flex items-center cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <div className="text-2xl font-black tracking-tight flex items-center">
              <div className={`p-1.5 rounded-xl mr-3 shadow-lg transition-colors duration-500 ${isScrolled ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-white'}`}>
                <img 
                  src="/shoperteam.webp" alt="Shoper Team Logo" 
                  className="h-9 w-9 rounded-lg object-cover" 
                  width="36" height="36" loading="eager" fetchPriority="high"
                />
             </div>
              <span className={`transition-colors duration-500 ${isScrolled ? 'text-indigo-900' : 'text-blue-900 drop-shadow-sm'}`}>
                Shoper <span className={isScrolled ? 'text-blue-600' : 'text-indigo-700'}>Team</span>
              </span>
            </div>
          </a>

          <nav className="hidden md:block" aria-label="Main Navigation">
            <ul className="flex space-x-2 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full shadow-sm border border-white/20">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center ${activeSection === item.id ? 'bg-blue-600 text-white shadow-md transform scale-105' : 'text-indigo-900 hover:text-blue-600 hover:bg-white/80'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            className={`md:hidden p-2.5 rounded-xl transition-colors backdrop-blur-md shadow-sm ${isScrolled ? 'bg-blue-50 text-blue-800' : 'bg-white/80 text-blue-900'}`}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>

        <nav aria-label="Mobile Navigation" className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out border-t border-gray-100 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container mx-auto px-6 py-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className={`w-full text-left px-5 py-4 rounded-xl font-bold transition-all flex items-center justify-between ${activeSection === item.id ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {item.label}
                    {activeSection === item.id && <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {isMenuOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity" onClick={closeMenu} aria-hidden="true"></div>}
    </>
  );
});

export default Header;