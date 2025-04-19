import React, { useEffect, useRef } from 'react';

const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Mouse position
    let mouse = { x: 0, y: 0 };
    let lastMouse = { x: 0, y: 0 };
    
    // Update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    // Create particles
    const particles: Particle[] = [];
    const particlesCount = 15;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      lifetime: number;
      maxLifetime: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.maxLifetime = 30;
        this.lifetime = this.maxLifetime;
        
        // Random color from neon palette
        const colors = ['#1BE7FF', '#00FFAB', '#9C27B0'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.lifetime--;
      }
      
      draw() {
        const opacity = this.lifetime / this.maxLifetime;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * opacity, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new particles if mouse has moved
      if (mouse.x !== lastMouse.x || mouse.y !== lastMouse.y) {
        for (let i = 0; i < particlesCount; i++) {
          particles.push(new Particle(
            mouse.x + (Math.random() - 0.5) * 10,
            mouse.y + (Math.random() - 0.5) * 10
          ));
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Remove dead particles
        if (particles[i].lifetime <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default MouseTrail;