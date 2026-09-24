import { Button, Eyebrow } from "@/components/site";
import { PageFrame } from "@/components/pages";

const products = [
  {
    title: "Gate hardware kit",
    copy: "Hand-finished hinges, latches and mounting hardware for refined, secure detailing.",
    type: "Best seller",
  },
  {
    title: "Brushed brass pulls",
    copy: "Interior cabinet and door pulls designed for durable, understated impact.",
    type: "Interior",
  },
  {
    title: "Finish selector pack",
    copy: "A private guide to matching powder-coat colours and surface finishes to your project.",
    type: "Guide",
  },
  {
    title: "Wall-mounted hook set",
    copy: "Strong, clean-lined hooks for entry spaces, utility rooms and structured outdoor living.",
    type: "Outdoor",
  },
  {
    title: "Security railing detail set",
    copy: "Precision components for balustrades, railings and perimeter safety features.",
    type: "Security",
  },
  {
    title: "Workshop care kit",
    copy: "Maintenance basics for cleaning, protecting and preserving steel and aluminium finishes.",
    type: "Care",
  },
];

export default function ShopPage() {
  return (
    <PageFrame
      eyebrow="Shop"
      title={
        <>
          Hardware and
          <br />
          finishing details.
        </>
      }
      intro="A curated space for practical accessories, finishing references and the small details that complete a carefully made installation."
    >
      <section className="section">
        <div className="container shop-layout">
          {products.map((product) => (
            <article className="shop-item" key={product.title}>
              <div className="photo-placeholder">
                <span>{product.type}</span>
                <small>Featured piece</small>
              </div>
              <Eyebrow>{product.type}</Eyebrow>
              <h3>{product.title}</h3>
              <p>{product.copy}</p>
              <Button href="/request-a-quote">Request a quote</Button>
            </article>
          ))}
        </div>
      </section>
      <section className="quote-cta">
        <div className="container">
          <div>
            <Eyebrow>Need a custom piece?</Eyebrow>
            <h2>
              We can build
              <br />
              the right fit.
            </h2>
          </div>
          <div>
            <p>Tell us the material, function and finish you need and we will guide you to the best fabrication approach.</p>
            <Button href="/request-a-quote" variant="light">Request a quote</Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
