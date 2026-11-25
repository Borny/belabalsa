import ContactForm from "@/components/home/ContactForm";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-titre"
      className="scroll-mt-20 border-t border-cream/10 bg-ink-soft"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-xs tracking-[0.35em] text-gold uppercase">Contact</p>
          <h2 id="contact-titre" className="mt-4 font-display text-5xl font-light md:text-6xl">
            Travaillons <em className="italic">ensemble</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
            Spectacle, création, cours ou collaboration : écrivez-moi.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 inline-block font-display text-2xl text-cream transition-colors hover:text-gold md:text-3xl"
          >
            {CONTACT_EMAIL}
          </a>
          <ul className="mt-8 flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="block text-mist transition-colors hover:text-gold"
                >
                  <social.icon className="size-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
