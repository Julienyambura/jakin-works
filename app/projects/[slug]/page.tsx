import { Button, Eyebrow, SiteFooter, SiteHeader } from "@/components/site";
import { mediaForSlug } from "@/config/media";

type Props = { params: Promise<{ slug: string }> };
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");
  const image = mediaForSlug(slug);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <Eyebrow>Fabrication application</Eyebrow>
            <h1>{title}.</h1>
            <p>
              A Jakin Works fabrication application, made to the drawing and
              finished for the setting.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div
              className="visual visual--detail"
              style={{ backgroundImage: `url("${image}")` }}
              role="img"
              aria-label={`${title} fabrication project`}
            >
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
