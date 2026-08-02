import { getNewsSlugs } from "../../lib/blog";
import PostArticle from "../../components/PostArticle";

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <PostArticle slug={slug} />;
}
