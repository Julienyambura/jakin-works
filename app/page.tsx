import Link from "next/link";
import { Button, Eyebrow, SiteFooter, SiteHeader } from "@/components/site";

const capabilities = [
  ["Security", "Security & Perimeter", "Gates, grilles and perimeter features that secure the home without compromising its design."],
  ["Doors", "Doors & Entryways", "Entrance and interior doors fabricated to the frame opening, in any of our four materials."],
  ["Windows", "Windows", "Steel and aluminium window sections detailed to hold glazing precisely to spec."],
  ["Outdoor Living", "Outdoor Living", "Pergolas, patio and balcony structures fabricated for Nairobi's outdoor lifestyle."],
  ["Interior Features", "Interior Features", "Railings, balustrades and interior metal detailing built to code and to the drawing."],
  ["Structural", "Structural Work", "Load-bearing steel elements fabricated and finished to engineering specification."],
  ["CNC Cutting", "CNC Cutting", "Precision-cut decorative panels, facades and patterned screens, cut to exact digital spec."],
  ["Finishing", "Finishing Services", "Powder-coating, hand-finishing and polishing for a durable, considered surface."],
  ["Maintenance", "Maintenance & Repair", "Servicing, repairs and refurbishment for existing metalwork, hardware and finishes."],
];

const materials = [
  ["01", "Mild Steel", "The standard for gates, railings and structural work, powder-coated or hand-finished for a durable surface."],
  ["02", "Stainless Steel", "Corrosion-resistant detailing for exposed and high-contact elements: handrails, hardware and weather-exposed installations."],
  ["03", "Aluminium", "Lightweight, low-maintenance fabrication for large-format doors, windows and outdoor structures."],
  ["04", "Wrought Iron", "Traditional, hand-worked detailing for decorative gates, balustrades and security features."],
];

const process = [
  ["01", "Drawing & Spec", "We work from your architect's drawings, or take our own measured drawings on site. Dimensions, tolerances and finish are agreed before any metal is cut."],
  ["02", "Fabrication", "Cut, welded and assembled in the workshop to the drawing, in mild steel, stainless steel, aluminium or wrought iron."],
  ["03", "Finish", "Powder-coating, hand-finishing or polishing, matched to the material and the setting."],
  ["04", "Install", "Fitted on site to the tolerances the drawing specified. No rework, no surprises for you or your contractor."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="artifact-hero">
          <div className="container artifact-hero-grid">
            <div>
              <Eyebrow>Bespoke Metal Fabrication · Nairobi</Eyebrow>
              <h1>Precision Craftsmanship for Exceptional Spaces</h1>
              <p className="hero-materials">Mild Steel · Stainless Steel · Aluminium · Wrought Iron</p>
              <p className="hero-description">Jakin Works designs and fabricates bespoke architectural metalwork — security, doors, windows, outdoor structures and interior detailing — engineered to the drawing, for Nairobi&apos;s most exceptional homes.</p>
              <div className="hero-actions"><Button href="#contact">Request a Quote</Button><Button href="#capabilities" variant="outline">View Capabilities</Button></div>
            </div>
          </div>
        </section>

        <section className="artifact-section" id="about"><div className="container split-section"><div><Eyebrow>About Jakin Works</Eyebrow><h2>Elevating Kenya&apos;s fabrication standard</h2></div><div><p>Jakin Works was founded to elevate Kenya&apos;s architectural fabrication standards through precision, professionalism and attention to detail — combining contemporary methods with experienced craftsmen to create durable, refined products in mild steel, stainless steel, aluminium and wrought iron.</p><p>Every commission is delivered on schedule, to spec, with the process continually refined — for homeowners and for the architects, contractors and quantity surveyors who bring us into their projects.</p></div></div></section>

        <section className="artifact-section capability-section" id="capabilities"><div className="container"><Eyebrow>Core Services</Eyebrow><h2>Capabilities</h2><p className="section-intro">Every piece designed and fabricated to your home&apos;s architecture — not pulled from a catalogue.</p><div className="capability-grid">{capabilities.map(([label, title, text], index) => <article className="capability-card" key={title}><span className="card-label">{label}</span><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href="#contact">Ask About This →</Link></article>)}</div></div></section>

        <section className="artifact-section" id="materials"><div className="container"><Eyebrow>Materials Index</Eyebrow><h2>Four materials, one standard</h2><p className="section-intro">Every piece is fabricated to the same precision standard, regardless of material — chosen for the location, exposure and finish the drawing calls for.</p><div className="material-index">{materials.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="material-line">Mild Steel · Stainless Steel · Aluminium · Wrought Iron</p></div></section>

        <section className="artifact-section process-section"><div className="container"><Eyebrow>How We Work</Eyebrow><h2>Built to the Drawing</h2><p className="section-intro">Every commission moves through the same four stages, whether it comes from a homeowner&apos;s brief or an architect&apos;s drawing set.</p><div className="process-index">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="artifact-section journal-section" id="journal"><div className="container"><Eyebrow>Journal</Eyebrow><h2>Field Notes</h2><p className="section-intro">Notes on materials, process and maintenance — written to help you make informed decisions about the metalwork in your home.</p><div className="field-notes"><article><span>Materials</span><small>20 Sep 2026 · 6 min read</small><h3>Choosing the Right Metal for Your Gate: A Homeowner&apos;s Guide</h3><p>Mild steel, stainless steel, aluminium or wrought iron — what actually changes with each, and how to decide.</p><Link href="/journal/choosing-the-right-metal-for-your-gate">Read Article →</Link></article></div></div></section>

        <section className="artifact-section quote-section"><div className="container split-section"><div><Eyebrow>Why Jakin Works</Eyebrow><h2>Precision for the people who notice it</h2></div><div className="principles-grid">{[["Precision over generic", "Every gate, railing or grille is designed and fabricated to your home&apos;s actual architecture — not pulled from a catalogue."], ["Delivered on schedule", "Quality work, on time, with the process continually refined — no surprises for you or your contractor."], ["Built for professionals", "Tolerances, materials and finish quality that hold up to an architect&apos;s or quantity surveyor&apos;s scrutiny."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="artifact-section contact-section" id="contact"><div className="container split-section"><div><Eyebrow>Get In Touch</Eyebrow><h2>Request a Quote</h2><p>Whether you&apos;re a homeowner with a set of plans, or an architect or contractor building a shortlist of fabricators — send your drawings, dimensions, or a description of the piece.</p></div><div className="contact-form-placeholder"><span>Request a quote</span><p>Share your name, phone, email, drawings or project description.</p><Button href="/request-a-quote">Send Enquiry</Button></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
