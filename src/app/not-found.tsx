import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="line-accent-neon mx-auto mb-6" />
        <h1
          className="glitch-text font-serif text-8xl sm:text-[160px] font-bold mb-2 tracking-tighter leading-none"
          data-text="404"
          style={{
            background:
              "linear-gradient(135deg, #00ffff 0%, #ff00ff 25%, #39ff14 50%, #bf00ff 75%, #00ffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% 200%",
            animation: "neon-shimmer 3s ease infinite",
          }}
        >
          404
        </h1>
        <p className="text-white/65 text-lg mb-10 leading-relaxed">
          This zone does not exist. The bowl you are looking for has been
          retired or never existed.
        </p>
        <Link
          href="/"
          className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
