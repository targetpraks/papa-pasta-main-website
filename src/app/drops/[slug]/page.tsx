import { getDropsSlugs } from "../../lib/blog";
import PostArticle from "../../components/PostArticle";

export function generateStaticParams() {
  return getDropsSlugs().map((slug) => ({ slug }));
}

export default async function DropPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <PostArticle slug={slug} />;
}
