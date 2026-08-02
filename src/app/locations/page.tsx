"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChildScale } from "../components/Motion";
import OptimizedImage from "../components/OptimizedImage";
import { zones, provinces, getColorHex, type Zone } from "../../lib/zones";

/* ───────────────────────────────────────────────
   AURA HOOK (localStorage)
   ─────────────────────────────────────────────── */
function useZoneAura() {
  const [aura, setAura] = useState<Record<number, number>>({});
  const [userAura, setUserAura] = useState<Set<number>>(new Set());

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        const rawAura = localStorage.getItem("pp-zone-aura");
        const rawUser = localStorage.getItem("pp-user-aura");
        setAura(rawAura ? JSON.parse(rawAura) : {});
        setUserAura(rawUser ? new Set(JSON.parse(rawUser)) : new Set());
      } catch {
        setAura({});
        setUserAura(new Set());
      }
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  const persist = useCallback((nextAura: Record<number, number>, nextUser: Set<number>) => {
    localStorage.setItem("pp-zone-aura", JSON.stringify(nextAura));
    localStorage.setItem("pp-user-aura", JSON.stringify([...nextUser]));
  }, []);

  const toggleAura = useCallback((zoneId: number) => {
    setAura((prev) => {
      let nextAura = prev;
      setUserAura((userPrev) => {
        const next = new Set(userPrev);
        nextAura = { ...prev };
        if (next.has(zoneId)) {
          next.delete(zoneId);
          nextAura[zoneId] = Math.max(0, (nextAura[zoneId] || 1) - 1);
        } else {
          next.add(zoneId);
          nextAura[zoneId] = (nextAura[zoneId] || 0) + 1;
        }
        persist(nextAura, next);
        return next;
      });
      return nextAura;
    });
  }, [persist]);

  const getAura = useCallback(
    (zoneId: number) => {
      return aura[zoneId] || 0;
    },
    [aura]
  );

  const hasAura = useCallback(
    (zoneId: number) => {
      return userAura.has(zoneId);
    },
    [userAura]
  );

  return { toggleAura, getAura, hasAura };
}

function baseAura(zone: Zone) {
  const statusBoost = zone.status === "open" ? 160 : zone.status === "available" ? 90 : 48;
  return statusBoost + ((zone.id * 17) % 69);
}

