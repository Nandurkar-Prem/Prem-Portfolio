import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiPostman,
  SiDocker,
  SiIntellijidea,
  SiApachemaven,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FadeIn } from "./FadeIn";

type Accent = "cyan" | "blue" | "purple" | "green";

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  accent: Accent;
  skills: string[];
};

type Tool = {
  name: string;
  description: string;
  accent: Accent;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  brand?: boolean;
};

/* =========================================================
   DATA
========================================================= */

const SKILL_GROUPS: SkillGroup[] = [
  {
    number: "01",
    title: "Backend",
    description:
      "Building reliable server-side applications and APIs with a strong focus on architecture and maintainability.",
    accent: "cyan",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Security",
      "JPA / Hibernate",
    ],
  },
  {
    number: "02",
    title: "Frontend",
    description:
      "Creating responsive interfaces that connect cleanly with backend systems and provide a polished user experience.",
    accent: "blue",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Designing structured data layers and connecting applications with reliable persistence and querying.",
    accent: "purple",
    skills: [
      "MySQL",
      "SQL",
      "JPA / Hibernate",
      "Database Design",
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "GitHub",
    description: "Version Control",
    accent: "cyan",
    icon: SiGithub,
    brand: true,
  },
  {
    name: "VS Code",
    description: "Development",
    accent: "blue",
    icon: VscVscode,
    brand: true,
  },
  {
    name: "Postman",
    description: "API Testing",
    accent: "green",
    icon: SiPostman,
    brand: true,
  },
  {
    name: "Docker",
    description: "Containers",
    accent: "cyan",
    icon: SiDocker,
    brand: true,
  },
  {
    name: "IntelliJ IDEA",
    description: "Java IDE",
    accent: "purple",
    icon: SiIntellijidea,
    brand: true,
  },
  {
    name: "Maven",
    description: "Build Tool",
    accent: "green",
    icon: SiApachemaven,
    brand: true,
  },
];

