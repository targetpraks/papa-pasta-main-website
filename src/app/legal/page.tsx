"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Legal & Privacy</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">POPIA-compliant privacy policy, terms of service and franchise disclaimers.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none text-pp-charcoal">
          <h2 className="text-pp-navy font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Papa Pasta (Pty) Ltd respects your privacy and is committed to protecting your personal data in accordance with the
            Protection of Personal Information Act (POPIA) of South Africa.
          </p>
          <h3 className="text-pp-navy font-serif font-semibold mt-6 mb-2">1. Information We Collect</h3>
          <p className="mb-4">
            We collect name, email, phone number and usage data when you interact with our website, subscribe to our newsletter, or submit franchise enquiries.
          </p>
          <h3 className="text-pp-navy font-serif font-semibold mt-6 mb-2">2. How We Use Your Data</h3>
          <p className="mb-4">
            To provide services, manage franchises, process orders, send marketing communications (with consent), and improve user experience.
          </p>
          <h3 className="text-pp-navy font-serif font-semibold mt-6 mb-2">3. Cookies</h3>
          <p className="mb-4">
            We use essential and analytics cookies. You can manage preferences via your browser settings.
          </p>
          <h3 className="text-pp-navy font-serif font-semibold mt-6 mb-2">4. Your Rights</h3>
          <p className="mb-4">
            Under POPIA you have the right to access, correct and delete your personal data. Contact
            <a href="mailto:privacy@papapasta.co.za" className="text-pp-gold underline"> privacy@papapasta.co.za</a> to exercise these rights.
          </p>
          <h2 className="text-pp-navy font-serif text-2xl font-bold mt-10 mb-4">Terms of Service</h2>
          <p className="mb-4">
            By using this website you agree to our terms. All content, imagery and brand assets are the intellectual property of Papa Pasta (Pty) Ltd.
          </p>
          <h3 className="text-pp-navy font-serif font-semibold mt-6 mb-2">Franchise Disclaimer</h3>
          <p className="mb-4">
            All financial projections and estimates on this site are for illustrative purposes only.
            Actual performance depends on location, execution and market conditions. No earnings guarantee is implied.
          </p>
        </div>
      </section>
    </>
  );
}
