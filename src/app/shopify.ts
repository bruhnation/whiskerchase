/**
 * Shopify checkout wiring.
 *
 * This page is the storefront; Shopify only handles the cart, payment, and
 * orders. Every "Add to cart" button links here. You do NOT need the Shopify
 * CLI or any install for this — it's all URLs.
 *
 * ┌─ To go live, check the 2 required values below. ───────────────────────┐
 * │ 1. STORE_DOMAIN  — your Shopify domain (looks like store.myshopify.com) │
 * │ 2. VARIANTS      — one variant ID per colour, so each swatch buys the   │
 * │      exact colour. Shopify admin > Products > Whisker Chase > click a   │
 * │      colour variant; the long number ending the URL is that ID.         │
 * └────────────────────────────────────────────────────────────────────────┘
 */

export const STORE_DOMAIN = "whisker-chase-2.myshopify.com";
export const PRODUCT_HANDLE = "whisker-chase"; // TODO: match your Shopify product URL

/** Variant ID per colour. Each one checks out that colour and nothing else. */
export const VARIANTS = {
  pink: "49451031888099",
  blue: "49451031920867",
  green: "49451031953635",
} as const;

export type ColorName = keyof typeof VARIANTS;

/** Pre-selected colour: every buy button uses this until the shopper picks. */
export const DEFAULT_COLOR: ColorName = "pink";

/** Link to the Shopify product page (buyer picks colour + checks out there). */
export function productUrl(): string {
  return `https://${STORE_DOMAIN}/products/${PRODUCT_HANDLE}`;
}

/** Link that adds one of a variant and goes straight to checkout. */
export function cartUrl(variantId: string): string {
  return `https://${STORE_DOMAIN}/cart/${variantId}:1`;
}

/**
 * The link every buy button should use. Goes straight to checkout for the
 * given colour, or DEFAULT_COLOR when the shopper hasn't picked one yet.
 */
export function buyUrl(color: ColorName = DEFAULT_COLOR): string {
  return cartUrl(VARIANTS[color]);
}
