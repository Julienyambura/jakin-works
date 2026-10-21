import { Button, Eyebrow } from "@/components/site";
import { PageFrame } from "@/components/pages";
import { media } from "@/config/media";

const products = [
  {
    title: "Metal Wall Art",
    copy: "Made to order in our workshop, in the same four materials and finished to suit your space.",
    type: "Price on enquiry",
    image: media.shop.customPieces,
  },
  {
    title: "Sculpture & Statement Pieces",
    copy: "Distinctive fabricated pieces developed around your room, garden or architectural setting.",
    type: "Price on enquiry",
    image: media.shop.gates,
  },
  {
    title: "Custom Furniture",
    copy: "Tables, benches and frames fabricated in metal and finished for everyday use at home.",
    type: "Price on enquiry",
    image: media.shop.finishing,
  },
];

export default function ShopPage() {
  return (
    <PageFrame
      eyebrow="Retail & Custom Pieces"
      title="The Jakin Shop"
      intro="Beyond architectural commissions, our workshop makes smaller metal pieces for the home and garden, in-stock designs or built to your own."
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
              <a href="https://wa.me/254181650805">Enquire on WhatsApp →</a>
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
