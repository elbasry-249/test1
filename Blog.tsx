import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Button } from '../components/ui/Button';
import { ArrowRight, Calendar, HeadphonesIcon } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 neon-text">FUTURE INSIGHTS</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Dive into the latest developments, insights, and visions of tomorrow's technology landscape.
        </p>
      </motion.div>
      
      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-panel p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img 
                src={blogPosts[0].imageUrl} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4">
                <div className={`text-xs py-1 px-2 rounded inline-flex items-center font-heading
                  ${blogPosts[0].category === 'ai' ? 'bg-neon-purple/20 text-neon-purple' : ''}
                  ${blogPosts[0].category === 'future' ? 'bg-neon-blue/20 text-neon-blue' : ''}
                  ${blogPosts[0].category === 'products' ? 'bg-neon-green/20 text-neon-green' : ''}
                  ${blogPosts[0].category === 'tech' ? 'bg-error/20 text-error' : ''}
                `}>
                  {blogPosts[0].category.toUpperCase()}
                </div>
              </div>
              
              {blogPosts[0].hasAudio && (
                <div className="absolute top-4 right-4 bg-neon-blue/20 text-neon-blue text-xs font-bold px-2 py-1 rounded flex items-center">
                  <HeadphonesIcon size={14} className="mr-1" />
                  <span>AUDIO</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center text-slate-400 text-sm mb-2">
                <Calendar size={16} className="mr-1" />
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].author}</span>
              </div>
              
              <h2 className="font-heading text-2xl md:text-3xl text-neon-blue mb-4">{blogPosts[0].title}</h2>
              <p className="text-slate-300 mb-6">{blogPosts[0].excerpt}</p>
              
              <Button
                variant="default"
                size="md"
                icon={<ArrowRight size={16} />}
                className="self-start"
              >
                READ MORE
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="neon-card"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4">
                <div className={`text-xs py-1 px-2 rounded inline-flex items-center font-heading
                  ${post.category === 'ai' ? 'bg-neon-purple/20 text-neon-purple' : ''}
                  ${post.category === 'future' ? 'bg-neon-blue/20 text-neon-blue' : ''}
                  ${post.category === 'products' ? 'bg-neon-green/20 text-neon-green' : ''}
                  ${post.category === 'tech' ? 'bg-error/20 text-error' : ''}
                `}>
                  {post.category.toUpperCase()}
                </div>
              </div>
              
              {post.hasAudio && (
                <div className="absolute top-4 right-4 bg-neon-blue/20 text-neon-blue text-xs font-bold px-2 py-1 rounded flex items-center">
                  <HeadphonesIcon size={14} className="mr-1" />
                  <span>AUDIO</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center text-slate-400 text-xs mb-2">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
            
            <h3 className="font-heading text-xl text-neon-blue mb-2">{post.title}</h3>
            <p className="text-slate-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            
            <Link to={`/blog/${post.id}`} className="text-neon-blue font-heading text-sm flex items-center hover:underline">
              READ MORE
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;