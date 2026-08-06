"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";
import ContactFields, { emptyContactForm, ContactFormValues } from "@/components/ContactFields";

export default function ShopPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [form, setForm] = useState<ContactFormValues>(emptyContactForm);
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const selectedProduct = PRODUCTS.find((p) => p.tier === selectedTier);
  const isSubscription = selectedProduct?.type === "subscription";

  function update<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isSubscription ? "/api/subscribe" : "/api/orders";
    const body = isSubscription
      ? { ...form, birthMonth, birthDay }
      : { ...form, boxTier: selectedTier };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Something went wrong.");
      return;
    }
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-maroon mb-4">
          {isSubscription ? "Subscription Saved!" : "Order Received!"}
        </h1>
        <p className="text-gray-600 mb-6">
          Thanks, {form.parentName.split(" ")[0] || "there"}! We&apos;ve got your{" "}
          {isSubscription ? "subscription" : "order"} for {form.studentName}. Payment isn&apos;t
          collected on this site — we&apos;ll reach out to {form.parentPhone} or{" "}
          {form.parentEmail} with next steps.
        </p>
        <Link href="/shop" className="btn-secondary">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-maroon mb-2">The Shop</h1>
      <p className="text-gray-600 mb-10">
        Pick a box and leave your contact info. No account needed. We will contact you to finalize the details. 
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {PRODUCTS.map((p) => (
            <button
            key={p.tier}
            type="button"
            onClick={() => setSelectedTier(p.tier)}
            className={`card overflow-hidden text-left transition-all flex flex-col h-full w-full ${
              selectedTier === p.tier ? "ring-2 ring-orange" : ""
            }`}
          >
            <div className="relative h-32 bg-maroon-100 shrink-0">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="font-bold text-maroon text-sm">{p.name}</h2>
              <p className="text-orange font-semibold text-sm">${p.price.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-1">{p.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 overflow-y-auto"
          onClick={() => setSelectedTier(null)}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="card p-6 space-y-6 w-full max-w-lg my-auto"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {isSubscription ? "Subscribing to" : "Ordering the"}{" "}
                <span className="font-semibold text-maroon">{selectedProduct.name}</span>
              </p>
              <button
                type="button"
                onClick={() => setSelectedTier(null)}
                className="text-xs text-gray-400 hover:underline"
              >
                Close
              </button>
            </div>

            {error && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {error}
              </div>
            )}

            <ContactFields form={form} onChange={update} />

            {isSubscription && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Student&apos;s Birthday{" "}
                  <span className="text-gray-400 font-normal">(needed for the Birthday box)</span>
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    required
                    className="input-field"
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>
                        {new Date(2000, m - 1).toLocaleString("default", { month: "long" })}
                      </option>
                    ))}
                  </select>
                  <select
                    required
                    className="input-field"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
              {loading ? "Submitting..." : isSubscription ? "Start Subscription" : "Place Order"}
            </button>
            <p className="text-xs text-gray-400 text-center">
              Payment isn&apos;t connected yet. We will charge you after we finalize the details.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
