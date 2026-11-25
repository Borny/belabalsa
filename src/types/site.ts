import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface Skill {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
}
