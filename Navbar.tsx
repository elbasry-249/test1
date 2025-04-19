import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cosmic-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-50">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-heading text-sm uppercase tracking-wider transition-colors ${
                  location.pathname === link.path 
                    ? 'text-neon-blue' 
                    : 'text-slate-300 hover:text-neon-blue'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" icon={<Search size={18} />}>
              Search
            </Button>
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" icon={<User size={18} />}>
                Account
              </Button>
            </Link>
            <Button variant="default" size="sm" icon={<ShoppingCart size={18} />}>
              Cart (0)
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-200 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel fixed inset-0 z-40 pt-20 pb-6 px-6"
          >
            <div className="flex flex-col space-y-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={`font-heading text-lg py-2 border-b border-white/10 ${
                      location.pathname === link.path 
                        ? 'text-neon-blue' 
                        : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="flex flex-col space-y-4 pt-4">
                <Button variant="ghost" size="md" icon={<Search size={20} />} className="justify-start">
                  Search
                </Button>
                <Link to="/dashboard" className="w-full">
                  <Button variant="ghost" size="md" icon={<User size={20} />} className="justify-start w-full">
                    Account
                  </Button>
                </Link>
                <Button variant="default" size="md" icon={<ShoppingCart size={20} />} className="justify-start">
                  Cart (0)
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;