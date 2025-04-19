import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Waves, Shield, Zap } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Brain size={48} className="text-neon-purple" />,
      title: "Neural Integration",
      description: "Our devices connect directly to your neural pathways, enabling thought-based control and unprecedented responsiveness."
    },
    {
      icon: <Waves size={48} className="text-neon-blue" />,
      title: "Holographic Displays",
      description: "Experience information in true 3D with our advanced holographic projection technology that feels tangible."
    },
    {
      icon: <Shield size={48} className="text-neon-green" />,
      title: "Quantum Security",
      description: "Military-grade encryption protects your data with quantum algorithms that adapt to potential threats."
    },
    {
      icon: <Zap size={48} className="text-error" />,
      title: "Perpetual Power",
      description: "Our proprietary energy systems ensure your devices remain charged for weeks without traditional power sources."
    }
  ];
  
  return (
    <section className="py-20 bg-cosmic-dark relative overflow-hidden">
      {/* Glowing Lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold mb-4 neon-text"
          >
            REVOLUTIONARY TECHNOLOGY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 max-w-xl mx-auto"
          >
            Our innovations go beyond conventional technology, creating entirely new paradigms of human-machine interaction.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 relative"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-0 right-0 w-px h-8 bg-neon-blue opacity-70"></div>
                <div className="absolute top-0 right-0 w-8 h-px bg-neon-blue opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <div className="absolute bottom-0 left-0 w-px h-8 bg-neon-blue opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-8 h-px bg-neon-blue opacity-70"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;