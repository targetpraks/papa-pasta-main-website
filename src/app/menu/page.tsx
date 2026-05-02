"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">The Menu</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">Core dishes shaped by obsession. See the Golden Blend menu that powers every Papa Pasta store.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-pp-gold uppercase tracking-widest text-sm font-semibold mb-2">Core 8 + Seasonal</p>
            <h2 className="text-pp-navy font-serif text-3xl sm:text-4xl font-bold">Pasta with Purpose</h2>
            <p className="text-pp-charcoal/70 mt-4 max-w-2xl mx-auto">
              We don’t list every item here — the full menu is IP. But these heroes speak for the rest. Every shape is matched to a sauce, every topping is deliberate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Fettuccini Alfredo", price: "R89", desc: "Flat ribbons in silky Alfredo with parmesan crumble.", icon: "🍝" },
              { name: "Penne alla Arrabbiata", price: "R79", desc: "Chilli-garlic tomato sauce with fresh basil.", icon: "🌶️" },
              { name: "Cacio e Pepe", price: "R85", desc: "Pecorino roman & Tellicherry pepper perfection.", icon: "🧀" },
              { name: "Tagliatelle Bolognese", price: "R95", desc: "Slow-cooked meat sauce over wide ribbons.", icon: "🥩" },
              { name: "Papa Pops — Cheesy Braai", price: "R45", desc: "Crunchy pasta bites with smoky braai spice.", icon: "🔥" },
              { name: "Seasonal Harvest Bowl", price: "R92", desc: "Rotating veggies with truffle-infused pecorino.", icon: "🌱" },
            ].map((d) => (
              <div key={d.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-2xl mb-3">{d.icon}</div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-lg font-semibold text-pp-navy">{d.name}</h3>
                  <span className="text-pp-gold font-bold">{d.price}</span>
                </div>
                <p className="text-sm text-pp-charcoal/70 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <img src="/images/menu-pasta-shape-pairing.png" alt="Shape pairing chart" className="rounded-2xl shadow-md mx-auto mb-6 max-w-3xl" />
            <p className="text-sm text-pp-charcoal/50 italic">Note: pricing is estimated. Final menu and prices set at launch.</p>
          </div>
        </div>
      </section>
    </>
  );
}
