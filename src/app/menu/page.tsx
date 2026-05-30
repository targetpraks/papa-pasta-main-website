"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChildScale } from "../components/Motion";

const dishes = [
  { category: "Classic Sauces", name: "Alfredo Classico", price: "R89", desc: "Silky Parmesan cream sauce over fresh fettuccine. The comfort benchmark.", img: "/images/menu-core-8-dishes.png", tag: "Best Seller", dietary: ["Veg"] },
  { category: "Classic Sauces", name: "Napolitana Fresca", price: "R79", desc: "San Marzano tomato base, fresh basil, extra virgin olive oil. Simple, perfect.", img: "/images/menu-sauce-production.png", tag: "Classic", dietary: ["Vegan","GF"] },
  { category: "Classic Sauces", name: "Arrabbiata Piccante", price: "R82", desc: "Chilli-infused tomato sauce with garlic and parsley. For the brave.", img: "/images/papa-pops-peri-peri.png", tag: "Spicy", dietary: ["Vegan","GF"] },
  { category: "Classic Sauces", name: "Cacio e Pepe", price: "R85", desc: "Pecorino Romano and cracked Tellicherry pepper. Roman perfection.", img: "/images/papa-pops-cheesy-braai.png", tag: "Signature", dietary: ["Veg"] },
  { category: "Meat Sauces", name: "Bolognese della Casa", price: "R95", desc: "Slow-braised beef and pork ragu over wide tagliatelle. Simmered for 6 hours.", img: "/images/menu-core-8-dishes.png", tag: "House Favourite", dietary: ["Halal"] },
  { category: "Meat Sauces", name: "Carbonara Proper", price: "R92", desc: "Guanciale, egg yolk and Pecorino. No cream. Ever.", img: "/images/menu-sauce-production.png", tag: "Authentic" },
  { category: "Seasonal", name: "Summer Harvest Primavera", price: "R88", desc: "Zucchini, cherry tomatoes, lemon zest and basil on penne. Lighter than air.", img: "/images/bowl-07-seasonal-harvest.png", tag: "Limited", dietary: ["Vegan","GF"] },
  { category: "Seasonal", name: "Braai-Spiced Meatball", price: "R98", desc: "Char-grilled meatballs in smoky tomato sauce. A South African twist on an Italian classic.", img: "/images/bowl-03-sa-heritage-series.png", tag: "Heritage", dietary: ["Halal"] },
  { category: "Papa Pops", name: "Cheesy Braai Bites", price: "R45", desc: "Crunchy fried pasta bites stuffed with three cheeses and smoky braai spice. Addictive.", img: "/images/papa-pops-cheesy-braai.png", tag: "Snack", dietary: ["Veg"] },
  { category: "Papa Pops", name: "Peri-Peri Crunch", price: "R42", desc: "Zesty peri-peri coating on golden pasta shells. Cape Town in a bite.", img: "/images/papa-pops-peri-peri.png", tag: "Snack", dietary: ["Vegan"] },
  { category: "Papa Pops", name: "Sweet Chutney Twist", price: "R40", desc: "Mild curry-spiced chutney glaze on crispy pasta twists. Sweet, savoury, crunchy.", img: "/images/papa-pops-sweet-chutney.png", tag: "Snack", dietary: ["Vegan"] },
];

const categories = ["All", "Classic Sauces", "Meat Sauces", "Seasonal", "Papa Pops"];

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <>
      <header className="bg-pp-primary text-pp-on-primary py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            The Menu
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            32 Core Dishes. <span className="gold-text-gradient">One Obsession.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-pp-on-primary/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We show you our heroes. The full 32-item menu is our IP — come in and discover the rest.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-bold uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-all duration-300 ${
                  active === cat ? "bg-pp-primary text-white shadow-lg shadow-pp-primary/20" : "bg-pp-tertiary text-pp-primary-60/50 border border-pp-primary/5 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </MotionSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d) => (
              <motion.div
                key={d.name + d.category}
                variants={staggerChildScale}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-pp-primary/5 hover:shadow-xl hover:border-white/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={d.img} alt={d.name} width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded bg-pp-tertiary text-pp-primary-60/50 border border-pp-primary/5">{d.category}</span>
                    {d.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded bg-white/10 text-white-dark border border-white/20">{d.tag}</span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg font-semibold text-pp-on-surface">{d.name}</h3>
                    <span className="gold-text-gradient font-bold">{d.price}</span>
                  </div>
                  <p className="text-sm text-pp-primary-60/50 leading-relaxed">{d.desc}</p>
                  {d.dietary && d.dietary.length > 0 && (
                    <div className="flex items-center gap-1 mt-2 flex-wrap">
                      {d.dietary.map((badge) => (
                        <span
                          key={badge}
                          className={`badge-dietary badge-dietary-${badge.toLowerCase()}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <MotionSection className="mt-12 text-center">
            <div className="bg-pp-tertiary rounded-2xl p-8 inline-block border border-pp-primary/5">
              <p className="text-pp-primary-60/50 text-sm mb-3">Prices are estimated. Final menu and pricing set at launch.</p>
              <p className="text-pp-primary-60/60 text-sm">
                <span className="font-semibold text-pp-on-surface">Dietary info:</span> Vegan, Veg, GF, halal and kosher options available.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
