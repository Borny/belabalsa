"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/types/site";

interface MobileNavProps {
  links: NavLink[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 text-xs tracking-[0.2em] text-cream uppercase"
      >
        {open ? "Fermer" : "Menu"}
      </button>
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-sm"
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-cream transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
