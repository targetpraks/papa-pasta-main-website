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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
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
              <p className="text-white/40 mb-8">Skip the aggregator. Pre-order and pay at pickup.</p>

              {!location ? (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Select Location</h2>
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className="w-full text-left p-5 rounded-lg border border-white/10 hover:border-white/50 hover:bg-white/5 transition-all"
                    >
                      <p className="font-semibold">{loc.name}</p>
                      <p className="text-sm text-white/40">{loc.address}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/40">Location</p>
                      <p className="font-semibold">{LOCATIONS.find((l) => l.id === location)?.name}</p>
                    </div>
                    <button onClick={() => { setLocation(""); setCart({}); }} className="text-sm text-white/40 hover:text-white">Change</button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setFilter(null)} className={`px-3 py-1.5 rounded-full text-xs border ${!filter ? "border-white text-white" : "border-white/10 text-white/40"}`}>All</button>
                    {["veg", "vegan", "GF"].map((tag) => (
                      <button key={tag} onClick={() => setFilter(filter === tag ? null : tag)} className={`px-3 py-1.5 rounded-full text-xs border ${filter === tag ? "border-white text-white" : "border-white/10 text-white/40"}`}>{tag}</button>
                    ))}
                  </div>

                  {categories.map((cat) => (
                    <div key={cat}>
                      <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">{cat}</h3>
                      <div className="space-y-3">
                        {filteredItems.filter((m) => m.category === cat).map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-white/40">{item.description}</p>
                              <div className="flex gap-1.5 mt-1">
                                {item.dietary.map((d) => <span key={d} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">{d}</span>)}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-semibold w-16 text-right">R{item.price}</p>
                              {cart[item.id] ? (
                                <div className="flex items-center gap-2">
                                  <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white"><Minus className="w-3 h-3" /></button>
                                  <span className="w-4 text-center text-sm">{cart[item.id]}</span>
                                  <button onClick={() => addToCart(item.id)} className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white"><Plus className="w-3 h-3" /></button>
                                </div>
                              ) : (
                                <button onClick={() => addToCart(item.id)} className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10"><Plus className="w-3 h-3" /></button>
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
                        className="w-full bg-white text-black font-semibold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                      >
                        <ShoppingBag className="w-4 h-4" />
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
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-white outline-none" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-white outline-none" />
                <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="Pickup time (e.g. 18:30)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-white outline-none" />
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/40 mb-2">Order Summary</p>
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
                <button onClick={() => setStep("menu")} className="flex-1 py-3 rounded-lg border border-white/20 text-sm">Back</button>
                <button
                  onClick={submitOrder}
                  disabled={!name || !phone || !time}
                  className="flex-1 py-3 rounded-lg bg-white text-black font-semibold text-sm disabled:opacity-40"
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
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-serif text-3xl font-bold mb-2">Order Confirmed</h1>
              <p className="text-white/40 mb-6">Your order number is <span className="text-white font-mono">{orderNumber}</span></p>
              <p className="text-sm text-white/40 max-w-md mx-auto mb-8">Pay at pickup. Show this number. Arrive within 10 min of your pickup time.</p>
              <Link href="/" className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold">Back Home</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
