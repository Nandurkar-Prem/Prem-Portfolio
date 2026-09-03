"use client";

import { useState } from "react";
import {
  SiOpenjdk,
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiTerminal, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import type { IconType } from "react-icons";

type Tab = "certifications" | "stack" | "projects";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
  category: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: string;
}

/* -------------------------------------------------------------------------- */
/*                                TECH STACK                                  */
/* -------------------------------------------------------------------------- */

const techStack: TechItem[] = [
  {
    name: "Java",
    icon: SiOpenjdk,
    color: "#E76F00",
    category: "Backend",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    category: "Backend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Frontend",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    category: "Runtime",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#F5F5F5",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "Database",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    category: "Version Control",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#F5F5F5",
    category: "Version Control",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
    category: "DevOps",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    category: "Backend",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007ACC",
    category: "Developer Tool",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    category: "Developer Tool",
  },
  {
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    color: "#FE315D",
    category: "Developer Tool",
  },
  {
    name: "Terminal",
    icon: FiTerminal,
    color: "#5FBF8F",
    category: "Developer Tool",
  },
];

/* -------------------------------------------------------------------------- */
/*                              CERTIFICATIONS                                */
/* -------------------------------------------------------------------------- */

/*
 * Replace these placeholder entries with your actual certifications.
 */

const certifications: Certification[] = [
  {
    title: "Java Development",
    issuer: "Certification / Course",
    year: "2026",
    description:
      "Focused on Java programming, object-oriented concepts and backend development fundamentals.",
  },
  {
    title: "Backend Development",
    issuer: "Certification / Course",
    year: "2026",
    description:
      "Focused on building backend systems, APIs and understanding modern application architecture.",
  },
  {
    title: "Database & SQL",
    issuer: "Certification / Course",
    year: "2026",
    description:
      "Focused on relational databases, SQL queries, data modelling and database fundamentals.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

/*
 * Replace these with your actual portfolio projects.
 */

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A highly interactive developer portfolio designed around immersive motion, visual storytelling and a premium dark interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "Frontend",
  },
  {
    title: "Backend System",
    description:
      "A backend-focused application built around reliable APIs, structured architecture and real-world problem solving.",
    technologies: ["Java", "Spring Boot", "REST API"],
    type: "Backend",
  },
  {
    title: "Full Stack Application",
    description:
      "A full-stack application combining a modern frontend with backend services and persistent data storage.",
    technologies: ["React", "Java", "MySQL"],
    type: "Full Stack",
  },
];

/* -------------------------------------------------------------------------- */
/*                             TAB CONFIGURATION                              */
/* -------------------------------------------------------------------------- */

const tabs: {
  id: Tab;
  label: string;
  number: string;
}[] = [
  {
    id: "certifications",
    label: "Certifications",
    number: "02",
  },
  {
    id: "stack",
    label: "Tech Stack",
    number: "01",
  },
  {
    id: "projects",
    label: "Projects",
    number: "03",
  },
];

/* -------------------------------------------------------------------------- */
/*                              TECH CARD                                     */
/* -------------------------------------------------------------------------- */

