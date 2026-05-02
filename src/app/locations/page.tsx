"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">Cape Town open now. Every other province coming soon. Find your nearest Papa Pasta.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-emerald-500">
                <h3 className="font-serif text-xl font-bold text-pp-navy">Cape Town</h3>
                <p className="text-sm text-pp-charcoal/70 mt-1">CBD & Observatory — Open Now</p>
                <p className="text-sm text-pp-charcoal/60 mt-2">Mon–Fri 10:00–21:00 · Sat–Sun 09:00–22:00</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
                <h3 className="font-serif text-xl font-bold text-pp-navy">Johannesburg</h3>
                <p className="text-sm text-pp-charcoal/70 mt-1">Rosebank, Sandton & CBD — Coming Soon</p>
                <p className="text-sm text-pp-charcoal/60 mt-2">Expressions of interest open for franchise partners.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
                <h3 className="font-serif text-xl font-bold text-pp-navy">Durban</h3>
                <p className="text-sm text-pp-charcoal/70 mt-1">Umhlanga & Ballito — Coming Soon</p>
                <p className="text-sm text-pp-charcoal/60 mt-2">Warm coastal cities are next on the expansion map.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-amber-500">
                <h3 className="font-serif text-xl font-bold text-pp-navy">Gqeberha (PE)</h3>
                <p className="text-sm text-pp-charcoal/70 mt-1">Walmer & Beachfront — Coming Soon</p>
                <p className="text-sm text-pp-charcoal/60 mt-2">Eastern Cape expansion targeted for Q4 2026.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/brand-image-28.png" alt="Location map" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg px-4 py-3">
                <p className="text-xs text-pp-charcoal/70">
                  Interactive map coming soon. Contact us for exact addresses for the Cape Town stores.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href="/franchise/" className="inline-flex items-center rounded-md bg-pp-gold px-6 py-2.5 text-sm font-semibold text-pp-navy hover:bg-pp-gold-light transition">
              Own a Store in Your City →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
