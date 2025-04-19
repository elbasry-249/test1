import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Video or Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic/90 to-cosmic opacity-90"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-12640-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="neon-text">STEP INTO THE</span>
            <br />
            <span className="neon-text-green">FUTURE</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Not just products, but a glimpse into tomorrow. Experience technology that blurs the line between science fiction and reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/products">
              <Button size="lg" className="min-w-40">
                <span>EXPLORE</span>
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="purple" size="lg" className="min-w-40">
                OUR VISION
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 1.2 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-14 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-neon-blue rounded-full animate-bounce mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;