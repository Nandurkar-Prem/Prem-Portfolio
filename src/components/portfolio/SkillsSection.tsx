import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    n: "01",
    name: "Core Java",
    percentage: 90,
    level: "Strong",
    d: "Strong foundation in object-oriented programming, collections, exception handling, streams, multithreading, and core Java fundamentals.",
    tags: ["OOP", "Collections", "Streams", "Multithreading"],
  },
  {
    n: "02",
    name: "Spring Boot",
    percentage: 75,
    level: "Working With",
    d: "Building backend applications and REST APIs with Spring Boot, Spring MVC, JPA, validation, exception handling, and Spring Security.",
    tags: ["REST APIs", "JPA", "Security", "MVC"],
  },
  {
    n: "03",
    name: "React",
    percentage: 70,
    level: "Working With",
    d: "Building responsive frontend interfaces and connecting them with backend APIs using React, routing, reusable components, and Axios.",
    tags: ["Components", "Routing", "Axios", "UI"],
  },
  {
    n: "04",
    name: "MySQL",
    percentage: 75,
    level: "Working With",
    d: "Working with relational databases, SQL queries, database relationships, CRUD operations, and integrating persistence with Spring applications.",
    tags: ["SQL", "CRUD", "Relationships", "JPA"],
  },
  {
    n: "05",
    name: "Microservices",
    percentage: 55,
    level: "Exploring",
    d: "Learning how to design distributed backend systems, split applications into services, and handle communication between independent services.",
    tags: ["REST", "Services", "Architecture"],
  },
  {
    n: "06",
    name: "Docker & Kubernetes",
    percentage: 45,
    level: "Exploring",
    d: "Exploring containerization, application deployment, orchestration, and the fundamentals of running backend applications in distributed environments.",
    tags: ["Docker", "Containers", "Kubernetes"],
  },
];

const EXPLORING = [
  "Spring AI",
  "System Design",
  "Cloud",
  "Distributed Systems",
];

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        rounded-t-[40px]
        bg-[#171717]
        px-5
        py-20
        text-[#E8E8E5]
        sm:rounded-t-[50px]
        sm:px-8
        sm:py-24
        md:rounded-t-[60px]
        md:px-10
        md:py-32
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[25%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[130px]
        "
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <FadeIn delay={0.05} y={25}>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/20 sm:w-12" />

            <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/40 sm:text-xs">
              What I work with
            </span>

            <span className="h-px w-8 bg-white/20 sm:w-12" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={40}>
          <h2
            className="
              text-center
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.05em]
              text-[#E8E8E5]
            "
            style={{
              fontSize: "clamp(4rem, 13vw, 10rem)",
            }}
          >
            Skills
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-center
              font-light
              leading-relaxed
              text-white/40
            "
            style={{
              fontSize: "clamp(0.75rem, 1.3vw, 1rem)",
            }}
          >
            Technologies I've worked with, the areas I'm strengthening, and
            the systems I'm currently learning to build.
          </p>
        </FadeIn>

        {/* =======================================================
            SKILL LIST
        ======================================================= */}

        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 md:mt-28">
          {SKILLS.map((skill, i) => (
            <FadeIn
              key={skill.n}
              delay={i * 0.08}
              className={`
                skill-row
                group
                relative
                flex
                flex-col
                gap-6
                border-t
                border-white/[0.12]
                py-8
                transition-all
                duration-500
                sm:py-10
                md:flex-row
                md:items-start
                md:gap-10
                md:py-12
                ${i === SKILLS.length - 1 ? "border-b" : ""}
              `}
            >
              {/* Number */}
              <div className="flex shrink-0 items-start justify-between md:w-[150px]">
                <span
                  className="
                    skill-number
                    font-black
                    leading-[0.75]
                    tracking-[-0.05em]
                    text-white/[0.12]
                    transition-all
                    duration-500
                    group-hover:text-[#E8E8E5]
                  "
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  }}
                >
                  {skill.n}
                </span>

                {/* Mobile percentage */}
                <div className="flex flex-col items-end md:hidden">
                  <span className="text-2xl font-black text-[#E8E8E5]">
                    {skill.percentage}%
                  </span>

                  <span className="text-[0.5rem] uppercase tracking-[0.2em] text-white/35">
                    {skill.level}
                  </span>
                </div>
              </div>

              {/* Main content */}
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className="
                      font-semibold
                      uppercase
                      leading-none
                      tracking-tight
                      text-[#E8E8E5]
                    "
                    style={{
                      fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
                    }}
                  >
                    {skill.name}
                  </h3>

                  {/* Desktop percentage */}
                  <div className="hidden shrink-0 items-end gap-3 md:flex">
                    <span className="text-3xl font-black leading-none text-[#E8E8E5] lg:text-4xl">
                      {skill.percentage}%
                    </span>

                    <span className="mb-1 text-[0.55rem] uppercase tracking-[0.2em] text-white/35">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    font-light
                    leading-relaxed
                    text-white/45
                  "
                  style={{
                    fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                  }}
                >
                  {skill.d}
                </p>

                {/* Technology tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/[0.10]
                        bg-white/[0.035]
                        px-3
                        py-1.5
                        text-[0.55rem]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/40
                        transition-all
                        duration-300
                        group-hover:border-white/[0.18]
                        group-hover:text-white/65
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Skill progress */}
                <div className="mt-7 h-[2px] w-full max-w-2xl overflow-hidden bg-white/[0.10]">
                  <div
                    className="
                      h-full
                      bg-[#E8E8E5]
                      transition-all
                      duration-1000
                      ease-out
                    "
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                  />
                </div>
              </div>

              {/* Hover arrow */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  hidden
                  -translate-y-1/2
                  text-2xl
                  text-white/20
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:right-2
                  group-hover:opacity-100
                  md:block
                "
                aria-hidden="true"
              >
                ↗
              </div>
            </FadeIn>
          ))}
        </div>

        {/* =======================================================
            CURRENTLY EXPLORING
        ======================================================= */}

        <FadeIn delay={0.3} y={25}>
          <div className="mx-auto mt-20 max-w-6xl border-t border-white/[0.12] pt-10 sm:mt-24 md:mt-28">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/30 sm:text-xs">
                  What's next
                </span>

                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight text-[#E8E8E5] sm:text-3xl">
                  Currently Exploring
                </h3>
              </div>

              <div className="flex max-w-xl flex-wrap gap-2 md:justify-end">
                {EXPLORING.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/[0.14]
                      bg-white/[0.025]
                      px-4
                      py-2.5
                      text-[0.6rem]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-white/45
                      transition-all
                      duration-300
                      hover:border-cyan-300/30
                      hover:bg-cyan-300/[0.06]
                      hover:text-cyan-200
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* =======================================================
            FOOTNOTE
        ======================================================= */}

        <FadeIn delay={0.35} y={15}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-white/20 sm:text-xs">
            Percentages represent my current self-assessment and will evolve
            as I continue learning and building.
          </p>
        </FadeIn>
      </div>

      {/* =========================================================
          LOCAL ANIMATION
      ========================================================= */}

      <style>{`
        .skill-row:hover .skill-number {
          transform: translateX(6px);
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-row:hover .skill-number {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}