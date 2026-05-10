"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { NeonSplatCanvas } from "./NeonSplat";

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "fill" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

export default function NeonButton({
  children,
  href,
  onClick,
  variant = "fill",
  size = "md",
  className = "",
  external = false,
  type = "button",
}: NeonButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const baseClasses = `
    ${sizeClasses[size]}
    font-medium uppercase tracking-[0.15em]
    rounded-md
    transition-all duration-200
    inline-flex items-center justify-center gap-2
    whitespace-nowrap
  `;

  const variantClasses = {
    fill: "btn-neon bg-black text-white border-2 border-black hover:bg-black/90",
    outline:
      "btn-neon-outline bg-transparent text-black border-2 border-black hover:text-white",
    ghost: "hover:bg-black/5 text-black",
  };

  const content = (
    <NeonSplatCanvas>
      <button
        type={href ? undefined : type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    </NeonSplatCanvas>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return content;
}
