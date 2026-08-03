import Link from "next/link";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-white/80 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-lg mb-2">{SITE_NAME}</p>
          <p className="text-sm">
            Care packages for Virginia Tech Hokies, sent with love from home.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Explore</p>
          <ul className="space-y-1 text-sm">
            <li><Link href="/shop" className="hover:text-orange">Shop</Link></li>
            <li><Link href="/faq" className="hover:text-orange">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-orange">Contact Us</Link></li>
            <li><Link href="/terms" className="hover:text-orange">Terms & Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Contact</p>
          <p className="text-sm">{CONTACT_EMAIL}</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs py-4">
        &copy; {new Date().getFullYear()} {SITE_NAME}. Not affiliated with Virginia Tech.
      </div>
    </footer>
  );
}
