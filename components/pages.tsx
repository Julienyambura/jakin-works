import {
  Button,
  Eyebrow,
  QuoteForm,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site";

export function PageFrame({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            {intro && <p>{intro}</p>}
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

const services = [
  "Security & perimeter",
  "Doors & entryways",
  "Windows & openings",
  "Outdoor living",
  "Interior features",
  "Structural & support",
  "CNC & decorative metalwork",
  "Finishing & installation",
];
export function ServicesPage() {
  return (
    <PageFrame
      eyebrow="What we fabricate"
      title={
        <>
          Made for the
          <br />
          way spaces work.
        </>
      }
      intro="From the first line on a drawing to the last detail on site, we fabricate architectural metalwork with purpose."
    >
      <section className="section">
        <div className="container detail-grid">
          {services.map((service, index) => (
            <article className="detail-row" key={service}>
              <span>0{index + 1}</span>
              <div>
                <h2>{service}</h2>
                <p>
                  Custom fabrication for residential, commercial and
                  architectural applications. We work from drawings, references
                  or a clear brief to develop a considered, durable result.
                </p>
                <div className="tag-list">
                  <span>Mild steel</span>
                  <span>Stainless steel</span>
                  <span>Aluminium</span>
                </div>
              </div>
              <a
                href="/request-a-quote"
                aria-label={`Request a quote for ${service}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>
      <QuoteBand />
    </PageFrame>
  );
}

export function AboutPage() {
  return (
    <PageFrame
      eyebrow="About Jakin Works"
      title={
        <>
          Craftsmanship should be
          <br />
          measured in the details.
        </>
      }
      intro="A Nairobi-based fabrication company bringing greater precision, professionalism and attention to detail to architectural metalwork."
    >
      <section className="section">
        <div className="container intro-grid">
          <div className="visual visual--detail">
            <span className="visual-label">Visual placeholder</span>
          </div>
          <div className="prose">
            <Eyebrow>Our story</Eyebrow>
            <h2>
              One project at a time, we are building a standard that lasts.
            </h2>
            <p>
              Jakin Works was founded with a vision to raise the standard of
              architectural fabrication in Kenya; bringing greater precision,
              professionalism and attention to detail to work that is too often
              treated as purely functional.
            </p>
            <p>
              Starting with bespoke mild steel, stainless steel and aluminium
              fabrication, we combine modern fabrication techniques with the
              skill and experience of trusted craftsmen, delivering products
              that are strong, durable and refined.
            </p>
          </div>
        </div>
      </section>
      <section className="section dark-panel">
        <div className="container">
          <SectionHeading
            eyebrow="What guides us"
            title="Precision is in the process."
          />
          <div className="principles">
            {[
              "Quality craftsmanship",
              "Attention to detail",
              "Continuous improvement",
              "Reliable delivery",
            ].map((item, index) => (
              <div key={item}>
                <strong>0{index + 1}</strong>
                <h3>{item}</h3>
                <p>
                  We focus on precision, durability and a refined finish at
                  every stage.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our goals" title="Built to grow well." />
          <div className="goal-grid">
            {["Deliver", "Refine", "Build people", "Grow sustainably"].map(
              (goal) => (
                <div key={goal}>
                  <h3>{goal}</h3>
                  <p>
                    To keep improving the quality, clarity and care behind every
                    project.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <QuoteBand />
    </PageFrame>
  );
}

export function MaterialsPage() {
  const materials = [
    [
      "Mild steel",
      "Strength, versatility and paintable finishes.",
      "Gates · Security grills · Structural steelwork · Staircases · Frames",
    ],
    [
      "Stainless steel",
      "Durability, corrosion resistance and refined finishes.",
      "Balustrades · Pool fencing · Outdoor features · Architectural details",
    ],
    [
      "Aluminium",
      "Lightweight, corrosion resistant and clean-lined.",
      "Windows · Sliding doors · Folding doors · Louvers · Pergola frames",
    ],
    [
      "Wrought iron",
      "Traditional craftsmanship combined with bespoke detailing.",
      "Ornamental gates · Decorative grills · Railings · Custom pieces",
    ],
  ];
  return (
    <PageFrame
      eyebrow="Materials"
      title={
        <>
          Material is part
          <br />
          of the architecture.
        </>
      }
      intro="Selected for the way a space needs to perform, feel and endure."
    >
      <section className="section">
        <div className="container material-detail-grid">
          {materials.map(([title, text, uses], index) => (
            <article key={title}>
              <span className="service-number">0{index + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <small>{uses}</small>
            </article>
          ))}
          <article className="material-detail--future">
            <span className="service-number">05 · Coming soon</span>
            <h2>Timber</h2>
            <p>Woodwork is planned for a future chapter of the studio.</p>
          </article>
        </div>
      </section>
      <QuoteBand />
    </PageFrame>
  );
}

export function ProjectsPage() {
  return (
    <PageFrame
      eyebrow="Fabrication possibilities"
      title={
        <>
          What we build
          <br />
          is made to last.
        </>
      }
      intro="Real project photography is being collected. For now, explore the applications and material directions Jakin Works is set up to fabricate."
    >
      <section className="section">
        <div className="container">
          <div className="filter-row">
            <span>Applications</span>
            <span>All · Gates · Doors · Railings · Stairs · Screens · CNC</span>
          </div>
          <div className="project-list">
            {[
              "Gates",
              "Doors & entryways",
              "Staircases",
              "Architectural screens",
              "Outdoor structures",
              "Structural steel",
            ].map((item, index) => (
              <article className="project-item" key={item}>
                <div className={`project-image project-image--${index + 1}`} />
                <div>
                  <Eyebrow>Application 0{index + 1}</Eyebrow>
                  <h2>{item}</h2>
                  <p>Fabrication possibility · Visual placeholder</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteBand />
    </PageFrame>
  );
}

export function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title={
        <>
          Start a<br />
          conversation.
        </>
      }
      intro="Tell us what you are working on and we will help you explore the right fabrication approach."
    >
      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Jakin Works Ltd</h2>
            <p>Nairobi, Kenya</p>
            <div className="contact-list">
              <span>
                Phone <b>Coming soon</b>
              </span>
              <span>
                WhatsApp <b>Coming soon</b>
              </span>
              <span>
                Email <b>Coming soon</b>
              </span>
              <span>
                Instagram <b>Coming soon</b>
              </span>
            </div>
          </div>
          <QuoteForm contact />
        </div>
      </section>
    </PageFrame>
  );
}

export function QuotePage() {
  return (
    <PageFrame
      eyebrow="Request a quote"
      title={
        <>
          Let&apos;s make
          <br />
          something precise.
        </>
      }
      intro="Share your requirements, dimensions, reference images or drawings and we will help you explore the fabrication approach."
    >
      <section className="section">
        <div className="container quote-layout">
          <div>
            <SectionHeading
              eyebrow="Your project"
              title="Start with the brief."
            />
            <p className="form-note">
              Required fields are marked with an asterisk. A submission handler
              can be connected to your preferred email or form service.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </PageFrame>
  );
}

function QuoteBand() {
  return (
    <section className="quote-cta">
      <div className="container">
        <div>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2>
            Have a drawing?
            <br />
            Let&apos;s build it.
          </h2>
        </div>
        <div>
          <p>
            Share your requirements, dimensions, reference images or drawings.
          </p>
          <Button href="/request-a-quote" variant="light">
            Request a quote
          </Button>
        </div>
      </div>
    </section>
  );
}
