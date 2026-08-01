'use client';

import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Floating tech & security code snippets
    const hexSnippets = ['0x7F', 'SYN', 'ACK', 'SEC', 'HTB', '0x4A', 'TLS', '0x00', 'SHA256', 'AES', 'RSA2048', 'WPA3'];
    const floatingHex = Array.from({ length: 20 }, () => ({
      text: hexSnippets[Math.floor(Math.random() * hexSnippets.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -0.2 - Math.random() * 0.3,
      alpha: Math.random() * 0.15 + 0.04,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Floating Tech & Security Code Characters in #6EA8FE
      ctx.font = '11px monospace';
      floatingHex.forEach((h) => {
        h.y += h.vy;
        if (h.y < 0) {
          h.y = height;
          h.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(110, 168, 254, ${h.alpha})`;
        ctx.fillText(h.text, h.x, h.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 tech-grid-pattern opacity-80" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />
    </div>
  );
};
