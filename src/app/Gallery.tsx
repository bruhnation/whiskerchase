"use client";

import Image from "next/image";
import { createContext, useContext, useState, type ReactNode } from "react";
import { buyUrl, DEFAULT_COLOR, type ColorName } from "./shopify";

/* Swatch order + the slide that shows each colour. This array is the single
   source of truth both ways: position = slide index in the hero's slides
   array, so the two must stay in the same order. Slides past these are
   marketing panels with no colour of their own. */
const COLORS: { name: string; hex: string; color: ColorName }[] = [
  { name: "Pink", hex: "#f1a7c6", color: "pink" },
  { name: "Green", hex: "#86ce4b", color: "green" },
  { name: "Blue", hex: "#56c0e6", color: "blue" },
];

const slideOf = (c: ColorName) => COLORS.findIndex((x) => x.color === c);

/* Shared state so the colour swatches (in the buy box), the slider (in the
   other column), and every Add-to-cart button on the page agree on which
   colour is selected. */
type GalleryState = {
  index: number;
  setIndex: (n: number) => void;
  color: ColorName;
  selectColor: (c: ColorName) => void;
};
const GalleryCtx = createContext<GalleryState | null>(null);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState<ColorName>(DEFAULT_COLOR);
  const [index, setIndexState] = useState(slideOf(DEFAULT_COLOR));

  /* Sliding onto a colour photo selects that colour too, so the swatches and
     the buy buttons never disagree with the photo on screen. The marketing
     panels leave the current selection alone. */
  const setIndex = (n: number) => {
    setIndexState(n);
    if (COLORS[n]) setColor(COLORS[n].color);
  };

  const selectColor = (c: ColorName) => {
    setColor(c);
    setIndexState(slideOf(c));
  };

  return (
    <GalleryCtx.Provider value={{ index, setIndex, color, selectColor }}>
      {children}
    </GalleryCtx.Provider>
  );
}

function useGallery() {
  const ctx = useContext(GalleryCtx);
  if (!ctx) throw new Error("useGallery must be used within GalleryProvider");
  return ctx;
}

type Slide = { src: string; alt: string };

/**
 * Hero image slider. A translating track gives a smooth slide between images;
 * each image sits on a blurred copy of itself so mixed aspect ratios fill the
 * frame with no flat letterbox bars. Prev/next, thumbnails, and touch-swipe.
 */
export default function Gallery({ slides }: { slides: Slide[] }) {
  const { index, setIndex } = useGallery();
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-[16px] shadow-[0_2px_12px_rgba(43,33,48,0.06)]"
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = e.changedTouches[0].clientX - touchX;
          if (dx > 40) go(index - 1);
          else if (dx < -40) go(index + 1);
          setTouchX(null);
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div key={s.src} className="relative aspect-square w-full shrink-0 overflow-hidden">
              {/* blurred fill so there are no empty bars around off-square images */}
              <Image
                src={s.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="scale-110 object-cover blur-2xl"
              />
              <div className="absolute inset-0 bg-page/20" />
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-page/90 text-xl text-ink shadow-[0_2px_12px_rgba(43,33,48,0.06)] transition hover:bg-page"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-page/90 text-xl text-ink shadow-[0_2px_12px_rgba(43,33,48,0.06)] transition hover:bg-page"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>

        <div className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs font-medium text-page">
          {index + 1} / {slides.length}
        </div>
      </div>

      {/* Thumbnail strip — scrolls sideways on narrow screens. */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(idx)}
            aria-label={`View image ${idx + 1}`}
            aria-current={idx === index}
            className={`relative aspect-square w-16 shrink-0 overflow-hidden rounded-[10px] bg-page ring-2 transition ${
              idx === index ? "ring-ink" : "ring-transparent hover:ring-line"
            }`}
          >
            <Image src={s.src} alt="" fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Any link that checks out the currently selected colour. Every Add-to-cart
 * on the page goes through this, so they all buy the same colour the shopper
 * picked in the buy box.
 */
export function BuyLink({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const { color } = useGallery();
  return (
    <a id={id} href={buyUrl(color)} className={className}>
      {children}
    </a>
  );
}

/** The one canonical Add-to-cart button, reused down the page so styling + contrast stay consistent. */
export function AddToCart({
  label = "Add to cart",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <BuyLink
      className={`inline-flex h-14 items-center justify-center rounded-full bg-button px-10 text-[17px] font-bold text-button-text shadow-[0_2px_12px_rgba(43,33,48,0.06)] transition-all hover:bg-button-hover hover:-translate-y-0.5 ${className}`}
    >
      {label}
    </BuyLink>
  );
}

/** Hero "Add to cart". Carries the id the sticky bar watches for. */
export function HeroBuyButton() {
  return (
    <BuyLink
      id="hero-atc"
      className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-button px-8 text-center text-[17px] font-bold text-button-text shadow-[0_2px_12px_rgba(43,33,48,0.06)] hover:bg-button-hover hover:-translate-y-0.5 transition-all"
    >
      Add to cart
    </BuyLink>
  );
}

export function ColorSwatches() {
  const { color, selectColor } = useGallery();
  const selected = COLORS.find((c) => c.color === color);
  return (
    <>
      <p className="text-sm font-medium">
        Colour: <span className="text-ink-muted">{selected?.name}</span>
      </p>
      <div className="mt-2 flex gap-3">
        {COLORS.map((c) => (
          <button
            key={c.color}
            type="button"
            onClick={() => selectColor(c.color)}
            title={c.name}
            aria-label={c.name}
            aria-pressed={c.color === color}
            style={{ backgroundColor: c.hex }}
            className={`flex h-9 w-9 items-center justify-center rounded-full ring-offset-2 ring-offset-butter transition ${
              c.color === color ? "ring-[3px] ring-ink" : "ring-2 ring-transparent hover:ring-line"
            }`}
          >
            {c.color === color && <Check />}
          </button>
        ))}
      </div>
    </>
  );
}

/** Tick inside the selected swatch, so selection reads at a glance. */
function Check() {
  return (
    <svg
      className="h-4 w-4 text-ink"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 6" />
    </svg>
  );
}
