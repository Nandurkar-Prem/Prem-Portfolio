import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/portfolio/FadeIn";
import { useState } from "react";

export const Route = createFileRoute("/skills")({
    head: () => ({
        meta: [
            { title: "Skills | Prem's Portfolio" },
            {
                name: "description",
                content:
                    "Explore Prem Nandurkar's technical skills, technologies, tools, and development expertise.",
            },
        ],
    }),
    component: Skills,
});

function Skills() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#07070a] text-white">
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
                <div className="absolute right-[-120px] top-[35%] h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />
            </div>

            {/* Subtle grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <section className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">
                <FadeIn className="w-full">
                    <div className="max-w-4xl">
                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-blue-500" />

                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400">
                                02 / Technical Arsenal
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                            Skills that
                            <br />
                            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">
                                build ideas.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                            A growing collection of technologies, tools, and concepts I use
                            to turn ideas into reliable, scalable, and meaningful software.
                        </p>

                        {/* Technical status */}
                        <div className="mt-12 flex flex-wrap items-center gap-4">
                            <div className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                                </span>

                                <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
                                    Always Learning
                                </span>
                            </div>

                            <div className="font-mono text-xs tracking-wider text-zinc-600">
                                JAVA • SPRING • REACT • DATABASES
                            </div>
                        </div>
                    </div>

                    {/* Decorative technical element */}
                    <div className="absolute bottom-12 right-6 hidden lg:block">
                        <div className="relative h-32 w-32">
                            <div className="absolute inset-0 rounded-full border border-blue-500/10" />
                            <div className="absolute inset-4 rounded-full border border-blue-500/10" />
                            <div className="absolute inset-8 rounded-full border border-blue-500/20" />

                            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

                            <span className="absolute -right-3 top-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                STACK
                            </span>
                        </div>
                    </div>
                </FadeIn>
            </section>
            {/* ============================= */}
            {/* BACKEND SKILLS SECTION */}
            {/* ============================= */}

            <section className="relative mx-auto max-w-7xl px-6 pb-36 sm:px-10 lg:px-16">
                <FadeIn>
                    {/* Section Heading */}
                    <div className="mb-14 flex items-end justify-between gap-6">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-blue-500" />

                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400 [text-shadow:0_0_14px_rgba(59,130,246,0.55)]">
                                    01 / Backend
                                </span>
                            </div>

                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                                The systems
                                <br />
                                <span className="text-zinc-500">
                                    behind the interface.
                                </span>
                            </h2>
                        </div>

                        <div className="hidden text-right lg:block">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.5)]">
                                CORE SYSTEMS
                            </span>

                            <p className="mt-2 font-mono text-xs text-blue-300/70">
                                JAVA / SPRING / API
                            </p>
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* BACKEND EXPERIENCE */}
                    {/* ================================= */}

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0a0b0f]">

                        {/* Technical Grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.045]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "45px 45px",
                            }}
                        />

                        {/* Ambient Blue Glow */}
                        <div className="pointer-events-none absolute left-[25%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.055] blur-[140px]" />

                        <div className="relative grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

                            {/* ================================= */}
                            {/* LEFT — BACKEND CORE */}
                            {/* ================================= */}

                            <div className="relative flex min-h-[620px] flex-col justify-between border-b border-white/[0.07] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

                                {/* Top Label */}
                                <span className="absolute left-8 top-8 font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.55)] sm:left-10 sm:top-10 lg:left-12 lg:top-12">
                                    Backend Core
                                </span>

                                {/* Parallax Core */}
                                <div className="flex flex-1 items-center justify-center pt-8">
                                    <BackendParallaxCore />
                                </div>

                                {/* Backend Description */}
                                <div className="relative z-10 mt-6">
                                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                        Backend
                                        <span className="text-blue-400">
                                            {" "}Stack
                                        </span>
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                                        Designing APIs, business logic, authentication systems and
                                        reliable server-side applications.
                                    </p>
                                </div>
                            </div>

                            {/* ================================= */}
                            {/* RIGHT — TECHNOLOGY STACK */}
                            {/* ================================= */}

                            <div className="relative p-8 sm:p-10 lg:p-12">

                                {/* Stack Header */}
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.55)]">
                                        Technology Stack
                                    </span>

                                    <span className="font-mono text-[10px] uppercase tracking-widest text-blue-300/70">
                                        04 MODULES
                                    </span>
                                </div>

                                {/* Technologies */}
                                <div className="grid gap-3">

                                    {[
                                        {
                                            number: "01",
                                            name: "Java",
                                            description: "Core language",
                                        },
                                        {
                                            number: "02",
                                            name: "Spring Boot",
                                            description: "Backend framework",
                                        },
                                        {
                                            number: "03",
                                            name: "Spring Security",
                                            description: "Authentication & authorization",
                                        },
                                        {
                                            number: "04",
                                            name: "REST APIs",
                                            description: "Service communication",
                                        },
                                        {
                                            number: "05",
                                            name: "Microservices",
                                            description: "Independent Scaling",
                                        },
                                    ].map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:-translate-x-1 hover:border-blue-500/30 hover:bg-blue-500/[0.035]"
                                        >
                                            {/* Hover Glow */}
                                            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-blue-500/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                                            <div className="relative flex items-center gap-5">

                                                {/* Number */}
                                                <span className="w-7 shrink-0 font-mono text-xs text-blue-400/70 transition-colors duration-300 group-hover:text-blue-400">
                                                    {skill.number}
                                                </span>

                                                {/* Technology */}
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-2xl font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-blue-300 sm:text-3xl">
                                                        {skill.name}
                                                    </h4>

                                                    <p className="mt-1 text-sm text-zinc-400">
                                                        {skill.description}
                                                    </p>
                                                </div>

                                                {/* Active Status */}
                                                <div className="hidden items-center gap-2 sm:flex">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400/70">
                                                        Active
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Hover Line */}
                                            <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Metadata */}
                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.06] pt-6">
                                    {[
                                        "APIs",
                                        "Authentication",
                                        "Business Logic",
                                        "Architecture",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-[10px] uppercase tracking-widest text-blue-400/70 [text-shadow:0_0_8px_rgba(59,130,246,0.35)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
            {/* ============================= */}
            {/* FRONTEND SKILLS SECTION */}
            {/* ============================= */}

            <section className="relative mx-auto max-w-7xl px-6 pb-36 sm:px-10 lg:px-16">
                <FadeIn>
                    {/* Section Heading */}
                    <div className="mb-14 flex items-end justify-between gap-6">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-cyan-400" />

                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 [text-shadow:0_0_14px_rgba(34,211,238,0.55)]">
                                    02 / Frontend
                                </span>
                            </div>

                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                                Interfaces
                                <br />
                                <span className="text-zinc-500">
                                    people remember.
                                </span>
                            </h2>
                        </div>

                        <div className="hidden text-right lg:block">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400 [text-shadow:0_0_12px_rgba(34,211,238,0.5)]">
                                USER EXPERIENCE
                            </span>

                            <p className="mt-2 font-mono text-xs text-cyan-300/70">
                                REACT / UI / MOTION
                            </p>
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* FRONTEND EXPERIENCE */}
                    {/* ================================= */}

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080b0e]">

                        {/* Technical grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.045]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "45px 45px",
                            }}
                        />

                        {/* Ambient cyan glow */}
                        <div className="pointer-events-none absolute left-[28%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[140px]" />

                        <div className="relative grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

                            {/* ================================= */}
                            {/* LEFT — REACT PARALLAX CORE */}
                            {/* ================================= */}

                            <ReactParallaxCore />

                            {/* ================================= */}
                            {/* RIGHT — FRONTEND STACK */}
                            {/* ================================= */}

                            <div className="relative flex flex-col justify-between border-t border-white/[0.07] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

                                <div>
                                    {/* Stack heading */}
                                    <div className="mb-8 flex items-center justify-between">
                                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-400 [text-shadow:0_0_12px_rgba(34,211,238,0.55)]">
                                            Frontend Stack
                                        </span>

                                        <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300/70">
                                            06 MODULES
                                        </span>
                                    </div>

                                    {/* Technologies */}
                                    <div className="space-y-3">
                                        {[
                                            {
                                                number: "01",
                                                name: "React",
                                                description: "Component architecture",
                                            },
                                            {
                                                number: "02",
                                                name: "JavaScript",
                                                description: "Interactive behavior",
                                            },
                                            {
                                                number: "03",
                                                name: "TypeScript",
                                                description: "Type-safe development",
                                            },
                                            {
                                                number: "04",
                                                name: "Tailwind CSS",
                                                description: "Modern styling system",
                                            },
                                            {
                                                number: "05",
                                                name: "HTML",
                                                description: "Semantic structure",
                                            },
                                            {
                                                number: "06",
                                                name: "CSS",
                                                description: "Visual systems & animation",
                                            },
                                        ].map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025]"
                                            >
                                                <div className="relative flex items-center gap-4">

                                                    {/* Number */}
                                                    <span className="w-7 shrink-0 font-mono text-xs text-cyan-400/60 transition-colors duration-300 group-hover:text-cyan-400">
                                                        {skill.number}
                                                    </span>

                                                    {/* Technology */}
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-xl font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                                                            {skill.name}
                                                        </h4>

                                                        <p className="mt-0.5 text-xs text-zinc-500">
                                                            {skill.description}
                                                        </p>
                                                    </div>

                                                    {/* Status */}
                                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                                                </div>

                                                {/* Hover line */}
                                                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom statement */}
                                <div className="mt-10 border-t border-white/[0.06] pt-6">
                                    <p className="max-w-md text-sm leading-6 text-zinc-500">
                                        From structure to motion, I focus on building interfaces that
                                        feel as good as they look.
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                                        {[
                                            "RESPONSIVE",
                                            "COMPONENTS",
                                            "INTERACTION",
                                            "MOTION",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400/70 [text-shadow:0_0_8px_rgba(34,211,238,0.35)]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
            {/* ============================= */}
            {/* DATA & PERSISTENCE SECTION */}
            {/* ============================= */}

            <section className="relative mx-auto max-w-7xl px-6 pb-36 sm:px-10 lg:px-16">
                <FadeIn>
                    {/* Section Heading */}
                    <div className="mb-14 flex items-end justify-between gap-6">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-lime-400" />

                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-400 [text-shadow:0_0_14px_rgba(163,230,53,0.55)]">
                                    03 / Data & Persistence
                                </span>
                            </div>

                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                                Where your data
                                <br />
                                <span className="text-zinc-500">
                                    finds its home.
                                </span>
                            </h2>
                        </div>

                        <div className="hidden text-right lg:block">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-400 [text-shadow:0_0_12px_rgba(163,230,53,0.5)]">
                                DATA LAYER
                            </span>

                            <p className="mt-2 font-mono text-xs text-lime-300/70">
                                DATABASE / ORM / CACHE
                            </p>
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* DATA EXPERIENCE */}
                    {/* ================================= */}

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090d08]">

                        {/* Technical Grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.045]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "45px 45px",
                            }}
                        />

                        {/* Ambient Lime Glow */}
                        <div className="pointer-events-none absolute left-[25%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.055] blur-[140px]" />

                        <div className="relative grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

                            {/* ================================= */}
                            {/* LEFT — DATA PARALLAX CORE */}
                            {/* ================================= */}

                            <div className="relative flex min-h-[620px] flex-col justify-between border-b border-white/[0.07] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

                                {/* Top Label */}
                                <span className="absolute left-8 top-8 font-mono text-[11px] uppercase tracking-[0.3em] text-lime-400 [text-shadow:0_0_12px_rgba(163,230,53,0.55)] sm:left-10 sm:top-10 lg:left-12 lg:top-12">
                                    Data Core
                                </span>

                                {/* Parallax Core */}
                                <div className="flex flex-1 items-center justify-center pt-8">
                                    <DataParallaxCore />
                                </div>

                                {/* Description */}
                                <div className="relative z-10 mt-6">
                                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                        DataBase
                                        <span className="text-lime-400">
                                            {" "}Stack
                                        </span>
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                                        Working with relational databases, persistence frameworks and
                                        data technologies to build reliable applications.
                                    </p>
                                </div>
                            </div>

                            {/* ================================= */}
                            {/* RIGHT — TECHNOLOGY STACK */}
                            {/* ================================= */}

                            <div className="relative p-8 sm:p-10 lg:p-12">

                                {/* Stack Header */}
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime-400 [text-shadow:0_0_12px_rgba(163,230,53,0.55)]">
                                        Data Stack
                                    </span>

                                    <span className="font-mono text-[10px] uppercase tracking-widest text-lime-300/70">
                                        03 MODULES
                                    </span>
                                </div>

                                {/* Technologies */}
                                <div className="grid gap-3">

                                    {[
                                        {
                                            number: "01",
                                            name: "MySQL",
                                            description: "Relational database",
                                        },
                                        {
                                            number: "02",
                                            name: "JPA / Hibernate",
                                            description: "Object persistence",
                                        },
                                        {
                                            number: "03",
                                            name: "MongoDB",
                                            description: "NoSQL database",
                                        },
                                        {
                                            number: "04",
                                            name: "Redis",
                                            description: "In-memory data store",
                                        },
                                    ].map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:-translate-x-1 hover:border-lime-400/30 hover:bg-lime-400/[0.025]"
                                        >

                                            {/* Hover Glow */}
                                            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-lime-400/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                                            <div className="relative flex items-center gap-5">

                                                {/* Number */}
                                                <span className="w-7 shrink-0 font-mono text-xs text-lime-400/70 transition-colors duration-300 group-hover:text-lime-400">
                                                    {skill.number}
                                                </span>

                                                {/* Technology */}
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-2xl font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-lime-300 sm:text-3xl">
                                                        {skill.name}
                                                    </h4>

                                                    <p className="mt-1 text-sm text-zinc-400">
                                                        {skill.description}
                                                    </p>
                                                </div>

                                                {/* Active Status */}
                                                <div className="hidden items-center gap-2 sm:flex">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />

                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-lime-400/70">
                                                        Active
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Hover Line */}
                                            <div className="absolute bottom-0 left-0 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Metadata */}
                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.06] pt-6">

                                    {[
                                        "RELATIONAL",
                                        "PERSISTENCE",
                                        "NOSQL",
                                        "CACHING",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-[10px] uppercase tracking-widest text-lime-400/70 [text-shadow:0_0_8px_rgba(163,230,53,0.35)]"
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
            {/* ============================= */}
            {/* TOOLS & ENGINEERING SECTION */}
            {/* ============================= */}

            <section className="relative mx-auto max-w-7xl px-6 pb-36 sm:px-10 lg:px-16">
                <FadeIn>
                    {/* Section Heading */}
                    <div className="mb-14 flex items-end justify-between gap-6">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-amber-400" />

                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400 [text-shadow:0_0_14px_rgba(251,191,36,0.55)]">
                                    04 / Tools & Engineering
                                </span>
                            </div>

                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                                Tools that
                                <br />
                                <span className="text-zinc-500">
                                    make development flow.
                                </span>
                            </h2>
                        </div>

                        <div className="hidden text-right lg:block">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-400 [text-shadow:0_0_12px_rgba(251,191,36,0.5)]">
                                ENGINEERING TOOLKIT
                            </span>

                            <p className="mt-2 font-mono text-xs text-amber-300/70">
                                GIT / DOCKER / MAVEN / POSTMAN
                            </p>
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* TOOLS EXPERIENCE */}
                    {/* ================================= */}

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d0b07]">

                        {/* Technical Grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.045]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "45px 45px",
                            }}
                        />

                        {/* Ambient Amber Glow */}
                        <div className="pointer-events-none absolute left-[25%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.055] blur-[140px]" />

                        <div className="relative grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

                            {/* ================================= */}
                            {/* LEFT — TOOLKIT PARALLAX CORE */}
                            {/* ================================= */}

                            <div className="relative flex min-h-[620px] flex-col justify-between border-b border-white/[0.07] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

                                {/* Top Label */}
                                <span className="absolute left-8 top-8 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400 [text-shadow:0_0_12px_rgba(251,191,36,0.55)] sm:left-10 sm:top-10 lg:left-12 lg:top-12">
                                    Engineering Core
                                </span>

                                {/* Parallax Core */}
                                <div className="flex flex-1 items-center justify-center pt-8">
                                    <ToolsParallaxCore />
                                </div>

                                {/* Description */}
                                <div className="relative z-10 mt-6">
                                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                        Developer
                                        <span className="text-amber-400">
                                            {" "}Toolkit
                                        </span>
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                                        The tools I use to build, test, manage, containerize and ship
                                        software efficiently.
                                    </p>
                                </div>
                            </div>

                            {/* ================================= */}
                            {/* RIGHT — TOOL STACK */}
                            {/* ================================= */}

                            <div className="relative p-8 sm:p-10 lg:p-12">

                                {/* Stack Header */}
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400 [text-shadow:0_0_12px_rgba(251,191,36,0.55)]">
                                        Engineering Stack
                                    </span>

                                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300/70">
                                        06 TOOLS
                                    </span>
                                </div>

                                {/* Tools */}
                                <div className="grid gap-3">

                                    {[
                                        {
                                            number: "01",
                                            name: "Git",
                                            description: "Version control",
                                        },
                                        {
                                            number: "02",
                                            name: "GitHub",
                                            description: "Code collaboration",
                                        },
                                        {
                                            number: "03",
                                            name: "Docker",
                                            description: "Containerization",
                                        },
                                        {
                                            number: "04",
                                            name: "Postman",
                                            description: "API testing",
                                        },
                                        {
                                            number: "05",
                                            name: "Maven",
                                            description: "Build automation",
                                        },
                                        {
                                            number: "06",
                                            name: "IntelliJ IDEA",
                                            description: "Development environment",
                                        },
                                    ].map((tool) => (
                                        <div
                                            key={tool.name}
                                            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:-translate-x-1 hover:border-amber-400/30 hover:bg-amber-400/[0.025]"
                                        >

                                            {/* Hover Glow */}
                                            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-amber-400/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                                            <div className="relative flex items-center gap-5">

                                                {/* Number */}
                                                <span className="w-7 shrink-0 font-mono text-xs text-amber-400/70 transition-colors duration-300 group-hover:text-amber-400">
                                                    {tool.number}
                                                </span>

                                                {/* Tool */}
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-2xl font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-amber-300 sm:text-3xl">
                                                        {tool.name}
                                                    </h4>

                                                    <p className="mt-1 text-sm text-zinc-400">
                                                        {tool.description}
                                                    </p>
                                                </div>

                                                {/* Active Status */}
                                                <div className="hidden items-center gap-2 sm:flex">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />

                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400/70">
                                                        Active
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Hover Line */}
                                            <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Metadata */}
                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.06] pt-6">

                                    {[
                                        "VERSION CONTROL",
                                        "CONTAINERS",
                                        "API TESTING",
                                        "BUILD TOOLS",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-[10px] uppercase tracking-widest text-amber-400/70 [text-shadow:0_0_8px_rgba(251,191,36,0.35)]"
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
            {/* ============================= */}
            {/* SKILLS CLOSING STATEMENT */}
            {/* ============================= */}

            <section className="relative mx-auto max-w-5xl px-6 pb-32 pt-10 sm:px-10 lg:px-16">
                <FadeIn>
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080b0e] px-8 py-20 text-center sm:px-12 lg:px-20">

                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

                        {/* Technical grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.035]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />

                        {/* Top label */}
                        <div className="relative mb-8 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-cyan-400/40" />

                            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400 [text-shadow:0_0_12px_rgba(34,211,238,0.5)]">
                                Beyond The Stack
                            </span>

                            <span className="h-px w-8 bg-cyan-400/40" />
                        </div>

                        {/* Main message */}
                        <h2 className="relative mx-auto max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                            Knowing the tools is only the beginning.
                        </h2>

                        <p className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                            The real skill is turning technology into{" "}
                            <span className="text-cyan-300">
                                real-world software,
                            </span>{" "}
                            meaningful products, and solutions that solve actual problems.
                        </p>

                        {/* Divider */}
                        <div className="relative mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                        {/* Final statement */}
                        <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Learn.
                            <span className="mx-3 text-cyan-400">Build.</span>
                            <span className="text-white">Solve.</span>
                        </p>

                        {/* Bottom accent */}
                        <div className="relative mx-auto mt-8 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}

function ToolsParallaxCore() {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        setMouse({
            x,
            y,
        });
    };

    const handleMouseLeave = () => {
        setMouse({
            x: 0,
            y: 0,
        });
    };

    return (
        <div
            className="group relative flex min-h-[350px] items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-amber-400/[0.08] blur-[100px]" />

            {/* Parallax System */}
            <div
                className="relative flex h-[340px] w-[340px] items-center justify-center transition-transform duration-300 ease-out sm:h-[380px] sm:w-[380px]"
                style={{
                    transform: `
            perspective(1000px)
            rotateX(${mouse.y * -8}deg)
            rotateY(${mouse.x * 8}deg)
            translateX(${mouse.x * 10}px)
            translateY(${mouse.y * 10}px)
          `,
                }}
            >

                {/* Outer Orbit */}
                <div className="absolute h-[320px] w-[320px] animate-[spin_30s_linear_infinite] rounded-full border border-amber-400/[0.12]" />

                {/* Tilted Orbit */}
                <div
                    className="absolute h-[260px] w-[260px] rounded-full border border-amber-400/[0.2]"
                    style={{
                        transform: `rotateX(70deg) rotateZ(${mouse.x * 10}deg)`,
                    }}
                />

                {/* Inner Orbit */}
                <div className="absolute h-[205px] w-[205px] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-dashed border-amber-400/[0.28]" />

                {/* Orbiting Particles */}
                <div className="absolute h-[320px] w-[320px] animate-[spin_14s_linear_infinite]">

                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />

                    <span className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />

                </div>

                {/* ================================= */}
                {/* ENGINEERING CORE */}
                {/* ================================= */}

                <div
                    className="relative z-10 flex h-[180px] w-[180px] items-center justify-center transition-transform duration-500 ease-out sm:h-[200px] sm:w-[200px]"
                    style={{
                        transform: `
              translateX(${mouse.x * 18}px)
              translateY(${mouse.y * 18}px)
            `,
                    }}
                >

                    {/* Core Glow */}
                    <div className="absolute h-28 w-28 rounded-full bg-amber-400/10 blur-[60px]" />

                    {/* Core Rings */}
                    <div className="absolute inset-5 rounded-full border border-amber-400/20" />

                    <div className="absolute inset-9 rounded-full border border-amber-400/30" />

                    {/* Terminal Core */}
                    <div className="relative flex h-20 w-24 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-400/[0.06] shadow-[0_0_45px_rgba(251,191,36,0.12)]">

                        <div className="w-12 space-y-1.5">

                            <div className="flex gap-1">
                                <span className="h-1.5 w-2 rounded-full bg-amber-400" />
                                <span className="h-1.5 w-7 rounded-full bg-amber-400/40" />
                            </div>

                            <div className="flex gap-1">
                                <span className="h-1.5 w-4 rounded-full bg-amber-400/60" />
                                <span className="h-1.5 w-5 rounded-full bg-amber-400/25" />
                            </div>

                            <div className="flex gap-1">
                                <span className="h-1.5 w-3 rounded-full bg-amber-400/50" />
                                <span className="h-1.5 w-6 rounded-full bg-amber-400/20" />
                            </div>

                            <div className="mt-2 h-1.5 w-2 animate-pulse rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />

                        </div>
                    </div>
                </div>

                {/* ================================= */}
                {/* FLOATING TOOL LABELS */}
                {/* ================================= */}

                <div
                    className="absolute left-[0%] top-[24%] rounded-full border border-amber-400/20 bg-[#0d0b07]/85 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -14}px, ${mouse.y * -14}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-400/80">
                        Git
                    </span>
                </div>

                <div
                    className="absolute right-[0%] top-[30%] rounded-full border border-amber-400/20 bg-[#0d0b07]/85 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * 16}px, ${mouse.y * 16}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-400/80">
                        Docker
                    </span>
                </div>

                <div
                    className="absolute bottom-[16%] left-[10%] rounded-full border border-amber-400/20 bg-[#0d0b07]/85 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-400/80">
                        Postman
                    </span>
                </div>

                {/* Core Label */}
                <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 text-center">

                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-400 [text-shadow:0_0_12px_rgba(251,191,36,0.6)]">
                        ENGINEERING CORE
                    </span>

                    <div className="mx-auto mt-2 h-px w-16 bg-amber-400/40" />

                </div>
            </div>
        </div>
    );
}

