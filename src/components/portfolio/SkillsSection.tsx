import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    n: "01",
    name: "Core Java",
    d: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    n: "02",
    name: "Spring Boot",
    d: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    n: "03",
    name: "Microservices",
    d: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    n: "04",
    name: "React-Framework",
    d: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    n: "05",
    name: "Spring-AI",
    d: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
  {
    n: "06",
    name: "Docker-Kubernetes",
    d: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </h2>
      <div className="max-w-5xl mx-auto">
        {SKILLS.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.1}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <span
              className="font-black leading-none"
              style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {s.n}
            </span>
            <div className="flex flex-col gap-3" style={{ color: "#0C0C0C" }}>
              <h3
                className="font-medium uppercase leading-none"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
              >
                {s.d}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
