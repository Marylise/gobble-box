// Central place for site content. Anything marked PLACEHOLDER should be
// reviewed and replaced with real Gobble Box content before launch.

export const SITE_NAME = "Gobble Box";

// Shown as a promo strip on the home page, right under the banner.
// Set to "" (empty string) to hide it.
export const PROMO_MESSAGE = "For a limited time: Add Hokie merch for free!";

// The 4 fixed occasions for the Premium subscription box.
export const SUBSCRIPTION_OCCASIONS = ["Halloween", "Valentine's Day", "Easter", "Birthday"];

// Some boxes use a separate Google Form (lets customers pick snacks) instead
// of the built-in contact form. Set formUrl on a product to use that form —
// it opens in a popup on the Shop page when that box is selected. Leave
// formUrl unset to use the regular built-in order form.
// PLACEHOLDER pricing — replace with real prices before launch.
export const PRODUCTS = [
  {
    tier: "BASIC" as const,
    name: "Basic Box",
    price: 24.99,
    type: "one-time" as const,
    image: "/images/box-basic.jpg",
    description:
      "A solid care package with a mix of drinks and snacks to know you're thinking of them, even from miles away.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfq78SZzK3NYILvsEduk857lGBq9iahLDNuhkljH3JtxnHiMg/viewform?embedded=true",
  },
  {
    tier: "STANDARD" as const,
    name: "Standard Box",
    price: 44.99,
    type: "one-time" as const,
    image: "/images/box-standard.jpg",
    description:
      "Our most popular box, and for good reason: a generous mix of the drinks and snacks your student actually wants.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScHopNeML_H2-hsedQjeEGO_gxkINA8ETWZ-P6nDQHv2cGbiQ/viewform?embedded=true",
  },
  {
    tier: "PREMIUM" as const,
    name: "Premium Box",
    price: 69.99,
    type: "one-time" as const,
    image: "/images/box-premium.jpg",
    description:
      "The top-shelf pick: premium drinks and snacks in bigger quantities, for parents who want to send the full care package experience.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdCL_tuC0JgQeUG08k5kYVhcp1_wwGmm97VE1Jxn6BtjmSI-A/viewform?embedded=true",
  },
  {
    tier: "SUBSCRIPTION_STANDARD_4PACK" as const,
    name: "Standard Box Subscription (4 Boxes)",
    price: 159.99,
    type: "subscription" as const,
    image: "/images/box-standard.jpg",
    description: `Four Standard Boxes delivered across the school year, timed to ${SUBSCRIPTION_OCCASIONS.join(
      ", "
    )}. Set it up once. We handle the rest.`,
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfd1g6hVykz7y9IKJasB8rNYso7SkE3oXZo98chfQH3BLS61Q/viewform?embedded=true",
  },
];

export const CONTACT_EMAIL = "thegobblebox@gmail.com";
export const CONTACT_PHONE = "(571) 524 3706";
