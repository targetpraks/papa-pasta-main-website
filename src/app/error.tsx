"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="line-accent-neon mx-auto mb-6" />
        <h1
          className="font-mono text-5xl sm:text-7xl font-bold mb-4 tracking-tight"
          style={{
            background:
              "linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #39ff14 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          System Failure
        </h1>
        <p className="text-white/40 text-lg mb-8 leading-relaxed font-mono">
          Something went wrong in the kitchen. Our commissary engineers have been
          notified.
        </p>
        {error.digest && (
          <p className="text-white/20 text-sm mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Reload
          </button>
          <Link
            href="/"
            className="btn-neon-outline inline-flex items-center rounded-md border border-white/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
