"use client";

export default function Footer() {
  return (
    <footer className="bg-pp-navy-dark text-pp-cream/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo-black.png" alt="Papa Pasta" className="h-8 w-auto rounded bg-white/10" />
              <span className="text-pp-gold font-serif text-lg font-bold">Papa Pasta</span>
            </div>
            <p className="text-sm leading-relaxed">
              Fresh handmade pasta, crafted daily. Cape Town’s home for authentic flavour and honest ingredients.
            </p>
          </div>
          <div>
            <h4 className="text-pp-gold font-serif font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-pp-gold transition">Home</a></li>
              <li><a href="/story/" className="hover:text-pp-gold transition">Our Story</a></li>
              <li><a href="/menu/" className="hover:text-pp-gold transition">Menu</a></li>
              <li><a href="/locations/" className="hover:text-pp-gold transition">Locations</a></li>
              <li><a href="/blog/" className="hover:text-pp-gold transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-pp-gold font-serif font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact/" className="hover:text-pp-gold transition">Contact Us</a></li>
              <li><a href="/careers/" className="hover:text-pp-gold transition">Careers</a></li>
              <li><a href="/franchise/" className="hover:text-pp-gold transition">Franchise Opportunities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-pp-gold font-serif font-semibold mb-4">Order Now</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-pp-gold text-sm font-medium px-4 py-2 transition"
              >
                UberEats
              </a>
              <a
                href="https://www.mrdfood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-pp-gold text-sm font-medium px-4 py-2 transition"
              >
                Mr D
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pp-navy-light py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-pp-cream/50">
          <p>© {new Date().getFullYear()} Papa Pasta. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/legal/" className="hover:text-pp-gold transition">Privacy & Legal</a>
            <a href="/franchise/" className="hover:text-pp-gold transition">Franchise</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
