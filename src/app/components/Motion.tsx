"use client";

import { motion, useInView, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ═══════════════════════════════════════════════
   MOTION SECTION — Scroll-triggered fade in
   ═══════════════════════════════════════════════ */
export function MotionSection({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 0.8 } : { opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : shouldReduce ? { opacity: 0.8 } : { opacity: 0, y: 50 }}
      transition={
        shouldReduce
          ? { duration: 0.2, delay }
          : { duration: 0.8, delay, ease: smoothEase }
      }
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   STAGGER CONTAINER
   ═══════════════════════════════════════════════ */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: shouldReduce ? 0 : staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   STAGGER CHILD VARIANTS
   ═══════════════════════════════════════════════ */
export const staggerChild = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const staggerChildScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

/* ═══════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════ */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const shouldReduce = useReducedMotion();

  if (shouldReduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-white z-[60] origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