function DataParallaxCore() {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        setMouse({
            x,
            y,
        });
    };

    const handleMouseLeave = () => {
        setMouse({
            x: 0,
            y: 0,
        });
    };

    return (
        <div
            className="group relative flex min-h-[350px] items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-lime-400/[0.08] blur-[100px]" />

            {/* ================================= */}
            {/* PARALLAX SYSTEM */}
            {/* ================================= */}

            <div
                className="relative flex h-[340px] w-[340px] items-center justify-center transition-transform duration-300 ease-out sm:h-[380px] sm:w-[380px]"
                style={{
                    transform: `
            perspective(1000px)
            rotateX(${mouse.y * -8}deg)
            rotateY(${mouse.x * 8}deg)
            translateX(${mouse.x * 10}px)
            translateY(${mouse.y * 10}px)
          `,
                }}
            >

                {/* Outer Orbit */}
                <div className="absolute h-[320px] w-[320px] animate-[spin_30s_linear_infinite] rounded-full border border-lime-400/[0.12]" />

                {/* Tilted Orbit */}
                <div
                    className="absolute h-[260px] w-[260px] rounded-full border border-lime-400/[0.2]"
                    style={{
                        transform: `rotateX(70deg) rotateZ(${mouse.x * 10}deg)`,
                    }}
                />

                {/* Inner Dashed Orbit */}
                <div className="absolute h-[205px] w-[205px] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-dashed border-lime-400/[0.28]" />

                {/* Orbiting Particles */}
                <div className="absolute h-[320px] w-[320px] animate-[spin_14s_linear_infinite]">

                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.9)]" />

                    <span className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                </div>

                {/* ================================= */}
                {/* DATABASE CORE */}
                {/* ================================= */}

                <div
                    className="relative z-10 flex h-[180px] w-[180px] items-center justify-center transition-transform duration-500 ease-out sm:h-[200px] sm:w-[200px]"
                    style={{
                        transform: `
              translateX(${mouse.x * 18}px)
              translateY(${mouse.y * 18}px)
            `,
                    }}
                >

                    {/* Core Glow */}
                    <div className="absolute h-28 w-28 rounded-full bg-lime-400/10 blur-[60px]" />

                    {/* Core Rings */}
                    <div className="absolute inset-5 rounded-full border border-lime-400/20" />

                    <div className="absolute inset-9 rounded-full border border-lime-400/30" />

                    {/* Database Symbol */}
                    <div className="relative flex h-20 w-24 items-center justify-center">

                        {/* Top */}
                        <div className="absolute top-0 h-8 w-24 rounded-[50%] border border-lime-400/60 bg-lime-400/[0.08]" />

                        {/* Body */}
                        <div className="absolute top-4 h-12 w-24 border-x border-lime-400/30" />

                        {/* Bottom */}
                        <div className="absolute bottom-0 h-8 w-24 rounded-[50%] border border-lime-400/50 bg-[#090d08]" />

                        {/* Core Glow */}
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-lime-300 shadow-[0_0_20px_rgba(163,230,53,0.95)]" />

                    </div>
                </div>

                {/* ================================= */}
                {/* FLOATING TECHNOLOGY LABELS */}
                {/* ================================= */}

                <div
                    className="absolute left-[0%] top-[24%] rounded-full border border-lime-400/20 bg-[#090d08]/85 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -14}px, ${mouse.y * -14}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-400/80">
                        MySQL
                    </span>
                </div>

                <div
                    className="absolute right-[0%] top-[30%] rounded-full border border-lime-400/20 bg-[#090d08]/85 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * 16}px, ${mouse.y * 16}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-400/80">
                        MongoDB
                    </span>
                </div>

                <div
                    className="absolute bottom-[16%] left-[10%] rounded-full border border-lime-400/20 bg-[#090d08]/85 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-400/80">
                        Redis
                    </span>
                </div>

                {/* Core Label */}
                <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 text-center">

                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-lime-400 [text-shadow:0_0_12px_rgba(163,230,53,0.6)]">
                        DATA CORE
                    </span>

                    <div className="mx-auto mt-2 h-px w-16 bg-lime-400/40" />

                </div>
            </div>
        </div>
    );
}

