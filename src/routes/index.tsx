import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { TransitionMarquee } from "@/components/portfolio/TransitionMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prem's Portfolio" },
      {
        name: "description",
        content:
          "Jack is a 3D creator crafting striking 3D modeling, rendering, motion design, branding and web design projects.",
      },
      { property: "og:title", content: "Prem - Java Devloper" },
      {
        property: "og:description",
        content:
          "3D modeling, rendering, motion design, branding and web design by Jack — a 3D creator building unforgettable projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <TransitionMarquee
        items={[
          "CURIOUS",
          "BUILDING",
          "LEARNING",
          "GROWING",
          "EXPLORING",
        ]}
      />
      <AboutSection />
      <TransitionMarquee
        items={[
          "FUNDAMENTALS",
          "PRACTICE",
          "LEARNING",
          "EVOLUTION",
          "DISCIPLINE",
        ]}
        speed={32}
        reverse
      />
      <SkillsSection />
      <TransitionMarquee
        items={[
          "JAVA",
          "SPRING BOOT",
          "REACT",
          "DOCKER",
          "DEVELOPMENT",
          "BACKEND",
          "APIs",
          "DATABASES",
        ]}
        speed={26}
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
