export default function ShippingPolicy() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <a href="/" className="text-sm text-ink-muted hover:text-accent">← Back to Whisker Chase</a>
      <h1 className="mt-6 font-display text-[32px] font-semibold leading-[1.15]">
        Shipping Policy
      </h1>

      <div className="mt-8 space-y-6 text-ink-muted">
        <div>
          <h2 className="font-bold text-ink">Where we ship</h2>
          <p className="mt-1">
            We currently ship to Canada and the United States, with free shipping
            included on every order.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Processing and delivery time</h2>
          <p className="mt-1">
            Orders ship within 1-2 business days of purchase. Once shipped,
            delivery typically takes 6 to 10 business days, depending on your
            location.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Tracking</h2>
          <p className="mt-1">
            You&apos;ll receive a shipping confirmation once your order is on its
            way. Tracking availability can vary by order — if you have
            questions about your shipment&apos;s status, email us anytime at{" "}
            <a href="mailto:whiskerchasesupport@gmail.com" className="text-accent hover:underline">
              whiskerchasesupport@gmail.com
            </a>{" "}
            and we&apos;ll look into it for you.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Delays</h2>
          <p className="mt-1">
            Most orders arrive within the window above, but occasional delays
            can happen with customs or carrier volume. If your order is taking
            longer than expected, reach out and we&apos;ll help track it down.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Order issues</h2>
          <p className="mt-1">
            If your order arrives damaged, incomplete, or you haven&apos;t
            received it within a reasonable window past the estimate, contact
            us at{" "}
            <a href="mailto:whiskerchasesupport@gmail.com" className="text-accent hover:underline">
              whiskerchasesupport@gmail.com
            </a>{" "}
            and we&apos;ll make it right.
          </p>
        </div>
      </div>
    </div>
  );
}
