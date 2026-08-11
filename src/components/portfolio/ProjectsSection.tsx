import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./Buttons";

const img = (u: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F${u}&w=1280&q=85`;

const PROJECTS = [
  {
    n: "01",
    name: "Books in Budget",
    category: "Full-Stack Application",
    status: "Completed",
    description:
      "A full-stack book-selling application built for a real-world business use case. Users can browse books using category-based filters, while sellers can manage their listings through role-based access.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "React",
      "Bcrypt",
    ],
    col1: [
      img("hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png"),
      img("hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png"),
    ],
    col2: img(
      "hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png",
    ),
  },
  {
    n: "02",
    name: "Authentication Project",
    category: "Backend Security",
    status: "Completed",
    description:
      "A backend authentication project focused on secure user access, authentication flows, password protection, authorization, and implementing Spring Security fundamentals.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Bcrypt",
    ],
    col1: [
      img("hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png"),
      img("hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png"),
    ],
    col2: img(
      "hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png",
    ),
  },
  {
    n: "03",
    name: "Spring Boot E-Commerce",
    category: "Full-Stack Application",
    status: "Completed",
    description:
      "A Spring Boot based e-commerce application focused on backend architecture, product management, database integration, authentication, and a React frontend.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "React",
      "JPA",
    ],
    col1: [
      img("hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png"),
      img("hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png"),
    ],
    col2: img(
      "hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png",
    ),
  },
];

const RADIUS =
  "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  /*
   * KEEPING THE ORIGINAL SCROLL ANIMATION
   *
   * Each card gets progressively smaller as the
   * following cards enter the viewport.
   */
  const targetScale = 1 - (total - 1 - index) * 0.03;

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale],
  );

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          backgroundColor: "#0C0C0C",
        }}
        className={`
          relative
          w-full
          border
          border-[#D7E2EA]/30
          p-4
          sm:p-6
          md:p-8
          ${RADIUS}
        `}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}

            <span
              className="
                font-black
                leading-none
                tracking-[-0.05em]
                text-[#D7E2EA]
              "
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
              }}
            >
              {project.n}
            </span>

            {/* Title + Category */}

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />

                <span className="text-[0.5rem] font-medium uppercase tracking-[0.2em] text-emerald-200/60 sm:text-xs">
                  {project.status}
                </span>
              </div>

              <span className="text-[0.55rem] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:text-xs">
                {project.category}
              </span>

              <h3
                className="
                  font-medium
                  uppercase
                  leading-none
                  tracking-tight
                  text-[#D7E2EA]
                "
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* =====================================================
            PROJECT DESCRIPTION
        ===================================================== */}

        <div className="mb-5 flex flex-col gap-4 sm:mb-6 md:flex-row md:items-end md:justify-between">
          <p
            className="
              max-w-2xl
              font-light
              leading-relaxed
              text-[#D7E2EA]/50
            "
            style={{
              fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
            }}
          >
            {project.description}
          </p>

          {/* Technology tags */}

          <div className="flex max-w-md flex-wrap gap-1.5 md:justify-end">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-[#D7E2EA]/10
                  bg-[#D7E2EA]/[0.03]
                  px-2.5
                  py-1.5
                  text-[0.45rem]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-[#D7E2EA]/45
                  sm:text-[0.5rem]
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            PROJECT IMAGES
        ===================================================== */}

        <div className="flex gap-3 sm:gap-4">
          {/* Left column */}

          <div
            className="flex flex-col gap-3 sm:gap-4"
            style={{ width: "40%" }}
          >
            <img
              src={project.col1[0]}
              alt={`${project.name} detail one`}
              loading="lazy"
              className={`
                w-full
                object-cover
                ${RADIUS}
              `}
              style={{
                height: "clamp(130px, 16vw, 230px)",
              }}
            />

            <img
              src={project.col1[1]}
              alt={`${project.name} detail two`}
              loading="lazy"
              className={`
                w-full
                object-cover
                ${RADIUS}
              `}
              style={{
                height: "clamp(160px, 22vw, 340px)",
              }}
            />
          </div>

          {/* Main image */}

          <div style={{ width: "60%" }}>
            <img
              src={project.col2}
              alt={`${project.name} cover`}
              loading="lazy"
              className={`
                h-full
                w-full
                object-cover
                ${RADIUS}
              `}
            />
          </div>
        </div>

        {/* =====================================================
            CARD FOOTER
        ===================================================== */}

        <div className="mt-4 flex items-center justify-between border-t border-[#D7E2EA]/10 pt-3 sm:mt-5 sm:pt-4">
          <span className="text-[0.45rem] uppercase tracking-[0.2em] text-[#D7E2EA]/25 sm:text-[0.55rem]">
            Project {project.n} / 03
          </span>

          <span className="text-[0.45rem] uppercase tracking-[0.2em] text-[#D7E2EA]/25 sm:text-[0.55rem]">
            Built with Java
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

  /*
   * THIS IS THE ORIGINAL SCROLL PROGRESS SYSTEM.
   *
   * Do not remove or replace this.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="
        relative
        z-10
        -mt-10
        rounded-t-[40px]
        px-5
        py-20
        sm:-mt-12
        sm:rounded-t-[50px]
        sm:px-8
        sm:py-24
        md:-mt-14
        md:rounded-t-[60px]
        md:px-10
        md:py-32
      "
      style={{
        backgroundColor: "#0C0C0C",
      }}
    >
      {/* =========================================================
          SECTION HEADER
      ========================================================= */}

      <FadeIn delay={0} y={40}>
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#D7E2EA]/20 sm:w-12" />

          <span className="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40 sm:text-xs">
            Things I've built
          </span>

          <span className="h-px w-8 bg-[#D7E2EA]/20 sm:w-12" />
        </div>

        <h2
          className="
            hero-heading
            text-center
            font-black
            uppercase
            leading-none
            tracking-tight
            text-[#D7E2EA]
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            text-center
            font-light
            leading-relaxed
            text-[#D7E2EA]/40
          "
          style={{
            fontSize: "clamp(0.75rem, 1.3vw, 1rem)",
          }}
        >
          A collection of applications I've built while turning ideas into
          working software and strengthening my development skills.
        </p>
      </FadeIn>

      {/* =========================================================
          PROJECT CARDS
          
          IMPORTANT:
          The original scrollYProgress is passed into every card.
          This is what creates the sequential stacking effect.
      ========================================================= */}

      <div className="mx-auto mt-14 max-w-6xl sm:mt-20 md:mt-28">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.n}
            project={p}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* =========================================================
          VIEW ALL PROJECTS
      ========================================================= */}

      <FadeIn delay={0.3} y={20}>
        <div className="mx-auto mt-4 flex max-w-6xl justify-center border-t border-[#D7E2EA]/10 pt-12 sm:mt-8 sm:pt-16">
          <a
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#D7E2EA]/15
              bg-[#D7E2EA]/[0.03]
              px-6
              py-3
              text-[0.6rem]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#D7E2EA]
              transition-all
              duration-300
              hover:border-[#D7E2EA]/30
              hover:bg-[#D7E2EA]/10
              hover:text-white
              sm:px-7
              sm:py-3.5
              sm:text-xs
            "
          >
            <span>View All Projects</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}