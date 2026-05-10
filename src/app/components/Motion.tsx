"use client";

import { motion, useInView, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ═══════════════════════════════════════════════
   MOTION SECTION — Scroll-triggered fade in
   ═══════════════════════════════════════════════ */
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

export const staggerChildLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const staggerChildRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
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
      className="fixed top-0 left-0 right-0 h-[3px] bg-cyan-400 z-[60] origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

/* ═══════════════════════════════════════════════
   PARALLAX IMAGE
   ═══════════════════════════════════════════════ */
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
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  if (shouldReduce) {
    return <img ref={ref} src={src} alt={alt} className={className} />;
  }

  const y = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ y: y.get() * speed * -100 }}
      whileInView={{ y: 0 }}
      initial={{ y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
}

/* ═══════════════════════════════════════════════
   HOVER SCALE
   ═══════════════════════════════════════════════ */
export function HoverScale({
  children,
  className = "",
  scale = 1.05,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduce ? {} : { scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   TEXT REVEAL
   ═══════════════════════════════════════════════ */
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
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 0.8 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : shouldReduce ? { opacity: 0.8 } : { opacity: 0, y: 20 }}
      transition={
        shouldReduce
          ? { duration: 0.2, delay }
          : { duration: 0.6, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   CHARACTER REVEAL
   ═══════════════════════════════════════════════ */
export function CharReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: smoothEase,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════
   CLIP REVEAL
   ═══════════════════════════════════════════════ */
export function ClipReveal({
  children,
  className = "",
  delay = 0,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "bottom";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const clipPaths = {
    left: {
      hidden: "inset(0 100% 0 0)",
      visible: "inset(0 0% 0 0)",
    },
    right: {
      hidden: "inset(0 0 0 100%)",
      visible: "inset(0 0 0 0%)",
    },
    bottom: {
      hidden: "inset(100% 0 0 0)",
      visible: "inset(0% 0 0 0)",
    },
  };

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPaths[direction].hidden, opacity: 0 }}
      animate={
        isInView
          ? { clipPath: clipPaths[direction].visible, opacity: 1 }
          : { clipPath: clipPaths[direction].hidden, opacity: 0 }
      }
      transition={{ duration: 0.9, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   FADE IN UP — Simple wrapper
   ═══════════════════════════════════════════════ */
export function FadeInUp({
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
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 0.8 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : shouldReduce ? { opacity: 0.8 } : { opacity: 0, y: 30 }}
      transition={
        shouldReduce
          ? { duration: 0.2, delay }
          : { duration: 0.7, delay, ease: smoothEase }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
