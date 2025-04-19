import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { Brain, Eye, Cpu, Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    newOnly: false,
    inStock: false
  });
  
  const categories = [
    { id: 'ai', name: 'AI Devices', icon: <Brain size={24} /> },
    { id: 'ar', name: 'AR Systems', icon: <Eye size={24} /> },
    { id: 'control', name: 'Control Units', icon: <Cpu size={24} /> },
  ];
  
  const filteredProducts = products.filter(product => {
    if (activeCategory && product.category !== activeCategory) return false;
    if (activeFilters.newOnly && !product.new) return false;
    if (activeFilters.inStock && !product.inStock) return false;
    return true;
  });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 neon-text">OUR TECHNOLOGY</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Browse our collection of cutting-edge devices designed to transform your relationship with technology and the world around you.
        </p>
      </motion.div>
      
      {/* Category Filters */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
              activeCategory === null
                ? 'bg-neon-blue/20 text-neon-blue'
                : 'bg-cosmic-dark/60 text-slate-300 hover:bg-cosmic-dark'
            }`}
          >
            <Filter size={20} />
            <span className="font-heading">All Products</span>
          </motion.button>
          
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                activeCategory === category.id
                  ? 'bg-neon-blue/20 text-neon-blue'
                  : 'bg-cosmic-dark/60 text-slate-300 hover:bg-cosmic-dark'
              }`}
            >
              {category.icon}
              <span className="font-heading">{category.name}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Additional Filters */}
        <div className="flex justify-center mt-4 gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 bg-cosmic-dark border-neon-blue"
              checked={activeFilters.newOnly}
              onChange={() => setActiveFilters({
                ...activeFilters,
                newOnly: !activeFilters.newOnly
              })}
            />
            <span className="text-slate-300">New Arrivals Only</span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 bg-cosmic-dark border-neon-blue"
              checked={activeFilters.inStock}
              onChange={() => setActiveFilters({
                ...activeFilters,
                inStock: !activeFilters.inStock
              })}
            />
            <span className="text-slate-300">In Stock Only</span>
          </label>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-slate-300 text-lg">No products match your current filters. Try adjusting your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;