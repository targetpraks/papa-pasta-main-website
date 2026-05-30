"use client";

import { useRef, useEffect } from "react";

interface ColorRevealProps {
  children: React.ReactNode;
  className?: string;
  revealSize?: number;
}

/**
 * ColorReveal — black & white by default, original colors revealed at cursor position.
 *
 * Renders children twice:
 *   Layer 1 (z-0): colored — interactive, always visible underneath
 *   Layer 2 (z-10): grayscale + mask — covers everything, but a radial gradient
 *   mask creates a transparent "spotlight" hole that follows the mouse.
 *
 * The hole reveals the colored Layer 1 beneath it.
 */
export default function ColorReveal({
  children,
  className = "",
  revealSize = 200,
}: ColorRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--rx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--ry", `${e.clientY - rect.top}px`);
    };

    const onLeave = () => {
      /* hide the spotlight off-canvas when mouse leaves */
      el.style.setProperty("--rx", "-9999px");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    /* initialise off-canvas so page loads fully B&W */
    el.style.setProperty("--rx", "-9999px");
    el.style.setProperty("--rs", `${revealSize}px`);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [revealSize]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Layer 1 — colored (original cyberpunk palette restored locally) */}
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

      {/* Layer 2 — grayscale mask overlay (inherits global white-mapped vars) */}
      <div
        className="absolute inset-0 z-10 grayscale pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage:
            "radial-gradient(circle var(--rs) at var(--rx, -9999px) var(--ry, -9999px), transparent 0%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--rs) at var(--rx, -9999px) var(--ry, -9999px), transparent 0%, black 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
