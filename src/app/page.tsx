import Image from "next/image";
import Link from "next/link";
import Gallery, {
  GalleryProvider,
  ColorSwatches,
  HeroBuyButton,
  AddToCart,
  BuyLink,
} from "./Gallery";
import StickyAtc from "./StickyAtc";

// Every "Add to cart" points at Shopify via ./shopify.ts — check your store
// domain and variant IDs there to go live. GalleryProvider wraps the whole
// page so every buy button checks out the colour selected in the buy box.

export default function Home() {
  return (
    <GalleryProvider>
    <div className="flex flex-col">
      {/* ===== §0 Announcement bar =====
          Light and thin on purpose: this is a small trust line, not a
          statement band. Coral is reserved for buttons and links. */}
      <div className="bg-blush text-ink text-center text-xs sm:text-sm font-medium">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-2 sm:gap-6">
          {/* [DECIDE] Confirm you are eating shipping at $59. */}
          <span>Free shipping across Canada and the US</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span className="hidden sm:inline">30-day happy-cat guarantee</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span className="hidden sm:inline">Ships in 6 to 10 business days, tracked all the way</span>
        </div>
      </div>

      {/* ===== Nav ===== */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-bg/80 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-semibold flex items-center gap-2">
            <Logo className="h-8 w-8 shrink-0" />
            Whisker Chase
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#how" className="hidden sm:inline hover:text-button transition-colors">How it works</a>
            <a href="#compare" className="hidden sm:inline hover:text-button transition-colors">Compare</a>
            <a href="#faq" className="hidden sm:inline hover:text-button transition-colors">FAQ</a>
            <BuyLink className="rounded-full bg-button text-button-text px-5 py-2 shadow-[0_2px_12px_rgba(43,33,48,0.06)] hover:bg-button-hover hover:-translate-y-0.5 transition-all">
              Add to cart
            </BuyLink>
          </nav>
        </div>
      </header>

      {/* ===== §1 Hero ===== */}
      <section className="bg-butter py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Interim supplier images in a slider. Swap the product shots for
              your own real footage (cat mid-pounce, gecko on a wall) before
              launch. [VERIFY] the feature-* panels carry baked-in claims.
              The first three slides must stay in the same order as COLORS in
              Gallery.tsx — that order is what maps a swatch to its photo. */}
          <Gallery
            slides={[
              { src: "/product/pink.png", alt: "Whisker Chase RC wall-climbing gecko, pink" },
              { src: "/product/green.png", alt: "Whisker Chase RC wall-climbing gecko, green" },
              { src: "/product/blue.png", alt: "Whisker Chase RC wall-climbing gecko, blue" },
              { src: "/product/feature-climb.jpg", alt: "The gecko climbing a vertical wall" },
              { src: "/product/feature-remote.jpg", alt: "The remote control and its buttons" },
              { src: "/product/feature-battery.jpg", alt: "The Type-C rechargeable gecko" },
            ]}
          />

          {/* Buy box */}
          <div className="lg:pl-4">
            <h1 className="font-display text-[34px] sm:text-[56px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
              A <Highlight>gecko</Highlight> that climbs walls. A{" "}
              <Highlight>cat</Highlight> that can&apos;t resist.
            </h1>
            <p className="mt-5 text-lg text-ink-muted max-w-[46ch]">
              A remote-controlled gecko that climbs, darts, and gets pounced on,
              while you drive it from the couch.
            </p>

            <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-4xl font-semibold text-ink">$34.99</span>
              <span className="text-xl text-ink-muted line-through">$60</span>
              <span className="rounded-md bg-sage px-2 py-0.5 text-sm font-bold text-check">Save $25</span>
            </div>
            <p className="mt-1 text-sm text-ink-muted">CAD · limited-time sale</p>

            {/* Colour selector — tapping a swatch drives the slider to that
                colour's photo AND points every Add-to-cart on the page at
                that colour's Shopify variant (shared state via
                GalleryProvider). */}
            <div className="mt-6">
              <ColorSwatches />
            </div>

            <HeroBuyButton />
            <p className="mt-3 text-sm text-ink-muted">
              Ships in 6 to 10 business days. Free returns. Real cats, real footage.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3 text-sm font-medium">
              <BuyBoxBullet text="You drive, they hunt" />
              {/* [VERIFY] wall + floor climbing before publishing */}
              <BuyBoxBullet text="Climbs walls and floors" />
              <BuyBoxBullet text="USB-C rechargeable" />
              <BuyBoxBullet text="7-colour LED glow" />
            </ul>

            <p className="mt-5 text-sm text-ink-muted">
              In the box: the gecko, its remote, a USB-C cable, and a quick-start manual.
            </p>
          </div>
        </div>
      </section>

      {/* ===== §2 Trust strip =====
          First alternating band: butter (hero) -> blush here. */}
      {/* Review count intentionally left out until real reviews exist. */}
      <section className="bg-blush py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          <TrustItem top="30 days" bottom="Happy-cat guarantee" />
          <TrustItem top="USB-C" bottom="Rechargeable" />
          <TrustItem top="Free" bottom="Shipping and returns" />
          <TrustItem top="Secure" bottom="Encrypted checkout" />
        </div>
      </section>

      {/* ===== §3 Problem ===== */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-[28px] sm:text-[40px] font-semibold leading-[1.15]">
            Your cat is bored. You&apos;re out of ideas.
          </h2>
          <p className="mx-auto mt-5 max-w-[60ch] text-lg text-ink-muted">
            Dog toys got puzzles, launchers, and treat machines. Cats got a feather
            glued to a stick. Somewhere along the way, everybody stopped trying.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Pain title="Feather. String. Repeat." />
            <Pain title="Every toy is the same toy" />
            <Pain title="Interest gone in a week" />
          </div>
        </div>
      </section>

      {/* ===== §4 Benefit blocks ===== */}
      <section className="bg-surface py-14 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 flex flex-col gap-16 sm:gap-24">
          {/* Row 1 — the bonding row, lead with this */}
          <BenefitRow
            imageSide="right"
            title="You're player two"
            src="/product/lifestyle-player-two.jpg"
            alt="A person sitting on the floor working the remote while their cat stalks the gecko on the wall"
            focus="object-top"
          >
            Most cat toys run on their own while you watch. This one doesn&apos;t move
            unless you move it. That&apos;s the difference between your cat playing, and
            the two of you playing.
          </BenefitRow>

          {/* Row 2 — the climb. [VERIFY] on drywall, painted wall, and glass. */}
          <BenefitRow
            imageSide="left"
            title="It goes where cats look"
            src="/product/lifestyle-climb.jpg"
            alt="A tabby cat up on its hind legs, reaching for the gecko partway up the wall"
          >
            Cats hunt upward. The gecko climbs vertical surfaces, so the chase leaves
            the floor.{" "}
            <Fill>Confirm which surfaces it actually grips before launch.</Fill>
          </BenefitRow>

          {/* Row 3 — durability. [VERIFY] after a real cat goes at one. */}
          <BenefitRow
            imageSide="right"
            title="Built for the pounce"
            src="/product/lifestyle-pounce.jpg"
            alt="A cat pinning the gecko down with both front paws on a rug"
          >
            It&apos;s going to get tackled, bitten, and body-slammed.{" "}
            <Fill>Add what actually holds up once you have tested one.</Fill>
          </BenefitRow>

          {/* Row 4 — practical. [VERIFY] runtime and charge time. */}
          <BenefitRow
            imageSide="left"
            title="Charge it, don't feed it"
            src="/product/lifestyle-charge.jpg"
            alt="The gecko resting on a side table next to a coiled USB-C charging cable"
          >
            USB-C in, <Fill>[X] minutes</Fill> of play out. No drawer full of AAs.
          </BenefitRow>

          <div className="text-center">
            <AddToCart label="Add to cart · $34.99" className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* ===== §5 How it works ===== */}
      <section id="how" className="py-14 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center font-display text-[28px] sm:text-[40px] font-semibold leading-[1.15]">
            Three steps to a very busy cat.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <Step n="1" title="Charge it">
              USB-C, <Fill>[X] minutes</Fill> to full.
            </Step>
            <Step n="2" title="Pick up the remote">
              You are the one making it move.
            </Step>
            <Step n="3" title="Watch them lose their mind">
              Crouch, wiggle, pounce, repeat.
            </Step>
          </div>
          <ImagePlaceholder
            label="Demo video: real cat, first time seeing it"
            className="mt-16 mx-auto aspect-video w-full max-w-3xl"
          />
          {/* [VERIFY] only publish this caption once you have real footage. */}
          <p className="mt-4 text-center text-sm text-ink-muted">
            Real cat. No edits. First time seeing it.
          </p>
          <div className="mt-10 text-center">
            <AddToCart className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* ===== §6 Comparison ===== */}
      {/* Compare the generic category only. Never name a brand or invent a price. */}
      <section id="compare" className="bg-surface py-14 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-[28px] sm:text-[40px] font-semibold leading-[1.15]">
            Why cat toys stopped getting better.
          </h2>
          {/* Scrolls sideways on very narrow phones instead of crushing the columns. */}
          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[440px] overflow-hidden rounded-[14px] border border-line bg-bg">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] text-sm sm:text-base">
                <CompareHead />
                <CompareRow label="Who's playing" us="Both of you" them="Your cat, alone" />
                <CompareRow label="Movement" us="You steer it" them="Gravity" />
                {/* [VERIFY] surfaces */}
                <CompareRow label="Surfaces" us="Floors and walls" them="Floor" />
                <CompareRow label="Power" us="USB-C rechargeable" them="Batteries or nothing" />
                <CompareRow label="Holds interest" us="Different every session" them="Same three moves" />
                <CompareRow label="If they hate it" us="30-day refund" them="Drawer of shame" last />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <AddToCart label="Add to cart · $34.99" className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/*
        ===== §7 Reviews =====
        Hidden until real, verified reviews exist. Fake or invented reviews
        violate the US FTC rule (16 CFR Part 465) and Canadian misleading-
        advertising law. Unhide this section and wire it to Judge.me or Loox
        once genuine reviews come in.

        <section id="reviews" className="py-14 sm:py-24">
          <h2>From other cat people.</h2>
        </section>
      */}

      {/* ===== §8 FAQ ===== */}
      <section id="faq" className="py-14 sm:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-center font-display text-[28px] sm:text-[40px] font-semibold leading-[1.15]">
            Questions people actually ask.
          </h2>
          <div className="mt-12 space-y-4">
            <Faq q="Will my cat actually play with it?">
              Most do, some take a few sessions, a few never care. That&apos;s cats. If
              yours isn&apos;t into it after 30 days, we refund you.
            </Faq>
            {/* [VERIFY] after your own testing */}
            <Faq q="Is it safe if my cat bites it?">
              It&apos;s built for chasing and pouncing, not chewing. This is a supervised,
              two-player game, so you&apos;re holding the remote anyway. Put it away
              between sessions like you would any toy with small parts.
            </Faq>
            {/* [VERIFY] answer with exactly what you observed, per surface */}
            <Faq q="Does it really climb walls?">
              <Fill>
                Answer honestly with the surfaces you tested. If it only climbs some,
                say which. Do not repeat the supplier&apos;s claim.
              </Fill>
            </Faq>
            {/* [VERIFY] battery */}
            <Faq q="How long does the battery last?">
              <Fill>Add real runtime and charge time once measured.</Fill>
            </Faq>
            <Faq q="How long does shipping take?">
              6 to 10 business days. It ships from our supplier&apos;s warehouse and you
              get tracking the moment it moves. We&apos;d rather tell you up front than
              surprise you.
            </Faq>
            <Faq q="What if my cat gets bored of it too?">
              Then you&apos;re still inside the 30 days and we&apos;ll refund you.
            </Faq>
            {/* [VERIFY] noise */}
            <Faq q="Is it loud? Will it scare my cat?">
              <Fill>Answer once you know how loud it actually runs.</Fill>
            </Faq>
            <Faq q="I have two cats.">
              Even better, they&apos;ll compete for it. One remote drives one gecko.
            </Faq>
            {/* [DECIDE] who pays return shipping — must match the Refund Policy page */}
            <Faq q="How do returns work?">
              <Fill>
                State your return process here, word for word with your Refund Policy
                page, including who pays return shipping.
              </Fill>
            </Faq>
          </div>
        </div>
      </section>

      {/* ===== §9 Guarantee ===== */}
      <section className="bg-sage py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <GuaranteeBadge className="mx-auto h-20 w-20" />
          <h2 className="mt-6 font-display text-[28px] sm:text-[40px] font-semibold leading-[1.15]">
            The 30-day happy-cat guarantee.
          </h2>
          <p className="mt-5 text-lg text-ink-muted max-w-[60ch] mx-auto">
            Play with it for 30 days. If your cat shrugs, email us and we&apos;ll refund
            you. No photo evidence of a disappointed cat required.
          </p>
          <div className="mt-8">
            <AddToCart label="Add to cart · $34.99" className="w-full sm:w-auto" />
          </div>
          {/* [DECIDE] return it or keep it? Whatever you pick goes in the Refund Policy verbatim. */}
        </div>
      </section>

      {/* ===== §10 Final CTA ===== */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-md px-6 text-center">
          <h2 className="font-display text-[28px] sm:text-[40px] font-semibold leading-[1.15]">
            Ready to be player two?
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            $34.99 CAD, down from $60. 30-day guarantee. Ships in 6 to 10 business days.
          </p>
          <div className="mt-8">
            <AddToCart className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* ===== §11 Newsletter ===== */}
      <section className="bg-surface py-14 sm:py-16 border-y border-line">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h3 className="font-display text-[21px] sm:text-[26px] font-semibold leading-[1.25]">
            We&apos;re making more of these.
          </h3>
          <p className="mt-2 text-ink-muted">
            Cat toys that actually got designed. Occasional emails, no nonsense.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-[10px] border border-line bg-bg px-4 py-3 outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-full bg-button text-button-text font-bold px-6 py-3 shadow-[0_2px_12px_rgba(43,33,48,0.06)] hover:bg-button-hover hover:-translate-y-0.5 transition-all"
            >
              Keep me posted
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-auto bg-surface border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-8 sm:grid-cols-3 text-sm">
          <div>
            <p className="font-display text-lg font-semibold">Whisker Chase</p>
            <p className="mt-2 text-ink-muted">The cat toy you play too.</p>
          </div>
          <div>
            <p className="font-bold">Policies</p>
            <ul className="mt-3 space-y-2 text-ink-muted">
              <li><a href="#" className="hover:text-accent">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-accent">Refund Policy</a></li>
              <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            {/* [DECIDE] real business name, email, and address are required by law */}
            <ul className="mt-3 space-y-2 text-ink-muted">
              <li><Fill>your real support email</Fill></li>
              <li><Fill>registered business name</Fill></li>
              <li><Fill>business address</Fill></li>
            </ul>
          </div>
        </div>
        {/* Extra bottom padding so the fixed Add-to-cart bar never covers this. */}
        <div className="border-t border-line pt-6 pb-28 sm:pb-24 text-center text-sm text-ink-muted">
          © 2026 Whisker Chase. All rights reserved.
        </div>
      </footer>

      {/* ===== Global sticky Add-to-Cart bar ===== */}
      <StickyAtc />
    </div>
    </GalleryProvider>
  );
}

