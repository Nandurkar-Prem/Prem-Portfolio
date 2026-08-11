import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { Link } from "@tanstack/react-router";

const CURRENT_STACK = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "MySQL",
];

const EXPLORING = [
  "Microservices",
  "Docker",
  "System Design",
  "AI / ML",
  "Cloud",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Ambient glow */}
        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.035]
            blur-[120px]
          "
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 md:gap-20">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0.05} y={20}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/70 sm:w-12" />

              <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-cyan-300/80 sm:text-xs">
                Get to know me
              </span>

              <span className="h-px w-8 bg-cyan-300/70 sm:w-12" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={35}>
            <h2
              className="
                hero-heading
                font-black
                uppercase
                leading-[0.85]
                tracking-[-0.05em]
                text-[#E8F0F5]
              "
              style={{
                fontSize: "clamp(3.5rem, 11vw, 9.5rem)",
              }}
            >
              About Me
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p
              className="
                mt-6
                max-w-2xl
                font-light
                uppercase
                leading-relaxed
                tracking-wide
                text-white/40
              "
              style={{
                fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
              }}
            >
              The person behind the code, the projects, and the constant
              curiosity to learn what comes next.
            </p>
          </FadeIn>
        </div>

        {/* =======================================================
            INTRODUCTION
        ======================================================= */}

        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Left identity */}
          <FadeIn delay={0.25} x={-40} y={0}>
            <div>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                01 / Who I am
              </span>

              <h3
                className="
                  mt-4
                  font-black
                  uppercase
                  leading-tight
                  tracking-tight
                  text-[#D7E2EA]
                "
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.8rem)",
                }}
              >
                Prem
                <br />
                Nandurkar
              </h3>

              <div className="mt-6 h-px w-16 bg-gradient-to-r from-cyan-300 to-transparent" />

              <p className="mt-5 text-sm leading-relaxed text-white/40 sm:text-base">
                B.Tech Computer Technology
                <br />
                YCCE · 2024 — 2028
              </p>
            </div>
          </FadeIn>

          {/* Introduction text */}
          <FadeIn delay={0.35} x={40} y={0}>
            <div
              className="
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                backdrop-blur-sm
                sm:p-8
                md:p-10
              "
            >
              <AnimatedText
                text="I'm a Computer Technology student and aspiring backend developer focused on Java and Spring Boot. I enjoy understanding how systems work and turning that understanding into real-world applications."
                className="
                  text-base
                  font-medium
                  leading-relaxed
                  text-[#D7E2EA]
                  sm:text-lg
                  md:text-xl
                "
              />

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
                My development journey has taken me through REST APIs,
                databases, authentication, security, and full-stack
                applications. I'm currently expanding that foundation toward
                microservices, Docker, system design, AI/ML, and cloud
                technologies.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* =======================================================
            INFORMATION CARDS
        ======================================================= */}

        <div className="grid gap-4 md:grid-cols-3">
          {/* Education */}
          <FadeIn delay={0.15} y={25}>
            <div
              className="
                group
                h-full
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-300/20
                hover:bg-white/[0.04]
                sm:p-7
              "
            >
              <div className="flex items-start justify-between">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/30">
                  02 / Education
                </span>

                <span className="text-sm text-white/20 transition-colors duration-300 group-hover:text-cyan-300/70">
                  ↗
                </span>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/70">
                  YCCE
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[#D7E2EA] sm:text-2xl">
                  B.Tech
                </h3>

                <p className="mt-1 text-sm text-white/40">
                  Computer Technology
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="text-[0.6rem] uppercase tracking-wider text-white/30">
                    2024 — 2028
                  </span>

                  <span className="text-[0.6rem] uppercase tracking-wider text-white/30">
                    CGPA 8.38
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Current Stack */}
          <FadeIn delay={0.25} y={25}>
            <div
              className="
                group
                h-full
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-300/20
                hover:bg-white/[0.04]
                sm:p-7
              "
            >
              <div className="flex items-start justify-between">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/30">
                  03 / Currently
                </span>

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {CURRENT_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-2
                      text-[0.6rem]
                      font-medium
                      uppercase
                      tracking-wider
                      text-white/55
                      transition-colors
                      duration-300
                      group-hover:border-cyan-300/10
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/35">
                Building projects and strengthening my backend development
                fundamentals.
              </p>
            </div>
          </FadeIn>

          {/* Exploring */}
          <FadeIn delay={0.35} y={25}>
            <div
              className="
                group
                h-full
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-purple-300/20
                hover:bg-white/[0.04]
                sm:p-7
              "
            >
              <div className="flex items-start justify-between">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-white/30">
                  04 / Exploring
                </span>

                <span className="text-sm text-white/20 transition-colors duration-300 group-hover:text-purple-300/70">
                  +
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {EXPLORING.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-2
                      text-[0.6rem]
                      font-medium
                      uppercase
                      tracking-wider
                      text-white/45
                      transition-colors
                      duration-300
                      group-hover:border-purple-300/10
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/35">
                Expanding my knowledge beyond traditional backend development
                and exploring where technology can take me next.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* =======================================================
            DIRECTION
        ======================================================= */}

        <FadeIn delay={0.3} y={25}>
          <div
            className="
              flex
              flex-col
              gap-8
              border-y
              border-white/[0.08]
              py-8
              sm:py-10
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                Where I'm heading
              </span>

              <h3 className="mt-3 text-xl font-semibold text-[#D7E2EA] sm:text-2xl">
                Building deeper. Learning continuously.
              </h3>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 md:max-w-[500px] md:justify-end">
              {[
                "Backend Engineering",
                "Microservices",
                "System Design",
                "AI / ML",
                "Cloud",
              ].map((item, index) => (
                <span
                  key={item}
                  className="text-xs uppercase tracking-wider text-white/35 sm:text-sm"
                >
                  {item}
                  {index !== 4 && (
                    <span className="ml-4 text-cyan-300/40">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* =======================================================
            MORE ABOUT ME
        ======================================================= */}

        <FadeIn delay={0.35} y={20}>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.035]
                px-6
                py-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D7E2EA]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-cyan-300/40
                hover:bg-cyan-300/10
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-300
                sm:px-7
                sm:py-3.5
              "
            >
              <span>More About Me</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}