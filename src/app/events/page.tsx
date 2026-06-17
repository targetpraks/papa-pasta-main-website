"use client";

import { motion } from "framer-motion";
import { events } from "../../lib/events";
import { StaggerContainer, staggerChild } from "../components/Motion";

export default function Page() {
  return (
    <>
      <header className="bg-black text-white py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8 hero-grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            <span className="neon-text-gradient">Events</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/55 max-w-2xl mx-auto text-lg">
            Store launches, bowl drops, tasting tours, and community TakeOvers. Past events are archived; live events show their real status.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-6">
            {events.map((ev) => {
              const parts = ev.date.split(" ");
              const day = parts[0];
              const rest = parts.slice(1).join(" ");
              const isPast = ev.status === "Past Event";
              return (
                <motion.div key={ev.name} variants={staggerChild} className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-md p-6 border-l-4 transition-shadow duration-300 ${isPast ? "bg-black/[0.03] border-black/20 opacity-70" : "bg-white border-cyan-400 shadow-[0_0_24px_rgba(0,255,255,0.12)]"}`}>
                  <div className="sm:w-40 flex-shrink-0">
                    <div className="font-bold text-xl font-serif">{day}</div>
                    <div className="text-black text-sm font-medium">{rest}</div>
                    <div className="text-black/40 text-xs mt-1">{ev.time}</div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-lg font-semibold text-black">{ev.name}</h2>
                    <p className="text-sm text-black/50 mt-1">{ev.loc}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-sm border ${ev.status === "RSVP Open" ? "border-cyan-400 text-cyan-500" : ev.status === "Coming Soon" ? "border-fuchsia-400 text-fuchsia-500" : "border-black/20 text-black/40"}`}>
                    {ev.status}
                  </span>
                </motion.div>
              );
            })}
          </StaggerContainer>
          <div className="text-center pt-8">
            <p className="text-sm text-black/40 italic">
              Want to host a TakeOver or partner on an event? Email hello@papapasta.co.za
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