function BackendParallaxCore() {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        setMouse({
            x,
            y,
        });
    };

    const handleMouseLeave = () => {
        setMouse({
            x: 0,
            y: 0,
        });
    };

    return (
        <div
            className="group relative flex min-h-[350px] items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-blue-500/[0.08] blur-[90px]" />

            {/* Parallax system */}
            <div
                className="relative flex h-[320px] w-[320px] items-center justify-center transition-transform duration-300 ease-out sm:h-[360px] sm:w-[360px]"
                style={{
                    transform: `
            perspective(1000px)
            rotateX(${mouse.y * -8}deg)
            rotateY(${mouse.x * 8}deg)
            translateX(${mouse.x * 10}px)
            translateY(${mouse.y * 10}px)
          `,
                }}
            >
                {/* ================================= */}
                {/* OUTER ORBIT */}
                {/* ================================= */}

                <div className="absolute h-[300px] w-[300px] animate-[spin_30s_linear_infinite] rounded-full border border-blue-500/[0.13]" />

                {/* ================================= */}
                {/* SECOND ORBIT */}
                {/* ================================= */}

                <div
                    className="absolute h-[245px] w-[245px] rounded-full border border-blue-500/[0.2]"
                    style={{
                        transform: `rotateX(70deg) rotateZ(${mouse.x * 10}deg)`,
                    }}
                />

                {/* ================================= */}
                {/* INNER ORBIT */}
                {/* ================================= */}

                <div className="absolute h-[195px] w-[195px] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-dashed border-blue-400/[0.28]" />

                {/* ================================= */}
                {/* ORBITING PARTICLES */}
                {/* ================================= */}

                <div className="absolute h-[300px] w-[300px] animate-[spin_14s_linear_infinite]">
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />

                    <span className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                </div>

                {/* ================================= */}
                {/* BACKEND CORE */}
                {/* ================================= */}

                <div
                    className="relative z-10 flex h-[150px] w-[150px] items-center justify-center transition-transform duration-500 ease-out sm:h-[170px] sm:w-[170px]"
                    style={{
                        transform: `
              translateX(${mouse.x * 18}px)
              translateY(${mouse.y * 18}px)
            `,
                    }}
                >
                    {/* Core glow */}
                    <div className="absolute h-24 w-24 rounded-full bg-blue-500/10 blur-[55px]" />

                    {/* Core rings */}
                    <div className="absolute inset-5 rounded-full border border-blue-400/20" />

                    <div className="absolute inset-9 rounded-full border border-blue-400/30" />

                    {/* Core */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/[0.08] shadow-[0_0_45px_rgba(59,130,246,0.2)]">
                        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.95)]" />
                    </div>
                </div>

                {/* ================================= */}
                {/* FLOATING TECH LABELS */}
                {/* ================================= */}

                <div
                    className="absolute left-[0%] top-[25%] rounded-full border border-blue-400/20 bg-[#0a0b0f]/80 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -14}px, ${mouse.y * -14}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400/80">
                        APIs
                    </span>
                </div>

                <div
                    className="absolute right-[0%] top-[32%] rounded-full border border-blue-400/20 bg-[#0a0b0f]/80 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * 16}px, ${mouse.y * 16}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400/80">
                        Security
                    </span>
                </div>

                <div
                    className="absolute bottom-[15%] left-[12%] rounded-full border border-blue-400/20 bg-[#0a0b0f]/80 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400/80">
                        Logic
                    </span>
                </div>

                {/* Core label */}
                <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.6)]">
                        SERVER CORE
                    </span>

                    <div className="mx-auto mt-2 h-px w-16 bg-blue-400/40" />
                </div>
            </div>
        </div>
    );
}

