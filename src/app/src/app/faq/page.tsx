const FAQS = [
  {
    q: "What's in each box?",
    a: "Every box includes a mix of drinks and snacks. Parents can add a personal note to be added to the care package. Higher tiers include more items and extras.",
  },
  {
    q: "Do I need to create an account?",
    a: "Just pick a box (or the subscription) and fill in your name, phone number, email, and your student's name. We'll follow up directly to arrange payment and delivery.",
  },
  {
    q: "What is the Starndard Box Subscription?",
    a: "It's four Standard Boxes delivered across the school year around Halloween, Valentine's Day, Easter, and your student's birthday. That's why we ask for your student's birth month and day when you subscribe.",
  },
  {
    q: "How and when will my student receive their box?",
    a: "After you submit an order or subscription, we'll contact you directly to arrange delivery details. You decide when the box will be delivered. All boxes are delivered within a week.",
  },
  {
    q: "What if my student has allergies or dietary restrictions?",
    a: "Let us know when we follow up after your order, or reach out via Contact Us beforehand.",
  },
  {
    q: "What's your refund or replacement policy?",
    a: "See our Terms & Policy page for full details.",
  },
  {
    q: "How is payment handled?",
    a: "Payment isn't collected through this website yet. Submitting an order or subscription does not charge you, we'll follow up directly about payment. Accepted payment methods are Zelle, Venmo, and Paypal.",
  },
  {
    q: "What happens to the information I submit?",
    a: "We don't store your information in a database on this site. It's emailed directly to our team so we can follow up with you, and nothing else.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-maroon mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-10">
        Have a question we haven&apos;t answered here? Visit our Contact Us page.
      </p>
      <div className="space-y-6">
        {FAQS.map((f, i) => (
          <div key={i} className="card p-5">
            <h2 className="font-semibold text-maroon">{f.q}</h2>
            <p className="text-sm text-gray-600 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
