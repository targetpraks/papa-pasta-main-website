"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">Built on obsession, scaled with purpose. Discover the story behind South Africa’s first dedicated pasta QSR franchise.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="prose prose-lg max-w-none text-pp-charcoal">
            <p className="text-xl sm:text-2xl font-serif italic text-pp-navy leading-relaxed mb-6">
              “We started with a single question: Why does South Africa have 2,500+ chicken outlets and not a single nationwide pasta franchise?”
            </p>
            <p className="leading-relaxed mb-4">
              Papa Pasta was built inside that gap. We assembled a central commissary, designed a 32-dish core menu around the
              <strong className="text-pp-navy"> Golden Blend</strong> sauce philosophy, and created a franchise model that makes
              restaurant-quality pasta accessible in every neighbourhood — without losing craft.
            </p>
            <p className="leading-relaxed mb-4">
              Every store is locally operated. Every crest is unique. And every bowl is proof that fast food can still taste handmade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <img src="/images/central-kitchen-concept.png" alt="Commissary" className="rounded-2xl shadow-md w-full" />
              <h3 className="font-serif text-xl font-bold text-pp-navy mt-4 mb-2">The Commissary</h3>
              <p className="text-pp-charcoal/70 text-sm leading-relaxed">
                Fresh pasta extruded daily, sauces slow-simmered for hours, and a cold chain that guarantees quality from kitchen to customer.
              </p>
            </div>
            <div>
              <img src="/images/store-concept-refined-neon-pop.png" alt="Store" className="rounded-2xl shadow-md w-full" />
              <h3 className="font-serif text-xl font-bold text-pp-navy mt-4 mb-2">The Store</h3>
              <p className="text-pp-charcoal/70 text-sm leading-relaxed">
                A compact 40 m2 footprint engineered for speed, storytelling, and unforgettable neon presence — optimised for foot traffic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
