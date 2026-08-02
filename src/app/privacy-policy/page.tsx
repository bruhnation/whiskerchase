export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <a href="/" className="text-sm text-ink-muted hover:text-accent">← Back to Whisker Chase</a>
      <h1 className="mt-6 font-display text-[32px] font-semibold leading-[1.15]">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-ink-muted">
        <div>
          <h2 className="font-bold text-ink">What we collect</h2>
          <p className="mt-1">
            When you place an order or sign up for our newsletter, we collect
            the information necessary to fulfill that: your name, shipping
            address, email, and payment details (processed securely through
            Shopify — we never see or store your full payment information).
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">How we use it</h2>
          <p className="mt-1">
            We use your information to process and ship your order,
            communicate with you about that order, and — if you&apos;ve opted
            in — send occasional emails about new products. We do not sell or
            rent your personal information to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Third parties</h2>
          <p className="mt-1">
            We use Shopify to process payments and Shopify Payments&apos;
            standard security practices apply. We work with fulfillment
            partners to ship your order, which means your shipping
            information is shared with them solely for that purpose.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Cookies</h2>
          <p className="mt-1">
            Our site may use basic cookies to remember your cart and improve
            site performance. You can disable cookies in your browser
            settings, though this may affect site functionality.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Your rights</h2>
          <p className="mt-1">
            You can request a copy of the personal information we hold about
            you, or ask us to delete it, at any time by emailing{" "}
            <a href="mailto:whiskerchasesupport@gmail.com" className="text-accent hover:underline">
              whiskerchasesupport@gmail.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Changes to this policy</h2>
          <p className="mt-1">
            We may update this policy from time to time. Changes will be
            posted on this page.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-ink">Contact</h2>
          <p className="mt-1">
            Questions about this policy? Email{" "}
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
