import { getImageProps } from "next/image";
import heroDesktop from "@/media/site/home/hero-desktop.jpg";
import heroMobile from "@/media/site/home/hero-mobile.jpg";

const HERO_ALT = "Bela Balsa, danseuse, chanteuse et comédienne";

export default function Hero() {
  const common = { alt: HERO_ALT, sizes: "100vw", fetchPriority: "high" as const };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: heroDesktop, quality: 80 });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: heroMobile, quality: 75 });

  return (
    <section className="relative h-svh min-h-[32rem] w-full overflow-hidden">
      <picture>
        <source
          media="(min-width: 768px) and (orientation: landscape)"
          srcSet={desktopSrcSet}
        />
        <img
          {...imgProps}
          srcSet={mobileSrcSet}
          alt={HERO_ALT}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center landscape:md:object-[70%_center]"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-ink/40 landscape:md:bg-linear-to-r landscape:md:from-ink/80 landscape:md:via-ink/20 landscape:md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 landscape:md:justify-center landscape:md:pb-0">
        <p className="motion-safe:animate-rise text-xs tracking-[0.35em] text-gold uppercase">
          Danseuse · Chanteuse · Comédienne
        </p>
        <h1 className="motion-safe:animate-rise mt-4 max-w-xl font-display text-6xl leading-[0.95] font-light text-cream [animation-delay:200ms] md:text-8xl">
          Je suis une <em className="text-gold italic">interprète</em>
        </h1>
      </div>

      <a
        href="#travail"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.3em] text-cream/70 uppercase transition-colors hover:text-gold"
      >
        Découvrir
      </a>
    </section>
  );
}
