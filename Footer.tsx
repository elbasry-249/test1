import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '../ui/Logo';

const Footer: React.FC = () => {
  const footerLinks = {
    products: [
      { name: 'AI Devices', path: '/products?category=ai' },
      { name: 'AR Systems', path: '/products?category=ar' },
      { name: 'Control Units', path: '/products?category=control' },
      { name: 'New Arrivals', path: '/products?new=true' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
    support: [
      { name: 'Contact', path: '/contact' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Shipping', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
    ],
  };
  
  const socials = [
    { icon: <Facebook size={20} />, path: 'https://facebook.com' },
    { icon: <Twitter size={20} />, path: 'https://twitter.com' },
    { icon: <Instagram size={20} />, path: 'https://instagram.com' },
    { icon: <Github size={20} />, path: 'https://github.com' },
    { icon: <Linkedin size={20} />, path: 'https://linkedin.com' },
  ];
  
  return (
    <footer className="relative mt-20 pt-16 pb-8 bg-cosmic-dark overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm max-w-xs">
              Stepping into the future with cutting-edge technology that changes the way we interact with our world.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cosmic flex items-center justify-center text-slate-400 hover:text-neon-blue hover:bg-cosmic/80 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-neon-blue text-lg">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-neon-green text-lg">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-neon-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-neon-purple text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 text-neon-purple" />
                <span className="text-slate-400">contact@neonverse.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 text-neon-purple" />
                <span className="text-slate-400">+1 (800) NEON-888</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-neon-purple" />
                <span className="text-slate-400">
                  NEONVERSE Tower, Neo District
                  <br />
                  Cyber City, 2077
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NEONVERSE. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            {footerLinks.support.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;