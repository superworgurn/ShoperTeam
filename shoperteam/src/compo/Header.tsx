import React, { useState, useEffect, useCallback } from 'react';

interface HeaderProps {
  isScrolled?: boolean;
}

const Header: React.FC<HeaderProps> = React.memo(({ isScrolled = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'videos', 'team', 'showcase', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-gradient-to-r from-blue-800/95 to-indigo-700/95 py-3'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-white tracking-wide flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mr-2 shadow-md">
                <img src="shoperteam.webp" alt="Shoper Team Logo" className="h-10 w-10 rounded-xl" loading="eager"/>
             </div>
              <span className={`transition-all ${isScrolled ? 'text-blue-800' : 'text-white'}`}>Shoper Team</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'videos', label: 'Videos' },
                { id: 'team', label: 'Our Team' },
                { id: 'showcase', label: 'Showcase' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : isScrolled
                        ? 'text-blue-800 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="ml-2 w-2 h-2 bg-white rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-blue-800 hover:bg-blue-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden bg-white shadow-xl rounded-b-2xl overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'videos', label: 'Videos' },
                { id: 'team', label: 'Our Team' },
                { id: 'showcase', label: 'Showcase' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
});

export default Header;