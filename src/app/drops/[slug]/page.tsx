import { getAllSlugs } from "../../lib/blog";
import BlogPostClient from "../../blog/[slug]/BlogPostClient";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function DropPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <BlogPostClient slug={slug} />;
}
