import Link from "next/link";
import { Eyebrow, SiteFooter, SiteHeader } from "@/components/site";
import { journalArticles } from "@/config/journal";

export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero journal-hero">
          <div className="container">
            <Eyebrow>Jakin Works · Journal</Eyebrow>
            <h1>Field notes.</h1>
            <p>Practical notes on materials, process and maintenance to help you make better fabrication decisions.</p>
          </div>
        </section>
        <section className="section journal-list">
          <div className="container">
            {journalArticles.map((article) => (
              <article className="journal-list-item" key={article.slug}>
                <div>
                  <span className="journal-label">{article.category} · {article.readTime}</span>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                </div>
                <Link href={`/journal/${article.slug}`}>Read article <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}