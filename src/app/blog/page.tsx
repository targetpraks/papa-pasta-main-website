"use client";

import PostRedirect from "../components/PostRedirect";

/**
 * Legacy `/blog` listing. The feed split into `/drops` and `/news`; this route
 * now redirects to Drops and is excluded from indexing (see layout metadata).
 */
export default function BlogPage() {
  return <PostRedirect />;
}
