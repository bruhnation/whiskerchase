import Link from "next/link";

// 👉 When your Shopify store is ready, paste its checkout/product URL here
// and every "Add to cart" button will point to it.
const SHOPIFY_URL = "#";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== Nav ===== */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-cream/70 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold flex items-center gap-2">
            <ImagePlaceholder label="Logo" className="h-8 w-8 shrink-0 text-[10px]" />
            Cat Sanctuary
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold">
            <a href="#features" className="hidden sm:inline hover:text-coral-deep transition-colors">Features</a>
            <a href="#how" className="hidden sm:inline hover:text-coral-deep transition-colors">How it works</a>
            <a href="#faq" className="hidden sm:inline hover:text-coral-deep transition-colors">FAQ</a>
            <a
              href={SHOPIFY_URL}
              className="rounded-lg bg-coral text-white px-5 py-2 shadow-sm hover:bg-coral-deep hover:-translate-y-0.5 transition-all"
            >
              Add to cart
            </a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mint/40 via-cream to-cream" />
        {/* floating blobs */}
        <div className="absolute -z-10 top-10 left-8 w-40 h-40 rounded-full bg-butter/50 blur-2xl" />
        <div className="absolute -z-10 bottom-0 right-10 w-52 h-52 rounded-full bg-sky/40 blur-2xl" />

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-md bg-white/70 border border-mint-deep/30 px-4 py-1.5 text-sm font-bold text-mint-deep">
            New · Meet Geckoat
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
            The wall-climbing lizard <br className="hidden sm:block" />
            your cat will obsess over
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
            Geckoat scoots up any wall on its own, darting and pausing just like real
            prey — triggering your cat&apos;s hunting instincts for hours of happy,
            healthy play.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SHOPIFY_URL}
              className="rounded-lg bg-coral text-white text-lg font-bold px-8 py-4 shadow-md hover:bg-coral-deep hover:-translate-y-0.5 transition-all"
            >
              Add to cart · $29
            </a>
            <a
              href="#how"
              className="rounded-lg bg-white border border-black/10 text-lg font-bold px-8 py-4 hover:-translate-y-0.5 transition-all"
            >
              See it in action
            </a>
          </div>
          <p className="mt-5 text-sm text-ink/50">
            Free shipping · 30-day happy-cat guarantee
          </p>

          <ImagePlaceholder
            label="Product photo / hero shot"
            className="mt-14 mx-auto aspect-video w-full max-w-3xl"
          />
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-bold">
            Why cats (and their humans) love it
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <Feature
              bg="bg-mint/40"
              title="Climbs real walls"
              text="Smart little grippers let Geckoat scamper straight up smooth surfaces — no track, no setup."
            />
            <Feature
              bg="bg-coral/30"
              title="Irresistible motion"
              text="Randomized darts and freezes mimic real prey, so your cat never gets bored of the chase."
            />
            <Feature
              bg="bg-sky/40"
              title="Built to last"
              text="Non-toxic, pet-safe materials and a rugged body that survives even the pounciest paws."
            />
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how" className="py-24 bg-sand/60">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center font-display text-4xl font-bold">
            Happy cats in 3 steps
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <Step n="1" title="Charge it up" text="A quick USB charge gives Geckoat plenty of playtime energy." />
            <Step n="2" title="Set it loose" text="Place it on any wall and switch it on — watch it climb and dart away." />
            <Step n="3" title="Let the games begin" text="Your cat pounces, chases, and stays active. You get the zoomies on camera." />
          </div>
          <ImagePlaceholder
            label="Product demo video / GIF"
            className="mt-16 mx-auto aspect-video w-full max-w-3xl"
          />
        </div>
      </section>

      {/* ===== Pricing / Buy ===== */}
      <section id="buy" className="py-24">
        <div className="mx-auto max-w-md px-6">
          <div className="rounded-xl bg-white border border-black/5 shadow-lg p-10 text-center">
            <span className="inline-block rounded-md bg-butter px-4 py-1 text-sm font-bold text-ink">
              Most popular
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">The Geckoat</h3>
            <p className="mt-4 font-display text-5xl font-bold">
              <span className="align-super text-2xl text-ink/50">$</span>29
            </p>
            <ul className="mt-6 space-y-3 text-left text-ink/70">
              <PricingItem text="One wall-climbing Geckoat" />
              <PricingItem text="USB charging cable included" />
              <PricingItem text="Free worldwide shipping" />
              <PricingItem text="30-day happy-cat guarantee" />
            </ul>
            <a
              href={SHOPIFY_URL}
              className="mt-8 block rounded-lg bg-coral text-white text-lg font-bold px-8 py-4 shadow-md hover:bg-coral-deep hover:-translate-y-0.5 transition-all"
            >
              Add to cart
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24 bg-mint/20">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-center font-display text-4xl font-bold">Good questions</h2>
          <div className="mt-12 space-y-4">
            <Faq q="What surfaces can it climb?" a="Most smooth indoor walls — painted drywall, tile, glass, and finished wood. Rough brick or heavy texture may be too grippy." />
            <Faq q="Is it safe for my cat?" a="Yes! Geckoat is made from non-toxic, pet-safe materials with no small parts that come loose during normal play." />
            <Faq q="How long does the battery last?" a="About 45 minutes of active play per charge — plenty to tire out even the most energetic kitty." />
            <Faq q="What's your return policy?" a="If your cat isn't obsessed within 30 days, send it back for a full refund. No hard feelings." />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-auto bg-sand/80 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold">Ready to make your cat&apos;s day?</h2>
          <a
            href={SHOPIFY_URL}
            className="mt-6 inline-block rounded-lg bg-coral text-white text-lg font-bold px-8 py-4 shadow-md hover:bg-coral-deep hover:-translate-y-0.5 transition-all"
          >
            Add to cart · $29
          </a>
          <p className="mt-10 text-sm text-ink/50">
            © 2026 Cat Sanctuary · Made for cats everywhere
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ===== Small reusable pieces ===== */

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-ink/25 bg-ink/5 px-3 text-center font-semibold text-ink/40 ${className}`}
    >
      {label}
    </div>
  );
}

function Feature({ bg, title, text }: { bg: string; title: string; text: string }) {
  return (
    <div className={`rounded-xl ${bg} p-8 transition-transform hover:-translate-y-1`}>
      <ImagePlaceholder label="Icon" className="h-12 w-12 text-[10px]" />
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-ink/70">{text}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-coral text-white font-display text-2xl font-bold shadow-sm">
        {n}
      </div>
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-ink/70">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg bg-white border border-black/5 p-5">
      <summary className="flex cursor-pointer items-center justify-between font-bold list-none">
        {q}
        <span className="text-coral-deep text-xl transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-ink/70">{a}</p>
    </details>
  );
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="mt-1 h-4 w-4 shrink-0 text-mint-deep"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10.5l3.5 3.5L16 6" />
      </svg>
      <span>{text}</span>
    </li>
  );
}
