"use client";

export default function Page() {
  return (
    <>
      <header className="bg-pp-navy text-pp-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Events</h1>
          <p className="text-pp-cream/70 max-w-2xl mx-auto">Tastings, festivals, franchise discovery days and pop-ups. See where Papa Pasta is showing up next.</p>
        </div>
      </header>
            <section className="section-padding bg-pp-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {[
            { name: "Cape Town Pasta Festival", date: "15 May 2026", time: "11:00–20:00", loc: "V&A Waterfront", open: true },
            { name: "Franchise Discovery Day", date: "3 June 2026", time: "09:00–12:00", loc: "Zoom & Cape Town HQ", open: true },
            { name: "Heritage Bowl Launch (Youth Day)", date: "16 June 2026", time: "All day", loc: "All Locations", open: false },
            { name: "Johannesburg Tasting Tour", date: "July 2026", time: "TBD", loc: "Rosebank + Sandton", open: false },
            { name: "Durban Beachfront Pop-Up", date: "August 2026", time: "TBD", loc: "Durban Promenade", open: false },
          ].map((ev) => (
            <div key={ev.name} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white rounded-2xl p-6 shadow-sm border-l-4 border-pp-gold">
              <div className="sm:w-40 flex-shrink-0">
                <div className="text-pp-gold font-bold text-xl">{ev.date.split(" ")[0]}</div>
                <div className="text-pp-navy text-sm font-medium">{ev.date.split(" ").slice(1).join(" ")} {new Date().getFullYear()}</div>
                <div className="text-pp-charcoal/50 text-xs mt-1">{ev.time}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-pp-navy">{ev.name}</h3>
                <p className="text-sm text-pp-charcoal/60 mt-1">{ev.loc}</p>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${ev.open ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                {ev.open ? "RSVP Open" : "Soon"}
              </span>
            </div>
          ))}
          <div className="text-center pt-6">
            <p className="text-sm text-pp-charcoal/50 italic">
              Want to host a TakeOver or partner on an event? Contact hello@papapasta.co.za
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
