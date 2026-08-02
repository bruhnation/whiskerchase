export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <a href="/" className="text-sm text-ink-muted hover:text-accent">← Back to Whisker Chase</a>
      <h1 className="mt-6 font-display text-[32px] font-semibold leading-[1.15]">
        Terms of Service
      </h1>

      <div className="mt-8 space-y-6 text-ink-muted">
        <div>
          <h2 className="font-bold text-ink">Overview</h2>
          <p className="mt-1">
            By purchasing from Whisker Chase, you agree to the terms below.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Products</h2>
          <p className="mt-1">
            We sell pet toys and accessories. Product descriptions and images
            are provided in good faith to represent the item accurately;
            minor variations in color or packaging may occur.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Pricing</h2>
          <p className="mt-1">
            All prices are listed in CAD. We reserve the right to change
            prices at any time without prior notice, though this won&apos;t
            affect orders already placed.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Orders and payment</h2>
          <p className="mt-1">
            Orders are processed through Shopify&apos;s secure checkout. By
            placing an order, you confirm the payment and shipping
            information provided is accurate.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Shipping</h2>
          <p className="mt-1">
            See our{" "}
            <a href="/shipping-policy" className="text-accent hover:underline">
              Shipping Policy
            </a>{" "}
            for delivery timelines and details.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Returns and refunds</h2>
          <p className="mt-1">
            See our{" "}
            <a href="/refund-policy" className="text-accent hover:underline">
              Refund Policy
            </a>{" "}
            for our 30-day guarantee and return process.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Product use and safety</h2>
          <p className="mt-1">
            Whisker Chase products are intended for supervised pet play.
            Please review any included safety guidance before use and keep
            small parts away from unsupervised pets or children.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Limitation of liability</h2>
          <p className="mt-1">
            Whisker Chase is not liable for indirect, incidental, or
            consequential damages arising from product use. Our liability is
            limited to the purchase price of the product.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Changes to these terms</h2>
          <p className="mt-1">
            We may update these terms periodically. Continued use of our site
            after changes constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Contact</h2>
          <p className="mt-1">
            Questions? Email{" "}
            <a href="mailto:whiskerchasesupport@gmail.com" className="text-accent hover:underline">
              whiskerchasesupport@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
