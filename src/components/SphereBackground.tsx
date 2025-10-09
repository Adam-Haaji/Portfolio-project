import { useEffect, useRef } from 'react';

const SphereBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    const drawSphere = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.35;

      // Create multiple layers of spheres for depth
      for (let layer = 0; layer < 3; layer++) {
        const radius = baseRadius - layer * 50;
        const opacity = 0.15 - layer * 0.04;

        // Animated gradient
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          radius * 0.2,
          centerX,
          centerY,
          radius
        );

        const hue1 = 190 + Math.sin(time + layer) * 20;
        const hue2 = 240 + Math.cos(time + layer) * 20;

        gradient.addColorStop(0, `hsla(${hue1}, 95%, 55%, ${opacity * 1.5})`);
        gradient.addColorStop(0.5, `hsla(${hue2}, 80%, 65%, ${opacity})`);
        gradient.addColorStop(1, `hsla(${hue1}, 95%, 55%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add rotating particles
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2 + time;
        const distance = baseRadius * 0.8;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance * 0.5;
        
        ctx.fillStyle = `hsla(190, 95%, 55%, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 0.005;
      animationFrameId = requestAnimationFrame(drawSphere);
    };

    drawSphere();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default SphereBackground;
