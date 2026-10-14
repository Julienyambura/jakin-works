export type JournalSection = { heading: string; body: string };

export type JournalArticle = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
  sections: JournalSection[];
};

const sections = (items: [string, string][]): JournalSection[] =>
  items.map(([heading, body]) => ({ heading, body }));

export const journalArticles: JournalArticle[] = [
  {
    slug: "choosing-the-right-metal-for-your-gate",
    category: "Materials",
    date: "20 September 2026",
    readTime: "6 min read",
    title: "Choosing the Right Metal for Your Gate: A Homeowner's Guide",
    excerpt: "A driveway gate is one of the first things anyone sees of your home, and one of the few structural decisions where the material choice affects the look, the maintenance schedule and the cost for decades. Here is what actually changes between the four materials we fabricate in, and how to think through the decision.",
    image: "/GATES.jpeg",
    paragraphs: [],
    sections: sections([
      ["Mild Steel", "The most common choice for gates, and for good reason — it is strong, relatively affordable, and takes paint or powder-coating well, so you have a full range of colour and finish options. Its one real limitation is corrosion: raw mild steel will rust if the coating is ever breached, so fabrication and finishing quality (a proper powder-coat, correctly primed welds) matters more here than with any other material. Expect to inspect the finish every year or two, and to touch up eventually."],
      ["Stainless Steel", "Where mild steel needs a coating to resist corrosion, stainless steel resists it by nature. That makes it the better choice for gates exposed to heavy rain, or for hardware and hinges that see constant handling. The trade-off is cost — stainless typically runs higher than mild steel for the same design — and a narrower finish palette (brushed or polished, rather than a full colour range)."],
      ["Aluminium", "Aluminium's main advantage is weight: a large sliding or cantilever gate in aluminium is significantly lighter than the same design in steel, which matters for the motor and track if you're automating it. It won't rust, and needs almost no maintenance beyond an occasional clean. It is softer than steel, though, so it suits clean, modern designs better than heavy security-grade patterns."],
      ["Wrought Iron", "Wrought iron is the traditional choice for ornate, hand-worked designs — scrollwork, decorative finials, the kind of detailing that reads as heritage rather than modern. It is heavier and more labour-intensive to fabricate than the other three, which shows in the price, and like mild steel it needs a maintained coating to resist corrosion. Where the brief calls for a decorative, classical look, it is usually the right answer."],
      ["Which Should You Choose?", "In practice, the decision comes down to three questions: how exposed is the piece to weather, how much maintenance are you willing to commit to, and does the design call for colour, a natural metal finish, or ornamental detail? We work through exactly this with every client at the Drawing & Spec stage, before anything is cut, so the material matches both the design and how you actually plan to live with it."],
    ]),
  },
  {
    slug: "caring-for-your-metalwork",
    category: "Maintenance",
    date: "8 October 2026",
    readTime: "6 min read",
    title: "Caring for Your Metalwork: A Maintenance Checklist",
    excerpt: "Well-made metalwork is built to last decades, but how long it actually looks and works like new depends on a few minutes of attention every season. Most of the problems we're called out to fix — a sagging gate, a sticking sliding track, rust bleeding through paint — started as something small that could have been caught early. Here's the routine we recommend.",
    image: "/REPAIRS33.jpg",
    paragraphs: [],
    sections: sections([
      ["Every month: a two-minute walk-round", "Open and close every gate and door fully. Listen for grinding, scraping or clicking, and watch for leaves that drop or drag as they swing. On sliding gates, clear the track of stones, soil and leaves — debris in the track is the most common cause of derailed gates and strained motors. Glance along railings and grilles for any fresh scratches or chips in the finish."],
      ["Every three months: clean and lubricate", "Wash painted and powder-coated surfaces with warm water and a mild, non-abrasive soap, then rinse. Dust and grime hold moisture against the coating, so this matters more than it looks — especially after the dry, dusty months. Lubricate hinges, rollers, lock mechanisms and bolts with a light machine oil or a lubricant recommended for outdoor hardware. Wipe away the excess so it doesn't collect grit."],
      ["After every rainy season: look for water", "Nairobi's long and short rains are when hidden problems show up. Check the base of posts, gate frames and balustrade fixings for standing water or soil packed against the steel. Look for rust spots or bubbling under the coating, particularly at welds, corners and the bottom edges of frames, where water collects. Make sure drainage holes in hollow sections aren't blocked."],
      ["Touch up chips straight away", "A chip in the coating exposes bare mild steel, and rust spreads underneath the surrounding finish faster than most people expect. Lightly sand the spot back to clean metal, apply a rust-inhibiting primer, then a matching topcoat. Small, prompt touch-ups prevent the kind of creeping corrosion that eventually needs a full strip and recoat."],
      ["Material-specific tips", "Stainless steel: wipe periodically to remove surface staining, which can appear where dust and moisture sit; avoid steel wool and chloride-based cleaners. Aluminium: needs little beyond cleaning, but avoid abrasive pads that scratch the finish. Wrought iron: treat like mild steel, paying extra attention to scrollwork and joints where water lingers."],
      ["Once a year: check the structure", "Look for any movement in posts and fixings, gaps opening up where railings meet walls, gates that no longer close squarely, and any cracks along weld lines. These are signs that something has shifted or worked loose — they rarely fix themselves, and they're far cheaper to correct early."],
      ["When to call a professional", "Call in help if a gate has dropped or no longer latches, a railing moves when you lean on it, rust has spread beyond a few small spots, a weld has cracked, or a motorised gate is struggling. Our maintenance & repair service covers servicing, adjustments, weld repairs and refinishing — for metalwork we've made and for existing pieces — and is quoted separately when you need it. Message us on WhatsApp with a photo and we'll advise on the next step."],
    ]),
  },
  {
    slug: "cnc-cutting-101",
    category: "CNC Cutting",
    date: "8 October 2026",
    readTime: "6 min read",
    title: "CNC Cutting 101: What Precision Metalwork Can Do for Your Facade",
    excerpt: "How digital cutting makes intricate screens possible, and what to decide on pattern, material and fixing.",
    image: "/CNC_FACADES.jpeg",
    paragraphs: ["Digital cutting opens up patterns and screens that are difficult to achieve by hand, while keeping every repeated detail accurate."],
    sections: [],
  },
  {
    slug: "powder-coating-vs-paint",
    category: "Finishing",
    date: "8 October 2026",
    readTime: "5 min read",
    title: "Powder Coating vs Paint: Choosing a Finish That Lasts",
    excerpt: "The finish on your metalwork does two jobs: it gives the piece its colour and texture, and it protects the steel underneath from rust. Here's how the two main options compare.",
    image: "/finishes.jpg",
    paragraphs: [],
    sections: sections([
      ["How powder coating works", "Powder coating is a dry finish. After the steel is thoroughly cleaned and prepared, a fine powder of pigment and resin is sprayed on with an electrostatic charge, so it clings evenly to every surface. The piece then goes into an oven, where the powder melts and cures into a hard, continuous skin."],
      ["How paint works", "Liquid paint — usually a primer followed by one or more topcoats — is brushed or sprayed on and left to dry in the air. It's flexible, can be applied on site, and is available in an almost unlimited range of colours."],
      ["Durability", "Powder coating generally gives a harder, thicker and more chip-resistant finish than conventional paint, and it holds its colour well under strong sun. A quality paint system can also perform well, but typically needs recoating more often."],
      ["Repairs and touch-ups", "Paint's big advantage is that it's easy to touch up on site. Powder coating can't be reapplied in place; small chips are touched up with matching paint, and a full recoat means removing the piece and taking it back to the workshop."],
      ["Preparation matters most", "Whichever you choose, the finish is only as good as the surface beneath it. Rust, mill scale, grease and dust all have to be removed before any coating goes on. Most early finish failures come down to poor preparation rather than the coating itself."],
      ["Our rule of thumb", "For new gates, doors, grilles, railings and furniture that can be finished in the workshop, powder coating is usually the better long-term choice. For very large pieces, on-site modifications and repairs, a good paint system is the practical answer."],
    ]),
  },
  {
    slug: "swing-or-sliding-gate",
    category: "Gates",
    date: "8 October 2026",
    readTime: "6 min read",
    title: "Swing or Sliding? Choosing the Right Driveway Gate",
    excerpt: "The first big decision for any driveway gate isn't the design or the material — it's how it opens. Here's how to decide.",
    image: "/SLIDING_GATES.jpeg",
    paragraphs: [],
    sections: sections([
      ["Swing gates", "Swing gates open on hinges, either as a single leaf or as a pair meeting in the middle. They're the classic choice for a grand entrance and suit both ornate and modern designs. The trade-off is space: each leaf needs a clear arc to swing through."],
      ["Sliding gates", "Sliding gates run sideways along the boundary, parking beside the opening. They need no swing space at all, which makes them ideal for short driveways and properties that open directly onto a road. They do need a clear run alongside the opening roughly equal to the gate's width."],
      ["Check the slope", "If your driveway rises behind the gate, a swing gate will hit the ground before it opens fully unless it is made to swing outward or set with rising hinges. Sliding gates are often the simpler answer on sloped sites."],
      ["Tracks versus cantilever", "Most sliding gates run on a ground track. A cantilever gate instead hangs from rollers mounted beside the opening, with no track across the driveway. That keeps the entrance clear of stones, mud and debris."],
      ["Automation and power", "Both types can be motorised. Whatever you choose, plan for power cuts: a battery backup or a simple manual release keeps you from being locked in or out. Decide on automation before fabrication."],
      ["Weight, hinges and posts", "A large gate in steel is heavy. For swing gates, that weight hangs on the hinges and posts or pillars, which is why hinge sizing and post foundations need to be properly calculated, not guessed."],
      ["Don't forget the pedestrian gate", "Opening a large vehicle gate every time someone walks in is slow and wears the mechanism. A separate pedestrian gate, designed to match, is worth including in most homes."],
      ["Our recommendation", "Measure the space behind and beside your entrance, note any slope, and think about how you'll use the gate day to day. Or simply send us a few photos — we'll visit, measure, and recommend the right configuration."],
    ]),
  },
];
