import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, PROMO_MESSAGE } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      {/* Banner - replace /public/images/banner.jpg with a real photo */}
      <section className="relative h-[420px] w-full bg-maroon overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Virginia Tech campus banner"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl h-full px-4 flex flex-col justify-center text-white">
          <p className="uppercase tracking-widest text-orange-200 font-semibold mb-2">
            We proudly donate 10% of our profit back to VT community! 
          </p>
          <p className="uppercase tracking-widest text-orange-200 font-semibold mb-2">
          August's selected organization is:{" "}
            <a
            href="https://www.instagram.com/vt.enable/"
            target="_blank"
            rel="noopener noreferrer"
            ><u>
    e-NABLE</u>
  </a>
</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-xl leading-tight">
            Care packages made with LOVE
          </h1>
          <p className="mt-4 max-w-lg text-white/90">
            Send your student the drinks and snacks they actually want for the first week of
            school, holidays, their birthday, or just because. No account needed.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/shop" className="btn-primary">
              Shop Boxes
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-maroon transition-colors"
            >
              See Subscription
            </Link>
          </div>
        </div>
      </section>

      {/* Limited-time promo strip — edit or clear PROMO_MESSAGE in src/lib/constants.ts */}
      {PROMO_MESSAGE && (
        <div className="bg-orange text-white text-center py-3 px-4">
          <p className="text-sm sm:text-base font-semibold tracking-wide">{PROMO_MESSAGE}</p>
        </div>
      )}

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-maroon text-center mb-10">How Gobble Box Works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Pick a box",
              body: "Choose Basic, Standard, Premium, or the Standard subscription. No account required.",
            },
            {
              step: "2",
              title: "Leave your contact info",
              body: "Just your name, phone, and email, plus your student's name.",
            },
            {
              step: "3",
              title: "We follow up",
              body: "We'll reach out directly to arrange payment and shipping details.",
            },
          ].map((s) => (
            <div key={s.step} className="card p-6 text-center">
              <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-orange text-white font-bold flex items-center justify-center">
                {s.step}
              </div>
              <h3 className="font-semibold text-maroon mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product teaser */}
      <section className="bg-maroon-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-maroon text-center mb-10">Our Boxes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.tier} className="card overflow-hidden flex flex-col">
                <div className="relative h-32 bg-maroon-100">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-maroon">{p.name}</h3>
                  <p className="text-orange font-semibold mt-1 text-sm">${p.price.toFixed(2)}</p>
                  <p className="text-xs text-gray-600 mt-2 flex-1">{p.description}</p>
                  <Link href="/shop" className="btn-secondary mt-4 text-sm">
                    {p.type === "subscription" ? "Subscribe" : "View in Shop"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
