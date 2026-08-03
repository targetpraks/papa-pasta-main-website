"use client";

import PostFeed from "../components/PostFeed";
import { dropsCategories, getDropsPosts } from "../lib/blog";

export default function DropsPage() {
  return (
    <PostFeed
      posts={getDropsPosts()}
      categories={dropsCategories}
      theme="drops"
      eyebrow="Merch · Collections · Seasonal Menu"
      title="Drops"
      subtitle="Limited merch, numbered collections, and seasonal menu releases — dropped for a window, then gone. Loyalty sees them first."
    />
  );
}
