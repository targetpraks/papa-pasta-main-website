import type { Metadata } from "next";
import { getPostBySlug, type BlogPost } from "./blog";

const SITE = "https://papapasta.co.za";

/**
 * Per-post metadata for a Drops or News detail page. Relative URLs resolve
 * against the root layout's `metadataBase`, so OG/Twitter images point at the
 * post's own artwork instead of the site-wide default.
 *
 * @param slug - The post slug from the route params.
 * @returns Next.js Metadata for the post, or a noindex fallback if not found.
 */
export function buildPostMetadata(slug: string): Metadata {
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found", robots: { index: false, follow: false } };
  }

  const url = `/${post.section}/${post.slug}/`;
  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [{ url: post.img, alt: post.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.img],
    },
  };
}

/**
 * schema.org JSON-LD for a post: `BlogPosting` for News (editorial), `Product`
 * for Drops (product/menu releases). Image URLs are absolutised against the
 * production origin.
 *
 * @param post - The post to describe.
 * @returns A JSON-LD object ready to serialise into a script tag.
 */
export function buildPostJsonLd(post: BlogPost): Record<string, unknown> {
  const url = `${SITE}/${post.section}/${post.slug}/`;
  const image = post.img.startsWith("http") ? post.img : `${SITE}${post.img}`;

  if (post.section === "news") {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image,
      url,
      mainEntityOfPage: url,
      articleSection: post.category,
      author: { "@type": "Organization", name: "Papa Pasta" },
      publisher: {
        "@type": "Organization",
        name: "Papa Pasta",
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/images/logo-crest-white.png`,
        },
      },
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: post.title,
    description: post.excerpt,
    image,
    category: post.category,
    brand: { "@type": "Brand", name: "Papa Pasta" },
    url,
  };
}
