"use client";

import { useEffect, useState } from "react";
import { BuyLink } from "./Gallery";

/**
 * Bottom sticky Add-to-Cart bar. Appears once the hero buy box scrolls
 * out of view (watched via IntersectionObserver on the element with
 * id="hero-atc"). Keeps the buy action one tap away on mobile.
 */
export default function StickyAtc() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-atc");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: "0px 0px -100% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-dashed border-line bg-page/70 text-[9px] font-semibold text-ink-muted sm:flex">
          Photo
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display font-semibold leading-tight">Whisker Chase</p>
          <p className="truncate text-sm text-ink-muted">$34.99 CAD · Free shipping</p>
        </div>
        <BuyLink className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-button px-5 font-bold text-button-text shadow-[0_2px_12px_rgba(43,33,48,0.06)] transition-all hover:bg-button-hover hover:-translate-y-0.5 sm:px-6">
          Add to cart
        </BuyLink>
      </div>
    </div>
  );
}
