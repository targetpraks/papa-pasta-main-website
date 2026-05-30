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
            Join the Team
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            <span className="gold-text-gradient">Careers</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg">
            Join a team obsessed with pasta. Store, kitchen and franchise support roles available now.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-pp-tertiary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-pp-primary-60/60 mb-10">
            We are growing fast. If you love pasta, neon, and high standards, we want to hear from you.
          </p>
          <StaggerContainer className="space-y-4">
            {[
              { title: "Store Manager \u2014 Cape Town CBD", type: "Full-time", desc: "Lead a compact, high-energy team in our flagship location. Hospitality experience preferred." },
              { title: "Pasta Chef \u2014 Cape Town", type: "Full-time", desc: "Shape, sauce and serve with precision. Training provided on the Golden Blend method." },
              { title: "Commissary Kitchen Lead", type: "Full-time", desc: "Oversee daily pasta extrusion, sauce prep and quality control for the entire network." },
              { title: "Regional Franchise Coach", type: "Full-time", desc: "Travel between stores to train, audit and elevate brand standards across provinces." },
            ].map((job) => (
              <motion.div key={job.title} variants={staggerChild}
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-white hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-serif text-lg font-semibold text-pp-on-surface">{job.title}</h3>
                  <p className="text-xs text-white font-bold uppercase tracking-[0.15em] mt-1">{job.type}</p>
                  <p className="text-sm text-pp-primary-60/60 mt-2">{job.desc}</p>
                </div>
                <a href="mailto:careers@papapasta.co.za" className="btn-outline-gold inline-flex items-center rounded-md border-2 border-white/50 text-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-pp-on-surface whitespace-nowrap transition-colors duration-300">
                  <span>Apply</span>
                </a>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}