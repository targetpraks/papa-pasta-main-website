"use client";

import { useRef, useEffect, useCallback } from "react";

const NEON_COLORS = [
  "#ffffff", // pink
  "#ffffff", // cyan
  "#ffffff", // lime
  "#ffffff", // orange
  "#ffffff", // violet
];

function randomColor() {
  return NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
}

interface Splat {
  x: number;
  y: number;
  r: number;
  color: string;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
  rings: { r: number; alpha: number }[];
}

export function spawnNeonSplat(
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  intensity: number = 1
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const splats: Splat[] = [];
  const count = Math.floor(3 * intensity) + 2;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 60 * intensity;
    splats.push({
      x: x + Math.cos(angle) * dist,
      y: y + Math.sin(angle) * dist,
      r: (15 + Math.random() * 35) * intensity,
      color: randomColor(),
      life: 1,
      maxLife: 20 + Math.random() * 20,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      rings: Array.from({ length: 3 }, () => ({
        r: 1 + Math.random() * 2,
        alpha: 0.3 + Math.random() * 0.4,
      })),
    });
  }

  let frame = 0;
  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    splats.forEach((s) => {
      s.life--;
      if (s.life <= 0) return;
      alive = true;
      s.x += s.vx;
      s.y += s.vy;
      const progress = s.life / s.maxLife;

      // Main splat blob
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.filter = `blur(${8 * progress}px)`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * progress, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = progress * 0.6;
      ctx.fill();
      ctx.restore();

      // Inner rings
      s.rings.forEach((ring, ri) => {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.filter = `blur(${1 + ri * 2}px)`;
        ctx.beginPath();
        ctx.arc(
          s.x + Math.sin(frame * 0.1 + ri) * 5,
          s.y + Math.cos(frame * 0.1 + ri) * 5,
          (s.r * 0.5 * progress) / (ri + 1),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = s.color;
        ctx.globalAlpha = ring.alpha * progress;
        ctx.fill();
        ctx.restore();
      });

      // Chromatic aberration offset
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = `blur(${2 * progress}px) hue-rotate(${Math.random() * 60}deg)`;
      ctx.beginPath();
      ctx.arc(s.x + 3, s.y, s.r * 0.7 * progress, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.globalAlpha = progress * 0.15;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = `blur(${2 * progress}px) hue-rotate(${Math.random() * 60}deg)`;
      ctx.beginPath();
      ctx.arc(s.x - 3, s.y, s.r * 0.7 * progress, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.globalAlpha = progress * 0.15;
      ctx.fill();
      ctx.restore();
    });

    frame++;
    if (alive) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(animate);
}

/* ────────────────────────────────────────────────
   NEON SPLAT CANVAS OVERLAY (for wrapping buttons)
   ──────────────────────────────────────────────── */
export function NeonSplatCanvas({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (rect.width + 80) * dpr;
      canvas.height = (rect.height + 80) * dpr;
      canvas.style.width = `${rect.width + 80}px`;
      canvas.style.height = `${rect.height + 80}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      spawnNeonSplat(
        canvas,
        (rect.width + 80) / 2,
        (rect.height + 80) / 2,
        1.5
      );
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      <canvas
        ref={canvasRef}
        className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] -z-10 pointer-events-none"
      />
      {children}
    </div>
  );
}
