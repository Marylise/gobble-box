"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_NAME } from "@/lib/constants";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms & Policy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-maroon text-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-orange" aria-hidden />
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:text-orange-200 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/shop" className="btn-primary">
            Shop Boxes
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-maroon-700 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
