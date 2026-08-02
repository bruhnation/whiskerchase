export default function RefundPolicy() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <a href="/" className="text-sm text-ink-muted hover:text-accent">← Back to Whisker Chase</a>
      <h1 className="mt-6 font-display text-[32px] font-semibold leading-[1.15]">
        Refund Policy
      </h1>

      <div className="mt-8 space-y-6 text-ink-muted">
        <div>
          <h2 className="font-bold text-ink">30-Day Happy-Cat Guarantee</h2>
          <p className="mt-1">
            We want your cat to genuinely love Whisker Chase. If they
            don&apos;t within 30 days of delivery, email us at{" "}
            <a href="mailto:whiskerchasesupport@gmail.com" className="text-accent hover:underline">
              whiskerchasesupport@gmail.com
            </a>{" "}
            and we&apos;ll refund you — no photo evidence required.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">How it works</h2>
          <ol className="mt-1 list-decimal pl-5 space-y-1">
            <li>Email us within 30 days of your delivery date, letting us know you&apos;d like a refund.</li>
            <li>We&apos;ll send you a return label. Return shipping is free — you don&apos;t pay for it.</li>
            <li>Once the item is on its way back to us, we&apos;ll process your refund to your original payment method.</li>
          </ol>
        </div>

        <div>
          <h2 className="font-bold text-ink">Refund timing</h2>
          <p className="mt-1">
            Refunds are typically processed within 5-7 business days of us
            receiving the returned item. Depending on your bank, it may take a
            few additional days to appear on your statement.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Condition</h2>
          <p className="mt-1">
            We ask that the item be returned in its original packaging where
            possible, but normal use and testing (including a cat giving it a
            try) is expected and totally fine.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Damaged or defective items</h2>
          <p className="mt-1">
            If your item arrives damaged or isn&apos;t working correctly,
            contact us right away at{" "}
            <a href="mailto:whiskerchasesupport@gmail.com" className="text-accent hover:underline">
              whiskerchasesupport@gmail.com
            </a>{" "}
            — we&apos;ll sort out a replacement or refund without requiring a
            return.
          </p>
        </div>
      </div>
    </div>
  );
}
