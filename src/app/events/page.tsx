"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerContainer, staggerChild } from "../components/Motion";

export default function Page() {
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Community
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            <span className="gold-text-gradient">Events</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg">
            Tastings, festivals, franchise discovery days and pop-ups. See where Papa Pasta is showing up next.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-pp-tertiary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-6">
            {[
              { name: "Cape Town Pasta Festival", date: "15 May 2026", time: "11:00\u201320:00", loc: "V&A Waterfront", open: true },
              { name: "Franchise Discovery Day", date: "3 June 2026", time: "09:00\u201312:00", loc: "Zoom & Cape Town HQ", open: true },
              { name: "Heritage Bowl Launch (Youth Day)", date: "16 June 2026", time: "All day", loc: "All Locations", open: false },
              { name: "Johannesburg Tasting Tour", date: "July 2026", time: "TBD", loc: "Rosebank + Sandton", open: false },
              { name: "Durban Beachfront Pop-Up", date: "August 2026", time: "TBD", loc: "Durban Promenade", open: false },
            ].map((ev) => {
              const parts = ev.date.split(" ");
              const day = parts[0];
              const rest = parts.slice(1).join(" ");
              return (
                <motion.div key={ev.name} variants={staggerChild}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white rounded-2xl p-6 shadow-sm border-l-4 border-white hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="sm:w-40 flex-shrink-0">
                    <div className="gold-text-gradient font-bold text-xl font-serif">{day}</div>
                    <div className="text-pp-on-surface text-sm font-medium">{rest}</div>
                    <div className="text-pp-primary-60/40 text-xs mt-1">{ev.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-pp-on-surface">{ev.name}</h3>
                    <p className="text-sm text-pp-primary-60/50 mt-1">{ev.loc}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
                    ev.open ? "bg-white/15 text-white-dark" : "bg-pp-primary-60/10 text-pp-primary-60/50"
                  }`}>
                    {ev.open ? "RSVP Open" : "Soon"}
                  </span>
                </motion.div>
              );
            })}
          </StaggerContainer>
          <div className="text-center pt-8">
            <p className="text-sm text-pp-primary-60/40 italic">
              Want to host a TakeOver or partner on an event? Contact hello@papapasta.co.za
            </p>
          </div>
        </div>
      </section>
    </>
  );
}