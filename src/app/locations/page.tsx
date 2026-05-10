"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection, StaggerContainer, staggerChildScale } from "../components/Motion";
import { zones, provinces, type Zone } from "../../lib/zones";

/* ───────────────────────────────────────────────
   VOTE HOOK (localStorage)
   ─────────────────────────────────────────────── */
function useZoneVotes() {
  const [votes, setVotes] = useState<Record<number, number>>({});
  const [userVotes, setUserVotes] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pp-zone-votes");
      if (raw) setVotes(JSON.parse(raw));
      const rawUser = localStorage.getItem("pp-user-votes");
      if (rawUser) setUserVotes(new Set(JSON.parse(rawUser)));
    } catch {}
  }, []);

  const persist = useCallback((nextVotes: Record<number, number>, nextUser: Set<number>) => {
    localStorage.setItem("pp-zone-votes", JSON.stringify(nextVotes));
    localStorage.setItem("pp-user-votes", JSON.stringify([...nextUser]));
  }, []);

  const toggleVote = useCallback((zoneId: number) => {
    setVotes((prev) => {
      setUserVotes((userPrev) => {
        const next = new Set(userPrev);
        let nextVotes = { ...prev };
        if (next.has(zoneId)) {
          next.delete(zoneId);
          nextVotes[zoneId] = Math.max(0, (nextVotes[zoneId] || 1) - 1);
        } else {
          next.add(zoneId);
          nextVotes[zoneId] = (nextVotes[zoneId] || 0) + 1;
        }
        persist(nextVotes, next);
        return next;
      });
      return prev;
    });
  }, [persist]);

  const getVotes = useCallback(
    (zoneId: number) => {
      return votes[zoneId] || 0;
    },
    [votes]
  );

  const hasVoted = useCallback(
    (zoneId: number) => {
      return userVotes.has(zoneId);
    },
    [userVotes]
  );

  return { toggleVote, getVotes, hasVoted };
}

/* ───────────────────────────────────────────────
   ZONE CARD
   ─────────────────────────────────────────────── */
function ZoneCard({
  zone,
  toggleVote,
  getVotes,
  hasVoted,
}: {
  zone: Zone;
  toggleVote: (id: number) => void;
  getVotes: (id: number) => number;
  hasVoted: (id: number) => boolean;
}) {
  const votes = getVotes(zone.id);
  const voted = hasVoted(zone.id);

  const statusBorder =
    zone.status === "open"
      ? "zone-card-open"
      : zone.status === "available"
        ? "zone-card-available"
        : "zone-card-coming-soon";

  return (
    <motion.div
      variants={staggerChildScale}
      className={`card rounded-xl overflow-hidden ${statusBorder} relative group`}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-[0.15em] text-black/30 font-semibold">
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

        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full flex-shrink-0 border-2 border-white shadow-sm"
            style={{
              backgroundColor: zone.primaryColor.toLowerCase(),
              boxShadow: `0 0 12px ${zone.primaryColor}`,
            }}
          />
          <div className="min-w-0">
            <h3 className="font-serif text-sm font-bold truncate">{zone.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.1em] text-black/30 truncate">
              {zone.province}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold">{votes} votes</span>
          <button
            onClick={() => toggleVote(zone.id)}
            className={`vote-btn text-sm font-semibold ${voted ? "voted" : "text-black/40"}`}
            aria-label={voted ? "Remove vote" : "Vote"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={voted ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        {zone.status === "available" && (
          <Link
            href="/franchise/"
            className="btn-neon-outline block w-full text-center rounded-md border-2 border-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-bold text-black hover:border-black transition-all duration-300"
          >
            Buy This Area
          </Link>
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
  toggleVote,
  getVotes,
  hasVoted,
}: {
  zones: Zone[];
  toggleVote: (id: number) => void;
  getVotes: (id: number) => number;
  hasVoted: (id: number) => boolean;
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
          toggleVote={toggleVote}
          getVotes={getVotes}
          hasVoted={hasVoted}
        />
      ))}
    </StaggerContainer>
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

  const { toggleVote, getVotes, hasVoted } = useZoneVotes();

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
      <header className="bg-black text-white py-20 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4"
          >
            Locations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold mb-4"
          >
            The <span className="neon-text-gradient">72 Zones</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Every zone gets a colour. Every colour tells a story. Vote for
            your favourite crest and watch the network grow.
          </motion.p>
        </div>
      </header>

      <section className="section-padding bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <MotionSection className="mb-10 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Search zones..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field max-w-sm"
              />
              <div className="flex flex-wrap gap-2">
                {["all", "open", "coming_soon", "available"].map((s) => (
                  <button
                    key={s}
                    onClick={() =>
                      setFilterStatus(s as typeof filterStatus)
                    }
                    className={`filter-chip ${filterStatus === s ? "active" : ""}`}
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
                className={`filter-chip ${activeProvince === "All" ? "active" : ""}`}
              >
                All Provinces
              </button>
              {provinces.map((p) => (
                <button
                  key={p}
                  onClick={() => setActiveProvince(p)}
                  className={`filter-chip ${activeProvince === p ? "active" : ""}`}
                >
                  {p}
                </button>
              ))}
            </div>

            <p className="text-sm text-black/30 mt-2">
              Showing {filtered.length} zone{filtered.length !== 1 ? "s" : ""}
            </p>
          </MotionSection>

          <AnimatePresence mode="wait">
            <ZoneGrid
              key={`${activeProvince}-${filterStatus}-${search}`}
              zones={filtered}
              toggleVote={toggleVote}
              getVotes={getVotes}
              hasVoted={hasVoted}
            />
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
