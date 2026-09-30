"use client";

import PostFeed from "../components/PostFeed";
import { getNewsPosts, newsCategories } from "../lib/blog";

export default function NewsPage() {
  return (
    <PostFeed
      posts={getNewsPosts()}
      categories={newsCategories}
      theme="news"
      eyebrow="Launches · Partnerships · Brand Stories"
      title="News & Journal"
      subtitle="New store launches, brand partnerships and TakeOvers, loyalty updates, and the stories behind the Papa Pasta system."
    />
  );
}
