import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "NEONVERSE's NeuroLink has fundamentally changed how I interact with technology. It's like my devices can read my mind—because they literally can.",
      author: "Dr. Alex Chen",
      title: "Neuroscientist",
      image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg",
      stars: 5
    },
    {
      quote: "The HoloLens X1 feels like having superpowers. Information appears exactly when and where I need it, making my work as an architect vastly more efficient.",
      author: "Sophia Rodriguez",
      title: "Lead Architect",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      stars: 5
    },
    {
      quote: "As a developer, the Quantum Band has become an extension of my creativity. I can prototype in mid-air and control my entire workflow with simple gestures.",
      author: "Jamal Williams",
      title: "Software Engineer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      stars: 4
    }
  ];
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold mb-4 neon-text"
          >
            VOICES FROM THE FUTURE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 max-w-xl mx-auto"
          >
            Hear from the pioneers who are already living in tomorrow with our breakthrough technology.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="neon-card flex flex-col"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.stars 
                        ? 'text-neon-blue fill-neon-blue' 
                        : 'text-slate-500'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="flex-grow">
                <p className="text-slate-200 italic mb-6">"{testimonial.quote}"</p>
              </blockquote>
              
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;