import { getNewsSlugs, getPostBySlug } from "../../lib/blog";
import { buildPostMetadata, buildPostJsonLd } from "../../lib/postSeo";
import PostArticle from "../../components/PostArticle";

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return buildPostMetadata(slug);
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostJsonLd(post)) }}
        />
      )}
      <PostArticle slug={slug} />
    </>
  );
}
