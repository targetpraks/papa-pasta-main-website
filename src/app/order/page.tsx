"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Plus, Minus, ShoppingBag, Check } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: string[];
  category: string;
}

type WindowWithGtag = Window & {
  gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
};

// Order flow accent — the Locations electric-blue (#0080ff) ties the money page into the
// neon brand; SUCCESS green marks the confirmation.
const SUCCESS = "#39ff14";

// Shared focus-ring classes for keyboard visibility.
const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0080ff]";

const LOCATIONS = [
  { id: "sandton", name: "Sandton City", address: "Shop 42, Sandton City Mall" },
  { id: "melrose", name: "Melrose Arch", address: "The Piazza, Melrose Arch" },
  { id: "cpt", name: "Cape Town", address: "V&A Waterfront, Cape Town" },
];

const MENU_ITEMS: MenuItem[] = [
  { id: "bowl-1", name: "The OG", description: "House-made pasta, nonna's sauce, parmesan", price: 85, dietary: ["veg"], category: "Bowls" },
  { id: "bowl-2", name: "Spicy Pomodoro", description: "San Marzano tomatoes, Calabrian chili, basil", price: 95, dietary: ["veg", "vegan"], category: "Bowls" },
  { id: "bowl-3", name: "Carbonara Royale", description: "Guanciale, egg yolk, pecorino, black pepper", price: 110, dietary: [], category: "Bowls" },
  { id: "side-1", name: "Garlic Focaccia", description: "Wood-fired, olive oil, sea salt", price: 35, dietary: ["veg"], category: "Sides" },
  { id: "drink-1", name: "San Pellegrino", description: "Sparkling mineral water 750ml", price: 28, dietary: ["veg", "vegan", "GF"], category: "Drinks" },
];

