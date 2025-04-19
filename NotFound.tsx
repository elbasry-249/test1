import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <h1 className="font-heading text-8xl text-neon-blue mb-6">404</h1>
        <h2 className="font-heading text-2xl text-white mb-4">Signal Lost</h2>
        <p className="text-slate-300 mb-8">
          The coordinates you're trying to reach don't exist in this dimension. Our quantum computers couldn't locate the requested page.
        </p>
        <Link to="/">
          <Button icon={<Home size={18} />}>
            RETURN TO BASE
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;