/* ===== Small reusable pieces ===== */

/**
 * Highlighter wash behind a headline word. A shorter bar sits behind the
 * lower part of the glyphs (like a real marker) so it hugs the word and
 * stays smaller than the full line box. Text itself stays --ink.
 */
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative mx-[0.14em] inline-block whitespace-nowrap">
      <span
        aria-hidden="true"
        className="absolute inset-x-[-0.1em] top-[0.28em] bottom-[0.06em] -z-10 rounded-md bg-stars/45"
      />
      {children}
    </span>
  );
}

/**
 * Brand mark: a gecko's climbing foot, five toes splayed. The grip is the
 * whole hook of this product, and unlike a full gecko silhouette this still
 * reads at the 32px the nav renders it at.
 *
 * aria-hidden because the wordmark sits right beside it in the nav.
 */
function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {/* Toes fanned evenly across roughly 150 degrees, each rooted inside the
          palm so there is no seam, and tipped with the bulbous adhesive pad
          that is the giveaway for a gecko rather than a paw or a hand. */}
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M13.1 18.4 L6.4 16.6" />
        <path d="M14.2 16.8 L10 11.2" />
        <path d="M16 16.2 L16 9.2" />
        <path d="M17.8 16.8 L22 11.2" />
        <path d="M18.9 18.4 L25.6 16.6" />
      </g>
      <g fill="currentColor">
        <circle cx="6.4" cy="16.6" r="1.9" />
        <circle cx="10" cy="11.2" r="1.9" />
        <circle cx="16" cy="9.2" r="1.9" />
        <circle cx="22" cy="11.2" r="1.9" />
        <circle cx="25.6" cy="16.6" r="1.9" />
      </g>
      <ellipse cx="16" cy="20.5" rx="5" ry="4.3" fill="currentColor" />
    </svg>
  );
}

