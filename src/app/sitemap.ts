import type { MetadataRoute } from "next";
import { getDropsPosts, getNewsPosts } from "./lib/blog";

const SITE = "https://papapasta.co.za";

// Required for `output: export` — emit the sitemap at build time.
export const dynamic = "force-static";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

const STATIC_ROUTES: { path: string; changeFrequency: ChangeFreq; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/menu/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/locations/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/order/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/drops/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/news/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/merch/", changeFrequency: "weekly", priority: 0.85 },
  { path: "/level-up/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/bowls/", changeFrequency: "monthly", priority: 0.65 },
  { path: "/story/", changeFrequency: "monthly", priority: 0.65 },
  { path: "/events/", changeFrequency: "weekly", priority: 0.6 },
  { path: "/artisanal/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/gallery/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/franchise/", changeFrequency: "monthly", priority: 0.55 },
  { path: "/contact/", changeFrequency: "monthly", priority: 0.55 },
  { path: "/careers/", changeFrequency: "monthly", priority: 0.45 },
  { path: "/legal/", changeFrequency: "monthly", priority: 0.3 },
];

/**
 * Build-time sitemap. Static marketing routes are listed explicitly; Drops and
 * News post URLs are derived from the post data so the sitemap can never drift
 * out of sync with the feeds. The legacy `/blog` URLs are intentionally omitted
 * — they now redirect and are marked noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries = [...getDropsPosts(), ...getNewsPosts()].map((post) => ({
    url: `${SITE}/${post.section}/${post.slug}/`,
    lastModified,
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
