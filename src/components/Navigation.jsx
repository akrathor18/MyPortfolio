'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'journey', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Journey', href: '/#journey' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border hover:border-primary/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary hover:scale-110 transition-all duration-300"
        >
          {'< Ashish />'}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => {
            const sectionId = link.href.replace('/#', '');
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={i}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            );
          })}
          <a
            href="https://raw.githubusercontent.com/akrathor18/Resume/main/Ashish%20Kumar%20Resume.pdf"
            download="Ashish Resume.pdf"
            className="text-sm font-semibold px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-all duration-300 hover:rotate-90 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://raw.githubusercontent.com/akrathor18/Resume/main/Ashish%20Kumar%20Resume.pdf"
              download="Ashish Resume.pdf"
              className="block text-sm font-semibold px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-center flex items-center justify-center gap-2 group mt-4"
            >
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
