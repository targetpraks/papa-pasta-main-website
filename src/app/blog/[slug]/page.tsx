import { getAllSlugs } from "../../lib/blog";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
