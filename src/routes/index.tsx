import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
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
          "Portfolio of Prem Nandurkar — a Java developer building modern, scalable and immersive web experiences.",
      },
      { property: "og:title", content: "Prem - Java Devloper" },
      {
        property: "og:description",
        content:
          "Explore Prem Nandurkar's portfolio, projects, technical skills and experience in Java, Spring Boot and full-stack development.",
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
      <LoadingScreen />
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
