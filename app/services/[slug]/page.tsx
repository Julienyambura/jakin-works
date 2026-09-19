import {
  Button,
  Eyebrow,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site";

type Props = { params: Promise<{ slug: string }> };
export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <Eyebrow>Service detail</Eyebrow>
            <h1>{title}.</h1>
            <p>
              Custom architectural fabrication for residential, commercial and
              personal applications. Built around your drawing, dimensions and
              design intent.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div>
              <SectionHeading
                eyebrow="What we do"
                title="Made to fit the brief."
              />
              <p className="form-note">
                We work across mild steel, stainless steel and aluminium, with
                finishing and installation considered from the beginning.
              </p>
              <Button href="/request-a-quote">Request a quote</Button>
            </div>
            <div className="visual">
              <span className="visual-label">Visual placeholder</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
