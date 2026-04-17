'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Star, Download } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // Resume download link - aap apni resume file ka path daalein
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sitara_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* ✅ Logo - Left Side */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2 shrink-0"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e293b]/50 backdrop-blur-sm border border-[#38bdf8]/20 group-hover:border-[#38bdf8]/50 transition-all duration-300">
              <Star className="w-3.5 h-3.5 text-[#38bdf8] fill-[#38bdf8]/20" />
              <span className="text-sm font-semibold text-[#ffffff] tracking-wide">
                Sitara <span className="text-[#38bdf8]">Developer</span>
              </span>
            </div>
          </a>

          {/* ✅ Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#38bdf8]'
                      : 'text-[#94a3b8] hover:text-[#ffffff]'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full shadow-[0_0_4px_#38bdf8]" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Resume Button - Right Side */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 px-4 py-2 bg-[#38bdf8]/10 hover:bg-[#38bdf8] text-[#38bdf8] hover:text-[#ffffff] font-medium rounded-xl transition-all duration-300 border border-[#38bdf8]/30 hover:border-[#38bdf8]"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              <span className="text-sm">Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#ffffff] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1e293b]/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block py-3 text-base font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#38bdf8]'
                    : 'text-[#94a3b8] hover:text-[#ffffff]'
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile mein bhi resume button */}
            <button
              onClick={handleDownloadResume}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-[#38bdf8]/10 hover:bg-[#38bdf8] text-[#38bdf8] hover:text-[#ffffff] font-medium rounded-xl transition-all duration-300 border border-[#38bdf8]/30"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}