function TechCard({ item }: { item: TechItem }) {
  const Icon = item.icon;

  return (
    <div
      className="group relative min-h-[112px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080d0c]/80 p-[1px] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/[0.2] hover:bg-white/[0.025]"
      style={
        {
          "--brand-color": item.color,
        } as React.CSSProperties
      }
    >
      {/* Default atmospheric glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-[0.08] blur-3xl transition-all duration-500 group-hover:opacity-30"
        style={{ backgroundColor: item.color }}
      />

      {/* Hover radial light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${item.color}18 0%, transparent 55%)`,
        }}
      />

      {/* Animated border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 25px ${item.color}08, 0 0 25px ${item.color}12`,
        }}
      />

      {/* Shine */}
      <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-all duration-700 group-hover:left-[140%]" />

      <div className="relative flex h-full flex-col items-center justify-center rounded-[15px] bg-[#090e0d]/95 px-3 py-5">
        {/* Icon */}
        <div
          className="relative mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
          style={{
            filter: `drop-shadow(0 0 8px ${item.color}30)`,
          }}
        >
          <div
            className="absolute inset-0 scale-150 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60"
            style={{ backgroundColor: item.color }}
          />

          <Icon
            size={34}
            className="relative transition-all duration-500"
            style={{ color: item.color }}
          />
        </div>

        {/* Name */}
        <span className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 group-hover:text-white">
          {item.name}
        </span>

        {/* Category */}
        <span className="mt-1 text-[8px] uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:text-slate-500">
          {item.category}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         CERTIFICATION CARD                                 */
/* -------------------------------------------------------------------------- */

function CertificationCard({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080d0c]/85 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/25 hover:bg-[#0a1110] hover:shadow-[0_0_45px_rgba(16,185,129,0.08)]">
      {/* Green atmosphere */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-emerald-400/[0.14]" />

      <div className="relative">
        <div className="mb-7 flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] font-mono text-[9px] text-emerald-300">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            {certification.year}
          </span>
        </div>

        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
          {certification.issuer}
        </p>

        <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-100">
          {certification.title}
        </h3>

        <p className="text-sm leading-6 text-slate-500">
          {certification.description}
        </p>

        <div className="mt-7 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors group-hover:text-emerald-300">
          View credential
          <FiArrowUpRight size={13} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PROJECT CARD                                  */
/* -------------------------------------------------------------------------- */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080d0c]/85 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/25 hover:shadow-[0_0_45px_rgba(16,185,129,0.08)]">
      {/* Green glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-400/[0.05] blur-3xl transition-all duration-500 group-hover:bg-emerald-400/[0.13]" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.2em] text-emerald-300/70">
            PROJECT / {String(index + 1).padStart(2, "0")}
          </span>

          <FiExternalLink
            size={15}
            className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-300"
          />
        </div>

        <span className="mb-2 inline-block text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
          {project.type}
        </span>

        <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-100">
          {project.title}
        </h3>

        <p className="mb-6 text-sm leading-6 text-slate-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[8px] uppercase tracking-[0.12em] text-slate-400 transition-colors group-hover:border-emerald-400/15 group-hover:text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN SECTION                                  */
/* -------------------------------------------------------------------------- */

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("stack");

  const activeIndex =
    activeTab === "stack" ? 1 : activeTab === "certifications" ? 2 : 3;

  return (
    <section
      id="skills"
      className="relative min-h-[100svh] overflow-hidden bg-[#030706] text-slate-100"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background                                                          */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.28) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.28) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Green atmospheric glow */}
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.055] blur-[130px]" />

        <div className="absolute -left-32 top-[15%] h-[400px] w-[400px] rounded-full bg-emerald-400/[0.025] blur-[120px]" />

        <div className="absolute -right-32 bottom-[10%] h-[450px] w-[450px] rounded-full bg-teal-400/[0.025] blur-[120px]" />

        {/* Scan line */}
        <div className="absolute left-0 right-0 top-[42%] h-px bg-gradient-to-r from-transparent via-emerald-300/[0.12] to-transparent" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 py-8 sm:px-8 lg:px-12">
        {/* Top identity line */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </span>

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              Portfolio Showcase
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.25em] text-slate-600">
            {String(activeIndex).padStart(2, "0")} / 03
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-10 w-full max-w-5xl text-center sm:mt-12 lg:mt-14">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-emerald-400/50" />

            <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-slate-500">
              Skills • Work • Experience
            </span>

            <span className="h-px w-10 bg-emerald-400/50" />
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-slate-200">
            What I Build{" "}
            <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
              &amp; Work With
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore the technologies I use, the certifications I&apos;ve
            earned, and the projects I&apos;ve built while continuously
            developing my skills.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Capsule Tabs                                                     */}
        {/* ---------------------------------------------------------------- */}

        <div className="mx-auto mt-8 w-full max-w-5xl sm:mt-10">
          <div className="relative rounded-full border border-white/[0.14] bg-[#070b0a]/90 p-1 shadow-[0_0_35px_rgba(16,185,129,0.035)] backdrop-blur-xl">
            <div className="grid grid-cols-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex h-12 items-center justify-center rounded-full px-3 text-[9px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 sm:h-14 sm:text-[10px] ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-200"
                    }`}
                  >
                    {/* Active background */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border border-emerald-300/30 bg-gradient-to-b from-emerald-300/[0.12] to-emerald-300/[0.025] shadow-[0_0_30px_rgba(16,185,129,0.16),inset_0_0_20px_rgba(16,185,129,0.05)]" />
                    )}

                    {/* Active bottom glow */}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-4 w-1/2 -translate-x-1/2 rounded-full bg-emerald-400/30 blur-xl" />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      {tab.label}

                      {isActive && (
                        <span className="hidden font-mono text-[7px] text-emerald-300/70 sm:inline">
                          {tab.number}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Content Area                                                     */}
        {/* ---------------------------------------------------------------- */}

        <div
          key={activeTab}
          className="relative mx-auto mt-7 w-full max-w-6xl flex-1 animate-[showcaseIn_500ms_ease-out]"
        >
          {/* TECH STACK */}
          {activeTab === "stack" && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
              {techStack.map((item) => (
                <TechCard key={item.name} item={item} />
              ))}
            </div>
          )}

          {/* CERTIFICATIONS */}
          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {certifications.map((certification, index) => (
                <CertificationCard
                  key={certification.title}
                  certification={certification}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* PROJECTS */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Bottom status                                                     */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-6 flex items-center justify-center gap-3 pb-2">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400/40" />

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

          <span className="font-mono text-[7px] uppercase tracking-[0.35em] text-slate-600">
            Always learning • Always building
          </span>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400/40" />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Local animation                                                     */}
      {/* ------------------------------------------------------------------ */}

      <style>{`
        @keyframes showcaseIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
} 