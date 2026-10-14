"use client";

import { useEffect, useState } from "react";
import type { JournalArticle } from "@/config/journal";

export function JournalArticleLink({ article }: { article: JournalArticle }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <button className="journal-read-link" type="button" onClick={() => setOpen(true)}>
        Read Article →
      </button>
      {open && (
        <div className="journal-modal" role="dialog" aria-modal="true" aria-label={article.title} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <article className="journal-modal__panel">
            <button className="journal-modal__close" type="button" aria-label="Close article" onClick={() => setOpen(false)}>×</button>
            <div className="journal-modal__image" style={{ backgroundImage: `url("${article.image}")` }} aria-hidden="true" />
            <div className="journal-modal__image" style={{ backgroundImage: `url("${article.image}")` }} aria-hidden="true" />
            <div className="journal-modal__eyebrow">Journal · {article.category}</div>
            <h2>{article.title}</h2>
            <div className="journal-modal__meta">Jakin Works · {article.date} · {article.readTime}</div>
            <p className="journal-modal__lead">{article.excerpt}</p>
            <div className="journal-modal__body">
              {(article.sections ?? article.paragraphs.map((body) => ({ heading: "", body }))).map((section) => (
                <section key={`${section.heading}-${section.body}`}>
                  {section.heading && <h3>{section.heading}</h3>}
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      )}
    </>
  );
}