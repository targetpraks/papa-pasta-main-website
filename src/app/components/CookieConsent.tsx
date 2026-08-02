"use client";

import { useState, useEffect, useLayoutEffect } from "react";

// Guarded for SSR: useLayoutEffect warns during static prerender, so fall back
// to useEffect on the server. `typeof window` is stable per environment, so the
// hook identity never changes between renders (rules-of-hooks safe).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setVisible(!localStorage.getItem("pp-cookie-consent"));
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pp-cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const handleDecline = () => {
    localStorage.setItem("pp-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[80] bg-black/95 border-t border-white/10 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70 text-center sm:text-left">
          We use cookies to improve your experience and measure site performance.
          By continuing, you agree to our{" "}
          <a href="/legal/" className="underline text-white hover:text-white">Privacy Policy</a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs uppercase tracking-wider text-white/60 border border-white/20 rounded hover:bg-white/5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs uppercase tracking-wider bg-white text-black rounded font-semibold hover:bg-white/90 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
