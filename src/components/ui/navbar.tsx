import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass-panel bg-white/80 border-emerald-100/60 shadow-lg' : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-sm'}`}>
        {/* Logo */}
        <a href="#home" className="pl-2 md:pl-0 flex items-center gap-2 hover:scale-[1.02] transition-transform">
          <Logo />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-emerald-900/80">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Features', href: '#features' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Contact Us', href: '#contact' }
          ].map((item) => (
            <a key={item.label} href={item.href} className="relative group hover:text-emerald-600 transition-colors">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(16,185,129,0.25)]">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-emerald-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 w-full mt-4 p-6 rounded-3xl glass-panel border-emerald-100 bg-white/95 flex flex-col gap-4 shadow-2xl"
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'Features', href: '#features' },
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Contact Us', href: '#contact' }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-emerald-950 hover:text-emerald-600 text-lg font-semibold transition-colors px-4 py-2 rounded-xl hover:bg-emerald-50/50"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center w-full px-6 py-3 rounded-full bg-emerald-700 text-white text-base font-semibold shadow-lg hover:bg-emerald-800 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
