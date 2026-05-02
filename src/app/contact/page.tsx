"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">General, franchise, media and careers. Reach the Papa Pasta team.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-pp-navy font-serif text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-5 text-sm text-pp-charcoal/80">
              <div>
                <p className="font-semibold text-pp-navy">General</p>
                <p>hello@papapasta.co.za</p>
              </div>
              <div>
                <p className="font-semibold text-pp-navy">Franchise Enquiries</p>
                <p>franchise@papapasta.co.za</p>
              </div>
              <div>
                <p className="font-semibold text-pp-navy">Press & Media</p>
                <p>media@papapasta.co.za</p>
              </div>
              <div>
                <p className="font-semibold text-pp-navy">Careers</p>
                <p>careers@papapasta.co.za</p>
              </div>
              <div>
                <p className="font-semibold text-pp-navy">Head Office</p>
                <p>Cape Town, South Africa</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <form onSubmit={(e) => { e.preventDefault(); alert("Coming soon: Zoho Desk ticket integration!"); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Name" className="rounded-md border border-pp-navy/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold" />
                <input required type="email" placeholder="Email" className="rounded-md border border-pp-navy/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold" />
              </div>
              <select className="w-full rounded-md border border-pp-navy/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold text-pp-charcoal/70">
                <option>General Enquiry</option>
                <option>Franchise Interest</option>
                <option>Press / Media</option>
                <option>Careers</option>
                <option>Complaint / Feedback</option>
              </select>
              <textarea required rows={4} placeholder="Your message..." className="w-full rounded-md border border-pp-navy/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pp-gold"></textarea>
              <button type="submit" className="w-full rounded-md bg-pp-navy px-6 py-3 text-sm font-semibold text-white hover:bg-pp-navy-light transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
