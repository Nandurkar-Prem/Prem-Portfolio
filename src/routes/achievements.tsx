import { createFileRoute } from '@tanstack/react-router'
import { FadeIn } from "@/components/portfolio/FadeIn";
import { useState } from "react";

export const Route = createFileRoute("/achievements")({
    head: () => ({
        meta: [
            { title: "Achievements" },
            {
                name: "description",
                content:
                    "Explore Prem Nandurkar's Achievements and Certifications gained through lot of HardWork",
            },
        ],
    }),
    component: Achievements,
});

function Achievements() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

            {/* ========================================
          SECTION 1 — ACHIEVEMENTS INTRO
      ======================================== */}
            <section
                id="achievements"
                className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:px-12 lg:px-20"
            >
                {/* ========================================
            AMBIENT BACKGROUND
        ======================================== */}
                <div className="pointer-events-none absolute inset-0">

                    {/* Purple glow */}
                    <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/[0.08] blur-[150px]" />

                    {/* Blue glow */}
                    <div className="absolute right-[-150px] top-1/3 h-[550px] w-[550px] rounded-full bg-blue-600/[0.07] blur-[160px]" />

                    {/* Small center glow */}
                    <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.04] blur-[100px]" />
                </div>


                {/* ========================================
            DECORATIVE GRID
        ======================================== */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
                            backgroundSize: "80px 80px",
                        }}
                    />
                </div>


                {/* ========================================
            FLOATING DECORATIVE ELEMENTS
        ======================================== */}

                {/* Top left */}
                <div className="pointer-events-none absolute left-[8%] top-[20%] hidden md:block">
                    <div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                </div>

                {/* Top right */}
                <div className="pointer-events-none absolute right-[15%] top-[25%] hidden md:block">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                </div>

                {/* Bottom left */}
                <div className="pointer-events-none absolute bottom-[20%] left-[20%] hidden md:block">
                    <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.8)]" />
                </div>


                {/* ========================================
            MAIN CONTENT
        ======================================== */}
                <div className="relative mx-auto w-full max-w-7xl">

                    <FadeIn>
                        <div className="relative">

                            {/* Eyebrow */}
                            <div className="mb-8 flex items-center gap-4">

                                <span className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-purple-300">
                                        Milestones & Recognition
                                    </span>
                                </span>

                                <span className="hidden h-px w-20 bg-gradient-to-r from-purple-500/50 to-transparent sm:block" />
                            </div>


                            {/* ==================================
                  MAIN HEADING
              ================================== */}
                            <h1 className="relative max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]">

                                <span className="block text-white">
                                    The journey
                                </span>

                                <span className="relative block">

                                    {/* Glow behind text */}
                                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/10 to-blue-500/10 blur-3xl" />

                                    <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                                        so far.
                                    </span>

                                    <span className="text-purple-400">
                                        .
                                    </span>
                                </span>
                            </h1>


                            {/* ==================================
                  DESCRIPTION
              ================================== */}
                            <div className="mt-10 flex max-w-3xl flex-col gap-8 md:flex-row md:items-start">

                                <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 md:mt-3" />

                                <p className="text-base leading-relaxed text-white/45 md:text-lg">
                                    A collection of milestones, challenges and certifications
                                    that represent the effort behind the journey — not just the
                                    results.
                                </p>

                            </div>


                            {/* ==================================
                  BOTTOM STATS / LABELS
              ================================== */}
                            <div className="mt-16 flex flex-wrap items-center gap-10 md:gap-16">

                                {/* Achievement */}
                                <div className="group">
                                    <p className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300">
                                        02
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/30">
                                        Achievements
                                    </p>
                                </div>


                                {/* Divider */}
                                <div className="hidden h-10 w-px bg-white/10 sm:block" />


                                {/* Certifications */}
                                <div className="group">
                                    <p className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-300">
                                        02
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/30">
                                        Certifications
                                    </p>
                                </div>


                                {/* Divider */}
                                <div className="hidden h-10 w-px bg-white/10 sm:block" />


                                {/* Status */}
                                <div>
                                    <div className="flex items-center gap-2">

                                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                                        <p className="text-sm text-white/50">
                                            Still building
                                        </p>

                                    </div>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/30">
                                        More to come
                                    </p>
                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================
              SCROLL INDICATOR
          ======================================== */}
                    <div className="absolute -bottom-16 right-0 hidden items-center gap-4 md:flex">

                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                            Explore
                        </span>

                        <div className="relative flex h-10 w-6 justify-center rounded-full border border-white/10">

                            <div className="mt-2 h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400" />

                        </div>

                    </div>

                </div>


                {/* ========================================
            SIDE DECORATION
        ======================================== */}
                <div className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block">

                    <div className="relative h-72 w-72">

                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border border-purple-500/[0.08]" />

                        {/* Middle ring */}
                        <div className="absolute inset-8 rounded-full border border-purple-400/[0.10]" />

                        {/* Inner ring */}
                        <div className="absolute inset-16 rounded-full border border-blue-400/[0.10]" />

                        {/* Center */}
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.9)]" />

                        {/* Orbit point */}
                        <div className="absolute right-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                    </div>

                </div>

            </section>
            {/* ========================================
          SECTION 2 — ACHIEVEMENTS
      ======================================== */}
            <section
                id="achievement-list"
                className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20"
            >
                {/* Ambient Background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
                    <div className="absolute right-[5%] top-[45%] h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
                    <div className="absolute bottom-[5%] left-[35%] h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[130px]" />
                </div>

                <div className="relative mx-auto max-w-7xl">

                    {/* Section Header */}
                    <FadeIn>
                        <div className="mb-24">

                            <div className="mb-6 flex items-center gap-4">
                                <span className="text-xs font-medium uppercase tracking-[0.35em] text-purple-400">
                                    01 / Achievements
                                </span>

                                <span className="h-px w-20 bg-gradient-to-r from-purple-500 to-transparent" />
                            </div>

                            <div className="relative">
                                <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl">
                                    Moments
                                    <br />

                                    <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
                                        worth remembering.
                                    </span>
                                </h2>

                                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
                                    Every milestone represents curiosity, consistency and the
                                    willingness to keep pushing forward.
                                </p>
                            </div>

                        </div>
                    </FadeIn>


                    {/* ==================================
              ACHIEVEMENT 01
          ================================== */}
                    <FadeIn>
                        <div className="group relative mb-16">

                            {/* Decorative glow */}
                            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-purple-500/5 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-700 group-hover:border-purple-500/30">

                                {/* Gradient overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.05] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

                                {/* Giant Number */}
                                <div className="pointer-events-none absolute -right-6 -top-12 select-none text-[13rem] font-black leading-none text-white/[0.025] transition-all duration-700 group-hover:text-purple-400/[0.08] md:text-[18rem]">
                                    01
                                </div>

                                <div className="relative grid min-h-[420px] md:grid-cols-[0.35fr_1fr]">

                                    {/* Left Visual Area */}
                                    <div className="relative flex items-center justify-center overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">

                                        {/* Orbital rings */}
                                        <div className="absolute h-48 w-48 rounded-full border border-purple-500/20 transition-all duration-1000 group-hover:scale-125 group-hover:border-purple-400/40" />

                                        <div className="absolute h-32 w-32 rounded-full border border-purple-400/20 transition-all duration-1000 group-hover:scale-150" />

                                        {/* Center glow */}
                                        <div className="absolute h-24 w-24 rounded-full bg-purple-500/20 blur-2xl transition-all duration-700 group-hover:bg-purple-500/40" />

                                        {/* Trophy */}
                                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-5xl shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(168,85,247,0.3)]">
                                            🏆
                                        </div>

                                        {/* Floating particles */}
                                        <span className="absolute left-[20%] top-[25%] h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                                        <span className="absolute right-[20%] top-[30%] h-1 w-1 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="absolute bottom-[25%] left-[30%] h-1 w-1 rounded-full bg-fuchsia-400 animate-pulse" />
                                    </div>


                                    {/* Right Content */}
                                    <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">

                                        <div className="mb-8 flex items-center justify-between">

                                            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
                                                Hackathon
                                            </span>

                                            <span className="text-sm text-white/25">
                                                01
                                            </span>

                                        </div>

                                        <h3 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                                            National Level
                                            <br />

                                            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                                                Hackathon
                                            </span>
                                        </h3>

                                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
                                            Participated in a national-level hackathon, challenging
                                            myself to solve real-world problems while working under
                                            pressure, collaborating with others and turning ideas
                                            into practical solutions.
                                        </p>

                                        <div className="mt-10 flex items-center gap-4">

                                            <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-24" />

                                            <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                                                Competition • Growth
                                            </span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>


                    {/* ==================================
              ACHIEVEMENT 02
          ================================== */}
                    <FadeIn>
                        <div className="group relative">

                            {/* Decorative glow */}
                            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-blue-500/5 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-700 group-hover:border-blue-500/30">

                                {/* Gradient overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-purple-500/[0.05] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

                                {/* Giant Number */}
                                <div className="pointer-events-none absolute -right-6 -top-12 select-none text-[13rem] font-black leading-none text-white/[0.025] transition-all duration-700 group-hover:text-blue-400/[0.08] md:text-[18rem]">
                                    02
                                </div>

                                <div className="relative grid min-h-[420px] md:grid-cols-[0.35fr_1fr]">

                                    {/* Left Visual Area */}
                                    <div className="relative flex items-center justify-center overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">

                                        {/* Rings */}
                                        <div className="absolute h-48 w-48 rounded-full border border-blue-500/20 transition-all duration-1000 group-hover:scale-125 group-hover:border-blue-400/40" />

                                        <div className="absolute h-32 w-32 rounded-full border border-cyan-400/20 transition-all duration-1000 group-hover:scale-150" />

                                        {/* Glow */}
                                        <div className="absolute h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-all duration-700 group-hover:bg-blue-500/40" />

                                        {/* Center */}
                                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-4xl shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(59,130,246,0.3)]">
                                            &lt;/&gt;
                                        </div>

                                        {/* Floating particles */}
                                        <span className="absolute left-[20%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="absolute right-[20%] top-[30%] h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="absolute bottom-[25%] left-[30%] h-1 w-1 rounded-full bg-purple-400 animate-pulse" />
                                    </div>


                                    {/* Right Content */}
                                    <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">

                                        <div className="mb-8 flex items-center justify-between">

                                            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                                                Problem Solving
                                            </span>

                                            <span className="text-sm text-white/25">
                                                02
                                            </span>

                                        </div>

                                        <h3 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                                            150+
                                            <br />

                                            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                                LeetCode Problems
                                            </span>
                                        </h3>

                                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
                                            Consistently practicing Data Structures and Algorithms
                                            through LeetCode to sharpen logical thinking, improve
                                            problem-solving ability and build strong programming
                                            fundamentals.
                                        </p>

                                        <div className="mt-10 flex items-center gap-4">

                                            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-24" />

                                            <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                                                Consistency • DSA • Growth
                                            </span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </section>
            {/* ========================================
          SECTION 3 — CERTIFICATIONS
      ======================================== */}
            <section
                id="certifications"
                className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20"
            >
                {/* Ambient background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-12%] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

                    <div className="absolute right-[-10%] top-[40%] h-[550px] w-[550px] rounded-full bg-fuchsia-600/[0.07] blur-[160px]" />

                    <div className="absolute left-[45%] top-[-10%] h-[300px] w-[300px] rounded-full bg-purple-600/[0.04] blur-[130px]" />
                </div>

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================
              HEADER
          ======================================== */}
                    <FadeIn>
                        <div className="relative mb-20">

                            <div className="mb-6 flex items-center gap-4">
                                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-400">
                                    02 / Certifications
                                </span>

                                <span className="h-px w-20 bg-gradient-to-r from-purple-500 to-transparent" />
                            </div>

                            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">

                                <div>
                                    <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                                        <span className="text-white">
                                            Proof of{" "}
                                        </span>

                                        <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                                            continuous learning.
                                        </span>
                                    </h2>

                                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
                                        Certifications that represent my dedication to mastering
                                        backend development and building real-world solutions.
                                    </p>
                                </div>


                                {/* Decorative certification emblem */}
                                <div className="relative hidden h-40 w-40 shrink-0 lg:block">

                                    {/* Outer glow */}
                                    <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl" />

                                    {/* Outer ring */}
                                    <div className="absolute inset-3 rounded-full border border-purple-400/30" />

                                    {/* Middle ring */}
                                    <div className="absolute inset-7 rounded-full border border-blue-400/30" />

                                    {/* Inner circle */}
                                    <div className="absolute inset-12 flex items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/[0.03] text-2xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                                        ✦
                                    </div>

                                    {/* Orbit dots */}
                                    <span className="absolute right-1 top-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />

                                    <span className="absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

                                    <span className="absolute bottom-3 left-4 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.9)]" />
                                </div>

                            </div>
                        </div>
                    </FadeIn>


                    {/* ========================================
              CERTIFICATION CARDS
          ======================================== */}
                    <div className="grid gap-6 lg:grid-cols-2">

                        {/* ==================================
                CERTIFICATION 01
            ================================== */}
                        <FadeIn>
                            <article className="group relative h-full">

                                {/* Outer glow */}
                                <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-blue-500/[0.07] opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                                <div className="relative h-full min-h-[470px] overflow-hidden rounded-[2rem] border border-blue-400/30 bg-[#07101f]/80 backdrop-blur-xl transition-all duration-700 group-hover:-translate-y-2 group-hover:border-blue-400/70 group-hover:shadow-[0_20px_80px_rgba(37,99,235,0.18)]">

                                    {/* Animated top border */}
                                    <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Left glowing edge */}
                                    <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Cosmic blue background */}
                                    <div className="pointer-events-none absolute right-[-5%] top-[25%] h-48 w-[70%] rotate-[-10deg] rounded-[50%] bg-blue-500/10 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:bg-blue-500/20" />

                                    <div className="pointer-events-none absolute right-[10%] top-[35%] h-20 w-[50%] rotate-[-12deg] bg-gradient-to-r from-transparent via-blue-500/30 to-cyan-400/10 blur-xl transition-all duration-700 group-hover:translate-x-4" />

                                    {/* Tiny particles */}
                                    <span className="absolute right-[38%] top-[32%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
                                    <span className="absolute right-[28%] top-[42%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                                    <span className="absolute right-[48%] top-[48%] h-1 w-1 rounded-full bg-blue-400" />

                                    {/* Card content */}
                                    <div className="relative z-10 flex h-full flex-col p-8 md:p-10">

                                        {/* Top */}
                                        <div className="flex items-start justify-between">

                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-500/20 to-purple-500/10 text-3xl shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-blue-300/70 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
                                                ☁
                                            </div>

                                            <span className="pt-2 text-xs font-semibold tracking-[0.25em] text-blue-400/80">
                                                CERT. 01
                                            </span>

                                        </div>


                                        {/* Certificate */}
                                        <div className="mt-9">

                                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                                                Udemy
                                            </p>

                                            <h3 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">

                                                <span className="text-white">
                                                    Spring Boot 4
                                                </span>

                                                <br />

                                                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                                    & Spring 7
                                                </span>

                                            </h3>

                                            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                                                Comprehensive learning focused on Spring Boot,
                                                Spring Framework and modern backend development.
                                            </p>

                                        </div>


                                        {/* Bottom */}
                                        <div className="mt-auto pt-10">

                                            <div className="h-px w-full bg-white/10" />

                                            <div className="mt-6 flex items-end justify-between">

                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400/70">
                                                        Instructor
                                                    </p>

                                                    <p className="mt-2 text-base font-semibold text-white/80">
                                                        Chad Darby
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/35">
                                                        Software Instructor
                                                    </p>
                                                </div>


                                                {/* Animated arrow */}
                                                <button
                                                    type="button"
                                                    aria-label="View Spring Boot certification"
                                                    className="group/arrow relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-blue-400/50 bg-blue-500/[0.04] text-xl text-white transition-all duration-500 hover:scale-110 hover:border-blue-300 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                                                >
                                                    <span className="relative z-10 transition-transform duration-500 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1">
                                                        ↗
                                                    </span>

                                                    <span className="absolute inset-0 scale-0 rounded-full bg-blue-400/10 transition-transform duration-500 group-hover/arrow:scale-100" />

                                                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-blue-300 opacity-0 shadow-[0_0_15px_rgba(96,165,250,1)] transition-all duration-500 group-hover/arrow:opacity-100" />
                                                </button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </article>
                        </FadeIn>


                        {/* ==================================
                CERTIFICATION 02
            ================================== */}
                        <FadeIn>
                            <article className="group relative h-full">

                                {/* Outer glow */}
                                <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-fuchsia-500/[0.07] opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                                <div className="relative h-full min-h-[470px] overflow-hidden rounded-[2rem] border border-fuchsia-400/30 bg-[#120819]/80 backdrop-blur-xl transition-all duration-700 group-hover:-translate-y-2 group-hover:border-fuchsia-400/70 group-hover:shadow-[0_20px_80px_rgba(217,70,239,0.18)]">

                                    {/* Animated top border */}
                                    <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-rose-500 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Right glowing edge */}
                                    <div className="absolute bottom-0 right-0 top-0 w-[2px] bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Cosmic pink background */}
                                    <div className="pointer-events-none absolute right-[-5%] top-[25%] h-48 w-[70%] rotate-[-10deg] rounded-[50%] bg-fuchsia-500/10 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:bg-fuchsia-500/20" />

                                    <div className="pointer-events-none absolute right-[8%] top-[36%] h-20 w-[55%] rotate-[-12deg] bg-gradient-to-r from-transparent via-fuchsia-500/30 to-rose-400/10 blur-xl transition-all duration-700 group-hover:translate-x-4" />

                                    {/* Tiny particles */}
                                    <span className="absolute right-[38%] top-[32%] h-1 w-1 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.9)]" />
                                    <span className="absolute right-[28%] top-[42%] h-1.5 w-1.5 rounded-full bg-pink-300 shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
                                    <span className="absolute right-[48%] top-[48%] h-1 w-1 rounded-full bg-purple-400" />

                                    {/* Card content */}
                                    <div className="relative z-10 flex h-full flex-col p-8 md:p-10">

                                        {/* Top */}
                                        <div className="flex items-start justify-between">

                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-400/40 bg-gradient-to-br from-purple-500/20 to-rose-500/10 text-3xl shadow-[0_0_30px_rgba(217,70,239,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-fuchsia-300/70 group-hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]">
                                                ⚡
                                            </div>

                                            <span className="pt-2 text-xs font-semibold tracking-[0.25em] text-fuchsia-400/80">
                                                CERT. 02
                                            </span>

                                        </div>


                                        {/* Certificate */}
                                        <div className="mt-9">

                                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
                                                Udemy • EmbarkX
                                            </p>

                                            <h3 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">

                                                <span className="text-white">
                                                    E-Commerce Project
                                                </span>

                                                <br />

                                                <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                                                    & Spring Boot Masterclass
                                                </span>

                                            </h3>

                                            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                                                Hands-on learning focused on building practical
                                                Spring Boot applications and understanding real-world
                                                backend development.
                                            </p>

                                        </div>


                                        {/* Bottom */}
                                        <div className="mt-auto pt-10">

                                            <div className="h-px w-full bg-white/10" />

                                            <div className="mt-6 flex items-end justify-between">

                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-fuchsia-400/70">
                                                        Instructor
                                                    </p>

                                                    <p className="mt-2 text-base font-semibold text-white/80">
                                                        Faisal Menon
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/35">
                                                        Founder of EmbarkX
                                                    </p>
                                                </div>


                                                {/* Animated arrow */}
                                                <button
                                                    type="button"
                                                    aria-label="View E-Commerce certification"
                                                    className="group/arrow relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-fuchsia-400/50 bg-fuchsia-500/[0.04] text-xl text-white transition-all duration-500 hover:scale-110 hover:border-fuchsia-300 hover:bg-fuchsia-500/10 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]"
                                                >
                                                    <span className="relative z-10 transition-transform duration-500 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1">
                                                        ↗
                                                    </span>

                                                    <span className="absolute inset-0 scale-0 rounded-full bg-fuchsia-400/10 transition-transform duration-500 group-hover/arrow:scale-100" />

                                                    <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-fuchsia-300 opacity-0 shadow-[0_0_15px_rgba(244,114,182,1)] transition-all duration-500 group-hover/arrow:opacity-100" />
                                                </button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </article>
                        </FadeIn>

                    </div>

                </div>
            </section>
            {/* ========================================
          FOOTER — FINAL MESSAGE
      ======================================== */}
            <footer className="relative overflow-hidden px-6 pb-8 pt-32 md:px-12 lg:px-20">

                {/* ========================================
            AMBIENT LIGHT
        ======================================== */}
                <div className="pointer-events-none absolute inset-0">

                    {/* Purple glow */}
                    <div className="absolute bottom-[-180px] left-[5%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.12] blur-[150px]" />

                    {/* Pink glow */}
                    <div className="absolute bottom-[-150px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-fuchsia-500/[0.10] blur-[150px]" />

                    {/* Blue glow */}
                    <div className="absolute bottom-[-180px] right-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.12] blur-[150px]" />

                </div>


                {/* ========================================
            DECORATIVE GRID
        ======================================== */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
              `,
                            backgroundSize: "70px 70px",
                        }}
                    />
                </div>


                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================
              TOP DIVIDER
          ======================================== */}
                    <div className="relative mb-24 h-px w-full overflow-hidden bg-white/[0.06]">

                        <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                        <div className="absolute left-1/3 top-0 h-px w-1/3 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500" />

                        <div className="absolute right-0 top-0 h-px w-1/3 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent" />

                    </div>


                    {/* ========================================
              FINAL MESSAGE
          ======================================== */}
                    <FadeIn>
                        <div className="relative flex flex-col items-center text-center">

                            {/* Floating badge */}
                            <div className="relative mb-10">

                                {/* Glow */}
                                <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl" />

                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/30 bg-white/[0.03] text-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                                    ✦
                                </div>

                                {/* Orbit dots */}
                                <span className="absolute -right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />

                                <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.9)]" />

                            </div>


                            {/* Small label */}
                            <div className="mb-7 flex items-center gap-3">

                                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/35">
                                    Still just getting started
                                </span>

                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

                            </div>


                            {/* ==================================
                  MAIN HEADING
              ================================== */}
                            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">

                                <span className="text-white">
                                    The journey doesn't
                                </span>

                                <br />

                                <span className="relative">

                                    {/* Glow */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-blue-500/20 blur-3xl" />

                                    <span className="relative bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                                        end here.
                                    </span>

                                </span>

                            </h2>


                            {/* ==================================
                  MESSAGE
              ================================== */}
                            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                                Every achievement is a checkpoint.
                                Every certification is another step forward.
                                There is always something new to learn, build and explore.
                            </p>


                            {/* ==================================
                  DECORATIVE ORBIT
              ================================== */}
                            <div className="relative mt-16 h-24 w-64">

                                {/* Main line */}
                                <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                                {/* Center glow */}
                                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)]" />

                                {/* Purple orb */}
                                <div className="absolute left-[20%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]" />

                                {/* Blue orb */}
                                <div className="absolute right-[20%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,1)]" />

                                {/* Pink orb */}
                                <div className="absolute left-[35%] top-[25%] h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,1)]" />

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================
              FOOTER BOTTOM
          ======================================== */}
                    <div className="mt-20 border-t border-white/[0.06] pt-8">

                        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

                            <div>
                                <p className="text-sm font-medium text-white/50">
                                    Prem Nandurkar
                                </p>

                                <p className="mt-1 text-xs text-white/20">
                                    Building. Learning. Evolving.
                                </p>
                            </div>


                            {/* Center */}
                            <div className="hidden items-center gap-3 sm:flex">

                                <span className="h-px w-8 bg-purple-500/30" />

                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                                    Keep moving forward
                                </span>

                                <span className="h-px w-8 bg-blue-500/30" />

                            </div>


                            <p className="text-xs text-white/20">
                                © {new Date().getFullYear()} All rights reserved.
                            </p>

                        </div>

                    </div>

                </div>


                {/* ========================================
            BOTTOM GLOW
        ======================================== */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-blue-500/10 blur-3xl" />

            </footer>
        </main>
    );
}