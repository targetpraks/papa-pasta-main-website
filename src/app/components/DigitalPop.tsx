"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface DigitalPopProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  rows?: number;
  revealRadius?: number;
  fadeDuration?: number;
}

/**
 * DigitalPop — cursor-tracking cyberpunk color reveal via backdrop-filter grid.
 *
 * A coarse grid of invisible cells overlays the hero. Each cell starts with
 * backdrop-filter: grayscale(1), making everything behind it monochrome.
 * When the mouse enters a cell cluster, those cells become transparent,
 * revealing the original cyberpunk colors underneath.
 *
 * The result: a "digital rain" / pixel-pop trail that follows the cursor.
 */
export default function DigitalPop({
  children,
  className = "",
  cols = 12,
  rows = 10,
  revealRadius = 1,
  fadeDuration = 800,
}: DigitalPopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCells, setActiveCells] = useState<Set<number>>(new Set());
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const totalCells = cols * rows;

  const activate = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalCells) return;

      setActiveCells((prev) => {
        const next = new Set(prev);
        next.add(index);
        return next;
      });

      const existing = timeoutsRef.current.get(index);
      if (existing) clearTimeout(existing);

      const id = setTimeout(() => {
        setActiveCells((prev) => {
          const next = new Set(prev);
          next.delete(index);
          return next;
        });
        timeoutsRef.current.delete(index);
      }, fadeDuration);

      timeoutsRef.current.set(index, id);
    },
    [totalCells, fadeDuration]
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * cols;
      const y = ((e.clientY - rect.top) / rect.height) * rows;

      const cx = Math.floor(x);
      const cy = Math.floor(y);

      for (let dy = -revealRadius; dy <= revealRadius; dy++) {
        for (let dx = -revealRadius; dx <= revealRadius; dx++) {
          const col = cx + dx;
          const row = cy + dy;
          if (col >= 0 && col < cols && row >= 0 && row < rows) {
            activate(row * cols + col);
          }
        }
      }
    },
    [cols, rows, revealRadius, activate]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", onMouseMove);
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current.clear();
    };
  }, [onMouseMove]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Layer 1 — original cyberpunk colors */}
      <div
        className="relative z-0"
        style={{
          ["--color-pp-neon-cyan" as string]: "#00ffff",
          ["--color-pp-neon-pink" as string]: "#ff00ff",
          ["--color-pp-neon-lime" as string]: "#39ff14",
          ["--color-pp-neon-orange" as string]: "#ff4500",
          ["--color-pp-neon-violet" as string]: "#bf00ff",
          ["--color-pp-gold" as string]: "#d4af37",
          ["--color-pp-gold-light" as string]: "#f0d878",
          ["--color-pp-gold-dark" as string]: "#b8962e",
        }}
      >
        {children}
      </div>

      {/* Layer 2 — grayscale grid overlay */}
      <div
        className="absolute inset-0 z-10 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: totalCells }, (_, i) => {
          const isActive = activeCells.has(i);
          return (
            <div
              key={i}
              className="w-full h-full"
              style={{
                backgroundColor: isActive ? "transparent" : "rgba(0,0,0,0.02)",
                backdropFilter: isActive ? "none" : "grayscale(1)",
                WebkitBackdropFilter: isActive ? "none" : "grayscale(1)",
                transitionProperty: "backdrop-filter, -webkit-backdrop-filter, background-color",
                transitionDuration: isActive ? "80ms" : `${fadeDuration}ms`,
                transitionTimingFunction: "ease-out",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
