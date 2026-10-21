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
            <div className="article-body__image" style={{ backgroundImage: `url("${article.image}")` }} aria-label={article.title} role="img" />
            <p className="article-body__lead">{article.excerpt}</p>
            {(article.sections.length ? article.sections : article.paragraphs.map((body) => ({ heading: "", body }))).map((section) => (
              <section key={`${section.heading}-${section.body}`}>
                {section.heading && <h2>{section.heading}</h2>}
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}