import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { cn } from '../../utils/helpers';

const NAV_LINKS = [
  { name: 'Work', path: '/#work' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);

      if (element) {
        e.preventDefault();
        const navbarHeight = 100;

window.scrollTo({
  top: element.offsetTop - navbarHeight,
  behavior: 'smooth',
});
        window.history.pushState(null, '', path);
      }
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-surface-dim/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Terminal className="text-on-primary" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative py-1',
                  'text-on-surface-variant'
                )}
              >
                {link.name}
                {location.hash === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(167,139,250,0.5)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
          <Button size="sm" variant="primary" className="ml-4">
            Resume
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-container border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                className="text-lg font-medium text-on-surface-variant"
                >
                  {link.name}
                </NavLink>
            ))}
            <Button className="w-full">Resume</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
