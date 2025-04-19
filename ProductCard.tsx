import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { formatPrice } from '../../lib/utils';
import { Product } from '../../types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const tiltOptions = {
  max: 15,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.3,
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Tilt options={tiltOptions} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="neon-card h-full"
      >
        <Link to={`/products/${product.id}`} className="block h-full">
          <div className="relative overflow-hidden rounded-t-lg mb-4 aspect-[4/3]">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {product.new && (
              <div className="absolute top-2 right-2 bg-neon-purple text-white text-xs font-bold px-2 py-1 rounded z-10">
                NEW
              </div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-cosmic-dark/80 flex items-center justify-center z-10">
                <p className="text-error font-heading text-lg">COMING SOON</p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cosmic-dark to-transparent" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-neon-blue font-heading text-lg">{product.name}</h3>
              <span className="font-heading text-neon-green">{formatPrice(product.price)}</span>
            </div>
            
            <p className="text-sm text-slate-300 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating) 
                        ? 'text-neon-blue fill-neon-blue' 
                        : 'text-slate-500'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-slate-300">{product.rating.toFixed(1)}</span>
            </div>
            
            <div className="pt-3 mt-auto">
              <div className={`text-xs py-1 px-2 rounded inline-flex items-center font-heading
                ${product.category === 'ai' ? 'bg-neon-purple/20 text-neon-purple' : ''}
                ${product.category === 'ar' ? 'bg-neon-blue/20 text-neon-blue' : ''}
                ${product.category === 'control' ? 'bg-neon-green/20 text-neon-green' : ''}
              `}>
                {product.category.toUpperCase()}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </Tilt>
  );
};

export { ProductCard };