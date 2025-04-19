export interface Product {
  id: string;
  name: string;
  category: 'ai' | 'ar' | 'control';
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  modelUrl?: string;
  rating: number;
  reviews: Review[];
  inStock: boolean;
  new: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: 'tech' | 'future' | 'products' | 'ai';
  hasAudio: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface UserOrder {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  trackingCode: string;
  products: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}