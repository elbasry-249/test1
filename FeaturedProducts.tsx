import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../ui/ProductCard';
import { Button } from '../ui/Button';
import { products } from '../../data/products';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // Get 3 featured products
  const featuredProducts = products.slice(0, 3);
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold mb-4 neon-text"
          >
            FEATURED TECH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 max-w-xl mx-auto"
          >
            Discover our most advanced and sought-after innovations, bridging the gap between today and tomorrow.
          </motion.p>
        </div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <Button size="lg" icon={<ArrowRight size={18} />}>
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;