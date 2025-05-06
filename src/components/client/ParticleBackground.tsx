"use client";

import React, { useRef, useEffect, useState } from 'react';
import { BackgroundCanvas } from '@/lib/BackgroundCanvas';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const handleMouseMove = (e: MouseEvent) => {
      backgroundCanvas.updateMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const backgroundCanvas = BackgroundCanvas.getInstance(canvas);
    backgroundCanvas.start();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      backgroundCanvas.stop();
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        filter: 'blur(0.5px) brightness(0.6)',
        mixBlendMode: 'screen'
      }}
    />
  );
};