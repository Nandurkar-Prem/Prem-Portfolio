import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiFigma,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiApachemaven,
  SiMysql,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

/* =========================================================
   TYPES
========================================================= */

type SkillItem = {
  name: string;
  icon: React.ElementType;
};

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accent: "cyan" | "purple" | "blue";
  skills: SkillItem[];
};

/* =========================================================
   DATA
========================================================= */

const SKILL_GROUPS: SkillGroup[] = [
  {
    number: "01",
    title: "Backend",
    description:
      "Building reliable server-side systems, APIs and application logic.",
    icon: Server,
    accent: "cyan",
    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "REST APIs",
        icon: Code2,
      },
      {
        name: "Spring Security",
        icon: Layers3,
      },
      {
        name: "JPA / Hibernate",
        icon: Database,
      },
    ],
  },

  {
    number: "02",
    title: "Frontend",
    description:
      "Creating responsive interfaces with clean interactions and modern UI.",
    icon: Code2,
    accent: "purple",
    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    number: "03",
    title: "Database",
    description:
      "Designing structured data systems with reliability and performance in mind.",
    icon: Database,
    accent: "blue",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "JPA / Hibernate",
        icon: Database,
      },
      {
        name: "Database Design",
        icon: Layers3,
      },
      {
        name: "Query Optimization",
        icon: Code2,
      },
      {
        name: "Data Integrity",
        icon: Database,
      },
    ],
  },
];

const TOOLS = [
  {
    name: "Git",
    icon: FaGitAlt,
    accent: "orange",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    accent: "white",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    accent: "blue",
  },
  {
    name: "Postman",
    icon: SiPostman,
    accent: "orange",
  },
  {
    name: "Docker",
    icon: FaDocker,
    accent: "blue",
  },
  {
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    accent: "purple",
  },
  {
    name: "Maven",
    icon: SiApachemaven,
    accent: "red",
  },
  {
    name: "Figma",
    icon: SiFigma,
    accent: "pink",
  },
];

/* =========================================================
   ACCENT CONFIG
========================================================= */

const accentStyles = {
  cyan: {
    border:
      "border-cyan-400/20 hover:border-cyan-300/50",
    glow:
      "group-hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]",
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
    line: "from-transparent via-cyan-400/70 to-transparent",
    dot: "bg-cyan-300",
  },

  purple: {
    border:
      "border-violet-400/20 hover:border-violet-300/50",
    glow:
      "group-hover:shadow-[0_0_50px_rgba(139,92,246,0.14)]",
    text: "text-violet-300",
    bg: "bg-violet-400/10",
    line: "from-transparent via-violet-400/70 to-transparent",
    dot: "bg-violet-300",
  },

  blue: {
    border:
      "border-blue-400/20 hover:border-blue-300/50",
    glow:
      "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.14)]",
    text: "text-blue-300",
    bg: "bg-blue-400/10",
    line: "from-transparent via-blue-400/70 to-transparent",
    dot: "bg-blue-300",
  },
};

/* =========================================================
   SKILL GROUP CARD
========================================================= */

function SkillGroupCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const accent = accentStyles[group.accent];
  const GroupIcon = group.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
    >
      <div
        className={`
          relative h-full overflow-hidden rounded-[26px]
          border ${accent.border}
          bg-white/[0.035]
          backdrop-blur-xl
          transition-all duration-500
          ${accent.glow}
        `}
      >
        {/* Hover radial glow */}
        <div
          className={`
            pointer-events-none absolute
            -right-20 -top-20
            h-56 w-56 rounded-full
            opacity-0 blur-3xl
            transition-opacity duration-500
            group-hover:opacity-100
            ${accent.bg}
          `}
        />

        {/* Bottom accent glow */}
        <div
          className={`
            pointer-events-none absolute
            bottom-0 left-8 right-8
            h-px bg-gradient-to-r
            ${accent.line}
            opacity-40
            transition-all duration-500
            group-hover:left-4
            group-hover:right-4
            group-hover:opacity-100
          `}
        />

        {/* Large background number */}
        <div
          className="
            pointer-events-none absolute
            -right-3 -top-7
            select-none
            text-[130px]
            font-black
            leading-none
            text-white/[0.025]
          "
        >
          {group.number}
        </div>

        <div className="relative z-10 p-7 md:p-8">
          {/* Header */}
          <div className="mb-7 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-white/10
                  ${accent.bg}
                  ${accent.text}
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:border-white/20
                `}
              >
                <GroupIcon size={19} strokeWidth={1.7} />
              </div>

              <div>
                <p
                  className={`
                    text-[10px]
                    font-semibold
                    tracking-[0.28em]
                    ${accent.text}
                  `}
                >
                  {group.number}
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                  Skill Group
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="text-white/20 transition-colors group-hover:text-white/50"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-white md:text-[28px]">
              {group.title}
            </h3>

            <div
              className={`
                mt-3 h-px w-12
                bg-gradient-to-r
                ${accent.line}
              `}
            />
          </div>

          {/* Description */}
          <p className="mb-7 max-w-sm text-sm leading-6 text-white/45">
            {group.description}
          </p>

          {/* Skills */}
          <div className="space-y-1">
            {group.skills.map((skill, skillIndex) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index * 0.12 +
                      skillIndex * 0.05,
                  }}
                  className="
                    group/skill
                    flex items-center justify-between
                    border-b border-white/[0.055]
                    py-3
                    last:border-b-0
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        flex h-8 w-8 items-center justify-center
                        rounded-lg
                        bg-white/[0.035]
                        text-white/35
                        transition-all duration-300
                        group-hover/skill:bg-white/[0.07]
                        group-hover/skill:text-white
                      `}
                    >
                      <Icon size={15} />
                    </div>

                    <span className="text-sm text-white/60 transition-colors group-hover/skill:text-white/90">
                      {skill.name}
                    </span>
                  </div>

                  <span
                    className={`
                      h-1.5 w-1.5 rounded-full
                      ${accent.dot}
                      opacity-20
                      transition-all duration-300
                      group-hover/skill:opacity-100
                      group-hover/skill:shadow-[0_0_8px_currentColor]
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TOOL ITEM
========================================================= */

function ToolItem({
  tool,
  index,
}: {
  tool: (typeof TOOLS)[number];
  index: number;
}) {
  const Icon = tool.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group/tool
        relative
        flex min-h-[100px]
        flex-col items-center justify-center
        gap-3
        border-b border-white/[0.06]
        px-4
        transition-all duration-300
        md:border-b-0
        md:border-r
        md:last:border-r-0
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute inset-4
          rounded-2xl
          bg-white/[0.025]
          opacity-0
          blur-xl
          transition-opacity duration-300
          group-hover/tool:opacity-100
        "
      />

      <div
        className="
          relative z-10
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          border border-white/[0.08]
          bg-white/[0.035]
          text-white/45
          shadow-inner shadow-white/[0.02]
          transition-all duration-300
          group-hover/tool:scale-110
          group-hover/tool:border-white/15
          group-hover/tool:bg-white/[0.07]
          group-hover/tool:text-white
        "
      >
        <Icon size={21} />
      </div>

      <span
        className="
          relative z-10
          text-[11px]
          font-medium
          tracking-wide
          text-white/45
          transition-colors duration-300
          group-hover/tool:text-white/80
        "
      >
        {tool.name}
      </span>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#07090d]
        py-28
        text-white
        md:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Cyan ambient light */}
        <div
          className="
            absolute left-[10%] top-[25%]
            h-[420px] w-[420px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[130px]
          "
        />

        {/* Purple ambient light */}
        <div
          className="
            absolute right-[5%] top-[45%]
            h-[480px] w-[480px]
            rounded-full
            bg-violet-500/[0.04]
            blur-[140px]
          "
        />

        {/* Small center glow */}
        <div
          className="
            absolute left-1/2 top-[32%]
            h-[300px] w-[300px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.025]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16"
        >
          {/* Section label */}
          <div className="mb-7 flex items-center gap-4">
            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_12px_rgba(103,232,249,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-cyan-300/70
              "
            >
              THE STACK
            </span>

            <div className="h-px w-24 bg-gradient-to-r from-cyan-400/30 to-transparent" />

            <span className="ml-auto hidden text-[10px] tracking-[0.25em] text-white/20 md:block">
              03 / 06
            </span>
          </div>

          {/* Heading + description */}
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h2
                className="
                  max-w-4xl
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  font-bold
                  leading-[0.85]
                  tracking-[-0.065em]
                "
              >
                <span className="text-white">
                  Skills I
                </span>{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-300
                    via-blue-400
                    to-violet-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  work with.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40 lg:pb-2">
              Technologies and tools I use to build
              real-world applications, strengthen my
              fundamentals, and turn ideas into working
              systems.
            </p>
          </div>

          {/* Header divider */}
          <div className="mt-10 h-px w-full bg-white/[0.07]" />
        </motion.div>

        {/* ===================================================
            SKILL GROUPS
        =================================================== */}

        <div className="grid gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <SkillGroupCard
              key={group.number}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            DEVELOPER TOOLS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
            mt-6
            overflow-hidden
            rounded-[26px]
            border border-white/[0.08]
            bg-white/[0.025]
            backdrop-blur-xl
          "
        >
          {/* Subtle top glow */}
          <div
            className="
              pointer-events-none
              absolute left-[10%] right-[10%] top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400/40
              to-transparent
            "
          />

          {/* Tools header */}
          <div
            className="
              flex flex-col gap-5
              border-b border-white/[0.07]
              p-7
              md:flex-row
              md:items-center
              md:justify-between
              md:px-8
              md:py-7
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-emerald-300/15
                  bg-emerald-300/[0.06]
                  text-emerald-300/70
                "
              >
                <Wrench size={18} />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    Developer Tools
                  </h3>

                  <Sparkles
                    size={14}
                    className="text-emerald-300/60"
                  />
                </div>

                <p className="mt-1 text-xs leading-5 text-white/35">
                  Tools and platforms that power my
                  development workflow.
                </p>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-emerald-400/20 to-transparent md:ml-10 md:block" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/20">
              WORKFLOW / TOOLS
            </span>
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {TOOLS.map((tool, index) => (
              <ToolItem
                key={tool.name}
                tool={tool}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            WORKFLOW
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/25">
                DEVELOPMENT PHILOSOPHY
              </span>

              <div className="h-px w-10 bg-white/10" />
            </div>

            <span className="text-[9px] tracking-[0.25em] text-white/15">
              01 — 04
            </span>
          </div>

          <div
            className="
              grid
              overflow-hidden
              rounded-2xl
              border border-white/[0.06]
              bg-white/[0.018]
              md:grid-cols-4
            "
          >
            {[
              "LEARN",
              "BUILD",
              "TEST",
              "IMPROVE",
            ].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{
                  backgroundColor:
                    "rgba(255,255,255,0.035)",
                }}
                className="
                  relative
                  flex items-center gap-4
                  border-b border-white/[0.06]
                  px-6 py-5
                  transition-colors
                  last:border-b-0
                  md:border-b-0
                  md:border-r
                  md:last:border-r-0
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-cyan-300/60
                  "
                >
                  0{index + 1}
                </span>

                <span className="text-xs font-medium tracking-[0.2em] text-white/55">
                  {item}
                </span>

                {index < 3 && (
                  <ArrowUpRight
                    size={13}
                    className="
                      ml-auto
                      text-white/15
                    "
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            FOOTER MICRO LABEL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span
            className="
              h-1.5 w-1.5
              rounded-full
              bg-emerald-300
              shadow-[0_0_10px_rgba(110,231,183,0.7)]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-white/20
            "
          >
            Always learning • Always building
          </span>
        </motion.div>
      </div>
    </section>
  );
}