const ACCENT_STYLES = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/20",
    hoverBorder: "group-hover:border-cyan-300/60",
    glow: "bg-cyan-400",
    line: "via-cyan-300",
    shadow:
      "group-hover:shadow-[0_20px_80px_rgba(34,211,238,0.10)]",
    gradient:
      "from-cyan-400 via-blue-400 to-transparent",
  },

  blue: {
    text: "text-blue-300",
    border: "border-blue-400/20",
    hoverBorder: "group-hover:border-blue-300/60",
    glow: "bg-blue-400",
    line: "via-blue-300",
    shadow:
      "group-hover:shadow-[0_20px_80px_rgba(59,130,246,0.10)]",
    gradient:
      "from-blue-400 via-indigo-400 to-transparent",
  },

  purple: {
    text: "text-purple-300",
    border: "border-purple-400/20",
    hoverBorder: "group-hover:border-purple-300/60",
    glow: "bg-purple-400",
    line: "via-purple-300",
    shadow:
      "group-hover:shadow-[0_20px_80px_rgba(168,85,247,0.12)]",
    gradient:
      "from-purple-400 via-fuchsia-400 to-transparent",
  },

  green: {
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    hoverBorder: "group-hover:border-emerald-300/60",
    glow: "bg-emerald-400",
    line: "via-emerald-300",
    shadow:
      "group-hover:shadow-[0_20px_80px_rgba(52,211,153,0.10)]",
    gradient:
      "from-emerald-400 via-cyan-400 to-transparent",
  },
};

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  const theme = ACCENT_STYLES[group.accent];

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMouse({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 50,
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
      whileHover={{
        y: -10,
        rotateX: 1.5,
        rotateY: index === 1 ? -1.5 : 1.5,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMouse({
          x: 50,
          y: 50,
        });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className={`
        group
        relative
        min-h-[390px]
        overflow-hidden
        rounded-[30px]
        border
        ${theme.border}
        ${theme.hoverBorder}
        bg-[#0A0D13]
        p-7
        transition-[border-color,box-shadow]
        duration-500
        sm:p-8
        ${theme.shadow}
      `}
    >
      {/* Mouse-following spotlight */}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            320px circle at ${mouse.x}% ${mouse.y}%,
            ${
              group.accent === "cyan"
                ? "rgba(34,211,238,0.13)"
                : group.accent === "blue"
                  ? "rgba(59,130,246,0.13)"
                  : group.accent === "purple"
                    ? "rgba(168,85,247,0.13)"
                    : "rgba(52,211,153,0.13)"
            },
            transparent 70%
          )`,
        }}
      />

      {/* Animated border beam */}

      <motion.div
        animate={{
          x: hovered
            ? ["-100%", "200%"]
            : "-100%",
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: hovered ? Infinity : 0,
        }}
        className={`
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-1/2
          bg-gradient-to-r
          from-transparent
          ${theme.line}
          to-transparent
        `}
      />

      {/* Ambient orb */}

      <motion.div
        animate={{
          scale: hovered ? 1.35 : 0.8,
          opacity: hovered ? 0.14 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          ${theme.glow}
          blur-[90px]
        `}
      />

      {/* Background number */}

      <div
        className="
          pointer-events-none
          absolute
          -right-4
          -top-8
          select-none
          text-[170px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.025]
          transition-all
          duration-700
          group-hover:text-white/[0.05]
        "
      >
        {group.number}
      </div>

      {/* Content */}

      <div className="relative z-10">
        {/* Top */}

        <div className="flex items-center justify-between">
          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              ${theme.border}
              bg-white/[0.025]
              text-[10px]
              font-bold
              ${theme.text}
              transition-all
              duration-500
              group-hover:scale-110
            `}
          >
            {group.number}
          </div>

          <motion.div
            animate={{
              rotate: hovered ? 12 : 0,
              scale: hovered ? 1.1 : 1,
            }}
            transition={{
              duration: 0.35,
            }}
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              ${theme.border}
              bg-white/[0.025]
              ${theme.text}
            `}
          >
            <span className="text-sm">
              {index === 0
                ? "</>"
                : index === 1
                  ? "UI"
                  : "DB"}
            </span>
          </motion.div>
        </div>

        {/* Heading */}

        <div className="mt-14">
          <p
            className={`
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              ${theme.text}
              opacity-60
            `}
          >
            Skill category
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#E8EEF3] sm:text-4xl">
            {group.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#D7E2EA]/45">
            {group.description}
          </p>
        </div>

        {/* Divider */}

        <div className="mt-7 h-px bg-white/[0.06]" />

        {/* Skills */}

        <div className="mt-5 space-y-3">
          {group.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
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
                duration: 0.4,
                delay:
                  0.35 +
                  index * 0.1 +
                  skillIndex * 0.05,
              }}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                px-2
                py-1.5
                transition-all
                duration-300
                group-hover:bg-white/[0.025]
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    ${theme.glow}
                    opacity-50
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  `}
                />

                <span className="text-xs text-[#D7E2EA]/55 transition-colors duration-300 group-hover:text-[#D7E2EA]/80">
                  {skill}
                </span>
              </div>

              <span
                className={`
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  ${theme.text}
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-40
                `}
              >
                ACTIVE
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom status */}

      <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between sm:left-8 sm:right-8">
        <span className="text-[8px] uppercase tracking-[0.3em] text-[#D7E2EA]/20">
          SYSTEM / {group.number}
        </span>

        <motion.span
          animate={{
            opacity: hovered
              ? [0.35, 1, 0.35]
              : 0.25,
          }}
          transition={{
            duration: 1.5,
            repeat: hovered ? Infinity : 0,
          }}
          className={`
            h-1.5
            w-1.5
            rounded-full
            ${theme.glow}
          `}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   TOOL CARD
========================================================= */

function ToolItem({
  tool,
  index,
}: {
  tool: Tool;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const theme = ACCENT_STYLES[tool.accent];

  const Icon = tool.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -5,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
        relative
        flex
        min-w-[165px]
        flex-1
        cursor-default
        items-center
        gap-4
        overflow-hidden
        border-r
        border-white/[0.06]
        px-5
        py-5
        last:border-r-0
      "
    >
      {/* Tool glow */}

      <motion.div
        animate={{
          opacity: hovered ? 0.12 : 0,
          scale: hovered ? 1.2 : 0.8,
        }}
        className={`
          pointer-events-none
          absolute
          left-0
          top-1/2
          h-24
          w-24
          -translate-y-1/2
          rounded-full
          ${theme.glow}
          blur-[45px]
        `}
      />

      {/* Icon */}

      <motion.div
        animate={{
          scale: hovered ? 1.12 : 1,
          rotate: hovered ? -4 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={`
          relative
          z-10
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          ${theme.border}
          bg-white/[0.025]
          ${theme.text}
          transition-all
          duration-300
        `}
      >
        <Icon size={20} />
      </motion.div>

      {/* Text */}

      <div className="relative z-10 min-w-0">
        <p className="truncate text-sm font-semibold text-[#D7E2EA]/70 transition-colors duration-300 group-hover:text-[#E8EEF3]">
          {tool.name}
        </p>

        <p
          className={`
            mt-1
            text-[8px]
            uppercase
            tracking-[0.2em]
            ${theme.text}
            opacity-40
          `}
        >
          {tool.description}
        </p>
      </div>

      {/* Hover arrow */}

      <motion.span
        animate={{
          opacity: hovered ? 1 : 0,
          x: hovered ? 0 : -5,
        }}
        className={`
          ml-auto
          text-xs
          ${theme.text}
        `}
      >
        ↗
      </motion.span>
    </motion.div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#080A0F]
        px-5
        py-24
        sm:px-8
        sm:py-28
        md:px-10
        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(215,226,234,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(215,226,234,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyan ambient light */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400
          blur-[160px]
        "
      />

      {/* Purple ambient light */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[550px]
          w-[550px]
          rounded-full
          bg-purple-500
          blur-[170px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <FadeIn delay={0} y={35}>
          <div className="mb-14 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-4">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_14px_rgba(103,232,249,0.9)]
                "
              />

              <span className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.4em]
                text-cyan-200/65
              ">
                Skills
              </span>

              <span className="h-px flex-1 bg-white/[0.08]" />

              <span className="
                hidden
                text-[9px]
                tracking-[0.25em]
                text-[#D7E2EA]/25
                sm:block
              ">
                01 / 02
              </span>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.65fr] lg:items-end">
              <h2
                className="
                  font-black
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-[#E8EEF3]
                "
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 8rem)",
                }}
              >
                What I{" "}
                <span className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-blue-400
                  to-purple-400
                  bg-clip-text
                  text-transparent
                ">
                  work with.
                </span>
              </h2>

              <p className="
                max-w-sm
                text-sm
                leading-relaxed
                text-[#D7E2EA]/45
                lg:pb-2
                lg:text-base
              ">
                A focused set of technologies I use to
                design, build and ship real-world
                applications.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* =====================================================
            SKILL CARDS
        ====================================================== */}

        <div className="
          grid
          gap-5
          md:grid-cols-3
          md:gap-6
        ">
          {SKILL_GROUPS.map((group, index) => (
            <SkillCard
              key={group.number}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            DEVELOPER TOOLS
        ====================================================== */}

        <FadeIn delay={0.2} y={35}>
          <div className="
            relative
            mt-6
            overflow-hidden
            rounded-[30px]
            border
            border-emerald-400/15
            bg-[#0A0D13]
            transition-all
            duration-500
            hover:border-emerald-300/35
            hover:shadow-[0_25px_100px_rgba(52,211,153,0.06)]
          ">
            {/* Top animated line */}

            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 4,
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
                via-emerald-300
                to-transparent
              "
            />

            <div className="
              flex
              flex-col
              gap-7
              p-6
              md:p-7
              lg:flex-row
              lg:items-center
            ">
              {/* Header */}

              <div className="
                flex
                shrink-0
                items-center
                gap-4
                lg:w-[245px]
              ">
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.08,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-emerald-400/25
                    bg-emerald-400/[0.035]
                    text-emerald-300
                    shadow-[0_0_30px_rgba(52,211,153,0.07)]
                  "
                >
                  <span className="text-lg">
                    ⚒
                  </span>
                </motion.div>

                <div>
                  <p className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-emerald-300/50
                  ">
                    Workflow
                  </p>

                  <h3 className="
                    mt-1
                    text-lg
                    font-bold
                    text-[#E6EDF3]
                  ">
                    Developer Tools
                  </h3>
                </div>
              </div>

              {/* Tools */}

              <div className="
                flex
                min-w-0
                flex-1
                flex-wrap
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.05]
                bg-white/[0.012]
              ">
                {TOOLS.map((tool, index) => (
                  <ToolItem
                    key={tool.name}
                    tool={tool}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* =====================================================
            WORKFLOW
        ====================================================== */}

        <FadeIn delay={0.3} y={25}>
          <div className="
            mt-14
            flex
            flex-col
            items-center
            justify-center
            text-center
          ">
            <div className="
              mb-5
              flex
              items-center
              gap-3
            ">
              <span className="h-px w-8 bg-white/10" />

              <span className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#D7E2EA]/25
              ">
                How I approach development
              </span>

              <span className="h-px w-8 bg-white/10" />
            </div>

            <div className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            ">
              {[
                "LEARN",
                "BUILD",
                "TEST",
                "IMPROVE",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{
                      y: -3,
                      borderColor:
                        "rgba(103,232,249,0.35)",
                    }}
                    className="
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.015]
                      px-4
                      py-2
                      text-[8px]
                      font-semibold
                      tracking-[0.22em]
                      text-[#D7E2EA]/40
                      transition-colors
                    "
                  >
                    {step}
                  </motion.div>

                  {index < 3 && (
                    <span className="text-cyan-300/30">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* =====================================================
            FINAL STATUS
        ====================================================== */}

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
          }}
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <motion.span
            animate={{
              opacity: [0.25, 1, 0.25],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_14px_rgba(52,211,153,0.9)]
            "
          />

          <span className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#D7E2EA]/25
          ">
            Always Learning • Always Building
          </span>
        </motion.div>
      </div>
    </section>
  );
}