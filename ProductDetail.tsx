import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById, getRelatedProducts } from '../data/products';
import { Product } from '../types';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { formatPrice } from '../lib/utils';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const fetchedProduct = getProductById(id);
      
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setRelatedProducts(getRelatedProducts(id, 3));
      }
      
      // Simulate loading for effect
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neon-blue font-heading">Loading Product Data...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl text-neon-blue mb-4">Product Not Found</h2>
          <p className="text-slate-300 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link to="/products" className="text-slate-300 hover:text-neon-blue transition-colors flex items-center gap-1">
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-panel p-2 aspect-square">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {product.new && (
            <div className="absolute top-4 right-4 bg-neon-purple text-white text-sm font-bold px-3 py-1 rounded">
              NEW
            </div>
          )}
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-cosmic-dark/80 flex items-center justify-center text-error font-heading text-2xl">
              COMING SOON
            </div>
          )}
        </motion.div>
        
        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`text-xs py-1 px-2 rounded inline-flex items-center font-heading
              ${product.category === 'ai' ? 'bg-neon-purple/20 text-neon-purple' : ''}
              ${product.category === 'ar' ? 'bg-neon-blue/20 text-neon-blue' : ''}
              ${product.category === 'control' ? 'bg-neon-green/20 text-neon-green' : ''}
            `}>
              {product.category.toUpperCase()}
            </div>
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl text-neon-blue mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < Math.floor(product.rating) 
                      ? 'text-neon-blue fill-neon-blue' 
                      : 'text-slate-500'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-slate-300">{product.rating.toFixed(1)} ({product.reviews.length} reviews)</span>
          </div>
          
          <p className="text-2xl text-neon-green font-heading mb-6">{formatPrice(product.price)}</p>
          
          <p className="text-slate-300 mb-8">{product.description}</p>
          
          <div className="mb-8">
            <h3 className="font-heading text-lg text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-neon-blue mr-2">•</span>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              size="lg" 
              icon={<ShoppingCart size={18} />}
              disabled={!product.inStock}
            >
              {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
            </Button>
            
            <Button variant="ghost" size="lg" icon={<Heart size={18} />}>
              WISHLIST
            </Button>
            
            <Button variant="ghost" size="lg" icon={<Share2 size={18} />}>
              SHARE
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="font-heading text-2xl text-neon-blue mb-8">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20"
      >
        <h2 className="font-heading text-2xl text-neon-blue mb-8">Customer Reviews</h2>
        
        {product.reviews.length > 0 ? (
          <div className="space-y-8">
            {product.reviews.map((review) => (
              <div key={review.id} className="glass-panel p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={review.avatar} 
                        alt={review.userName} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{review.userName}</p>
                      <p className="text-sm text-slate-400">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < review.rating 
                            ? 'text-neon-blue fill-neon-blue' 
                            : 'text-slate-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <h4 className="font-heading text-lg text-white mb-2">{review.title}</h4>
                <p className="text-slate-300">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel p-8 text-center">
            <p className="text-slate-300 mb-4">No reviews yet. Be the first to review this product!</p>
            <Button>Write a Review</Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductDetail;