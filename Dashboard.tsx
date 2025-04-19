import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Rocket, Package, User, CreditCard, Settings, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');
  
  const mockOrders = [
    {
      id: 'ORD-8392',
      date: '2025-03-15',
      status: 'processing',
      trackingCode: 'NEO-756821',
      products: [
        {
          productId: 'neuro-link-elite',
          name: 'NeuroLink Elite',
          quantity: 1,
          price: 1299
        }
      ],
      total: 1299
    },
    {
      id: 'ORD-7261',
      date: '2025-02-28',
      status: 'shipped',
      trackingCode: 'NEO-645190',
      products: [
        {
          productId: 'quantum-band',
          name: 'Quantum Band',
          quantity: 1,
          price: 499
        },
        {
          productId: 'holo-lens-x1',
          name: 'HoloLens X1',
          quantity: 1,
          price: 899
        }
      ],
      total: 1398
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 neon-text">COMMAND CENTER</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Manage your journey through the NEONVERSE and track your technological acquisitions.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <div className="glass-panel p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-neon-blue">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-white text-xl">Alex Morgan</h3>
              <p className="text-neon-blue text-sm">Level 2 Pioneer</p>
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center px-4 py-3 rounded transition-colors ${
                  activeTab === 'orders' 
                    ? 'bg-neon-blue/20 text-neon-blue' 
                    : 'text-slate-300 hover:bg-cosmic-dark hover:text-white'
                }`}
              >
                <Package size={18} className="mr-3" />
                <span className="font-heading text-sm">Orders</span>
              </button>
              
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-3 rounded transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-neon-blue/20 text-neon-blue' 
                    : 'text-slate-300 hover:bg-cosmic-dark hover:text-white'
                }`}
              >
                <User size={18} className="mr-3" />
                <span className="font-heading text-sm">Profile</span>
              </button>
              
              <button
                onClick={() => setActiveTab('payment')}
                className={`w-full flex items-center px-4 py-3 rounded transition-colors ${
                  activeTab === 'payment' 
                    ? 'bg-neon-blue/20 text-neon-blue' 
                    : 'text-slate-300 hover:bg-cosmic-dark hover:text-white'
                }`}
              >
                <CreditCard size={18} className="mr-3" />
                <span className="font-heading text-sm">Payment Methods</span>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-3 rounded transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-neon-blue/20 text-neon-blue' 
                    : 'text-slate-300 hover:bg-cosmic-dark hover:text-white'
                }`}
              >
                <Settings size={18} className="mr-3" />
                <span className="font-heading text-sm">Settings</span>
              </button>
              
              <button
                className="w-full flex items-center px-4 py-3 rounded text-error hover:bg-cosmic-dark transition-colors"
              >
                <LogOut size={18} className="mr-3" />
                <span className="font-heading text-sm">Logout</span>
              </button>
            </nav>
          </div>
        </motion.div>
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="glass-panel p-6">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="font-heading text-2xl text-neon-blue mb-6">Your Orders</h2>
                
                {mockOrders.length > 0 ? (
                  <div className="space-y-6">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="glass-panel p-6">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                          <div>
                            <h3 className="font-heading text-white text-lg mb-1">{order.id}</h3>
                            <p className="text-slate-400 text-sm">Ordered on {order.date}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className={`inline-block px-3 py-1 rounded font-heading text-xs ${
                              order.status === 'processing' ? 'bg-warning/20 text-warning' :
                              order.status === 'shipped' ? 'bg-success/20 text-success' :
                              'bg-neon-blue/20 text-neon-blue'
                            }`}>
                              {order.status.toUpperCase()}
                            </div>
                            
                            <p className="text-slate-400 text-sm mt-1">
                              Tracking: {order.trackingCode}
                            </p>
                          </div>
                        </div>
                        
                        <div className="border-t border-white/10 pt-4 mt-4">
                          {order.products.map((product, index) => (
                            <div key={index} className="flex justify-between mb-2">
                              <div className="flex-grow">
                                <p className="text-white">{product.name} <span className="text-slate-400">x{product.quantity}</span></p>
                              </div>
                              <p className="text-neon-green">${product.price.toFixed(2)}</p>
                            </div>
                          ))}
                          
                          <div className="border-t border-white/10 pt-4 mt-4 flex justify-between">
                            <p className="font-heading text-white">Total</p>
                            <p className="font-heading text-neon-green">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-between items-center">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                          
                          <div className="flex items-center">
                            <Rocket size={18} className="text-neon-blue mr-2" />
                            <div className="w-48 h-1 bg-cosmic-dark rounded">
                              <div 
                                className={`h-full rounded ${
                                  order.status === 'processing' ? 'w-1/3 bg-warning' :
                                  order.status === 'shipped' ? 'w-2/3 bg-neon-blue' :
                                  'w-full bg-success'
                                }`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Package size={48} className="text-slate-500 mx-auto mb-4" />
                    <p className="text-slate-300 mb-4">You haven't placed any orders yet.</p>
                    <Button>Start Shopping</Button>
                  </div>
                )}
              </div>
            )}
            
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="font-heading text-2xl text-neon-blue mb-6">Your Profile</h2>
                
                <div className="glass-panel p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full py-2 px-3 bg-cosmic border border-white/20 rounded focus:border-neon-blue outline-none text-white"
                        value="Alex"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full py-2 px-3 bg-cosmic border border-white/20 rounded focus:border-neon-blue outline-none text-white"
                        value="Morgan"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full py-2 px-3 bg-cosmic border border-white/20 rounded focus:border-neon-blue outline-none text-white"
                        value="alex.morgan@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full py-2 px-3 bg-cosmic border border-white/20 rounded focus:border-neon-blue outline-none text-white"
                        value="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 mb-2">Address</label>
                    <textarea 
                      className="w-full py-2 px-3 bg-cosmic border border-white/20 rounded focus:border-neon-blue outline-none text-white"
                      rows={3}
                      value="123 Future Street, Neo District, Cyber City, 2077"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button>Update Profile</Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Placeholder for other tabs */}
            {(activeTab === 'payment' || activeTab === 'settings') && (
              <div className="text-center py-12">
                <Settings size={48} className="text-slate-500 mx-auto mb-4" />
                <h2 className="font-heading text-xl text-white mb-2">
                  {activeTab === 'payment' ? 'Payment Methods' : 'Settings'}
                </h2>
                <p className="text-slate-300 mb-6">This section is coming soon in a future update.</p>
                <Button variant="ghost">Return to Orders</Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;