"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "../lib/blog";

/**
 * Client-side redirect for legacy `/blog/*` URLs. Sends a post to its new
 * section home (`/drops/{slug}` or `/news/{slug}`), falling back to the Drops
 * feed for unknown slugs. Renders a manual link for no-JS clients.
 */
export default function PostRedirect({ slug }: { slug?: string }) {
  const router = useRouter();
  const post = slug ? getPostBySlug(slug) : undefined;
  const target = post ? `/${post.section}/${post.slug}/` : "/drops/";

  useEffect(() => {
    router.replace(target);
  }, [router, target]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-black text-white px-4">
      <p className="text-white/75 text-center">
        This page has moved.{" "}
        <Link href={target} className="text-lime-300 hover:text-white underline">
          Continue
        </Link>
        .
      </p>
    </div>
  );
}
