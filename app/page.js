import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PartnersCarousel from "@/components/home/PartnersCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <PartnersCarousel />
    </main>
  );
}
