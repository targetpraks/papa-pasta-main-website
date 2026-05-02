"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ------------------------------------------------------------------
   MotionSection — scroll-triggered fade + slide up
   ------------------------------------------------------------------ */
export function MotionSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   StaggerContainer — stagger children on scroll
   ------------------------------------------------------------------ */
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------
   ScrollProgressBar — optional top progress bar
   ------------------------------------------------------------------ */
export function ScrollProgressBar() {
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-pp-gold z-[60] origin-left"
      style={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0 }}
    />
  );
}

/* ------------------------------------------------------------------
   ParallaxImage — subtle parallax on scroll
   ------------------------------------------------------------------ */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.2,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      whileInView={{ y: 0 }}
      initial={{ y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
}

/* ------------------------------------------------------------------
   HoverScale — scale on hover wrapper
   ------------------------------------------------------------------ */
export function HoverScale({
  children,
  className = "",
  scale = 1.03,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   TextReveal — character/word reveal animation
   ------------------------------------------------------------------ */
export function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
