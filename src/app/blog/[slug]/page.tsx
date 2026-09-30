import { getAllSlugs } from "../../lib/blog";
import PostRedirect from "../../components/PostRedirect";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function LegacyBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <PostRedirect slug={slug} />;
}
