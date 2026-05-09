"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MotionSection } from "../components/Motion";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string) || "";

    setTimeout(() => {
      setLoading(false);
      if (email.toLowerCase().includes("fail")) {
        setError("Network error. Please try again later.");
      } else {
        setSubmitted(true);
      }
    }, 800);
  };

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
                      <p className="text-pp-primary-60">{item.email}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pp-gold mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-pp-on-surface">Head Office</p>
                    <p className="text-pp-primary-60">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            {submitted ? (
              <div aria-live="polite" className="bg-pp-gold/10 border border-pp-gold/30 rounded-2xl p-8 text-center">
                <p className="text-pp-gold font-semibold text-lg font-serif">Message Sent</p>
                <p className="text-pp-primary-60 text-sm mt-2">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-pp-surface-elevated rounded-2xl p-6 shadow-sm border border-pp-black/5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-pp-on-surface mb-1">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        type="text"
                        placeholder="Your name"
                        aria-invalid={error ? "true" : undefined}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-pp-on-surface mb-1">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        aria-invalid={error ? "true" : undefined}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-reason" className="block text-sm font-medium text-pp-on-surface mb-1">Reason</label>
                    <select
                      id="contact-reason"
                      name="reason"
                      required
                      aria-invalid={error ? "true" : undefined}
                      className="w-full input-field text-pp-primary-60"
                    >
                      <option value="" disabled>Select a reason...</option>
                      <option value="general">General Enquiry</option>
                      <option value="franchise">Franchise Interest</option>
                      <option value="press">Press / Media</option>
                      <option value="careers">Careers</option>
                      <option value="feedback">Complaint / Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-pp-on-surface mb-1">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Your message..."
                      aria-invalid={error ? "true" : undefined}
                      className="w-full input-field"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600" role="alert">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold-glow rounded-md bg-pp-primary px-6 py-3 text-sm font-semibold text-pp-on-primary hover:bg-pp-primary-80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
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