/**
 * Guarantee seal for section 9. Scalloped rosette in --check (the deep green
 * already used for checkmarks) so it reads as "verified" without borrowing
 * coral, which is reserved for CTAs. The heading beside it carries the full
 * promise, so this is aria-hidden and only has to say "30 days".
 */
function GuaranteeBadge({ className = "" }: { className?: string }) {
  const scallops = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return { cx: 40 + Math.cos(a) * 33, cy: 40 + Math.sin(a) * 33 };
  });
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {scallops.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r="4.6" fill="var(--check)" />
      ))}
      <circle cx="40" cy="40" r="34" fill="var(--check)" />
      <circle cx="40" cy="40" r="29" fill="var(--page)" />
      <circle cx="40" cy="40" r="25.5" fill="none" stroke="var(--check)" strokeWidth="1.4" />
      {/* paw print */}
      <g fill="var(--check)">
        <ellipse cx="40" cy="25.5" rx="4.2" ry="3.3" />
        <circle cx="35.1" cy="20.6" r="1.7" />
        <circle cx="38.4" cy="19.1" r="1.8" />
        <circle cx="41.6" cy="19.1" r="1.8" />
        <circle cx="44.9" cy="20.6" r="1.7" />
      </g>
      <text
        x="40"
        y="51"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="22"
        fontWeight="700"
        style={{ fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
      >
        30
      </text>
      <text
        x="40"
        y="61"
        textAnchor="middle"
        fill="var(--check)"
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.6"
        style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif" }}
      >
        DAYS
      </text>
    </svg>
  );
}

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[16px] border border-dashed border-line bg-page/70 px-3 text-center font-medium text-ink-muted ${className}`}
    >
      {label}
    </div>
  );
}

/** Marks pre-launch copy that must be verified/decided and replaced. */
function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span
      title="Placeholder: verify or decide, then replace before launch"
      className="rounded bg-lamp/15 px-1 font-medium text-accent underline decoration-dashed decoration-lamp underline-offset-2"
    >
      {children}
    </span>
  );
}

function BuyBoxBullet({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <Check />
      <span>{text}</span>
    </li>
  );
}

function TrustItem({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div>
      <p className="font-display text-xl font-semibold">{top}</p>
      <p className="text-sm text-ink-muted">{bottom}</p>
    </div>
  );
}

function Pain({ title }: { title: string }) {
  return (
    <div className="rounded-[14px] bg-bg border border-line p-6 text-center font-display text-lg font-semibold shadow-[0_2px_12px_rgba(36,28,36,0.06)]">
      {title}
    </div>
  );
}

function BenefitRow({
  title,
  imageSide,
  src,
  alt,
  focus = "object-center",
  children,
}: {
  title: string;
  imageSide: "left" | "right";
  src: string;
  alt: string;
  /* Which part of the photo the square crop keeps. Portrait shots whose
     subject sits high (a face near the top edge) need "object-top". */
  focus?: string;
  children: React.ReactNode;
}) {
  /* Sources are 3:4 portrait; a square frame keeps more of that framing than
     the old 4:3 landscape box did, without making the rows tower on desktop. */
  const image = (
    <div className="relative aspect-square w-full overflow-hidden rounded-[16px] shadow-[0_2px_12px_rgba(43,33,48,0.06)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className={`object-cover ${focus}`}
      />
    </div>
  );
  const copy = (
    <div className="flex flex-col justify-center">
      <h3 className="font-display text-[21px] sm:text-[26px] font-semibold leading-[1.25]">{title}</h3>
      <p className="mt-3 text-lg text-ink-muted max-w-[60ch]">{children}</p>
    </div>
  );
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
      {imageSide === "left" ? (
        <>
          {image}
          {copy}
        </>
      ) : (
        <>
          <div className="sm:order-2">{image}</div>
          <div className="sm:order-1">{copy}</div>
        </>
      )}
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-button text-button-text font-display text-2xl font-semibold shadow-[0_2px_12px_rgba(43,33,48,0.06)]">
        {n}
      </div>
      <h3 className="mt-4 font-display text-[21px] font-semibold">{title}</h3>
      <p className="mt-2 text-ink-muted">{children}</p>
    </div>
  );
}

function CompareHead() {
  return (
    <div className="contents">
      <div className="bg-surface px-4 py-3 font-bold border-b border-line" />
      <div className="bg-accent/10 px-4 py-3 text-center font-display font-semibold border-b border-line">
        Whisker Chase
      </div>
      <div className="bg-surface px-4 py-3 text-center font-medium text-ink-muted border-b border-line">
        A typical cat toy
      </div>
    </div>
  );
}

function CompareRow({
  label,
  us,
  them,
  last = false,
}: {
  label: string;
  us: string;
  them: string;
  last?: boolean;
}) {
  const border = last ? "" : "border-b border-line";
  return (
    <div className="contents">
      <div className={`px-4 py-3 font-medium ${border}`}>{label}</div>
      <div className={`px-4 py-3 bg-accent/5 text-ink ${border}`}>{us}</div>
      <div className={`px-4 py-3 text-ink-muted ${border}`}>{them}</div>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-[14px] bg-surface border border-line p-5">
      <summary className="flex cursor-pointer items-center justify-between font-semibold list-none">
        {q}
        <span className="text-accent text-xl transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-ink-muted">{children}</p>
    </details>
  );
}

function Check() {
  return (
    <svg
      className="inline-block h-4 w-4 shrink-0 text-check"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 6" />
    </svg>
  );
}