function ReactParallaxCore() {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        setMouse({
            x,
            y,
        });
    };

    const handleMouseLeave = () => {
        setMouse({
            x: 0,
            y: 0,
        });
    };

    return (
        <div
            className="group relative flex min-h-[620px] items-center justify-center overflow-hidden p-8 sm:p-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Corner Labels */}
            <span className="absolute left-8 top-8 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/80">
                UI / SYSTEM
            </span>

            <span className="absolute right-8 top-8 font-mono text-[10px] text-cyan-400/60">
                02.01
            </span>

            <span className="absolute bottom-8 left-8 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                INTERACTIVE CORE
            </span>

            {/* Parallax Container */}
            <div
                className="relative flex h-[440px] w-[440px] items-center justify-center transition-transform duration-300 ease-out sm:h-[500px] sm:w-[500px]"
                style={{
                    transform: `
            perspective(1000px)
            rotateX(${mouse.y * -8}deg)
            rotateY(${mouse.x * 8}deg)
            translateX(${mouse.x * 10}px)
            translateY(${mouse.y * 10}px)
          `,
                }}
            >
                {/* Ambient Glow */}
                <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />

                {/* Outer Orbit */}
                <div className="absolute h-[400px] w-[400px] animate-[spin_28s_linear_infinite] rounded-full border border-cyan-400/[0.12]" />

                {/* Second Orbit */}
                <div
                    className="absolute h-[330px] w-[330px] rounded-full border border-cyan-400/[0.18]"
                    style={{
                        transform: `rotateX(70deg) rotateZ(${mouse.x * 10}deg)`,
                    }}
                />

                {/* Third Orbit */}
                <div className="absolute h-[270px] w-[270px] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-dashed border-cyan-400/[0.25]" />

                {/* Orbiting Particles */}
                <div className="absolute h-[400px] w-[400px] animate-[spin_14s_linear_infinite]">
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

                    <span className="absolute bottom-[15%] right-[8%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                </div>

                {/* React Logo */}
                <div
                    className="relative z-10 flex h-[250px] w-[250px] items-center justify-center transition-transform duration-500 ease-out sm:h-[290px] sm:w-[290px]"
                    style={{
                        transform: `
              translateX(${mouse.x * 18}px)
              translateY(${mouse.y * 18}px)
            `,
                    }}
                >
                    {/* Logo Glow */}
                    <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px]" />

                    {/* React SVG */}
                    <svg
                        viewBox="0 0 512 512"
                        className="relative h-[230px] w-[230px] text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-all duration-500 group-hover:drop-shadow-[0_0_45px_rgba(34,211,238,0.7)] sm:h-[270px] sm:w-[270px]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse
                            cx="256"
                            cy="256"
                            rx="210"
                            ry="82"
                            stroke="currentColor"
                            strokeWidth="12"
                            className="opacity-90"
                        />

                        <ellipse
                            cx="256"
                            cy="256"
                            rx="210"
                            ry="82"
                            transform="rotate(60 256 256)"
                            stroke="currentColor"
                            strokeWidth="12"
                            className="opacity-90"
                        />

                        <ellipse
                            cx="256"
                            cy="256"
                            rx="210"
                            ry="82"
                            transform="rotate(-60 256 256)"
                            stroke="currentColor"
                            strokeWidth="12"
                            className="opacity-90"
                        />

                        <circle
                            cx="256"
                            cy="256"
                            r="38"
                            fill="currentColor"
                            className="animate-pulse"
                        />
                    </svg>
                </div>

                {/* Floating Labels */}
                <div
                    className="absolute left-[2%] top-[28%] rounded-full border border-cyan-400/20 bg-[#080b0e]/80 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -12}px, ${mouse.y * -12}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400/80">
                        Components
                    </span>
                </div>

                <div
                    className="absolute right-[2%] top-[35%] rounded-full border border-cyan-400/20 bg-[#080b0e]/80 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * 15}px, ${mouse.y * 15}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400/80">
                        Motion
                    </span>
                </div>

                <div
                    className="absolute bottom-[20%] left-[12%] rounded-full border border-cyan-400/20 bg-[#080b0e]/80 px-4 py-2 backdrop-blur-md transition-transform duration-500"
                    style={{
                        transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)`,
                    }}
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400/80">
                        Responsive
                    </span>
                </div>

                {/* React Core Label */}
                <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400 [text-shadow:0_0_12px_rgba(34,211,238,0.6)]">
                        REACT CORE
                    </span>

                    <div className="mx-auto mt-2 h-px w-16 bg-cyan-400/40" />
                </div>
            </div>
        </div>
    );
}