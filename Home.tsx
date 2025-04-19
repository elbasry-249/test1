import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeatureShowcase from '../components/home/FeatureShowcase';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <FeatureShowcase />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default Home;