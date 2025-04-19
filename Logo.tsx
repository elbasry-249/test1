import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32,
  };
  
  return (
    <motion.div 
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="mr-2"
      >
        <Zap size={iconSizes[size]} className="text-neon-blue" />
      </motion.div>
      <span className={`font-heading font-bold text-white ${textSizes[size]} tracking-wider neon-text`}>
        NEON<span className="text-neon-green">VERSE</span>
      </span>
    </motion.div>
  );
};

export { Logo };