// Central place for site content. Anything marked PLACEHOLDER should be
// reviewed and replaced with real Gobble Box content before launch.

export const SITE_NAME = "Gobble Box";

// Shown as a promo strip on the home page, right under the banner.
// Set to "" (empty string) to hide it.
export const PROMO_MESSAGE = "For a limited time only: service fee waived";

// The 4 fixed occasions for the Premium subscription box.
export const SUBSCRIPTION_OCCASIONS = ["Halloween", "Valentine's Day", "Easter", "Birthday"];

// PLACEHOLDER pricing — replace with real prices before launch.
export const PRODUCTS = [
  {
    tier: "BASIC" as const,
    name: "Basic Box",
    price: 29.99,
    type: "one-time" as const,
    image: "/images/box-basic.jpg",
    description:
      "A solid care package with a mix of drinks and snacks to know you're thinking of them, even from miles away.",
  },
  {
    tier: "STANDARD" as const,
    name: "Standard Box",
    price: 44.99,
    type: "one-time" as const,
    image: "/images/box-standard.jpg",
    description:
      "Our most popular box, and for good reason: a generous mix of the drinks and snacks your student actually wants.",
  },
  {
    tier: "PREMIUM" as const,
    name: "Premium Box",
    price: 59.99,
    type: "one-time" as const,
    image: "/images/box-Premium.jpg",
    description:
      "The top-shelf pick: premium drinks and snacks in bigger quantities, for parents who want to send the full care package experience.",
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
  },
];

export const CONTACT_EMAIL = "thegobblebox@gmail.com";
export const CONTACT_PHONE = "(571) 524 3706";