export default function OrderPage() {
  const [location, setLocation] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [step, setStep] = useState<"menu" | "checkout" | "confirmed">("menu");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const addToCart = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = (id: string) => setCart((c) => {
    const next = { ...c };
    if (next[id] <= 1) delete next[id]; else next[id]--;
    return next;
  });

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item?.price || 0) * qty;
  }, 0);

  const submitOrder = () => {
    const num = "PP-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderNumber(num);
    const analytics = typeof window !== "undefined" ? (window as WindowWithGtag).gtag : undefined;
    if (analytics) {
      analytics("event", "order_placed", { value: cartTotal, currency: "ZAR" });
    }
    setStep("confirmed");
  };

  const filteredItems = filter
    ? MENU_ITEMS.filter((m) => m.dietary.includes(filter))
    : MENU_ITEMS;

  const categories = [...new Set(MENU_ITEMS.map((m) => m.category))];

  const chipClass = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-xs border transition-all ${FOCUS_RING} ${
      active
        ? "border-[#0080ff] text-[#0080ff] shadow-[0_0_12px_rgba(0,128,255,0.35)]"
        : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className={`inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 rounded ${FOCUS_RING}`}>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
        </Link>

        <AnimatePresence mode="wait">
          {step === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">Order Direct</h1>
              <p className="text-white/65 mb-8">Skip the aggregator. Pre-order and pay at pickup.</p>

              {!location ? (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Select Location</h2>
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`w-full text-left p-5 rounded-lg border border-white/10 hover:border-[#0080ff]/70 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,128,255,0.18)] transition-all ${FOCUS_RING}`}
                    >
                      <p className="font-semibold">{loc.name}</p>
                      <p className="text-sm text-white/65">{loc.address}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/60">Location</p>
                      <p className="font-semibold">{LOCATIONS.find((l) => l.id === location)?.name}</p>
                    </div>
                    <button onClick={() => { setLocation(""); setCart({}); }} className={`text-sm text-white/60 hover:text-white rounded ${FOCUS_RING}`}>Change</button>
                  </div>

                  <div className="flex flex-wrap gap-2" role="group" aria-label="Dietary filters">
                    <button onClick={() => setFilter(null)} aria-pressed={!filter} className={chipClass(!filter)}>All</button>
                    {["veg", "vegan", "GF"].map((tag) => (
                      <button key={tag} onClick={() => setFilter(filter === tag ? null : tag)} aria-pressed={filter === tag} className={chipClass(filter === tag)}>{tag}</button>
                    ))}
                  </div>

                  {categories.map((cat) => (
                    <div key={cat}>
                      <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">{cat}</h3>
                      <div className="space-y-3">
                        {filteredItems.filter((m) => m.category === cat).map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-white/65">{item.description}</p>
                              <div className="flex gap-1.5 mt-1">
                                {item.dietary.map((d) => <span key={d} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 uppercase tracking-wider">{d}</span>)}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-semibold w-16 text-right">R{item.price}</p>
                              {cart[item.id] ? (
                                <div className="flex items-center gap-2">
                                  <button onClick={() => removeFromCart(item.id)} aria-label={`Remove one ${item.name}`} className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white ${FOCUS_RING}`}><Minus className="w-3 h-3" aria-hidden="true" /></button>
                                  <span className="w-4 text-center text-sm" aria-live="polite">{cart[item.id]}</span>
                                  <button onClick={() => addToCart(item.id)} aria-label={`Add one ${item.name}`} className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white ${FOCUS_RING}`}><Plus className="w-3 h-3" aria-hidden="true" /></button>
                                </div>
                              ) : (
                                <button onClick={() => addToCart(item.id)} aria-label={`Add ${item.name} to cart`} className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 ${FOCUS_RING}`}><Plus className="w-3 h-3" aria-hidden="true" /></button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {cartCount > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-6"
                    >
                      <button
                        onClick={() => setStep("checkout")}
                        className={`w-full bg-white text-black font-semibold py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,128,255,0.35)] hover:shadow-[0_0_32px_rgba(0,128,255,0.5)] transition-shadow ${FOCUS_RING}`}
                      >
                        <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                        Checkout · {cartCount} items · R{cartTotal}
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {step === "checkout" && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <h1 className="font-serif text-3xl font-bold">Checkout</h1>
              <div className="space-y-3">
                <input value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name" autoComplete="name" placeholder="Your name" className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#0080ff] outline-none ${FOCUS_RING}`} />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="tel" aria-label="Phone number" autoComplete="tel" placeholder="Phone number" className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#0080ff] outline-none ${FOCUS_RING}`} />
                <input value={time} onChange={(e) => setTime(e.target.value)} aria-label="Pickup time" placeholder="Pickup time (e.g. 18:30)" className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-[#0080ff] outline-none ${FOCUS_RING}`} />
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/65 mb-2">Order Summary</p>
                {Object.entries(cart).map(([id, qty]) => {
                  const item = MENU_ITEMS.find((m) => m.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between text-sm py-1">
                      <span>{item.name} × {qty}</span>
                      <span>R{item.price * qty}</span>
                    </div>
                  );
                })}
                <div className="flex justify-between font-semibold pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>R{cartTotal}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep("menu")} className={`flex-1 py-3 rounded-lg border border-white/20 text-sm hover:border-white/50 transition-colors ${FOCUS_RING}`}>Back</button>
                <button
                  onClick={submitOrder}
                  disabled={!name || !phone || !time}
                  className={`flex-1 py-3 rounded-lg bg-white text-black font-semibold text-sm disabled:opacity-40 disabled:shadow-none shadow-[0_0_24px_rgba(0,128,255,0.35)] hover:shadow-[0_0_32px_rgba(0,128,255,0.5)] transition-shadow ${FOCUS_RING}`}
                >
                  Place Order
                </button>
              </div>
            </motion.div>
          )}

          {step === "confirmed" && (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${SUCCESS}1f`, boxShadow: `0 0 28px ${SUCCESS}55` }}>
                <Check className="w-8 h-8" style={{ color: SUCCESS }} aria-hidden="true" />
              </div>
              <h1 className="font-serif text-3xl font-bold mb-2">Order Confirmed</h1>
              <p className="text-white/65 mb-6">Your order number is <span className="text-white font-mono">{orderNumber}</span></p>
              <p className="text-sm text-white/65 max-w-md mx-auto mb-8">Pay at pickup. Show this number. Arrive within 10 min of your pickup time.</p>
              <Link href="/" className={`btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold ${FOCUS_RING}`}>Back Home</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
