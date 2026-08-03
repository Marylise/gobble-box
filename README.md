# Gobble Box

Care package marketing/order-capture site for Virginia Tech parents. Built with Next.js 14
(App Router), TypeScript, and Tailwind CSS.

Colors use Virginia Tech's official brand palette: Chicago Maroon `#630031` and Burnt Orange
`#CF4420`. The site includes a "not affiliated with Virginia Tech" disclaimer in the footer and
Terms page — keep that, since using the school's colors/branding without an affiliation
disclaimer is a real trademark risk.

## How this site works

**There are no user accounts and no database.** Every order or subscription form submission is
emailed directly to your team via Gmail SMTP and nothing is stored anywhere else on the site. If
an email is lost or missed, that order/lead is gone — there's no record to fall back on. If you
later want a record of orders (e.g. to avoid losing one, or to report on sales), the easiest
addition is a lightweight database log alongside the email (ask if you want this built).

### Products (4)

Defined in `src/lib/constants.ts`:
1. **Basic Box** — one-time
2. **Premium Box** — one-time
3. **Ultimate Box** — one-time
4. **Premium Box Subscription (4 Boxes)** — delivered around Halloween, Valentine's Day, Easter,
   and the student's birthday

### Order flow

- **Shop** (`/shop`): parent picks one of the 3 one-time boxes, fills in their name, phone,
  email, and the student's name, and submits. `POST /api/orders` emails those details to you.
- **Subscribe** (`/subscribe`): same contact fields, plus the student's birth month/day (needed
  because one of the 4 boxes ships on their birthday). `POST /api/subscribe` emails those details
  to you.
- **No payment is collected anywhere.** Every screen says so. You follow up with the customer
  directly to arrange payment and shipping (the site doesn't collect a shipping address either —
  that's also handled in your follow-up).

## Email setup (required before this works)

Emails send via your Gmail account using an **App Password** (not your normal Gmail password —
Google requires 2-Step Verification to be enabled on the account, then generates a 16-character
App Password under Google Account → Security → 2-Step Verification → App Passwords).

```bash
cp .env.example .env
```

Fill in:
- `GMAIL_USER` — the Gmail address that sends the notification (can be a dedicated address, or
  marylise@gmail.com itself if you're OK with it emailing itself).
- `GMAIL_APP_PASSWORD` — the 16-character App Password.
- `ORDER_NOTIFICATION_EMAIL` — where notifications land. Defaults to `marylise@gmail.com`.

## What's still placeholder (needs your input before launch)

- Box prices and descriptions (`src/lib/constants.ts` — every placeholder is marked
  `PLACEHOLDER`).
- Founder bio and photo (`src/app/about/page.tsx`, `/public/images/founder.jpg`).
- Banner photo and product photos (`/public/images/*.jpg` — currently generated maroon/orange
  placeholder graphics, not real photography).
- Contact email/phone (`src/lib/constants.ts`).
- FAQ content and full Terms & Policy — **have a lawyer review Terms & Policy before
  publishing.** Even without a database, the notification emails still contain personal
  information (names, phone numbers, email addresses, a student's birthday), which is worth a
  privacy review.
- The Contact Us page form is not wired to send anywhere yet (separate from the order/subscribe
  emails) — say so if you want it hooked up too.
- No payment processing (e.g. Stripe) — orders/subscriptions are just leads today.

## Local development

```bash
npm install
cp .env.example .env      # fill in GMAIL_USER, GMAIL_APP_PASSWORD, ORDER_NOTIFICATION_EMAIL
npm run dev
```

Then visit `/shop` or `/subscribe` and submit a test order — check the inbox at
`ORDER_NOTIFICATION_EMAIL` for the notification.

## Deploying

**[Vercel](https://vercel.com)** is the simplest host for this (same company as Next.js):
1. Push this project to a GitHub repo.
2. Import it in Vercel.
3. Add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `ORDER_NOTIFICATION_EMAIL` as environment
   variables in Vercel's dashboard.
4. Deploy. No database to provision — this app has none.

## Verification notes

This build was fully verified in a sandboxed environment: `npm install`, `npx tsc --noEmit`
(zero errors), and `npx next build` all completed successfully, producing all 8 routes (home,
shop, faq, about, contact, terms, subscribe, plus the 2 API routes). The only thing not testable
in that sandbox was actually sending a live email (no real Gmail credentials were used) — test
that yourself locally with real credentials before deploying.
