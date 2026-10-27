import {
  Button,
  Eyebrow,
  QuoteForm,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site";
import { media } from "@/config/media";

export function PageFrame({
  eyebrow,
  title,
  intro,
  pageHeroClassName,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  pageHeroClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className={`page-hero ${pageHeroClassName ?? ""}`}>
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
  ["Security & perimeter", media.capabilities.security],
  ["Doors & entryways", media.capabilities.doors],
  ["Windows & openings", media.capabilities.windows],
  ["Outdoor living", media.capabilities.outdoorLiving],
  ["Interior features", media.capabilities.interiorFeatures],
  ["Structural & support", media.capabilities.structural],
  ["CNC & decorative metalwork", media.capabilities.cnc],
  ["Finishing & installation", media.capabilities.finishing],
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
          {services.map(([service, image], index) => (
            <article className="detail-row" key={service}>
              <span>0{index + 1}</span>
              <div
                className="detail-row-image"
                style={{ backgroundImage: `url("${image}")` }}
                aria-hidden="true"
              />
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
    <>
      <SiteHeader />
      <main>
      <section
        className="artifact-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(23,25,27,.9), rgba(23,25,27,.6) 55%, rgba(23,25,27,.25)), url("${media.hero}")`,
        }}
      >
        <div className="container artifact-hero-grid">
          <Eyebrow>Bespoke Metal Fabrication · Nairobi</Eyebrow>
          <h1>Precision Craftsmanship for Exceptional Spaces</h1>
          <p className="hero-materials">Mild Steel · Stainless Steel · Aluminium · Wrought Iron</p>
          <p className="hero-description">
            Jakin Works designs and fabricates bespoke architectural metalwork:
            security, doors, windows, outdoor structures and interior detailing
            engineered to the drawing, for Nairobi&apos;s most exceptional homes.
          </p>
          <div className="hero-actions">
            <Button href="#contact">Request a Quote</Button>
            <Button href="#capabilities" variant="outline">View Capabilities</Button>
          </div>
        </div>
      </section>
      <section className="artifact-meta">
        <div className="container artifact-meta-grid">
          <div><span>WhatsApp / Phone</span><a href="https://wa.me/254181650805">+254 181 650 805</a></div>
          <div><span>Workshop</span><strong>Membley Estate, Nairobi</strong></div>
          <div><span>Email</span><a href="mailto:jakinworksltd@gmail.com">jakinworksltd@gmail.com</a></div>
        </div>
      </section>
      <section className="about-reference-page">
        <div className="container about-reference-page__grid">
          <div className="about-reference-page__copy">
            <Eyebrow>About Jakin Works</Eyebrow>
            <h2>Elevating Kenya&apos;s fabrication standard</h2>
          </div>
          <div className="about-reference-page__details">
            <p>
              Jakin Works was founded to elevate Kenya&apos;s architectural
              fabrication standards through precision, professionalism and
              attention to detail — combining contemporary methods with
              experienced craftsmen to create durable, refined products in
              mild steel, stainless steel, aluminium and wrought iron.
            </p>
            <p>
              Every commission is delivered on schedule, to spec, with the
              process continually refined — for homeowners and for the
              architects, contractors and quantity surveyors who bring us into
              their projects.
            </p>
            <div className="about-reference-page__stats">
              <div><strong>4</strong><span>Materials Worked</span></div>
              <div><strong>9</strong><span>Core Services</span></div>
              <div><strong>100%</strong><span>Built to the Drawing</span></div>
            </div>
          </div>
        </div>
        <div className="container about-reference-page__rule" />
      </section>
      </main>
      <SiteFooter />
    </>
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
      eyebrow="Projects"
      title={
        <>
          What we build
          <br />
          is made to last.
        </>
      }
      intro="Our project portfolio is taking shape. While we gather completed work, this is where future commissions, project stories and installation photography will live."
    >
      <section className="section">
        <div className="container">
          <div className="filter-row">
            <span>Portfolio in progress</span>
            <span>Gates · Doors · Railings · Stairs · Screens · CNC</span>
          </div>
          <div className="project-list">
            {[
              ["Gates", media.projects.gates],
              ["Doors & entryways", media.projects.doors],
              ["Staircases", media.projects.staircases],
              ["Architectural screens", media.projects.screens],
              ["Outdoor structures", media.projects.outdoorStructures],
              ["Structural steel", media.projects.structural],
            ].map((item, index) => (
              <article className="project-item" key={item[0]}>
                <div
                  className={`project-image project-image--${index + 1}`}
                  style={{ backgroundImage: `url("${item[1]}")` }}
                  role="img"
                  aria-label={`${item[0]} fabrication project`}
                />
                <div>
                  <Eyebrow>Application 0{index + 1}</Eyebrow>
                  <h2>{item[0]}</h2>
                  <p>Project details and photography coming soon.</p>
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
                Phone <b></b>
              </span>
              <span>
                WhatsApp <b></b>
              </span>
              <span>
                Email <b></b>
              </span>
              <span>
                Instagram <b></b>
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
      pageHeroClassName="page-hero--compact"
    >
      <section className="section">
        <div className="container quote-layout">
          <div>
            <SectionHeading
              eyebrow="Your project"
              title="Start with the brief."
            />
            <p className="form-note">
              Required fields are marked with an asterisk. Submitting opens your
              email app with the enquiry addressed to our studio inbox.
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
