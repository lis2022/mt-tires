import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
import { Route } from '../types';

const logoImg = "https://i.ibb.co/HpDDDSNt/Whats-App-Image-2026-07-09-at-11-42-52-PM-2-Photoroom.png";

interface HeaderProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentRoute, onNavigate, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: Route }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Tires', route: 'tires' },
    { label: 'About Us', route: 'about' },
    { label: 'Reviews', route: 'reviews' },
    { label: 'Location', route: 'location' },
    { label: 'Contact Us', route: 'contact' },
  ];

  const handleNavClick = (route: Route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav shadow-sm border-b border-surface-container-high h-20 transition-all duration-300">
      <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center active:scale-95 transition-transform text-left cursor-pointer group"
          id="nav-logo-btn"
        >
          <img 
            alt="MT Tires & Auto Repair Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-500" 
            src={logoImg}
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                id={`nav-${item.route}`}
                className={`relative font-sans text-[15px] font-medium py-1 cursor-pointer transition-colors ${
                  isActive 
                    ? 'text-primary font-bold' 
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Book Now & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenBooking}
            id="header-book-now-btn"
            className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold hover:bg-primary-container active:scale-95 transition-all cursor-pointer font-mono text-xs uppercase tracking-widest flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Now
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden text-on-surface hover:text-primary p-2 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-surface border-b border-surface-container-high overflow-hidden shadow-lg absolute w-full left-0 top-20 z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    id={`mobile-nav-${item.route}`}
                    className={`text-left font-sans text-base py-2 border-b border-surface-container font-medium cursor-pointer transition-colors ${
                      isActive 
                        ? 'text-primary pl-2 border-l-2 border-primary font-bold' 
                        : 'text-secondary hover:text-primary hover:pl-2'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
