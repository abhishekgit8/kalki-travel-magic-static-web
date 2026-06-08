import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md py-3 md:py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 md:gap-3 group">
          {/* Icon on mobile, full logo on desktop */}
          <Logo className="h-9 md:h-11 w-auto" variant="icon" />
          <div className="hidden sm:flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white group-hover:text-neon-red transition-colors duration-300 leading-none">KALKI</span>
            <span className="text-[10px] md:text-xs font-medium tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">TRAVEL MAGIC</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-neon-gold transition-colors duration-300 text-sm uppercase tracking-widest hover:glow"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-neon-red to-neon-purple rounded-full text-white font-bold hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={18} />
            <span>Book Ride</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-neon-blue transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-card border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-neon-red text-lg tracking-wider py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 mt-3 px-6 py-3 bg-neon-red text-white rounded-lg font-bold"
              >
                <Phone size={18} />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
