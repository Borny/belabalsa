import Link from "next/link";
import MobileNav from "@/components/layout/MobileNav";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export default function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-linear-to-b from-ink/80 to-transparent">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
      >
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-cream transition-colors hover:text-gold"
        >
          {SITE_NAME}
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-[0.2em] text-cream/80 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <MobileNav links={NAV_LINKS} />
      </nav>
    </header>
  );
}