function FlameScore({ score, active }: { score: number; active: boolean }) {
  const filled = Math.min(5, Math.max(1, Math.ceil(score / 70)));

  return (
    <div className="flex items-center gap-1.5" aria-label={`Aura score ${score}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          className={`aura-flame ${index < filled ? "aura-flame-lit" : ""} ${active ? "aura-flame-active" : ""}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13.7 2.4c.4 3-1.4 4.7-2.9 6.2-1.3 1.3-2.5 2.5-2.5 4.6 0 1.4.7 2.7 1.8 3.4-.1-.4-.1-.8-.1-1.2 0-2 1.3-3.2 2.5-4.3.8-.8 1.6-1.5 1.9-2.6 2.6 1.7 4.2 4 4.2 6.7 0 3.9-3.1 6.7-7.1 6.7s-7.1-2.8-7.1-6.7c0-2.9 1.4-5 3.2-6.8 1.7-1.7 3.8-3.3 3.9-6.3 0-.8.8-1.2 1.3-.6.3.3.5.6.7.9Z" />
        </svg>
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────
   ZONE CARD
   ─────────────────────────────────────────────── */
function ZoneCard({
  zone,
  selected,
  onSelect,
  toggleAura,
  getAura,
  hasAura,
}: {
  zone: Zone;
  selected: boolean;
  onSelect: (zone: Zone) => void;
  toggleAura: (id: number) => void;
  getAura: (id: number) => number;
  hasAura: (id: number) => boolean;
}) {
  const userBoost = getAura(zone.id);
  const auraScore = baseAura(zone) + userBoost * 18;
  const auraActive = hasAura(zone.id);
  const primary = getColorHex(zone.primaryColor);
  const secondary = getColorHex(zone.secondaryColor);

  const statusBorder =
    zone.status === "open"
      ? "zone-card-open"
      : zone.status === "available"
        ? "zone-card-available"
        : "zone-card-coming-soon";

  return (
    <motion.div
      variants={staggerChildScale}
      className={`zone-crest-card cyber-card overflow-hidden ${statusBorder} relative group ${selected ? "zone-card-selected" : ""}`}
      style={{
        ["--zone-primary" as string]: primary,
        ["--zone-secondary" as string]: secondary,
      }}
    >
      <button
        type="button"
        onClick={() => onSelect(zone)}
        className="block w-full p-5 text-left"
        aria-pressed={selected}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-semibold">
            Zone {zone.id}
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded font-semibold ${
              zone.status === "open"
                ? "badge-open"
                : zone.status === "available"
                  ? "badge-available"
                  : "badge-coming-soon"
            }`}
          >
            {zone.status === "open"
              ? "Open Now"
              : zone.status === "available"
                ? "Available"
                : "Coming Soon"}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="zone-crest-marker flex-shrink-0" aria-hidden="true">
            <OptimizedImage src="/images/logo-crest-white.png" alt="" width={70} height={90} />
            <span>{String(zone.id).padStart(2, "0")}</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-serif text-sm font-bold truncate text-white">{zone.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.1em] text-white/60 truncate">
              {zone.province}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Aura</span>
            <span className="text-sm font-bold text-white">{auraScore}</span>
          </div>
          <FlameScore score={auraScore} active={auraActive} />
        </div>
      </button>

      <div className="px-5 pb-5">
        <div className="mb-4 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            onClick={(event) => {
              event.stopPropagation();
              toggleAura(zone.id);
            }}
            className={`aura-btn text-[11px] font-bold uppercase tracking-[0.14em] ${auraActive ? "voted" : "text-white/55"}`}
            aria-label={auraActive ? "Remove aura flame" : "Add aura flame"}
          >
            {auraActive ? "Aura Lit" : "Add Flame"}
          </button>
          <button
            type="button"
            onClick={() => onSelect(zone)}
            className="location-text-action text-[10px] font-bold uppercase tracking-[0.14em]"
          >
            Store Details
          </button>
        </div>

        {zone.status === "available" && (
          <a
            href="https://franchise.papapasta.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="location-outline-action block w-full text-center rounded-md border-2 px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300"
          >
            Buy This Area
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────
   ZONE GRID
   ─────────────────────────────────────────────── */
function ZoneGrid({
  zones,
  selectedZone,
  onSelect,
  toggleAura,
  getAura,
  hasAura,
}: {
  zones: Zone[];
  selectedZone: Zone | null;
  onSelect: (zone: Zone) => void;
  toggleAura: (id: number) => void;
  getAura: (id: number) => number;
  hasAura: (id: number) => boolean;
}) {
  return (
    <StaggerContainer
      key={zones.map((z) => z.id).join(",")}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      staggerDelay={0.04}
    >
      {zones.map((zone) => (
        <ZoneCard
          key={zone.id}
          zone={zone}
          selected={selectedZone?.id === zone.id}
          onSelect={onSelect}
          toggleAura={toggleAura}
          getAura={getAura}
          hasAura={hasAura}
        />
      ))}
    </StaggerContainer>
  );
}

function ZoneDetails({
  zone,
  auraScore,
  auraActive,
  onClose,
}: {
  zone: Zone;
  auraScore: number;
  auraActive: boolean;
  onClose: () => void;
}) {
  const primary = getColorHex(zone.primaryColor);
  const secondary = getColorHex(zone.secondaryColor);

  return (
    <MotionSection
      className="zone-detail-panel cyber-panel mb-10 overflow-hidden"
      style={{
        ["--zone-primary" as string]: primary,
        ["--zone-secondary" as string]: secondary,
      }}
    >
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[220px_1fr_auto] lg:items-center">
        <div className="flex items-center gap-4">
          <div className="zone-crest-marker zone-crest-marker-lg" aria-hidden="true">
            <OptimizedImage src="/images/logo-crest-white.png" alt="" width={100} height={128} />
            <span>{String(zone.id).padStart(2, "0")}</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">Selected Store Signal</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white">{zone.name}</h2>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <p className="text-sm text-white/55">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Province</span>
            {zone.province}
          </p>
          <p className="text-sm text-white/55">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Status</span>
            {zone.status === "open" ? "Open now" : zone.status === "available" ? "Franchise zone available" : "Launch queue loading"}
          </p>
          <p className="text-sm text-white/55">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Crest Palette</span>
            {zone.primaryColor} / {zone.secondaryColor}
          </p>
          <p className="text-sm text-white/55">
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Aura</span>
            {auraScore} flame score {auraActive ? "with your flame active" : ""}
          </p>
          {zone.school && (
            <p className="text-sm text-white/55">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Local Signal</span>
              {zone.school}
            </p>
          )}
          {zone.footballClub && (
            <p className="text-sm text-white/55">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Club Signal</span>
              {zone.footballClub}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {zone.status === "open" ? (
            <Link href="/menu/" className="location-solid-action inline-flex justify-center rounded-md px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em]">
              View Menu
            </Link>
          ) : zone.status === "available" ? (
            <a href="https://franchise.papapasta.co.za/" target="_blank" rel="noopener noreferrer" className="location-solid-action inline-flex justify-center rounded-md px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em]">
              Franchise Portal
            </a>
          ) : (
            <Link href="/drops/" className="location-solid-action inline-flex justify-center rounded-md px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em]">
              Track Launch
            </Link>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-white/20 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white/55 hover:border-white/50 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </MotionSection>
  );
}

/* ───────────────────────────────────────────────
   PAGE
   ─────────────────────────────────────────────── */
export default function Page() {
  const [activeProvince, setActiveProvince] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "open" | "coming_soon" | "available"
  >("all");
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const { toggleAura, getAura, hasAura } = useZoneAura();

  const filtered = zones.filter((z) => {
    const matchProvince =
      activeProvince === "All" || z.province === activeProvince;
    const matchSearch =
      search.trim() === "" ||
      z.name.toLowerCase().includes(search.toLowerCase()) ||
      z.province.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      filterStatus === "all" || z.status === filterStatus;
    return matchProvince && matchSearch && matchStatus;
  });

  return (
    <>
      <header className="cyber-page-hero bg-black text-white min-h-[20vh] flex items-center py-8 sm:py-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-4"
          >
            Locations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold mb-3"
          >
            The <span className="neon-text-gradient">72 Zones</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Every zone gets a crest. Every crest carries an Aura score. Click
            a location to see the store signal, palette, status, and launch path.
          </motion.p>
        </div>
      </header>

      <section className="section-padding cyber-page-section locations-blue-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <MotionSection className="mb-10 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Search zones..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="location-search-input max-w-sm"
              />
              <div className="flex flex-wrap gap-2">
                {["all", "open", "coming_soon", "available"].map((s) => (
                  <button
                    key={s}
                    onClick={() =>
                      setFilterStatus(s as typeof filterStatus)
                    }
                    className={`location-filter-chip ${filterStatus === s ? "active" : ""}`}
                  >
                    {s === "coming_soon"
                      ? "Coming Soon"
                      : s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveProvince("All")}
                className={`location-filter-chip ${activeProvince === "All" ? "active" : ""}`}
              >
                All Provinces
              </button>
              {provinces.map((p) => (
                <button
                  key={p}
                  onClick={() => setActiveProvince(p)}
                  className={`location-filter-chip ${activeProvince === p ? "active" : ""}`}
                >
                  {p}
                </button>
              ))}
            </div>

            <p className="text-sm text-white/60 mt-2">
              Showing {filtered.length} zone{filtered.length !== 1 ? "s" : ""}
            </p>
          </MotionSection>

          <AnimatePresence mode="wait">
            {selectedZone && (
              <ZoneDetails
                key={selectedZone.id}
                zone={selectedZone}
                auraScore={baseAura(selectedZone) + getAura(selectedZone.id) * 18}
                auraActive={hasAura(selectedZone.id)}
                onClose={() => setSelectedZone(null)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <ZoneGrid
              key={`${activeProvince}-${filterStatus}-${search}`}
              zones={filtered}
              selectedZone={selectedZone}
              onSelect={setSelectedZone}
              toggleAura={toggleAura}
              getAura={getAura}
              hasAura={hasAura}
            />
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
