import Link from "next/link";
import {
  Button,
  Eyebrow,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "@/components/site";

export default function Home() {
  const services = [
    ["Security & perimeter", "Gates, fencing, railings, security grills and window guards."],
    ["Doors & entryways", "Security, French, sliding and folding doors with considered hardware."],
    ["Windows & openings", "Steel and aluminium frames, windows, skylights and burglar-proofing."],
    ["Outdoor living", "Pergolas, gazebos, balustrades, pool fencing, carports and staircases."],
    ["Interior features", "Railings, screens, feature gates, light fixtures and metal accents."],
    ["Structural & support", "Framing, beams, columns, roofing structures and trusses."],
    ["CNC & decorative", "Precision-cut panels, screens, gates, grills and feature walls."],
    ["Finishing & installation", "Powder coating, galvanizing, polishing, fitting and refurbishment."],
  ];    
  const materials = [
    ["01", "Mild steel", "Strength, versatility and paintable finishes."],
    [
      "02",
      "Stainless steel",
          "Durable. Refined. Low maintenance.",
    ],
    ["03", "Aluminium", "Lightweight, corrosion resistant and clean-lined."],
    [
      "04",
      "Wrought iron",
      "Traditional craft combined with bespoke detailing.",
    ],
  ];
  const steps = [
    [
      "01",
      "Discover",
          "Brief, space and design intent.",
    ],
    [
      "02",
      "Design",
          "Dimensions, materials and details.",
    ],
    [
      "03",
      "Fabricate",
          "Skilled craft. Modern techniques.",
    ],
    ["04", "Finish", "Prepared, treated and finished for its application."],
    [
      "05",
      "Install",
          "Delivered, fitted and aligned.",
    ],
  ];
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <Eyebrow>Nairobi · Kenya</Eyebrow>
              <h1>
                Built to the
                <br />
                drawing.
              </h1>
            </div>
            <div className="hero-copy">
              <p>Architectural metalwork, from drawing to installation.</p>
              <div className="hero-actions">
                <Button href="/request-a-quote">Request a quote</Button>
                <Button href="/projects" variant="light">
                  View our work
                </Button>
              </div>
            </div>
          </div>
          <div className="container hero-meta" aria-label="Jakin Works capabilities">
            <span>Nairobi-based</span>
            <span>Metalwork · CNC · Installation</span>
            <span>Built from the drawing</span>
          </div>
        </section>
        <section className="intro">
          <div className="container intro-grid">
            <div className="intro-copy">
              <Eyebrow>Jakin Works</Eyebrow>
              <h2>Fabrication with architectural intent.</h2>
            </div>
            <div>
              <p>
                Jakin Works is a Nairobi-based fabrication company specialising
                in premium and bespoke mild steel, stainless steel and aluminium
                work for architectural and personal applications. Every piece
                is designed and fabricated with precision, combining quality
                materials, modern techniques and skilled craftsmanship to
                achieve strength, durability and refined finishes.
              </p>
              <Button href="/about" variant="outline">
                About Jakin Works
              </Button>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <SectionHeading
              eyebrow="What we fabricate"
              title={
                <>
                  From structural necessity
                  <br />
                  to architectural detail.
                </>
              }
                intro="Gates · doors · railings · stairs · screens · structures."
            />
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-item" key={service[0]}>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service[0]}</h3>
                  <p>{service[1]}</p>
                    <Link href="/services" aria-label={`Explore ${service[0]}`}>
                      ↗
                    </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Materials"
                title="Material, made purposeful."
            />
            <div className="materials-grid">
              {materials.map(([number, title, text]) => (
                <article className="material" key={title}>
                  <span className="service-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
              <article className="material material--future">
                <span className="service-number">05 · Coming soon</span>
                <h3>Timber</h3>
                <p>Woodwork will join the studio in a future chapter.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section applications">
          <div className="container">
            <div className="application-head">
              <SectionHeading
                eyebrow="What we build"
                title={
                  <>
                    Details worth
                    <br />
                    looking closer at.
                  </>
                }
              />
              <Button href="/services" variant="outline">
                View capabilities
              </Button>
            </div>
            <p className="application-note">
              Placeholder applications. Portfolio photography coming soon.
            </p>
            <div className="application-grid">
              {[
                "Gates",
                "Doors",
                "Staircases",
                "Screens",
                "Outdoor structures",
              ].map((item) => (
                <div className="application" key={item}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section process" id="process">
          <div className="container">
            <SectionHeading
              eyebrow="Our approach"
              title={
                <>
                  Precision is
                  <br />
                  in the process.
                </>
              }
            />
            <div className="process-grid">
              {steps.map(([number, title, text]) => (
                <article className="step" key={number}>
                  <strong>{number}</strong>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="principles-grid">
              {[
                ["Quality craftsmanship", "Durable, refined results."],
                ["Attention to detail", "Every detail matters."],
                ["Continuous improvement", "Always refining the process."],
                ["Reliable delivery", "Clear planning. Focused execution."],
              ].map(([title, text]) => (
                <article className="principle" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <Button href="/request-a-quote">Start a project</Button>
          </div>
        </section>
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
                Tell us what you&apos;re working on. Share your requirements,
                dimensions, reference images or drawings and we&apos;ll help you
                explore the fabrication approach.
              </p>
              <Button href="/request-a-quote" variant="light">
                Request a quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
