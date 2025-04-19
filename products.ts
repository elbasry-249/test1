import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'neuro-link-elite',
    name: 'NeuroLink Elite',
    category: 'ai',
    price: 1299,
    description: 'The ultimate neural interface that connects directly to your thoughts. Experience a new level of control with just your mind.',
    features: [
      'Thought-to-text technology',
      'Seamless app integration',
      'Voice assistant capabilities',
      'Holographic UI projection',
      '24/7 neural monitoring'
    ],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    rating: 4.8,
    reviews: [
      {
        id: 'rev1',
        userId: 'user1',
        userName: 'CyberNaut42',
        avatar: 'https://images.pexels.com/photos/7241328/pexels-photo-7241328.jpeg',
        rating: 5,
        title: 'Mind-blowing experience',
        comment: 'It\'s like having a superpower. I can control my entire smart home just by thinking about it!',
        date: '2025-01-15'
      }
    ],
    inStock: true,
    new: true
  },
  {
    id: 'holo-lens-x1',
    name: 'HoloLens X1',
    category: 'ar',
    price: 899,
    description: 'Next-generation AR glasses that transform your world with holographic overlays. See data and interact with digital objects seamlessly.',
    features: [
      '8K resolution per eye',
      'Full spatial mapping',
      'Gesture and voice control',
      'Neural feedback system',
      'Adaptive eye tracking'
    ],
    imageUrl: 'https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg',
    rating: 4.7,
    reviews: [],
    inStock: true,
    new: true
  },
  {
    id: 'quantum-band',
    name: 'Quantum Band',
    category: 'control',
    price: 499,
    description: 'A sleek wristband that controls all your devices with simple gestures. Features holographic projections for an enhanced interface.',
    features: [
      'Universal device control',
      'Holographic display',
      'Neural feedback',
      'Biometric security',
      'Health monitoring'
    ],
    imageUrl: 'https://images.pexels.com/photos/7232452/pexels-photo-7232452.jpeg',
    rating: 4.5,
    reviews: [],
    inStock: true,
    new: false
  },
  {
    id: 'echo-pulse',
    name: 'Echo Pulse',
    category: 'ai',
    price: 799,
    description: 'An AI companion that learns your preferences and assists you throughout your day. It\'s like having your personal future assistant.',
    features: [
      'Advanced neural network',
      'Personality adaptation',
      'Voice recognition',
      'Emotion detection',
      'Real-time translation'
    ],
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    rating: 4.9,
    reviews: [],
    inStock: false,
    new: true
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(id: string, count: number = 3): Product[] {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, count);
}