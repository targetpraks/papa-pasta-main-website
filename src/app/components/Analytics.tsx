"use client";

import { useEffect } from "react";

function getConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("pp-cookie-consent") === "accepted";
}

export function AnalyticsScripts() {
  useEffect(() => {
    if (!getConsent()) return;

    // GA4
    const gaId = process.env.NEXT_PUBLIC_GA4_ID;
    if (gaId) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    }

    // Meta Pixel
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    if (pixelId) {
      const script = document.createElement("script");
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }

    // Listen for consent changes
    const handler = () => window.location.reload();
    window.addEventListener("cookieConsentChanged", handler);
    return () => window.removeEventListener("cookieConsentChanged", handler);
  }, []);

  return null;
}
