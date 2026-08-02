"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Check } from "lucide-react";

const LAUNCH_DATE = new Date("2026-06-21T10:00:00+02:00"); // Winter solstice launch
const INITIAL_COUNTDOWN_NOW = new Date("2026-06-17T00:00:00+02:00").getTime();

type WindowWithGtag = Window & {
  gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
};

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(target.getTime() - INITIAL_COUNTDOWN_NOW);

  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const secs = Math.max(0, Math.floor(diff / 1000));
  return {
    days: Math.floor(secs / 86400),
    hours: Math.floor((secs % 86400) / 3600),
    minutes: Math.floor((secs % 3600) / 60),
    seconds: secs % 60,
    expired: secs <= 0,
  };
}

export default function BowlDropPage() {
  const { days, hours, minutes, seconds, expired } = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const joinWaitlist = () => {
    if (!email.includes("@")) return;
    setJoined(true);
    const analytics = typeof window !== "undefined" ? (window as WindowWithGtag).gtag : undefined;
    if (analytics) {
      analytics("event", "bowl_drop_waitlist", { email });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-white text-xs font-semibold uppercase tracking-[0.2em]">Limited Drop</span>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mt-4 mb-4 tracking-tight">Bowl Drop</h1>
          <p className="text-white/65 text-lg max-w-lg mx-auto">
            Numbered collectibles. Once they are gone, they are gone forever. Only 100 bowls per location.
          </p>
        </motion.div>

        {!expired ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((unit) => (
              <div key={unit.label} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <p className="font-mono text-3xl sm:text-4xl font-bold">{String(unit.value).padStart(2, "0")}</p>
                <p className="text-xs text-white/65 uppercase tracking-wider mt-1">{unit.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-12">
            <p className="text-white text-xl font-semibold">The drop is live.</p>
            <Link href="/order" className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold mt-4">
              Order Now
            </Link>
          </div>
        )}

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
          {!joined ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Bell className="w-5 h-5 text-white" />
                <h2 className="text-lg font-semibold">Join the Waitlist</h2>
              </div>
              <p className="text-sm text-white/65">
                Get notified the moment bowls go live. Waitlist members get priority access for the first 24 hours.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-white outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffff]"
                />
                <button
                  onClick={joinWaitlist}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffff]"
                >
                  Notify Me
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold">You are on the list.</p>
              <p className="text-sm text-white/65 mt-1">We will email you when Bowl Drop goes live.</p>
            </div>
          )}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { title: "The OG", subtitle: "Bowl #001–#050", desc: "House-made pasta, nonna's sauce." },
            { title: "Spicy Pomodoro", subtitle: "Bowl #051–#080", desc: "San Marzano tomatoes, Calabrian chili." },
            { title: "Carbonara Royale", subtitle: "Bowl #081–#100", desc: "Guanciale, egg yolk, pecorino." },
          ].map((bowl) => (
            <div key={bowl.title} className="bg-white/5 border border-white/10 rounded-lg p-5">
              <p className="font-semibold">{bowl.title}</p>
              <p className="text-xs text-white mt-1">{bowl.subtitle}</p>
              <p className="text-sm text-white/65 mt-2">{bowl.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
