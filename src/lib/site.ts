import InstagramIcon from "@/components/icons/InstagramIcon";
import type { NavLink, SocialLink } from "@/types/site";

export const SITE_NAME = "Bela Balsa";

export const NAV_LINKS: NavLink[] = [
  { label: "Chorégraphe", href: "/choregraphe" },
  { label: "Chant", href: "/chant" },
  { label: "Cabaret", href: "/cabaret" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/#contact" },
];

// Placeholder value: replace with Bela's real email.
export const CONTACT_EMAIL = "contact@belabalsa.com";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/bela_balsa/", icon: InstagramIcon },
];
