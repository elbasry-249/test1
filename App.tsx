import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParticlesBackground } from './components/ui/ParticlesBackground';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import MouseTrail from './components/ui/MouseTrail';

function App() {
  return (
    <Router>
      <div className="relative font-body text-slate-100 min-h-screen overflow-hidden bg-cosmic">
        <ParticlesBackground />
        <MouseTrail />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;