export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-maroon mb-2">Terms & Policy</h1>
      <p className="text-sm text-gray-400 mb-10">
        Please read.
      </p>

      <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">1. About This Site</h2>
          <p>
            Gobble Box is an independent company that sells and delivers care packages to
            students. Gobble Box is not affiliated with, endorsed by, or sponsored by Virginia
            Tech (Virginia Polytechnic Institute and State University).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">2. No Accounts</h2>
          <p>
            Gobble Box does not require you to create an account. Ordering a box or
            setting up the subscription only requires your name, phone number, email address, and
            your student&apos;s name (plus their birth month/day for the subscription).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">3. Orders & Subscriptions</h2>
          <p>
            Submitting an order or subscription form describes your intent to
            purchase, it does not charge you. Payment is arranged directly with our team after
            you submit the form. Payment terms, billing dates, and the cancellation policy for the
            subscription will be defined here once a payment provider is connected.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">4. Shipping</h2>
          <p>
            We do not collect a shipping address through this website. After you
            submit an order or subscription, we will contact you directly (by phone or email) to
            arrange payment and dellivery details. 
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">5. Refunds & Returns</h2>
          <p>
            Once a box has been delivered, it is not eligible for a refund, since our boxes contain
            perishable food items that cannot be resold. If your box arrives damaged, arrives
            wrong, or never arrives, contact us and we will replace it or refund you.
          </p>
          <p className="mt-3">
            You can cancel an order or a subscription box for a full refund as long as it is
            canceled before that box has been packed and delivered. For the subscription, this
            applies separately to each of the four boxes: canceling before a specific box is delivered
            gets you a refund for that box, while boxes that have already delivered follow the same
            no-refund rule above (except for damaged, wrong, or lost boxes).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">6. Privacy</h2>
          <p>
            We collect the parent&apos;s name, phone number, and email address, and
            the student&apos;s name (plus birth month/day for the subscription), only at the
            moment an order or subscription form is submitted. This information is emailed
            directly to our team and is not stored in a database on this website. Your information will never be shared with third parties. 
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-maroon mb-2">7. Contact</h2>
          <p>Questions about these terms can be sent via the Contact Us page.</p>
        </section>
      </div>
    </div>
  );
}
