"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Blob = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      const movement = 0.1;

      const blob = blobRef.current;
      const rect = blob.getBoundingClientRect();
      const distX = mouseRef.current.x - rect.x - rect.width / 2;
      const distY = mouseRef.current.y - rect.y - rect.height / 2;

      blob.animate([
        {
          transform: `translate(${distX * movement}px, ${distY * movement}px) scale(${1 + Math.abs(distX) * 0.0001})`,
          borderRadius: `${50 + Math.abs(distX) * 0.05}% ${50 + Math.abs(distY) * 0.05}% ${50 + Math.abs(distX) * 0.05}% ${50 + Math.abs(distY) * 0.05}%`
        }
      ], {
        duration: 2000,
        fill: "forwards",
        easing: "ease-out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        ref={blobRef}
        className="absolute w-[800px] h-[800px] rounded-full bg-primary/30 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default Blob;