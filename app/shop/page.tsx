import { Button, Eyebrow } from "@/components/site";
import { PageFrame } from "@/components/pages";
import { media } from "@/config/media";

const products = [
  {
    title: "Standard steel gates",
    copy: "Proportioned, durable gate designs fabricated to your opening and finished for the conditions on site.",
    type: "Exterior",
    image: media.shop.gates,
  },
  {
    title: "Steel and aluminium doors",
    copy: "Reliable entry and interior door pieces available in considered standard profiles and finishes.",
    type: "Doors",
    image: media.shop.doors,
  },
  {
    title: "Windows and opening sections",
    copy: "Clean-lined window frames and opening sections fabricated to suit glazing, ventilation and light.",
    type: "Windows",
    image: media.shop.windows,
  },
  {
    title: "Brushed brass pulls",
    copy: "Interior cabinet and door pulls designed for durable, understated impact.",
    type: "Interior",
    image: media.shop.hardware,
  },
  {
    title: "Metal furniture and swings",
    copy: "Tables, benches, frames and swings made as repeatable pieces or developed around your own design.",
    type: "Custom pieces",
    image: media.shop.customPieces,
  },
  {
    title: "Gate hardware kit",
    copy: "Hand-finished hinges, latches and mounting hardware for refined, secure detailing.",
    type: "Hardware",
    image: media.shop.finishing,
  },
];

export default function ShopPage() {
  return (
    <PageFrame
      eyebrow="Shop"
      title={
        <>
          Standard pieces,
          <br />
          made to order.
        </>
      }
      intro="Shop repeatable pieces such as gates, doors and windows, or bring us a design for a custom metal furniture, swing or architectural commission."
    >
      <section className="section">
        <div className="container shop-layout">
          {products.map((product) => (
            <article className="shop-item" key={product.title}>
              <div
                className="photo-placeholder shop-photo"
                style={{ backgroundImage: `url("${product.image}")` }}
                role="img"
                aria-label={`${product.title} sample`}
              >
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
            <p>Tell us the material, function and finish you need. We can supply a standard piece, adapt an existing design or help develop something entirely custom.</p>
            <Button href="/request-a-quote" variant="light">Request a quote</Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
