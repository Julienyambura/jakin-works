import Link from "next/link";
import { Button, Eyebrow, SiteFooter, SiteHeader } from "@/components/site";
import { journalArticles } from "@/config/journal";
import { media } from "@/config/media";
import { JournalArticleLink } from "@/components/journal";

const capabilities = [
  [
    "Security & Perimeter",
    "Gates, grilles and perimeter features that secure the home without compromising its design.",
    media.capabilities.security,
  ],
  [
    "Doors & Entryways",
    "Entrance and interior doors fabricated to the frame opening, in any of our four materials.",
    media.capabilities.doors,
  ],
  [
    "Windows",
    "Steel and aluminium window sections detailed to hold glazing precisely to spec.",
    media.capabilities.windows,
  ],
  [
    "Outdoor Living",
    "Pergolas, patio and balcony structures fabricated for Nairobi's outdoor lifestyle.",
    media.capabilities.outdoorLiving,
  ],
  [
    "Interior Features",
    "Railings, balustrades and interior metal detailing built to code and to the drawing.",
    media.capabilities.interiorFeatures,
  ],
  [
    "Structural Work",
    "Load-bearing steel elements fabricated and finished to engineering specification.",
    media.capabilities.structural,
  ],
  [
    "CNC Cutting",
    "Precision-cut decorative panels, facades and patterned screens, cut to exact digital spec.",
    media.capabilities.cnc,
  ],
  [
    "Finishing Services",
    "Powder-coating, hand-finishing and polishing for a durable, considered surface.",
    media.capabilities.finishing,
  ],
  [
    "Maintenance & Repair",
    "Servicing, repairs and refurbishment for existing metalwork, hardware and finishes.",
    media.capabilities.maintenance,
  ],
];

const materials = [
  [
    "Mild Steel",
    "The standard for gates, railings and structural work, powder-coated or hand-finished for a durable surface.",
  ],
  [
    "Stainless Steel",
    "Corrosion-resistant detailing for exposed and high-contact elements: handrails, hardware and weather-exposed installations.",
  ],
  [
    "Aluminium",
    "Lightweight, low-maintenance fabrication for large-format doors, windows and outdoor structures.",
  ],
  [
    "Wrought Iron",
    "Traditional, hand-worked detailing for decorative gates, balustrades and security features.",
  ],
  [
    "Timber",
    "Hardwood doors, flooring, staircases and cabinetry, the first offering of our upcoming Woodworks division.",
  ],
];

const steps = [
  [
    "Choose a design",
    "Start from our signature designs or bring a sketch, reference photo or architect's drawing.",
  ],
  [
    "Measure & detail",
    "We visit site, take exact measurements and prepare drawings showing dimensions, materials and finish.",
  ],
  [
    "Quote & deposit",
    "One clear written quote covers design, materials, fabrication, finishing and installation.",
  ],
  [
    "Craft in the workshop",
    "Your piece is cut, welded, assembled and finished by skilled fabricators with engineering checks throughout.",
  ],
  [
    "Install & hand over",
    "We install on site, check against the approved drawing, clean up and walk you through simple care.",
  ],
];

