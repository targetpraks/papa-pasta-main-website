"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const consent = localStorage.getItem("pp-cookie-consent");
      setVisible(!consent);
    }, 0);

    return () => window.clearTimeout(id);
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-white/10 px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70 text-center sm:text-left">
          We use cookies to improve your experience and measure site performance. 
          By continuing, you agree to our{" "}
          <a href="/legal/" className="underline text-white hover:text-white">Privacy Policy</a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs uppercase tracking-wider text-white/60 border border-white/20 rounded hover:bg-white/5 transition"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs uppercase tracking-wider bg-white text-black rounded font-semibold hover:bg-white/90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
