"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Franchise Opportunities</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">R1.14M all-in. 8-month payback. First-mover advantage in SA’s only pasta QSR franchise.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold mb-4">Why South Africa Needs Pasta Now</h2>
              <p className="text-pp-charcoal/70 leading-relaxed mb-6">
                The market has 2,500+ chicken and burger outlets and zero nationwide pasta QSR franchises.
                Papa Pasta fills that gap — and gives franchisees a brand with real creative depth, proven unit economics, and a first-mover advantage.
              </p>
              <ul className="space-y-3 text-sm text-pp-charcoal/80">
                <li className="flex items-start gap-2">🍝 <span><strong>R1.14M</strong> all-in investment</span></li>
                <li className="flex items-start gap-2">📊 <strong>20.7%</strong> COGS · <strong>21.6%</strong> EBITDA</li>
                <li className="flex items-start gap-2">⚡ <strong>8-month</strong> average payback</li>
                <li className="flex items-start gap-2">🎨 <strong>Unique crest</strong> for every franchise</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/franchise-store-concept.png" alt="Franchise store render" className="w-full h-auto" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pp-navy/5 mb-10">
            <h3 className="font-serif text-2xl font-bold text-pp-navy mb-2">Ready to Explore?</h3>
            <p className="text-pp-charcoal/70 mb-6">
              The full franchise prospectus, territory map and Crest Creator™ live on our dedicated franchise platform.
            </p>
            <a
              href="https://franchise.papapasta.co.za/?utm_source=brand-site&utm_medium=franchise-page&utm_campaign=franchise-bridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-pp-gold px-8 py-3 text-sm font-semibold text-pp-navy shadow hover:bg-pp-gold-light transition"
            >
              Go to Franchise Portal →
            </a>
          </div>

          <div className="bg-pp-navy text-pp-cream rounded-2xl p-8">
            <h3 className="font-serif text-xl font-bold text-pp-gold mb-2">Not Ready Yet?</h3>
            <p className="text-pp-cream/80 text-sm mb-4">
              Drop your details and we will send you the prospectus, a financial breakdown, and introduce you to the team.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Coming soon: Zoho CRM integration!"); }} className="flex flex-col sm:flex-row gap-3">
              <input required type="text" placeholder="Full Name" className="rounded-md border border-pp-navy-light bg-pp-navy-light/50 px-4 py-2.5 text-sm text-white placeholder:text-pp-cream/40 focus:outline-none focus:ring-2 focus:ring-pp-gold flex-1" />
              <input required type="email" placeholder="Email" className="rounded-md border border-pp-navy-light bg-pp-navy-light/50 px-4 py-2.5 text-sm text-white placeholder:text-pp-cream/40 focus:outline-none focus:ring-2 focus:ring-pp-gold flex-1" />
              <button type="submit" className="rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