const projects = [
  ["Sliding Driveway Gate", "Security & Perimeter", media.projects.gates],
  ["Staircase Balustrade", "Interior", media.projects.staircases],
  ["Perforated Facade Screen", "CNC Cutting", media.projects.screens],
  ["Outdoor Pergola", "Outdoor Living", media.projects.outdoorStructures],
  ["Entrance Door", "Doors", media.projects.doors],
  ["Window Grilles", "Windows", media.projects.structural],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
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
            <p className="hero-description">Jakin Works designs and fabricates bespoke architectural metalwork: security, doors, windows, outdoor structures and interior detailing engineered to the drawing, for Nairobi&apos;s most exceptional homes.</p>
            <div className="hero-actions"><Button href="#contact">Request a Quote</Button><Button href="#capabilities" variant="outline">View Capabilities</Button></div>
          </div>
        </section>

        <section className="artifact-meta">
          <div className="container artifact-meta-grid">
            <div>
              <span>WhatsApp / Phone</span>
              <a href="https://wa.me/254181650805">+254 181 650 805</a>
            </div>
            <div>
              <span>Workshop</span>
              <strong>Membley Estate, Nairobi</strong>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:jakinworksltd@gmail.com">
                jakinworksltd@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section className="artifact-section" id="about">
          <div className="container about-home-grid">
            <div className="about-home-copy">
              <Eyebrow>About Jakin Works</Eyebrow>
              <h2>Elevating Kenya&apos;s fabrication standard</h2>
              <p>
                Jakin Works was founded to elevate Kenya&apos;s architectural
                fabrication standards through precision, professionalism and
                attention to detail, combining contemporary methods with
                experienced craftsmen to create durable, refined products.
              </p>
              <p>
                Every commission is delivered on schedule, to spec, with the
                process continually refined for homeowners and for the
                architects, contractors and quantity surveyors who bring us into
                their projects.
              </p>
            </div>
            <div className="stat-grid">
              <div><strong>4</strong><span>Materials worked</span></div>
              <div><strong>9</strong><span>Core services</span></div>
              <div><strong>100%</strong><span>Built to the drawing</span></div>
            </div>
          </div>
        </section>

        <section
          className="artifact-section capability-section"
          id="capabilities"
        >
          <div className="container">
            <Eyebrow>Core Services</Eyebrow>
            <h2>Capabilities</h2>
            <p className="section-intro">
              Every piece designed and fabricated to your home&apos;s
              architecture, not pulled from a catalogue.
            </p>
            <div className="capability-grid">
              {capabilities.map(([title, text, image], index) => (
                <article className="capability-card" key={title}>
                  <div
                    className="capability-photo"
                    style={{
                      backgroundImage: `linear-gradient(rgba(23,25,27,.05), rgba(23,25,27,.28)), url("${image}")`,
                    }}
                  />
                  <span className="card-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href="#contact">Ask About This →</Link>
                </article>
              ))}
            </div>
            <div
              className="woodworks-banner"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(168,86,53,.95), rgba(168,86,53,.55)), url("${media.about}")`,
              }}
            >
              <div>
                <Eyebrow>Coming Soon</Eyebrow>
                <h3>Woodworks Division</h3>
                <p>
                  Hardwood doors, flooring, staircases, cabinetry and wood-metal
                  combination features, launching as a companion to our
                  metalwork.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="artifact-section" id="materials">
          <div className="container">
            <Eyebrow>Materials Index</Eyebrow>
            <h2>Four materials, one standard</h2>
            <p className="section-intro">
              Every piece is fabricated to the same precision standard, chosen
              for the location, exposure and finish the drawing calls for.
            </p>
            <div className="indexed-rows indexed-rows--materials">
              {materials.map(([title, text], index) => (
                <article className="indexed-row" key={title}>
                  <span className="indexed-row__number">0{index + 1}</span>
                  <h3>{title}</h3>
                  {title === "Timber" && <em>Coming Soon</em>}
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="material-line">
              Mild Steel · Stainless Steel · Aluminium · Wrought Iron
            </p>
          </div>
        </section>

        <section className="artifact-section process-section" id="process">
          <div className="container">
            <Eyebrow>How We Work</Eyebrow>
            <h2>From first idea to final fit</h2>
            <p className="section-intro">
              Pick from our own signature designs or bring your own idea. Either
              way, the journey is clear and you&apos;ll always know what happens
              next.
            </p>
            <ol className="indexed-rows indexed-rows--process">
              {steps.map(([title, text], index) => (
                <li className="indexed-row" key={title}>
                  <span className="indexed-row__number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <div>
                    <p>{text}</p>
                    <strong>You get: A clear next step</strong>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="why-reference" id="why">
          <div className="container why-reference__inner">
            <Eyebrow>Why Work With Us</Eyebrow>
            <h2>Engineered properly. Finished beautifully.</h2>
            <p className="why-reference__intro">
              Jakin Works is led by engineers, not just fabricators. Every gate,
              door, railing and structure is designed to perform as well as it
              looks — then built on modern machinery and finished by hand.
            </p>
            <div className="why-reference__rail">
              {["Engineer-Designed", "Precision-Cut", "Hand-Finished", "Quality-Checked"].map((item, index) => (
                <span key={item}><b>0{index + 1}</b> {item}</span>
              ))}
            </div>
            <div className="why-reference__cards">
              {[
                ["△", "Engineer-Led", "Our founder's mechanical engineering background, backed by structural engineers on the team, means loads, spans, hinges and fixings are calculated — not guessed. Gates swing true; balustrades stay solid."],
                ["☼", "Modern Precision Machinery", "CNC cutting and modern fabrication equipment deliver clean edges, tight tolerances and intricate patterns — cut to the same accuracy, every time."],
                ["⌁", "Bespoke Craftsmanship", "Nothing comes from a catalogue. Every piece is designed around your home's architecture, then welded, ground and finished by skilled hands."],
                ["♢", "End-to-End Quality Control", "Material, cut, weld, finish and fit are each checked against the approved drawing — in the workshop, and again on site before handover."],
                ["•••", "One Team, Design to Install", "Our signature designs or yours, then fabrication, finishing and installation under one roof — one point of contact, one team accountable from first sketch to final fit."],
                ["⚒", "Built to Last", "Materials and protective finishes are chosen for Nairobi's strong sun and rainy seasons. If anything needs attention years later, maintenance is a call away."],
              ].map(([icon, title, text]) => (
                <article key={title}>
                  <span className="why-reference__icon" aria-hidden="true">{icon}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="engineer-callout">
              <Eyebrow>An Engineer&apos;s Eye for Detail</Eyebrow>
              <h3>Built by someone who has done the calculations.</h3>
              <p>Our founder comes from a mechanical engineering background — and it shows in the details most fabricators skip: hinges and posts sized for the real weight of a four-metre gate leaf, room left for long runs of steel to expand in the afternoon sun, drainage in hollow sections so they do not rust from the inside, and fixings matched to the wall they go into.</p>
              <div><Button href="#contact" variant="light">Start a Project</Button><Button href="https://wa.me/254181650805" variant="outline">WhatsApp Us</Button></div>
            </div>
          </div>
        </section>

        <section className="artifact-section projects-section" id="projects">
          <div className="container">
            <Eyebrow>Portfolio</Eyebrow>
            <h2>Featured Projects</h2>
            <p className="section-intro">
              Every installation we complete is added here as it is handed over.
              These references show the style and calibre of work we take on.
            </p>
            <div className="project-grid">
              {projects.map(([title, category, image]) => (
                <article className="project-card" key={title}>
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                  <strong>{category}</strong>
                  <p>{title}</p>
                </article>
              ))}
            </div>
            <p className="project-status">
              Planning something similar?{" "}
              <Link href="#contact">Tell us about your project →</Link>
            </p>
          </div>
        </section>

        <section className="artifact-section shop-section" id="shop">
          <div className="container">
            <Eyebrow>Retail & Custom Pieces</Eyebrow>
            <h2>The Jakin Shop</h2>
            <p className="section-intro">
              Beyond architectural commissions, our workshop makes smaller metal
              pieces for the home and garden, in-stock designs or built to your
              own.
            </p>
            <div className="shop-grid">
              {[
                ["Metal Wall Art", media.shop.customPieces],
                ["Sculpture & Statement Pieces", media.shop.gates],
                ["Custom Furniture", media.shop.hardware],
              ].map(([title, image]) => (
                <article className="shop-card" key={title}>
                  <div
                    className="shop-photo"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                  <span className="shop-label">Price on enquiry</span>
                  <h3>{title}</h3>
                  <p>
                    Made to order in our workshop, in the same four materials
                    and finished to suit your space.
                  </p>
                  <a href="https://wa.me/254181650805">Enquire on WhatsApp →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="artifact-section journal-section" id="journal">
          <div className="container">
            <Eyebrow>Journal</Eyebrow>
            <h2>Field Notes</h2>
            <p className="section-intro">
              Notes on materials, process and maintenance to help you make
              informed decisions about the metalwork in your home.
            </p>
            <div className="field-notes">
              {journalArticles.map((article) => (
                <article key={article.slug} style={{ backgroundImage: `linear-gradient(180deg, rgba(23,25,27,.05), rgba(23,25,27,.86)), url("${article.image}")` }}>
                  <span>{article.category}</span>
                  <small>{article.date} · {article.readTime}</small>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <JournalArticleLink article={article} />
                </article>
              ))}
              <article className="journal-ask-card">
                <span>Ask the workshop</span>
                <h3>Got a question about metalwork for your home?</h3>
                <p>Tell us what you would like to understand: materials, finishes, costs or maintenance.</p>
                <a href="https://wa.me/254181650805">Send a question →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="artifact-section trust-section">
          <div className="container">
            <Eyebrow>Who We Work With</Eyebrow>
            <h2>Made for the people behind the build.</h2>
            <p className="section-intro">
              We collaborate with homeowners, architects, contractors and
              quantity surveyors who care about how a project comes together.
            </p>
            <div className="trust-grid">
              {[
                "Architects",
                "Contractors",
                "Quantity Surveyors",
                "Developers",
              ].map((title, index) => (
                <article key={title}>
                  <span>0{index + 1} / 04</span>
                  <h3>{title}</h3>
                  <p>
                    Tolerances, materials and finish quality built to hold up to
                    the professionals who specify fabricators into luxury
                    residential projects.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="artifact-section location-section" id="location">
          <div className="container location-grid">
            <div>
              <Eyebrow>Find Us</Eyebrow>
              <h2>Built in Nairobi. Installed across Kenya.</h2>
              <p>
                Our workshop is based in Membley Estate, Nairobi, where every
                commission is measured, fabricated and finished before it
                reaches site.
              </p>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Membley%20Estate%2C%20Nairobi"
                variant="outline"
              >
                Open in Google Maps
              </Button>
            </div>
            <div
              className="location-image"
              style={{ backgroundImage: `url("${media.about}")` }}
            >
              <span>Membley Estate · Nairobi</span>
            </div>
          </div>
        </section>

        <section className="artifact-section contact-section" id="contact">
          <div className="container split-section">
            <div>
              <Eyebrow>Start a Project</Eyebrow>
              <h2>Have a drawing? Let&apos;s build it.</h2>
              <p>
                Share your requirements, dimensions, reference images or
                drawings and we will help you explore the right fabrication
                approach.
              </p>
            </div>
            <div className="contact-form-placeholder">
              <span>WhatsApp / Phone</span>
              <p>
                +254 181 650 805
                <br />
                jakinworksltd@gmail.com
              </p>
              <Button href="/request-a-quote" variant="light">
                Request a quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <a className="whatsapp-float" href="https://wa.me/254181650805" aria-label="Chat with Jakin Works on WhatsApp"><span aria-hidden="true" /></a>
      <SiteFooter />
    </>
  );
}
