import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import SkillSections from "@/components/home/SkillSections";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SkillSections />
      <ContactSection />
    </main>
  );
}
