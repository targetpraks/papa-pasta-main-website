"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">Join a team obsessed with pasta. Store, kitchen and franchise support roles available now.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-pp-charcoal/70 mb-10">
            We are growing fast. If you love pasta, neon, and high standards, we want to hear from you.
          </p>
          <div className="space-y-4">
            {[
              { title: "Store Manager — Cape Town CBD", type: "Full-time", desc: "Lead a compact, high-energy team in our flagship location. Hospitality experience preferred." },
              { title: "Pasta Chef — Cape Town", type: "Full-time", desc: "Shape, sauce and serve with precision. Training provided on the Golden Blend method." },
              { title: "Commissary Kitchen Lead", type: "Full-time", desc: "Oversee daily pasta extrusion, sauce prep and quality control for the entire network." },
              { title: "Regional Franchise Coach", type: "Full-time", desc: "Travel between stores to train, audit and elevate brand standards across provinces." },
            ].map((job) => (
              <div key={job.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pp-navy/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-pp-navy">{job.title}</h3>
                  <p className="text-xs text-pp-gold font-bold uppercase tracking-wider mt-1">{job.type}</p>
                  <p className="text-sm text-pp-charcoal/70 mt-2">{job.desc}</p>
                </div>
                <a href="mailto:careers@papapasta.co.za" className="inline-flex items-center rounded-md bg-pp-navy px-5 py-2 text-sm font-semibold text-white hover:bg-pp-navy-light transition whitespace-nowrap">
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
