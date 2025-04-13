
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Game Lore', path: '/lore' },
  { name: 'Missions', path: '/missions' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Media Gallery', path: '/media' },
  { name: 'Community', path: '/community' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        isScrolled ? "glassmorphism py-3" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-space-cyan animate-pulse-bright"></div>
          <span className="text-2xl font-orbitron font-bold tracking-wider neon-text">
            COSMIC<span className="text-space-cyan">ODYSSEY</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative px-1 py-2 font-medium tracking-wider transition-colors duration-300 hover:text-space-cyan group",
                location.pathname === link.path ? "text-space-cyan" : "text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-space-cyan transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                location.pathname === link.path && "scale-x-100"
              )}></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:text-space-cyan"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-16 left-0 w-full glassmorphism transition-transform duration-300 md:hidden overflow-hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-3 px-4 font-medium border-b border-space-purple/30 transition-colors duration-300 hover:bg-space-purple/10",
                location.pathname === link.path ? "text-space-cyan" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="py-3 px-4 flex justify-start">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
