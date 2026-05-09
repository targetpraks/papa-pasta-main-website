"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-pp-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Legal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            Legal &amp; <span className="gold-text-gradient">Privacy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg">
            POPIA-compliant privacy policy, terms of service and franchise disclaimers.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-pp-tertiary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none text-pp-primary-60">
          <h2 className="text-pp-on-surface font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Papa Pasta (Pty) Ltd respects your privacy and is committed to protecting your personal data in accordance with the
            Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <h3 className="text-pp-on-surface font-serif font-semibold mt-6 mb-2">1. Information We Collect</h3>
          <p className="mb-4">
            We collect name, email, phone number and usage data when you interact with our website, subscribe to our newsletter, or submit franchise enquiries.
          </p>
          <h3 className="text-pp-on-surface font-serif font-semibold mt-6 mb-2">2. How We Use Your Data</h3>
          <p className="mb-4">
            To provide services, manage franchises, process orders, send marketing communications (with consent), and improve user experience.
          </p>
          <h3 className="text-pp-on-surface font-serif font-semibold mt-6 mb-2">3. Cookies</h3>
          <p className="mb-4">
            We use essential and analytics cookies. You can manage preferences via your browser settings.
          </p>
          <h3 className="text-pp-on-surface font-serif font-semibold mt-6 mb-2">4. Your Rights</h3>
          <p className="mb-4">
            Under POPIA you have the right to access, correct and delete your personal data. Contact
            <a href="mailto:privacy@papapasta.co.za" className="text-pp-gold underline hover:text-pp-gold-light transition-colors"> privacy@papapasta.co.za</a> to exercise these rights.
          </p>
          <h2 className="text-pp-on-surface font-serif text-2xl font-bold mt-10 mb-4">Terms of Service</h2>
          <p className="mb-4">
            By using this website you agree to our terms. All content, imagery and brand assets are the intellectual property of Papa Pasta (Pty) Ltd.
          </p>
          <h3 className="text-pp-on-surface font-serif font-semibold mt-6 mb-2">Franchise Disclaimer</h3>
          <p className="mb-4">
            All financial projections and estimates on this site are for illustrative purposes only.
            Actual performance depends on location, execution and market conditions. No earnings guarantee is implied.
          </p>
        </div>
      </section>
    </>
  );
}