import { Eyebrow, SiteFooter, SiteHeader } from "@/components/site";
import { journalArticles } from "@/config/journal";
import { JournalArticleLink } from "@/components/journal";

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
            <div className="field-notes journal-field-notes">
            {journalArticles.map((article) => (
              <article className="journal-list-item" key={article.slug} style={{ backgroundImage: `linear-gradient(180deg, rgba(23,25,27,.05), rgba(23,25,27,.86)), url("${article.image}")` }}>
                <span>{article.category}</span>
                <small>{article.date} · {article.readTime}</small>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <JournalArticleLink article={article} />
              </article>
            ))}
            <article className="journal-list-item journal-ask-card">
              <span>Ask the workshop</span>
              <h3>Got a question about metalwork for your home?</h3>
              <p>Tell us what you would like to understand about materials, finishes, costs or maintenance.</p>
              <a href="https://wa.me/254181650805">Send a question →</a>
            </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}