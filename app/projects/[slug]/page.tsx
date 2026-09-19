import { Button, Eyebrow, SiteFooter, SiteHeader } from "@/components/site";

type Props = { params: Promise<{ slug: string }> };
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <Eyebrow>Fabrication application</Eyebrow>
            <h1>{title}.</h1>
            <p>
              Visual placeholder. Real Jakin Works project photography and
              project information will be added as the portfolio is supplied.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div className="visual visual--detail">
              <span className="visual-label">Visual placeholder</span>
            </div>
            <div>
              <Eyebrow>Application overview</Eyebrow>
              <h2>Considered in material, detail and finish.</h2>
              <p className="form-note">
                This layout is ready for project title, category, material,
                location, year, scope and gallery content when available.
              </p>
              <Button href="/request-a-quote">Discuss a project</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
