"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection } from "../components/Motion";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            Contact <span className="gold-text-gradient">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg">
            General, franchise, media and careers. Reach the Papa Pasta team.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-pp-tertiary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MotionSection>
            <div>
              <h2 className="text-pp-on-surface font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 text-sm">
                {[
                  { label: "General", email: "hello@papapasta.co.za" },
                  { label: "Franchise Enquiries", email: "franchise@papapasta.co.za" },
                  { label: "Press & Media", email: "media@papapasta.co.za" },
                  { label: "Careers", email: "careers@papapasta.co.za" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pp-gold mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-pp-on-surface">{item.label}</p>
                      <p className="text-pp-primary-60/60">{item.email}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pp-gold mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-pp-on-surface">Head Office</p>
                    <p className="text-pp-primary-60/60">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            {submitted ? (
              <div className="bg-pp-gold/10 border border-pp-gold/30 rounded-2xl p-8 text-center">
                <p className="text-pp-gold font-semibold text-lg font-serif">Message Sent</p>
                <p className="text-pp-primary-60/60 text-sm mt-2">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-pp-black/5">
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Name" className="input-field" />
                    <input required type="email" placeholder="Email" className="input-field" />
                  </div>
                  <select className="w-full input-field text-pp-primary-60/60">
                    <option>General Enquiry</option>
                    <option>Franchise Interest</option>
                    <option>Press / Media</option>
                    <option>Careers</option>
                    <option>Complaint / Feedback</option>
                  </select>
                  <textarea required rows={4} placeholder="Your message..." className="w-full input-field" />
                  <button type="submit" className="w-full btn-gold-glow rounded-md bg-pp-primary px-6 py-3 text-sm font-semibold text-pp-on-primary hover:bg-pp-primary-80 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </MotionSection>
        </div>
      </section>
    </>
  );
}
