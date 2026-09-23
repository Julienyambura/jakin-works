import { notFound } from "next/navigation";
import { Eyebrow, SiteFooter, SiteHeader } from "@/components/site";
import { journalArticles } from "@/config/journal";

export function generateStaticParams() {
  return journalArticles.map(({ slug }) => ({ slug }));
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = journalArticles.find((entry) => entry.slug === slug);

  if (!article) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero article-hero">
          <div className="container">
            <Eyebrow>{article.category} · {article.readTime}</Eyebrow>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </div>
        </section>
        <article className="section article-body">
          <div className="container prose">
            {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}