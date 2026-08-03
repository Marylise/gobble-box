"use client";

import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
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
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-maroon mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Questions about an order, a subscription, or your student&apos;s box? Reach out.
      </p>

      <div className="card p-6 mb-8">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-maroon">Email:</span> {CONTACT_EMAIL}
        </p>
        <p className="text-sm text-gray-700 mt-1">
          <span className="font-semibold text-maroon">Phone:</span> {CONTACT_PHONE}
        </p>
      </div>

      {submitted ? (
        <div className="card p-6 bg-orange-50 border-orange-200 text-maroon-800 text-sm">
          Thanks for reaching out! We&apos;ve received your message and will get back to you soon.
        </div>
      ) : (
        <form className="card p-6 space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
            <input required className="input-field" type="text" name="name" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
            <input required className="input-field" type="email" name="email" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Message</label>
            <textarea required className="input-field" name="message" rows={5} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
