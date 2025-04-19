import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timeline';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 neon-text">OUR VISION</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          We don't just sell products—we deliver a glimpse into tomorrow's world.
        </p>
      </motion.div>
      
      {/* Mission Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <img 
            src="https://images.pexels.com/photos/8386424/pexels-photo-8386424.jpeg" 
            alt="NEONVERSE Vision"
            className="w-full h-auto rounded-lg glass-panel p-2"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-heading text-3xl text-neon-blue mb-6">Bridging Science Fiction and Reality</h2>
          <p className="text-slate-300 mb-4">
            At NEONVERSE, we believe that the future isn't something to wait for—it's something to create. Founded in 2021, our mission has been to develop technology that fundamentally transforms how humans interact with machines and information.
          </p>
          <p className="text-slate-300 mb-4">
            We push the boundaries of neural interfaces, augmented reality, and artificial intelligence to create products that feel like they've been pulled from the pages of science fiction, yet function seamlessly in our present reality.
          </p>
          <p className="text-slate-300">
            Our team of visionaries, scientists, and engineers works tirelessly to ensure that every NEONVERSE product not only meets the highest standards of technological innovation but also enhances human potential in meaningful ways.
          </p>
        </motion.div>
      </div>
      
      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-20"
      >
        <h2 className="font-heading text-3xl text-neon-blue text-center mb-12">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-blue/30"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cosmic border-4 border-neon-blue z-10"></div>
              
              {/* Year */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-12 font-heading text-3xl text-neon-blue">
                {event.year}
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 glass-panel p-6 ${
                index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                <h3 className="font-heading text-xl text-white mb-3">{event.title}</h3>
                <p className="text-slate-300 mb-4">{event.description}</p>
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="font-heading text-3xl text-neon-blue text-center mb-12">The Visionaries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Dr. Eliza Chen",
              role: "Founder & CEO",
              image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
              bio: "Former neuroscientist with a vision to revolutionize human-machine interaction."
            },
            {
              name: "Marcus Williams",
              role: "CTO",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
              bio: "AI pioneer and former lead engineer at Quantum Dynamics."
            },
            {
              name: "Sophia Rodriguez",
              role: "Chief Design Officer",
              image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg",
              bio: "Award-winning industrial designer specializing in futuristic interfaces."
            },
            {
              name: "Dr. Jamal Hassan",
              role: "Head of Research",
              image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
              bio: "Quantum computing expert with 15 patents in neural interfaces."
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="neon-card text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-blue">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl text-white mb-1">{member.name}</h3>
              <p className="text-neon-blue text-sm font-heading mb-3">{member.role}</p>
              <p className="text-slate-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;