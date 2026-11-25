import Image from "next/image";
import Link from "next/link";
import cabaretImage from "@/media/site/home/cabaret.jpg";
import chantImage from "@/media/site/home/chant.jpg";
import choregrapheImage from "@/media/site/home/choregraphe.jpg";
import type { Skill } from "@/types/site";

const SKILLS: Skill[] = [
  {
    title: "Chorégraphe",
    description:
      "Créations, transmission et accompagnement d'artistes : le mouvement au service d'une histoire.",
    href: "/choregraphe",
    image: choregrapheImage,
    imageAlt: "Bela Balsa guidant un groupe de danseurs pendant un atelier",
  },
  {
    title: "Chant",
    description: "Albums, chansons et concerts : une voix qui raconte.",
    href: "/chant",
    image: chantImage,
    imageAlt: "Bela Balsa chantant au micro sur scène, en robe rouge",
  },
  {
    title: "Cabaret",
    description: "Plumes, paillettes et scène avec LoliStar et BleuBlancCiel.",
    href: "/cabaret",
    image: cabaretImage,
    imageAlt: "Bela Balsa en costume de cabaret rose sous les projecteurs",
  },
];

export default function SkillSections() {
  return (
    <section id="travail" aria-labelledby="travail-titre" className="scroll-mt-20">
      <h2 id="travail-titre" className="sr-only">
        Mon travail
      </h2>
      {SKILLS.map((skill, index) => (
        <SkillRow key={skill.href} skill={skill} reversed={index % 2 === 1} />
      ))}
    </section>
  );
}

interface SkillRowProps {
  skill: Skill;
  reversed: boolean;
}

function SkillRow({ skill, reversed }: SkillRowProps) {
  return (
    <article className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
      <Link
        href={skill.href}
        className={`group relative block aspect-4/5 overflow-hidden md:aspect-4/3 ${reversed ? "md:order-2" : ""}`}
      >
        <Image
          src={skill.image}
          alt={skill.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </Link>
      <div>
        <h3 className="font-display text-5xl font-light md:text-6xl">{skill.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">{skill.description}</p>
        <Link
          href={skill.href}
          className="mt-8 inline-block border-b border-gold pb-1 text-xs tracking-[0.25em] text-gold uppercase transition-colors hover:text-cream"
        >
          Découvrir
        </Link>
      </div>
    </article>
  );
}
