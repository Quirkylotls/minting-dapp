'use client';

import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameCount = 0;
    const maxElements = 50;
    const sparkleInterval = 300;
    const bubbleInterval = 3000;

    // Create sparkles
    const createSparkle = () => {
      if (container.children.length > maxElements) {
        return;
      }
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animation = `sparkle ${0.5 + Math.random() * 0.5}s ease-in-out`;
      
      const colors = ['#fff', '#ffd700', '#ff69b4', '#00ffff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.boxShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;
      
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    };

    // Animation intervals with reduced frequency
    const sparkleTimer = setInterval(createSparkle, sparkleInterval);
    const bubbleTimer = setInterval(createBubble, bubbleInterval);

    // Performance monitoring with higher threshold
    const performanceCheck = setInterval(() => {
      if (frameCount > 120) {
        console.warn("Performance warning: High animation load");
      }
      frameCount = 0;
    }, 1000);

    return () => {
      clearInterval(sparkleTimer);
      clearInterval(bubbleTimer);
      clearInterval(performanceCheck);
    };
  }, []);

  return <div ref={containerRef} className="animation-wrapper" />;
} 

function createBubble(): void {
    throw new Error('Function not implemented.');
}
