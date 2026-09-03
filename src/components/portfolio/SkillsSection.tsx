import type {
  ElementType,
  MouseEvent,
} from "react";

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
  icon: ElementType;
};

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  icon: ElementType;
  accent: "green" | "silver" | "teal";
  skills: SkillItem[];
};

type Tool = {
  name: string;
  icon: ElementType;
  accent:
    | "blue"
    | "orange"
    | "purple"
    | "red"
    | "pink"
    | "white";
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
    accent: "green",

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
    accent: "silver",

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
    accent: "teal",

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

/* =========================================================
   DEVELOPER TOOLS
========================================================= */

const TOOLS: Tool[] = [
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

  // Maven uses an existing icon instead of SiMaven
  {
    name: "Maven",
    icon: Layers3,
    accent: "red",
  },

  {
    name: "Figma",
    icon: SiFigma,
    accent: "pink",
  },
];

/* =========================================================
   SKILL GROUP VISUAL CONFIG
========================================================= */

const skillAccentStyles = {
  green: {
    border:
      "border-emerald-300/[0.14] hover:border-emerald-300/[0.38]",

    glow:
      "group-hover:shadow-[0_0_70px_rgba(16,185,129,0.12)]",

    icon:
      "border-emerald-300/[0.14] bg-emerald-300/[0.045] text-emerald-200/75",

    hoverIcon:
      "group-hover:text-emerald-100",

    line:
      "from-transparent via-emerald-300/75 to-transparent",

    dot:
      "bg-emerald-300",

    ambient:
      "bg-emerald-300/[0.07]",
  },

  silver: {
    border:
      "border-white/[0.11] hover:border-white/[0.28]",

    glow:
      "group-hover:shadow-[0_0_70px_rgba(220,230,235,0.07)]",

    icon:
      "border-white/[0.11] bg-white/[0.035] text-white/65",

    hoverIcon:
      "group-hover:text-white",

    line:
      "from-transparent via-white/65 to-transparent",

    dot:
      "bg-white",

    ambient:
      "bg-white/[0.045]",
  },

  teal: {
    border:
      "border-teal-300/[0.13] hover:border-teal-300/[0.36]",

    glow:
      "group-hover:shadow-[0_0_70px_rgba(45,212,191,0.10)]",

    icon:
      "border-teal-300/[0.13] bg-teal-300/[0.045] text-teal-200/70",

    hoverIcon:
      "group-hover:text-teal-100",

    line:
      "from-transparent via-teal-300/70 to-transparent",

    dot:
      "bg-teal-300",

    ambient:
      "bg-teal-300/[0.06]",
  },
};

/* =========================================================
   TOOL BRAND COLORS
========================================================= */

const toolColors = {
  blue: {
    color: "#38bdf8",
    border: "rgba(56,189,248,0.48)",
    glow: "rgba(56,189,248,0.20)",
    background: "rgba(56,189,248,0.08)",
  },

  orange: {
    color: "#fb923c",
    border: "rgba(251,146,60,0.48)",
    glow: "rgba(251,146,60,0.19)",
    background: "rgba(251,146,60,0.08)",
  },

  purple: {
    color: "#a78bfa",
    border: "rgba(167,139,250,0.48)",
    glow: "rgba(167,139,250,0.19)",
    background: "rgba(167,139,250,0.08)",
  },

  red: {
    color: "#f87171",
    border: "rgba(248,113,113,0.48)",
    glow: "rgba(248,113,113,0.19)",
    background: "rgba(248,113,113,0.08)",
  },

  pink: {
    color: "#f472b6",
    border: "rgba(244,114,182,0.48)",
    glow: "rgba(244,114,182,0.19)",
    background: "rgba(244,114,182,0.08)",
  },

  white: {
    color: "#f1f5f9",
    border: "rgba(241,245,249,0.36)",
    glow: "rgba(241,245,249,0.12)",
    background: "rgba(241,245,249,0.065)",
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
  const accent =
    skillAccentStyles[group.accent];

  const GroupIcon = group.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [5, -5]
    ),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [-5, 5]
    ),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width;

    const y =
      (event.clientY - rect.top) /
      rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);

    spotlightX.set(x * 100);
    spotlightY.set(y * 100);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);

    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
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
        duration: 0.75,
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
      className="
        group
        relative
        h-full
        [perspective:1200px]
      "
    >
      <div
        className={`
          pointer-events-none
          absolute
          -inset-5
          rounded-[34px]
          ${accent.ambient}
          opacity-0
          blur-[55px]
          transition-opacity
          duration-700
          group-hover:opacity-100
        `}
      />

      <div
        className={`
          relative
          h-full
          overflow-hidden
          rounded-[26px]
          border
          ${accent.border}
          bg-[#0a0f0d]/85
          backdrop-blur-2xl
          transition-all
          duration-500
          ${accent.glow}
        `}
      >
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) =>
                `radial-gradient(
                  320px circle at ${x}% ${y}%,
                  rgba(120,255,205,0.08),
                  transparent 70%
                )`
            ),
          }}
        />

        <motion.div
          className={`
            pointer-events-none
            absolute
            left-[12%]
            right-[12%]
            top-0
            h-px
            bg-gradient-to-r
            ${accent.line}
            opacity-45
            transition-all
            duration-700
            group-hover:left-[4%]
            group-hover:right-[4%]
            group-hover:opacity-100
          `}
        />

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-[1px]
            w-0
            bg-emerald-200
            opacity-0
            shadow-[0_0_18px_rgba(110,231,183,0.8)]
            transition-all
            duration-700
            group-hover:w-full
            group-hover:opacity-80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-4
            -top-8
            select-none
            text-[145px]
            font-black
            leading-none
            tracking-[-0.09em]
            text-white/[0.025]
            transition-all
            duration-700
            group-hover:text-white/[0.045]
          "
        >
          {group.number}
        </div>

        <div
          className={`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            ${accent.ambient}
            opacity-20
            blur-[90px]
            transition-all
            duration-700
            group-hover:scale-125
            group-hover:opacity-70
          `}
        />

        <div className="relative z-10 p-7 md:p-8">
          <div className="mb-8 flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  ${accent.icon}
                  transition-all
                  duration-500
                  ${accent.hoverIcon}
                  group-hover:shadow-[0_0_24px_rgba(110,231,183,0.12)]
                `}
              >
                <GroupIcon
                  size={19}
                  strokeWidth={1.6}
                />
              </motion.div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.32em]
                    text-white/25
                  "
                >
                  {group.number}
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[0.23em]
                    text-white/22
                  "
                >
                  Skill Group
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.12,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                text-white/15
                transition-colors
                duration-300
                group-hover:text-white/65
              "
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          <div className="mb-4">
            <h3
              className="
                text-[28px]
                font-semibold
                tracking-[-0.04em]
                text-[#e1e7ea]
              "
            >
              {group.title}
            </h3>

            <div
              className={`
                mt-3
                h-px
                w-10
                bg-gradient-to-r
                ${accent.line}
                transition-all
                duration-500
                group-hover:w-24
              `}
            />
          </div>

          <p
            className="
              mb-7
              max-w-sm
              text-[13px]
              leading-6
              text-white/38
            "
          >
            {group.description}
          </p>

          <div>
            {group.skills.map(
              (skill, skillIndex) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      x: -10,
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
                        skillIndex * 0.055,
                    }}
                    className="
                      group/skill
                      relative
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/[0.055]
                      py-3
                      last:border-b-0
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-x-[-8px]
                        inset-y-1
                        rounded-lg
                        bg-emerald-300/[0.025]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover/skill:opacity-100
                      "
                    />

                    <div className="relative z-10 flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/[0.055]
                          bg-white/[0.025]
                          text-white/30
                          transition-all
                          duration-300
                          group-hover/skill:scale-105
                          group-hover/skill:border-emerald-300/[0.15]
                          group-hover/skill:bg-emerald-300/[0.045]
                          group-hover/skill:text-emerald-100/80
                          group-hover/skill:shadow-[0_0_18px_rgba(110,231,183,0.08)]
                        "
                      >
                        <Icon size={15} />
                      </div>

                      <span
                        className="
                          text-[13px]
                          text-white/50
                          transition-colors
                          duration-300
                          group-hover/skill:text-white/90
                        "
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`
                        relative
                        z-10
                        h-1.5
                        w-1.5
                        rounded-full
                        ${accent.dot}
                        opacity-15
                        transition-all
                        duration-300
                        group-hover/skill:scale-125
                        group-hover/skill:opacity-100
                      `}
                    />
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   DEVELOPER TOOL ITEM
========================================================= */

function ToolItem({
  tool,
  index,
}: {
  tool: Tool;
  index: number;
}) {
  const Icon = tool.icon;
  const colors = toolColors[tool.accent];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
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
        duration: 0.55,
        delay: index * 0.055,
      }}
      whileHover={{
        y: -6,
      }}
      className="group/tool relative"
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-2
          rounded-2xl
          opacity-0
          blur-[28px]
          transition-all
          duration-500
          group-hover/tool:opacity-100
        "
        style={{
          background: colors.glow,
        }}
      />

      <div
        className="
          relative
          flex
          min-h-[125px]
          flex-col
          items-center
          justify-center
          gap-3
          overflow-hidden
          border-r
          border-white/[0.055]
          transition-all
          duration-500
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover/tool:opacity-100
          "
          style={{
            background: `radial-gradient(
              circle at center,
              ${colors.background},
              transparent 65%
            )`,
          }}
        />

        <div
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.075]
            bg-white/[0.025]
            text-white/32
            transition-all
            duration-500
            group-hover/tool:scale-110
          "
          style={
            {
              "--tool-color":
                colors.color,
              "--tool-glow":
                colors.glow,
            } as React.CSSProperties
          }
        >
          <Icon
            size={23}
            className="
              relative
              z-10
              transition-all
              duration-500
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-xl
              opacity-0
              transition-opacity
              duration-500
              group-hover/tool:opacity-100
            "
            style={{
              background:
                colors.background,

              boxShadow: `
                inset 0 0 22px ${colors.glow},
                0 0 28px ${colors.glow}
              `,
            }}
          />
        </div>

        <span
          className="
            relative
            z-10
            text-[11px]
            font-medium
            tracking-wide
            text-white/35
            transition-all
            duration-500
            group-hover/tool:text-white/90
          "
        >
          {tool.name}
        </span>

        <span
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            transition-all
            duration-500
            group-hover/tool:w-14
          "
          style={{
            background:
              colors.color,

            boxShadow:
              `0 0 15px ${colors.color}`,
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          border
          border-transparent
          opacity-0
          transition-all
          duration-500
          group-hover/tool:opacity-100
        "
        style={{
          borderColor:
            colors.border,

          boxShadow: `
            0 0 35px ${colors.glow},
            inset 0 0 20px ${colors.glow}
          `,
        }}
      />

      <style>{`
        .group\\/tool:hover svg {
          color: ${colors.color};
          filter:
            drop-shadow(
              0 0 9px ${colors.glow}
            );
        }
      `}</style>
    </motion.div>
  );
}

/* =========================================================
   MAIN SKILLS SECTION
========================================================= */

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#040706]
        py-28
        text-white
        md:py-36
      "
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-8%]
            top-[12%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-emerald-400/[0.055]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.94, 1.08, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-10%]
            right-[-6%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/[0.045]
            blur-[145px]
          "
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [0.9, 1.05, 0.9],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[28%]
            h-[360px]
            w-[360px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.018]
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[260px]
            w-[70%]
            -translate-x-1/2
            rounded-full
            bg-emerald-300/[0.025]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.30)_100%)]
          "
        />

        <motion.div
          animate={{
            x: ["-20%", "120%"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-[8%]
            h-px
            w-[35%]
            bg-gradient-to-r
            from-transparent
            via-emerald-300/45
            to-transparent
            shadow-[0_0_25px_rgba(110,231,183,0.35)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-6
          lg:px-10
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          <div className="mb-7 flex items-center gap-4">
            <motion.span
              animate={{
                opacity: [0.45, 1, 0.45],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-300
                shadow-[0_0_14px_rgba(110,231,183,0.9)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-emerald-200/65
              "
            >
              THE STACK
            </span>

            <div
              className="
                h-px
                w-24
                bg-gradient-to-r
                from-emerald-300/35
                to-transparent
              "
            />

            <span
              className="
                ml-auto
                hidden
                text-[10px]
                tracking-[0.25em]
                text-white/20
                md:block
              "
            >
              03 / 06
            </span>
          </div>

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1fr_370px]
              lg:items-end
            "
          >
            <div>
              <h2
                className="
                  max-w-5xl
                  text-[clamp(3.5rem,8vw,7.5rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.075em]
                "
              >
                <span
                  className="
                    text-[#e6ebee]
                  "
                >
                  Skills I
                </span>{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#e4e9ec]
                    via-[#aeb9bf]
                    to-[#647178]
                    bg-clip-text
                    text-transparent
                  "
                >
                  work with.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-white/40
                lg:pb-2
              "
            >
              Technologies and tools I use to build
              real-world applications, strengthen my
              fundamentals, and turn ideas into working
              systems.
            </p>
          </div>

          <div
            className="
              relative
              mt-10
              h-px
              w-full
              overflow-hidden
              bg-white/[0.07]
            "
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-0
                top-0
                h-px
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-emerald-300/45
                to-transparent
              "
            />
          </div>
        </motion.div>

        {/* ===================================================
            SKILL GROUPS
        =================================================== */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {SKILL_GROUPS.map(
            (group, index) => (
              <SkillGroupCard
                key={group.number}
                group={group}
                index={index}
              />
            )
          )}
        </div>

        {/* ===================================================
            DEVELOPER TOOLS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group/tools
            relative
            mt-6
            overflow-hidden
            rounded-[26px]
            border
            border-white/[0.075]
            bg-[#080c0a]/85
            backdrop-blur-2xl
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-24
              h-64
              w-64
              rounded-full
              bg-emerald-300/[0.045]
              blur-[90px]
              transition-all
              duration-700
              group-hover/tools:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -right-20
              h-72
              w-72
              rounded-full
              bg-emerald-400/[0.035]
              blur-[90px]
            "
          />

          <div
            className="
              absolute
              left-[7%]
              right-[7%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-emerald-300/45
              to-transparent
              shadow-[0_0_14px_rgba(110,231,183,0.18)]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-5
              border-b
              border-white/[0.06]
              p-7
              md:flex-row
              md:items-center
              md:justify-between
              md:px-8
              md:py-7
            "
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-emerald-300/[0.14]
                  bg-emerald-300/[0.04]
                  text-emerald-200/70
                  shadow-[0_0_24px_rgba(110,231,183,0.05)]
                  transition-all
                  duration-300
                "
              >
                <Wrench
                  size={18}
                  strokeWidth={1.6}
                />
              </motion.div>

              <div>
                <div className="flex items-center gap-3">
                  <h3
                    className="
                      text-lg
                      font-semibold
                      tracking-[-0.02em]
                      text-[#dce2e6]
                    "
                  >
                    Developer Tools
                  </h3>

                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                      opacity: [0.35, 0.8, 0.35],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles
                      size={14}
                      className="
                        text-emerald-300/60
                      "
                    />
                  </motion.div>
                </div>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-white/32
                  "
                >
                  Tools and platforms that power my
                  development workflow.
                </p>
              </div>
            </div>

            <div
              className="
                hidden
                h-px
                flex-1
                bg-gradient-to-r
                from-emerald-300/20
                via-white/[0.04]
                to-transparent
                md:ml-10
                md:block
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white/18
              "
            >
              WORKFLOW / TOOLS
            </span>
          </div>

          <div
            className="
              relative
              z-10
              grid
              grid-cols-2
              sm:grid-cols-4
              lg:grid-cols-8
            "
          >
            {TOOLS.map(
              (tool, index) => (
                <ToolItem
                  key={tool.name}
                  tool={tool}
                  index={index}
                />
              )
            )}
          </div>
        </motion.div>

        {/* ===================================================
            DEVELOPMENT PHILOSOPHY
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
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
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-white/24
                "
              >
                DEVELOPMENT PHILOSOPHY
              </span>

              <div
                className="
                  h-px
                  w-10
                  bg-gradient-to-r
                  from-white/15
                  to-transparent
                "
              />
            </div>

            <span
              className="
                text-[9px]
                tracking-[0.25em]
                text-white/15
              "
            >
              01 — 04
            </span>
          </div>

          <div
            className="
              relative
              grid
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.018]
              backdrop-blur-xl
              md:grid-cols-4
            "
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-px
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-emerald-300/45
                to-transparent
              "
            />

            {[
              "LEARN",
              "BUILD",
              "TEST",
              "IMPROVE",
            ].map(
              (item, index) => (
                <motion.div
                  key={item}
                  whileHover={{
                    backgroundColor:
                      "rgba(110,231,183,0.035)",
                  }}
                  className="
                    group/workflow
                    relative
                    flex
                    items-center
                    gap-4
                    border-b
                    border-white/[0.055]
                    px-6
                    py-5
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
                      text-emerald-300/40
                      transition-all
                      duration-300
                      group-hover/workflow:text-emerald-200
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-xs
                      font-medium
                      tracking-[0.2em]
                      text-white/42
                      transition-colors
                      duration-300
                      group-hover/workflow:text-white/90
                    "
                  >
                    {item}
                  </span>

                  {index < 3 && (
                    <ArrowUpRight
                      size={13}
                      className="
                        ml-auto
                        text-white/10
                        transition-all
                        duration-300
                        group-hover/workflow:translate-x-0.5
                        group-hover/workflow:-translate-y-0.5
                        group-hover/workflow:text-emerald-300/60
                      "
                    />
                  )}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-6
                      h-px
                      w-0
                      bg-emerald-300
                      opacity-0
                      shadow-[0_0_10px_rgba(110,231,183,0.7)]
                      transition-all
                      duration-500
                      group-hover/workflow:w-10
                      group-hover/workflow:opacity-100
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* ===================================================
            FOOTER
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
            delay: 0.35,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <motion.span
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-300
              shadow-[0_0_12px_rgba(110,231,183,0.8)]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-white/18
            "
          >
            Always learning • Always building
          </span>
        </motion.div>
      </div>
    </section>
  );
}