"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChild, staggerChildScale } from "../components/Motion";

function CrestCreator() {
  const [c1, setC1] = useState("#FF6B35");
  const [c2, setC2] = useState("#004E89");
  const [c3, setC3] = useState("#1A936F");
  const crestName = `Crest Series ${c1.slice(1)}-${c2.slice(1)}-${c3.slice(1)}`;
  const bowlStyle: React.CSSProperties = {
    background: `linear-gradient(135deg, ${c1}, ${c2}, ${c3})`,
    borderRadius: "50%", aspectRatio: "1",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "white",
    fontSize: "1.2rem", textShadow: "0 2px 8px rgba(0,0,0,0.4)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)", transition: "background 0.6s ease",
  };

  return (
    <section className="bg-pp-primary text-pp-on-primary section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-12">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2">Step 1</p>
          <h2 className="text-pp-on-primary font-serif text-3xl sm:text-5xl font-bold mb-4">Create Your <span className="gold-text-gradient">Crest</span></h2>
          <p className="text-pp-on-primary/50 max-w-2xl mx-auto">
            Every Papa Pasta franchise gets a unique Living Crest colour identity.
            Drag the pickers below to design yours — this is the colour story your city will see.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionSection delay={0.1}>
            <div className="space-y-6">
              {[
                { label: "Primary", value: c1, setter: setC1 },
                { label: "Secondary", value: c2, setter: setC2 },
                { label: "Accent", value: c3, setter: setC3 },
              ].map((c) => (
                <div key={c.label} className="bg-pp-primary-80 rounded-xl p-4 border border-pp-gold/10 hover:border-pp-gold/30 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-pp-on-primary/80">{c.label} Colour</span>
                    <span className="text-xs font-mono text-pp-gold">{c.value}</span>
                  </div>
                  <input type="color" value={c.value} onChange={(e) => c.setter(e.target.value)} className="w-full h-10 cursor-pointer rounded-lg border-0 bg-transparent" />
                </div>
              ))}
              <div className="text-xs text-pp-on-primary/40 mt-2">Named: <strong className="text-pp-gold">{crestName}</strong></div>
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            <div className="flex flex-col items-center gap-6">
              <motion.div style={bowlStyle} className="w-64 max-w-full" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                PP
              </motion.div>
              <p className="text-sm text-pp-on-primary/40">Your crest on a franchise bowl</p>
              <img src="/images/packaging-franchisee-cups.png" alt="Franchisee cups preview" className="rounded-xl shadow-lg shadow-pp-gold/5 w-full max-w-sm" />
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}

function TerritoryMap() {
  const provinces = [
    { name: "Western Cape", status: "Available", col: "bg-pp-gold" },
    { name: "Eastern Cape", status: "Under Discussion", col: "bg-pp-grey" },
    { name: "Northern Cape", status: "Available", col: "bg-pp-gold" },
    { name: "Free State", status: "Available", col: "bg-pp-gold" },
    { name: "KwaZulu-Natal", status: "Committed", col: "bg-pp-charcoal" },
    { name: "North West", status: "Available", col: "bg-pp-gold" },
    { name: "Gauteng", status: "Under Discussion", col: "bg-pp-grey" },
    { name: "Mpumalanga", status: "Available", col: "bg-pp-gold" },
    { name: "Limpopo", status: "Available", col: "bg-pp-gold" },
  ];

  return (
    <section className="section-padding bg-pp-tertiary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-12">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2">Step 2</p>
          <h2 className="text-pp-on-surface font-serif text-3xl sm:text-5xl font-bold mb-4">Express Interest in a Territory</h2>
          <p className="text-pp-primary-60/60 max-w-2xl mx-auto">
            Pick your province. Gold means available. Grey signals active conversations. Dark means committed.
          </p>
        </MotionSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {provinces.map((p) => (
            <motion.div key={p.name} variants={staggerChildScale}
              className={`rounded-xl p-5 border bg-white hover:border-pp-gold/50 transition-all duration-300 cursor-pointer group ${p.status === "Committed" ? "opacity-60" : "hover:shadow-lg"}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${p.col}`}></div>
                <h3 className="font-serif text-lg font-semibold text-pp-on-surface group-hover:text-pp-gold transition-colors duration-300">{p.name}</h3>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded bg-pp-offwhite text-pp-primary-60/60">{p.status}</span>
            </motion.div>
          ))}
        </StaggerContainer>

        <MotionSection className="mt-10 flex justify-center">
          <img src="/images/colour-story-zone-map.png" alt="Territory zone map" className="rounded-2xl shadow-lg max-w-2xl w-full" />
        </MotionSection>
      </div>
    </section>
  );
}

function Financials() {
  const stats = [
    { label: "All-in Investment", value: "R1.14M", sub: "Store + equip + initial stock + working capital" },
    { label: "COGS", value: "20.7%", sub: "Industry-leading food cost through commissary scale" },
    { label: "EBITDA Margin", value: "21.6%", sub: "Month 12 projected" },
    { label: "Payback Period", value: "8 Months", sub: "Average across SA test cohort" },
    { label: "Store Size", value: "40 m\u00B2", sub: "Compact, high-throughput footprint" },
    { label: "Staff Count", value: "4\u20136", sub: "Per shift, fully trained by Papa Pasta Academy" },
  ];

  return (
    <section className="section-padding bg-pp-primary text-pp-on-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-12">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2">The Numbers</p>
          <h2 className="text-pp-on-primary font-serif text-3xl sm:text-5xl font-bold mb-4">Unit <span className="gold-text-gradient">Economics</span></h2>
          <p className="text-pp-on-primary/50 max-w-2xl mx-auto">
            Franchise sales is not about dreams — it is about maths. Here is the model that justifies the risk.
          </p>
        </MotionSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerChildScale} className="bg-pp-primary-80 rounded-2xl p-6 border border-pp-gold/10 text-center hover:border-pp-gold/30 transition-colors duration-300">
              <div className="gold-text-gradient font-serif text-3xl sm:text-4xl font-bold mb-1">{s.value}</div>
              <div className="font-semibold text-pp-on-primary/80 mb-2">{s.label}</div>
              <div className="text-xs text-pp-on-primary/40">{s.sub}</div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="section-padding bg-pp-tertiary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-10">
          <div className="line-accent mx-auto mb-4" />
          <p className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2">Step 4</p>
          <h2 className="text-pp-on-surface font-serif text-3xl sm:text-4xl font-bold mb-4">Submit Your Application</h2>
          <p className="text-pp-primary-60/60">Attach your custom crest, select your province, and tell us about your business experience.</p>
        </MotionSection>

        {submitted ? (
          <MotionSection>
            <div className="bg-pp-gold/10 border border-pp-gold/30 rounded-2xl p-8 text-center">
              <p className="text-pp-gold font-semibold text-lg font-serif">Application Received</p>
              <p className="text-pp-primary-60/60 text-sm mt-2">Our franchise team will review your submission and be in touch within 48 hours.</p>
            </div>
          </MotionSection>
        ) : (
          <MotionSection>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5 bg-white rounded-2xl p-8 shadow-sm border border-pp-primary/5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold transition-shadow" />
                <input required type="email" placeholder="Email" className="rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold transition-shadow" />
                <input required type="tel" placeholder="Phone" className="rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold transition-shadow" />
                <select className="rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold text-pp-primary-60/60 transition-shadow">
                  <option>Select Province</option>
                  {["Western Cape", "Eastern Cape", "Northern Cape", "Free State", "KwaZulu-Natal", "North West", "Gauteng", "Mpumalanga", "Limpopo"].map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <select className="w-full rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold text-pp-primary-60/60 transition-shadow">
                <option>Investment Range (Select one)</option>
                <option>R750K – R1M</option>
                <option>R1M – R1.5M</option>
                <option>R1.5M – R2M</option>
                <option>R2M+</option>
              </select>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold text-pp-primary-60/60 transition-shadow">
                  <option>Current Business Owner?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select className="w-full rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold text-pp-primary-60/60 transition-shadow">
                  <option>Previous Franchise Experience?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Tell us why you want to own a Papa Pasta franchise..." className="w-full rounded-md border border-pp-primary/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold transition-shadow" />

              <div className="bg-pp-tertiary rounded-xl p-4 border border-pp-gold/20">
                <p className="text-xs text-pp-primary-60/60 mb-2">Attach your custom crest (optional — create one above first):</p>
                <input type="file" accept="image/*" className="text-sm" />
              </div>

              <button type="submit" className="w-full btn-gold-glow rounded-md bg-pp-primary px-6 py-3 font-semibold text-pp-on-primary hover:bg-pp-primary-80 transition-colors duration-300">
                Submit Application
              </button>
            </form>
          </MotionSection>
        )}
      </div>
    </section>
  );
}

function SocialProofGallery() {
  const crests = [
    "/images/bowl-01-founding-crest.png",
    "/images/bowl-02-franchisee-colour-drops.png",
    "/images/bowl-03-sa-heritage-series.png",
    "/images/bowl-04-neon-gamer-series.png",
    "/images/bowl-05-takeover-partner-bowls.png",
    "/images/bowl-06-local-artist-collab.png",
  ];

  return (
    <section className="bg-pp-surface-dark text-pp-on-primary py-12 border-t border-pp-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-8">
          <h3 className="gold-text-gradient font-serif text-2xl font-bold mb-2">Community Gallery</h3>
          <p className="text-sm text-pp-on-primary/40">Past creations from prospective franchisees — every city gets a unique crest.</p>
        </MotionSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {crests.map((src, i) => (
            <motion.div key={i} variants={staggerChildScale} className="bg-pp-primary-80 rounded-xl p-2 border border-pp-gold/10 img-hover-lift">
              <img src={src} alt={`Crest ${i + 1}`} className="w-full h-auto rounded-lg" />
            </motion.div>
          ))}
        </StaggerContainer>

        <div className="text-center mt-8">
          <a href="/gallery/" className="text-sm font-medium text-pp-gold underline underline-offset-4 hover:text-pp-gold-light transition-colors duration-300">
            View Full Gallery &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default function FranchisePage() {
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">Franchise Sales</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Own a <span className="gold-text-gradient">Papa Pasta</span>
            </h1>
            <p className="text-pp-on-primary/60 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              The colour explosion is the show. The media agency is invisible machinery.
              Build your brand — and your city — with South Africa&apos;s only dedicated pasta QSR franchise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://franchise.papapasta.co.za/" className="btn-gold-glow inline-flex items-center rounded-md bg-pp-gold px-8 py-3 text-sm font-semibold text-pp-on-surface shadow-lg shadow-pp-gold/20 hover:bg-pp-gold-light transition-colors duration-300">
                Go to Franchise Portal &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <Financials />
      <CrestCreator />
      <TerritoryMap />
      <SocialProofGallery />
      <ApplicationForm />
    </>
  );
}