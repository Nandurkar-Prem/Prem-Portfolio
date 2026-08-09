import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/portfolio/FadeIn";
import aboutAvatar from "@/assets/aboutAvatar.png"

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About | Prem's Portfolio" },
            {
                name: "description",
                content:
                    "Learn more about Prem Nandurkar, his background, education, technical skills, development journey and goals.",
            },
        ],
    }),
    component: About,
});

function About() {
    return (
        <main
            className="min-h-screen overflow-x-clip"
            style={{
                backgroundColor: "#0C0C0C",
                color: "#FFFFFF",
            }}
        >
            {/* HERO — ABOUT ME */}
            <section
                className="relative min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:px-10 md:pb-24 md:pt-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT PURPLE + BLUE GLOW */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full opacity-10 blur-[120px] md:h-[500px] md:w-[500px]"
                    style={{
                        background:
                            "linear-gradient(135deg, #A855F7, #38BDF8)",
                    }}
                />

                <div
                    className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full opacity-[0.06] blur-[100px]"
                    style={{
                        backgroundColor: "#A855F7",
                    }}
                />

                <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

                    {/* ========================================= */}
                    {/* LEFT — ABOUT CONTENT */}
                    {/* ========================================= */}

                    <div>

                        {/* Section Label */}
                        <FadeIn>
                            <p
                                className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#A855F7" }}
                            >
                                01 — About Me
                            </p>
                        </FadeIn>

                        {/* Main Heading */}
                        <FadeIn delay={0.1}>
                            <h1
                                className="font-black uppercase leading-[0.8] text-white"
                                style={{
                                    fontSize: "clamp(4rem, 13vw, 10.5rem)",
                                }}
                            >
                                About
                                <br />

                                <span
                                    style={{
                                        color: "#A855F7",
                                        textShadow:
                                            "0 0 30px rgba(168, 85, 247, 0.3)",
                                    }}
                                >
                                    Prem
                                </span>
                            </h1>
                        </FadeIn>

                        {/* Introduction */}
                        <FadeIn delay={0.2}>
                            <div className="mt-12 max-w-3xl md:mt-16">
                                <p
                                    className="font-light leading-relaxed text-white/70"
                                    style={{
                                        fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
                                    }}
                                >
                                    Hello, I'm Prem Nandurkar, a Computer Technology student with a
                                    strong interest in software development and problem-solving.
                                    I'm passionate about building practical applications using
                                    modern technologies, particularly{" "}
                                    <span className="text-white">
                                        Java
                                    </span>{" "}
                                    and{" "}
                                    <span
                                        style={{
                                            color: "#38BDF8",
                                        }}
                                    >
                                        Spring Boot
                                    </span>
                                    .
                                </p>
                            </div>
                        </FadeIn>

                        {/* Tech Identity */}
                        <FadeIn delay={0.3}>
                            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] md:mt-10">
                                {[
                                    "Java",
                                    "Spring Boot",
                                    "Backend",
                                    "Problem Solving",
                                ].map((item, index) => (
                                    <span
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <span
                                            className={
                                                index === 0
                                                    ? "text-white"
                                                    : "text-white/40"
                                            }
                                        >
                                            {item}
                                        </span>

                                        {index < 3 && (
                                            <span
                                                style={{
                                                    color:
                                                        index % 2 === 0
                                                            ? "#A855F7"
                                                            : "#38BDF8",
                                                }}
                                            >
                                                •
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </FadeIn>

                    </div>

                    {/* ========================================= */}
                    {/* RIGHT — AVATAR */}
                    {/* ========================================= */}

                    <FadeIn
                        delay={0.25}
                        x={40}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-[520px]">

                            {/* Avatar purple/blue glow */}
                            <div
                                className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #A855F7, #38BDF8)",
                                }}
                            />

                            {/* Secondary blue glow */}
                            <div
                                className="pointer-events-none absolute right-[5%] top-[15%] h-32 w-32 rounded-full opacity-15 blur-[70px]"
                                style={{
                                    backgroundColor: "#38BDF8",
                                }}
                            />

                            {/* Avatar */}
                            <img
                                src={aboutAvatar}
                                alt="Prem Nandurkar — Developer"
                                className="relative z-10 h-auto w-full object-contain"
                            />

                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* MY STORY */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* Ambient purple glow */}
                <div
                    className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full opacity-[0.07] blur-[120px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                {/* Ambient blue glow */}
                <div
                    className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full opacity-[0.06] blur-[120px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div className="relative mx-auto max-w-6xl">

                    {/* Section Label */}
                    <FadeIn>
                        <p
                            className="mb-12 text-sm font-medium uppercase tracking-[0.2em]"
                            style={{ color: "#A855F7" }}
                        >
                            02 — My Story
                        </p>
                    </FadeIn>

                    {/* Heading */}
                    <FadeIn delay={0.1}>
                        <h2
                            className="font-black uppercase leading-[0.85] text-white"
                            style={{
                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                            }}
                        >
                            Where
                            <br />
                            It{" "}
                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 25px rgba(168, 85, 247, 0.25)",
                                }}
                            >
                                Started
                            </span>
                        </h2>
                    </FadeIn>

                    {/* Story Content */}
                    <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[0.3fr_0.7fr] md:gap-16">

                        {/* Left Side */}
                        <FadeIn delay={0.15}>
                            <div>
                                <div className="flex items-center gap-4">
                                    <span
                                        className="h-px w-12"
                                        style={{ backgroundColor: "#38BDF8" }}
                                    />

                                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                                        The Beginning
                                    </span>
                                </div>

                                <p
                                    className="mt-6 text-sm uppercase tracking-[0.15em]"
                                    style={{ color: "#38BDF8" }}
                                >
                                    Curiosity → Coding
                                </p>
                            </div>
                        </FadeIn>

                        {/* Right Side */}
                        <FadeIn delay={0.25}>
                            <div
                                className="space-y-7 font-light leading-relaxed text-white/65"
                                style={{
                                    fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                                }}
                            >
                                <p>
                                    My interest in coding began during the COVID-19 lockdown when I
                                    started watching gaming videos on YouTube. I became curious about
                                    how games and applications were created and started wondering if
                                    I could build things like that myself by learning how to code.
                                </p>

                                <p>
                                    That curiosity eventually developed into a genuine interest in
                                    software development and influenced my decision to pursue a career
                                    in technology.
                                </p>

                                <p>
                                    Since then, I've been exploring programming, building projects,
                                    learning backend development, and continuously improving my
                                    problem-solving skills.
                                </p>

                                <p>
                                    Today, I'm particularly focused on{" "}
                                    <span className="text-white">Java</span> and{" "}
                                    <span
                                        style={{
                                            color: "#38BDF8",
                                        }}
                                    >
                                        Spring Boot
                                    </span>{" "}
                                    while also exploring areas such as{" "}
                                    <span
                                        style={{
                                            color: "#A855F7",
                                        }}
                                    >
                                        Spring Security
                                    </span>
                                    , microservices, Spring AI, and Data Structures and Algorithms.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Decorative Line */}
                    <FadeIn delay={0.35}>
                        <div className="mt-16 flex items-center gap-4 md:mt-24">
                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                            <div
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#38BDF8",
                                    boxShadow: "0 0 15px rgba(56,189,248,0.5)",
                                }}
                            />

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />
                        </div>
                    </FadeIn>

                </div>
            </section>
            {/* ACADEMIC JOURNEY */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-48 top-32 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[140px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-48 bottom-32 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[140px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <div className="flex items-center justify-between">

                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#A855F7" }}
                            >
                                03 — Academic Journey
                            </p>

                            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/20 sm:block">
                                2023 → 2028
                            </span>

                        </div>
                    </FadeIn>


                    <FadeIn delay={0.1}>
                        <h2
                            className="mt-12 font-black uppercase leading-[0.8]"
                            style={{
                                fontSize: "clamp(3.8rem, 10vw, 10rem)",
                            }}
                        >
                            <span className="text-white">
                                From
                            </span>

                            <br />

                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 35px rgba(168,85,247,0.25)",
                                }}
                            >
                                Classroom
                            </span>

                            <br />

                            <span className="text-white">
                                To
                            </span>{" "}

                            <span
                                style={{
                                    color: "#38BDF8",
                                    textShadow:
                                        "0 0 35px rgba(56,189,248,0.2)",
                                }}
                            >
                                Code.
                            </span>
                        </h2>
                    </FadeIn>


                    <FadeIn delay={0.15}>
                        <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                            My academic journey has been the foundation for my interest in
                            software development, problem solving, and building things with
                            technology.
                        </p>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* JOURNEY START */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>
                        <div className="mt-20 flex items-center gap-4 md:mt-28">

                            <span
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#A855F7",
                                    boxShadow:
                                        "0 0 15px rgba(168,85,247,0.6)",
                                }}
                            />

                            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                                The Journey
                            </span>

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.4), rgba(56,189,248,0.05))",
                                }}
                            />

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* TIMELINE */}
                    {/* ========================================= */}

                    <div className="relative mt-12 md:mt-16">

                        {/* Vertical Line */}

                        <div
                            className="absolute bottom-0 left-[27px] top-0 w-px md:left-[47px]"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(56,189,248,0.35), rgba(168,85,247,0.05))",
                            }}
                        />


                        {/* ===================================== */}
                        {/* 01 — 10TH */}
                        {/* ===================================== */}

                        <FadeIn delay={0.25}>
                            <div className="relative grid grid-cols-[56px_1fr] gap-6 pb-16 md:grid-cols-[96px_1fr] md:gap-10 md:pb-20">

                                {/* Timeline Node */}

                                <div className="relative flex justify-center">

                                    <div
                                        className="relative z-10 mt-2 h-4 w-4 rounded-full border-2"
                                        style={{
                                            backgroundColor: "#0C0C0C",
                                            borderColor: "#A855F7",
                                            boxShadow:
                                                "0 0 15px rgba(168,85,247,0.6)",
                                        }}
                                    />

                                </div>


                                {/* Card */}

                                <article className="group relative overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#A855F7]/50 sm:p-8 md:p-10">

                                    {/* Glow */}

                                    <div
                                        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-15"
                                        style={{ backgroundColor: "#A855F7" }}
                                    />

                                    <div className="relative">

                                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                                            <div>

                                                <p
                                                    className="text-xs uppercase tracking-[0.2em]"
                                                    style={{ color: "#A855F7" }}
                                                >
                                                    2023
                                                </p>

                                                <h3 className="mt-3 text-2xl font-medium uppercase text-white md:text-3xl">
                                                    Secondary School
                                                </h3>

                                                <p className="mt-2 text-sm uppercase tracking-wider text-white/30">
                                                    Class 10
                                                </p>

                                            </div>


                                            {/* Percentage */}

                                            <div className="sm:text-right">

                                                <p
                                                    className="font-black leading-none"
                                                    style={{
                                                        color: "#A855F7",
                                                        fontSize: "clamp(3rem, 6vw, 5rem)",
                                                        textShadow:
                                                            "0 0 25px rgba(168,85,247,0.2)",
                                                    }}
                                                >
                                                    90.80%
                                                </p>

                                                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                                                    Score
                                                </p>

                                            </div>

                                        </div>


                                        <div className="mt-8 border-t border-white/10 pt-6">

                                            <p className="max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                                                A strong academic foundation that helped develop my
                                                curiosity, discipline, and interest in learning new
                                                concepts.
                                            </p>

                                        </div>


                                        <div className="mt-7 flex items-center gap-3">

                                            <span
                                                className="h-1.5 w-1.5 rounded-full"
                                                style={{ backgroundColor: "#A855F7" }}
                                            />

                                            <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                                Foundation
                                            </span>

                                        </div>

                                    </div>
                                </article>

                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 02 — 12TH */}
                        {/* ===================================== */}

                        <FadeIn delay={0.3}>
                            <div className="relative grid grid-cols-[56px_1fr] gap-6 pb-16 md:grid-cols-[96px_1fr] md:gap-10 md:pb-20">

                                {/* Timeline Node */}

                                <div className="relative flex justify-center">

                                    <div
                                        className="relative z-10 mt-2 h-4 w-4 rounded-full border-2"
                                        style={{
                                            backgroundColor: "#0C0C0C",
                                            borderColor: "#38BDF8",
                                            boxShadow:
                                                "0 0 15px rgba(56,189,248,0.6)",
                                        }}
                                    />

                                </div>


                                {/* Card */}

                                <article className="group relative overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/50 sm:p-8 md:p-10">

                                    {/* Glow */}

                                    <div
                                        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-15"
                                        style={{ backgroundColor: "#38BDF8" }}
                                    />

                                    <div className="relative">

                                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                                            <div>

                                                <p
                                                    className="text-xs uppercase tracking-[0.2em]"
                                                    style={{ color: "#38BDF8" }}
                                                >
                                                    2023
                                                </p>

                                                <h3 className="mt-3 text-2xl font-medium uppercase text-white md:text-3xl">
                                                    Higher Secondary
                                                </h3>

                                                <p className="mt-2 text-sm uppercase tracking-wider text-white/30">
                                                    Science Stream
                                                </p>

                                            </div>


                                            <div className="sm:text-right">

                                                <p
                                                    className="font-black leading-none"
                                                    style={{
                                                        color: "#38BDF8",
                                                        fontSize: "clamp(3rem, 6vw, 5rem)",
                                                        textShadow:
                                                            "0 0 25px rgba(56,189,248,0.2)",
                                                    }}
                                                >
                                                    SCIENCE
                                                </p>

                                                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                                                    Stream
                                                </p>

                                            </div>

                                        </div>


                                        <div className="mt-8 border-t border-white/10 pt-6">

                                            <p className="max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                                                Studying science during higher secondary education
                                                strengthened my analytical thinking and prepared me for
                                                the transition into engineering.
                                            </p>

                                        </div>


                                        <div className="mt-7 flex items-center gap-3">

                                            <span
                                                className="h-1.5 w-1.5 rounded-full"
                                                style={{ backgroundColor: "#38BDF8" }}
                                            />

                                            <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                                Transition
                                            </span>

                                        </div>

                                    </div>
                                </article>

                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 03 — B.TECH */}
                        {/* ===================================== */}

                        <FadeIn delay={0.35}>
                            <div className="relative grid grid-cols-[56px_1fr] gap-6 md:grid-cols-[96px_1fr] md:gap-10">

                                {/* Timeline Node */}

                                <div className="relative flex justify-center">

                                    <div
                                        className="relative z-10 mt-2 h-5 w-5 rounded-full border-2"
                                        style={{
                                            backgroundColor: "#0C0C0C",
                                            borderColor: "#A855F7",
                                            boxShadow:
                                                "0 0 20px rgba(168,85,247,0.7)",
                                        }}
                                    />

                                </div>


                                {/* Main Education Card */}

                                <article className="group relative overflow-hidden border border-[#A855F7]/30 p-6 sm:p-8 md:p-10 lg:p-12">

                                    {/* Large Background Number */}

                                    <span
                                        className="pointer-events-none absolute -right-4 -top-12 select-none font-black leading-none opacity-[0.035]"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(10rem, 25vw, 25rem)",
                                        }}
                                    >
                                        04
                                    </span>


                                    {/* Purple Glow */}

                                    <div
                                        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-[0.08] blur-[120px]"
                                        style={{ backgroundColor: "#A855F7" }}
                                    />

                                    <div className="relative">

                                        {/* Top */}

                                        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">

                                            <div>

                                                <p
                                                    className="text-xs uppercase tracking-[0.2em]"
                                                    style={{ color: "#A855F7" }}
                                                >
                                                    2024 — 2028
                                                </p>

                                                <h3
                                                    className="mt-4 font-black uppercase leading-[0.85]"
                                                    style={{
                                                        color: "#A855F7",
                                                        fontSize: "clamp(3rem, 7vw, 7rem)",
                                                        textShadow:
                                                            "0 0 30px rgba(168,85,247,0.2)",
                                                    }}
                                                >
                                                    B.Tech
                                                </h3>

                                                <p className="mt-4 text-sm uppercase tracking-[0.15em] text-white/40">
                                                    Computer Technology
                                                </p>

                                            </div>


                                            {/* CGPA */}

                                            <div className="lg:text-right">

                                                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                                    Current CGPA
                                                </p>

                                                <p
                                                    className="mt-3 font-black leading-none"
                                                    style={{
                                                        color: "#38BDF8",
                                                        fontSize: "clamp(4rem, 8vw, 7rem)",
                                                        textShadow:
                                                            "0 0 30px rgba(56,189,248,0.2)",
                                                    }}
                                                >
                                                    8.38
                                                </p>

                                            </div>

                                        </div>


                                        {/* College */}

                                        <div className="mt-12 border-t border-white/10 pt-8">

                                            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                                Institution
                                            </p>

                                            <h4 className="mt-3 max-w-3xl text-xl font-medium uppercase leading-tight text-white md:text-3xl">
                                                Yeshwantrao Chavan College of Engineering
                                            </h4>

                                            <p className="mt-3 text-sm uppercase tracking-wider text-white/30">
                                                YCCE • Nagpur
                                            </p>

                                        </div>


                                        {/* Description */}

                                        <div className="mt-10 grid gap-8 md:grid-cols-2">

                                            <div>

                                                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                                    What I'm Building
                                                </p>

                                                <p className="mt-4 text-sm leading-relaxed text-white/45 md:text-base">
                                                    Developing a strong foundation in computer technology
                                                    while building practical projects with Java, Spring
                                                    Boot, databases, React, and modern development tools.
                                                </p>

                                            </div>


                                            <div>

                                                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                                    Current Direction
                                                </p>

                                                <p className="mt-4 text-sm leading-relaxed text-white/45 md:text-base">
                                                    Focusing on backend development, Data Structures and
                                                    Algorithms, system design fundamentals, and building
                                                    reliable software solutions.
                                                </p>

                                            </div>

                                        </div>


                                        {/* Tags */}

                                        <div className="mt-10 flex flex-wrap gap-3">

                                            {[
                                                "Computer Technology",
                                                "Java",
                                                "Spring Boot",
                                                "DSA",
                                                "Backend Development",
                                            ].map((item, index) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                                                    style={{
                                                        borderColor:
                                                            index % 2 === 0
                                                                ? "rgba(168,85,247,0.35)"
                                                                : "rgba(56,189,248,0.35)",
                                                        color:
                                                            index % 2 === 0
                                                                ? "#A855F7"
                                                                : "#38BDF8",
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            ))}

                                        </div>

                                    </div>
                                </article>

                            </div>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* CURRENT STATUS */}
                    {/* ========================================= */}

                    <FadeIn delay={0.45}>
                        <div className="mt-20 border-y border-white/10 py-10 md:mt-28 md:py-12">

                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        Current Status
                                    </p>

                                    <p
                                        className="mt-3 font-medium uppercase"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(1.3rem, 3vw, 2.5rem)",
                                        }}
                                    >
                                        Engineering Student → Backend Developer
                                    </p>

                                </div>


                                <div className="flex items-center gap-3">

                                    <span
                                        className="h-2 w-2 animate-pulse rounded-full"
                                        style={{
                                            backgroundColor: "#B6FF00",
                                            boxShadow:
                                                "0 0 15px rgba(182,255,0,0.7)",
                                        }}
                                    />

                                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        In Progress
                                    </span>

                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* FINAL STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>
                        <div className="mt-16 max-w-4xl">

                            <p
                                className="font-black uppercase leading-[0.88]"
                                style={{
                                    fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                }}
                            >
                                <span className="text-white">
                                    Learning
                                </span>{" "}

                                <span
                                    style={{
                                        color: "#A855F7",
                                    }}
                                >
                                    never
                                </span>

                                <br />

                                <span
                                    style={{
                                        color: "#38BDF8",
                                    }}
                                >
                                    stops.
                                </span>
                            </p>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* DECORATIVE LINE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.55}>
                        <div className="mt-16 flex items-center gap-4">

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                            <div
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#A855F7",
                                    boxShadow:
                                        "0 0 15px rgba(168,85,247,0.6)",
                                }}
                            />

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* DEVELOPMENT JOURNEY */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* Ambient Purple Glow */}
                <div
                    className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full opacity-[0.06] blur-[120px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                {/* Ambient Blue Glow */}
                <div
                    className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full opacity-[0.05] blur-[120px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div className="relative mx-auto max-w-6xl">

                    {/* Section Label */}
                    <FadeIn>
                        <p
                            className="mb-12 text-sm font-medium uppercase tracking-[0.2em]"
                            style={{ color: "#A855F7" }}
                        >
                            05 — Development Journey
                        </p>
                    </FadeIn>

                    {/* Main Heading */}
                    <FadeIn delay={0.1}>
                        <h2
                            className="font-black uppercase leading-[0.85] text-white"
                            style={{
                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                            }}
                        >
                            My
                            <br />
                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 25px rgba(168, 85, 247, 0.25)",
                                }}
                            >
                                Journey
                            </span>
                        </h2>
                    </FadeIn>

                    {/* Intro */}
                    <FadeIn delay={0.15}>
                        <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/55 md:text-lg">
                            My development journey has been a continuous process of learning,
                            experimenting, building projects, and strengthening my understanding
                            of software development.
                        </p>
                    </FadeIn>

                    {/* Journey Timeline */}
                    <div className="relative mt-20 md:mt-28">

                        {/* Timeline Line */}
                        <div
                            className="absolute bottom-0 left-[7px] top-0 w-px md:left-[9px]"
                            style={{
                                background:
                                    "linear-gradient(to bottom, #A855F7, #38BDF8, rgba(255,255,255,0.08))",
                            }}
                        />

                        {/* ================================= */}
                        {/* 01 — DISCOVERING CODING */}
                        {/* ================================= */}

                        <FadeIn delay={0.2}>
                            <article className="relative grid gap-8 pb-20 pl-10 md:grid-cols-[0.22fr_0.78fr] md:gap-12 md:pl-12">

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full md:h-[19px] md:w-[19px]"
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow: "0 0 20px rgba(168,85,247,0.6)",
                                    }}
                                />

                                {/* Number */}
                                <div>
                                    <span
                                        className="font-black text-5xl md:text-7xl"
                                        style={{
                                            color: "#A855F7",
                                            textShadow:
                                                "0 0 20px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        01
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="border-t border-white/15 pt-6 md:border-t-0 md:pt-0">

                                    <p
                                        className="mb-3 text-xs uppercase tracking-[0.2em]"
                                        style={{ color: "#38BDF8" }}
                                    >
                                        The Beginning
                                    </p>

                                    <h3
                                        className="font-medium uppercase leading-tight"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(1.8rem, 4vw, 4rem)",
                                            textShadow:
                                                "0 0 18px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        Discovering Coding
                                    </h3>

                                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
                                        My interest in coding began during the COVID-19 lockdown when
                                        I started watching gaming videos on YouTube. I became curious
                                        about how games and applications were created and started
                                        wondering if I could build things like that myself by learning
                                        how to code.
                                    </p>

                                </div>
                            </article>
                        </FadeIn>

                        {/* ================================= */}
                        {/* 02 — LEARNING PROGRAMMING */}
                        {/* ================================= */}

                        <FadeIn delay={0.25}>
                            <article className="relative grid gap-8 pb-20 pl-10 md:grid-cols-[0.22fr_0.78fr] md:gap-12 md:pl-12">

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full md:h-[19px] md:w-[19px]"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                        boxShadow: "0 0 20px rgba(56,189,248,0.6)",
                                    }}
                                />

                                {/* Number */}
                                <div>
                                    <span
                                        className="font-black text-5xl md:text-7xl"
                                        style={{
                                            color: "#38BDF8",
                                            textShadow:
                                                "0 0 20px rgba(56,189,248,0.2)",
                                        }}
                                    >
                                        02
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="border-t border-white/15 pt-6 md:border-t-0 md:pt-0">

                                    <p
                                        className="mb-3 text-xs uppercase tracking-[0.2em]"
                                        style={{ color: "#A855F7" }}
                                    >
                                        Building Foundations
                                    </p>

                                    <h3
                                        className="font-medium uppercase leading-tight"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(1.8rem, 4vw, 4rem)",
                                            textShadow:
                                                "0 0 18px rgba(56,189,248,0.2)",
                                        }}
                                    >
                                        Learning Programming
                                    </h3>

                                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
                                        That curiosity eventually developed into a genuine interest in
                                        software development. I started learning programming
                                        fundamentals, exploring different technologies, and building
                                        small projects to understand how software works in practice.
                                    </p>

                                </div>
                            </article>
                        </FadeIn>

                        {/* ================================= */}
                        {/* 03 — JAVA & BACKEND */}
                        {/* ================================= */}

                        <FadeIn delay={0.3}>
                            <article className="relative grid gap-8 pb-20 pl-10 md:grid-cols-[0.22fr_0.78fr] md:gap-12 md:pl-12">

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full md:h-[19px] md:w-[19px]"
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow: "0 0 20px rgba(168,85,247,0.6)",
                                    }}
                                />

                                {/* Number */}
                                <div>
                                    <span
                                        className="font-black text-5xl md:text-7xl"
                                        style={{
                                            color: "#A855F7",
                                            textShadow:
                                                "0 0 20px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        03
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="border-t border-white/15 pt-6 md:border-t-0 md:pt-0">

                                    <p
                                        className="mb-3 text-xs uppercase tracking-[0.2em]"
                                        style={{ color: "#38BDF8" }}
                                    >
                                        Going Deeper
                                    </p>

                                    <h3
                                        className="font-medium uppercase leading-tight"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(1.8rem, 4vw, 4rem)",
                                            textShadow:
                                                "0 0 18px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        Java & Backend Development
                                    </h3>

                                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
                                        As I progressed, I became particularly interested in Java and
                                        backend development. I started working with Spring Boot,
                                        REST APIs, databases, authentication, and other technologies
                                        required to build real-world applications.
                                    </p>

                                </div>
                            </article>
                        </FadeIn>

                        {/* ================================= */}
                        {/* 04 — BUILDING PROJECTS */}
                        {/* ================================= */}

                        <FadeIn delay={0.35}>
                            <article className="relative grid gap-8 pb-20 pl-10 md:grid-cols-[0.22fr_0.78fr] md:gap-12 md:pl-12">

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full md:h-[19px] md:w-[19px]"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                        boxShadow: "0 0 20px rgba(56,189,248,0.6)",
                                    }}
                                />

                                {/* Number */}
                                <div>
                                    <span
                                        className="font-black text-5xl md:text-7xl"
                                        style={{
                                            color: "#38BDF8",
                                            textShadow:
                                                "0 0 20px rgba(56,189,248,0.2)",
                                        }}
                                    >
                                        04
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="border-t border-white/15 pt-6 md:border-t-0 md:pt-0">

                                    <p
                                        className="mb-3 text-xs uppercase tracking-[0.2em]"
                                        style={{ color: "#A855F7" }}
                                    >
                                        From Learning To Building
                                    </p>

                                    <h3
                                        className="font-medium uppercase leading-tight"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(1.8rem, 4vw, 4rem)",
                                            textShadow:
                                                "0 0 18px rgba(56,189,248,0.2)",
                                        }}
                                    >
                                        Building Real Projects
                                    </h3>

                                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
                                        I began applying what I learned by building full-stack
                                        applications using Spring Boot, React, and MySQL. These
                                        projects helped me understand how different parts of a
                                        software system work together and gave me practical
                                        experience beyond just learning theory.
                                    </p>

                                </div>
                            </article>
                        </FadeIn>

                        {/* ================================= */}
                        {/* 05 — TODAY */}
                        {/* ================================= */}

                        <FadeIn delay={0.4}>
                            <article className="relative grid gap-8 pl-10 md:grid-cols-[0.22fr_0.78fr] md:gap-12 md:pl-12">

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full md:h-[19px] md:w-[19px]"
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow: "0 0 20px rgba(168,85,247,0.6)",
                                    }}
                                />

                                {/* Number */}
                                <div>
                                    <span
                                        className="font-black text-5xl md:text-7xl"
                                        style={{
                                            color: "#A855F7",
                                            textShadow:
                                                "0 0 20px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        05
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="border-t border-white/15 pt-6 md:border-t-0 md:pt-0">

                                    <p
                                        className="mb-3 text-xs uppercase tracking-[0.2em]"
                                        style={{ color: "#38BDF8" }}
                                    >
                                        Today
                                    </p>

                                    <h3
                                        className="font-medium uppercase leading-tight"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(1.8rem, 4vw, 4rem)",
                                            textShadow:
                                                "0 0 18px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        Becoming A Better Engineer
                                    </h3>

                                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
                                        Today, I'm focused on strengthening my Data Structures and
                                        Algorithms skills, improving my backend development knowledge,
                                        and exploring technologies such as Spring Security, Spring AI,
                                        and modern software architecture.
                                    </p>

                                </div>
                            </article>
                        </FadeIn>

                    </div>

                    {/* Bottom Decorative Line */}
                    <FadeIn delay={0.45}>
                        <div className="mt-16 flex items-center gap-4 md:mt-20">

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                            <div
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#38BDF8",
                                    boxShadow:
                                        "0 0 15px rgba(56,189,248,0.5)",
                                }}
                            />

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                        </div>
                    </FadeIn>
                </div>
            </section>
            {/* TECHNICAL PHILOSOPHY */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT NEON GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[140px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-[250px] top-[35%] h-[550px] w-[550px] rounded-full opacity-[0.07] blur-[150px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div
                    className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full opacity-[0.05] blur-[140px]"
                    style={{ backgroundColor: "#B6FF00" }}
                />

                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <div className="flex items-center justify-between">

                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#A855F7" }}
                            >
                                05 — Technical Philosophy
                            </p>

                            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/20 sm:block">
                                How I Build
                            </span>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* MAIN HEADING */}
                    {/* ========================================= */}

                    <FadeIn delay={0.1}>
                        <h2
                            className="mt-14 font-black uppercase leading-[0.82]"
                            style={{
                                fontSize: "clamp(3.8rem, 9vw, 9rem)",
                            }}
                        >
                            <span className="text-white">
                                Build.
                            </span>

                            <br />

                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 40px rgba(168,85,247,0.25)",
                                }}
                            >
                                Understand.
                            </span>

                            <br />

                            <span
                                style={{
                                    color: "#38BDF8",
                                    textShadow:
                                        "0 0 40px rgba(56,189,248,0.2)",
                                }}
                            >
                                Improve.
                            </span>
                        </h2>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* INTRODUCTION */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>
                        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                            <p className="max-w-2xl text-base leading-relaxed text-white/50 md:text-xl">
                                I don't want to simply learn technologies. I want to understand
                                them, use them to solve real problems, and continuously improve
                                the way I build software.
                            </p>

                            <span
                                className="hidden select-none font-black leading-none md:block"
                                style={{
                                    color: "#FFFFFF",
                                    opacity: 0.06,
                                    fontSize: "clamp(5rem, 10vw, 10rem)",
                                }}
                            >
                                03
                            </span>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* PHILOSOPHY CARDS */}
                    {/* ========================================= */}

                    <div className="mt-20 grid gap-5 md:mt-28 md:grid-cols-3">


                        {/* ===================================== */}
                        {/* 01 — BUILD */}
                        {/* ===================================== */}

                        <FadeIn delay={0.25}>
                            <article
                                className="group relative min-h-[430px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 sm:p-9"
                            >

                                {/* Purple Hover Glow */}

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                                <div className="relative flex h-full flex-col justify-between">

                                    {/* TOP */}

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(168,85,247,0.2)",
                                            }}
                                        >
                                            01
                                        </span>

                                        <span
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#A855F7] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.4)",
                                                color: "#A855F7",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="mt-12">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Philosophy 01
                                        </p>

                                        <h3
                                            className="mt-4 max-w-full break-words font-black uppercase leading-[0.9] tracking-tight"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                                            }}
                                        >
                                            Build
                                        </h3>

                                        <p className="mt-6 text-sm leading-relaxed text-white/45 md:text-base">
                                            I learn best by creating. Instead of only consuming
                                            tutorials, I try to turn what I learn into practical
                                            applications and real solutions.
                                        </p>

                                    </div>


                                    {/* BOTTOM */}

                                    <div className="mt-10 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{
                                                backgroundColor: "#A855F7",
                                                boxShadow:
                                                    "0 0 10px rgba(168,85,247,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            Learn by doing
                                        </span>

                                    </div>

                                </div>


                                {/* Bottom Accent */}

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                            </article>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 02 — UNDERSTAND */}
                        {/* ===================================== */}

                        <FadeIn delay={0.3}>
                            <article
                                className="group relative min-h-[430px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/50 sm:p-9"
                            >

                                {/* Blue Hover Glow */}

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#38BDF8" }}
                                />

                                <div className="relative flex h-full flex-col justify-between">

                                    {/* TOP */}

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(56,189,248,0.2)",
                                            }}
                                        >
                                            02
                                        </span>

                                        <span
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#38BDF8] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.4)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="mt-12 min-w-0">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Philosophy 02
                                        </p>

                                        {/* FIXED HEADING */}

                                        <h3
                                            className="mt-4 max-w-full break-words font-black uppercase leading-[0.9] tracking-[-0.03em]"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                                            }}
                                        >
                                            Understand
                                        </h3>

                                        <p className="mt-6 text-sm leading-relaxed text-white/45 md:text-base">
                                            I believe fundamentals matter. I try to understand why
                                            something works instead of only memorizing how to use it.
                                        </p>

                                    </div>


                                    {/* BOTTOM */}

                                    <div className="mt-10 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{
                                                backgroundColor: "#38BDF8",
                                                boxShadow:
                                                    "0 0 10px rgba(56,189,248,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            Fundamentals first
                                        </span>

                                    </div>

                                </div>


                                {/* Bottom Accent */}

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#38BDF8" }}
                                />

                            </article>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 03 — IMPROVE */}
                        {/* ===================================== */}

                        <FadeIn delay={0.35}>
                            <article
                                className="group relative min-h-[430px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00]/50 sm:p-9"
                            >

                                {/* Green Hover Glow */}

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#B6FF00" }}
                                />

                                <div className="relative flex h-full flex-col justify-between">

                                    {/* TOP */}

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(182,255,0,0.2)",
                                            }}
                                        >
                                            03
                                        </span>

                                        <span
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#B6FF00] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(182,255,0,0.4)",
                                                color: "#B6FF00",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="mt-12 min-w-0">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Philosophy 03
                                        </p>

                                        <h3
                                            className="mt-4 max-w-full break-words font-black uppercase leading-[0.9] tracking-tight"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                                            }}
                                        >
                                            Improve
                                        </h3>

                                        <p className="mt-6 text-sm leading-relaxed text-white/45 md:text-base">
                                            Every solution can be better. I focus on writing cleaner
                                            code, solving problems more efficiently, and learning from
                                            every mistake.
                                        </p>

                                    </div>


                                    {/* BOTTOM */}

                                    <div className="mt-10 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{
                                                backgroundColor: "#B6FF00",
                                                boxShadow:
                                                    "0 0 10px rgba(182,255,0,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            Keep evolving
                                        </span>

                                    </div>

                                </div>


                                {/* Bottom Accent */}

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#B6FF00" }}
                                />

                            </article>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* PHILOSOPHY STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.45}>
                        <div className="relative mt-24 overflow-hidden border border-white/10 p-8 sm:p-12 md:mt-32 md:p-16">

                            {/* Center Glow */}

                            <div
                                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[100px]"
                                style={{ backgroundColor: "#A855F7" }}
                            />

                            <div className="relative">

                                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                    My Approach
                                </p>

                                <blockquote
                                    className="mt-8 max-w-5xl font-black uppercase leading-[0.9]"
                                    style={{
                                        fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                    }}
                                >
                                    <span className="text-white">
                                        Don't just
                                    </span>{" "}

                                    <span style={{ color: "#A855F7" }}>
                                        use
                                    </span>{" "}

                                    <span className="text-white">
                                        technology.
                                    </span>

                                    <br />

                                    <span style={{ color: "#38BDF8" }}>
                                        Understand
                                    </span>{" "}

                                    <span className="text-white">
                                        it.
                                    </span>
                                </blockquote>


                                <div className="mt-10 flex items-center gap-4">

                                    <div
                                        className="h-px w-16"
                                        style={{
                                            background:
                                                "linear-gradient(to right, #A855F7, #38BDF8)",
                                        }}
                                    />

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        Prem Nandurkar
                                    </p>

                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* BOTTOM FLOW */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>
                        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <p className="max-w-lg text-xs uppercase leading-relaxed tracking-[0.15em] text-white/25">
                                Curiosity creates the question.
                                <br />
                                Building creates the experience.
                                <br />
                                Understanding creates the developer.
                            </p>


                            <div className="flex items-center gap-3">

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow:
                                            "0 0 12px rgba(168,85,247,0.7)",
                                    }}
                                />

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                        boxShadow:
                                            "0 0 12px rgba(56,189,248,0.7)",
                                    }}
                                />

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                        boxShadow:
                                            "0 0 12px rgba(182,255,0,0.7)",
                                    }}
                                />

                            </div>

                        </div>
                    </FadeIn>
                </div>
            </section>
            {/* ========================================= */}
            {/* SECTION 06 — CURRENTLY EXPLORING */}
            {/* ========================================= */}

            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT NEON GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-48 top-24 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[140px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-48 top-[40%] h-[550px] w-[550px] rounded-full opacity-[0.06] blur-[150px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div
                    className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full opacity-[0.05] blur-[140px]"
                    style={{ backgroundColor: "#B6FF00" }}
                />

                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <div className="flex items-center justify-between">

                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#38BDF8" }}
                            >
                                06 — Currently Exploring
                            </p>

                            <div className="hidden items-center gap-3 sm:flex">

                                <span
                                    className="h-2 w-2 animate-pulse rounded-full"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                        boxShadow:
                                            "0 0 12px rgba(182,255,0,0.7)",
                                    }}
                                />

                                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                                    Active Learning
                                </span>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* MAIN HEADING */}
                    {/* ========================================= */}

                    <FadeIn delay={0.1}>
                        <div className="mt-14">

                            <h2
                                className="max-w-6xl font-black uppercase leading-[0.8]"
                                style={{
                                    fontSize: "clamp(3.8rem, 10vw, 10rem)",
                                }}
                            >
                                <span className="text-white">
                                    Always
                                </span>

                                <br />

                                <span
                                    style={{
                                        color: "#38BDF8",
                                        textShadow:
                                            "0 0 40px rgba(56,189,248,0.2)",
                                    }}
                                >
                                    Learning.
                                </span>
                            </h2>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* INTRO */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>
                        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

                            <p className="max-w-2xl text-base leading-relaxed text-white/50 md:text-xl">
                                I'm constantly expanding my technical foundation. Right now,
                                I'm focusing on technologies and concepts that can help me move
                                from building individual applications toward building more
                                reliable and scalable systems.
                            </p>

                            <div className="hidden text-right md:block">

                                <p className="text-xs uppercase tracking-[0.2em] text-white/20">
                                    Learning Mode
                                </p>

                                <p
                                    className="mt-2 font-black uppercase"
                                    style={{
                                        color: "#B6FF00",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    ON
                                </p>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* LEARNING SYSTEM */}
                    {/* ========================================= */}

                    <FadeIn delay={0.25}>
                        <div className="mt-20 border-y border-white/10 py-8 md:mt-28 md:py-10">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-4">

                                    <span
                                        className="flex h-10 w-10 items-center justify-center border text-xs font-bold"
                                        style={{
                                            borderColor: "rgba(56,189,248,0.35)",
                                            color: "#38BDF8",
                                        }}
                                    >
                                        06
                                    </span>

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                            Current Learning Cycle
                                        </p>

                                        <p className="mt-1 text-sm uppercase tracking-wider text-white/60">
                                            Strengthening the backend foundation
                                        </p>

                                    </div>

                                </div>


                                <div className="flex items-center gap-2">

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                                        Status
                                    </span>

                                    <span
                                        className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider"
                                        style={{
                                            borderColor: "rgba(182,255,0,0.3)",
                                            color: "#B6FF00",
                                        }}
                                    >
                                        In Progress
                                    </span>

                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* EXPLORING CARDS */}
                    {/* ========================================= */}

                    <div className="mt-8 grid gap-5 md:grid-cols-2">


                        {/* ===================================== */}
                        {/* SPRING SECURITY */}
                        {/* ===================================== */}

                        <FadeIn delay={0.3}>
                            <article
                                className="group relative min-h-[330px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 sm:p-9"
                            >

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                                <div className="relative">

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            01
                                        </span>

                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.35)",
                                                color: "#A855F7",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/25">
                                        Backend Security
                                    </p>

                                    <h3
                                        className="mt-3 max-w-full break-words font-black uppercase leading-[0.9]"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        }}
                                    >
                                        Spring Security
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45">
                                        Exploring authentication, authorization, JWT-based security,
                                        and the foundations required to build secure Spring Boot
                                        applications.
                                    </p>


                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 rounded-full"
                                            style={{
                                                backgroundColor: "#A855F7",
                                                boxShadow:
                                                    "0 0 10px rgba(168,85,247,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            Deepening knowledge
                                        </span>

                                    </div>

                                </div>


                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                            </article>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* MICROSERVICES */}
                        {/* ===================================== */}

                        <FadeIn delay={0.35}>
                            <article
                                className="group relative min-h-[330px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/50 sm:p-9"
                            >

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#38BDF8" }}
                                />

                                <div className="relative">

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            02
                                        </span>

                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.35)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/25">
                                        Architecture
                                    </p>

                                    <h3
                                        className="mt-3 max-w-full break-words font-black uppercase leading-[0.9]"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        }}
                                    >
                                        Microservices
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45">
                                        Learning how larger applications can be divided into
                                        focused services while understanding communication,
                                        scalability, and architectural trade-offs.
                                    </p>


                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 rounded-full"
                                            style={{
                                                backgroundColor: "#38BDF8",
                                                boxShadow:
                                                    "0 0 10px rgba(56,189,248,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            Exploring architecture
                                        </span>

                                    </div>

                                </div>


                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#38BDF8" }}
                                />

                            </article>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* DATA STRUCTURES & ALGORITHMS */}
                        {/* ===================================== */}

                        <FadeIn delay={0.4}>
                            <article
                                className="group relative min-h-[330px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00]/50 sm:p-9"
                            >

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#B6FF00" }}
                                />

                                <div className="relative">

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            03
                                        </span>

                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45"
                                            style={{
                                                borderColor: "rgba(182,255,0,0.35)",
                                                color: "#B6FF00",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/25">
                                        Problem Solving
                                    </p>

                                    <h3
                                        className="mt-3 max-w-full break-words font-black uppercase leading-[0.9]"
                                        style={{
                                            color: "#B6FF00",
                                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        }}
                                    >
                                        DSA
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45">
                                        Strengthening Data Structures and Algorithms to improve
                                        problem-solving ability and develop more efficient
                                        approaches to programming challenges.
                                    </p>


                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 rounded-full"
                                            style={{
                                                backgroundColor: "#B6FF00",
                                                boxShadow:
                                                    "0 0 10px rgba(182,255,0,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            Problem solving
                                        </span>

                                    </div>

                                </div>


                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#B6FF00" }}
                                />

                            </article>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* SPRING AI */}
                        {/* ===================================== */}

                        <FadeIn delay={0.45}>
                            <article
                                className="group relative min-h-[330px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 sm:p-9"
                            >

                                <div
                                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                                <div className="relative">

                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            04
                                        </span>

                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.35)",
                                                color: "#A855F7",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/25">
                                        AI + Backend
                                    </p>

                                    <h3
                                        className="mt-3 max-w-full break-words font-black uppercase leading-[0.9]"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        }}
                                    >
                                        Spring AI
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/45">
                                        Exploring how AI capabilities can be integrated into
                                        Spring applications and used to build smarter software
                                        experiences.
                                    </p>


                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-1.5 w-1.5 rounded-full"
                                            style={{
                                                backgroundColor: "#A855F7",
                                                boxShadow:
                                                    "0 0 10px rgba(168,85,247,0.7)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                            New territory
                                        </span>

                                    </div>

                                </div>


                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                            </article>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* LEARNING MINDSET */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>
                        <div className="relative mt-20 overflow-hidden border border-white/10 p-8 sm:p-12 md:mt-28 md:p-16">

                            {/* Glow */}

                            <div
                                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.07] blur-[120px]"
                                style={{ backgroundColor: "#38BDF8" }}
                            />

                            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                        Learning Mindset
                                    </p>

                                    <h3
                                        className="mt-6 max-w-4xl font-black uppercase leading-[0.9]"
                                        style={{
                                            fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                        }}
                                    >
                                        <span className="text-white">
                                            Learn.
                                        </span>{" "}

                                        <span style={{ color: "#A855F7" }}>
                                            Build.
                                        </span>{" "}

                                        <span style={{ color: "#38BDF8" }}>
                                            Repeat.
                                        </span>
                                    </h3>

                                    <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                                        My goal isn't to collect technologies. It's to build a
                                        strong technical foundation that allows me to understand
                                        problems and create better solutions.
                                    </p>

                                </div>


                                {/* Status */}

                                <div className="flex items-center gap-3 md:pb-2">

                                    <span
                                        className="h-2 w-2 animate-pulse rounded-full"
                                        style={{
                                            backgroundColor: "#B6FF00",
                                            boxShadow:
                                                "0 0 15px rgba(182,255,0,0.7)",
                                        }}
                                    />

                                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        Still Learning
                                    </span>

                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* BOTTOM LINE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.55}>
                        <div className="mt-16 flex items-center gap-4 border-t border-white/10 pt-8">

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                            <span
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#38BDF8",
                                    boxShadow:
                                        "0 0 12px rgba(56,189,248,0.7)",
                                }}
                            />

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                        </div>
                    </FadeIn>
                </div>
            </section>
            {/* ========================================= */}
            {/* SECTION 07 — WHERE I'M HEADED */}
            {/* ========================================= */}

            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT NEON GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-56 top-20 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[150px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-56 top-[35%] h-[550px] w-[550px] rounded-full opacity-[0.05] blur-[150px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div
                    className="pointer-events-none absolute bottom-[-250px] left-[40%] h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[150px]"
                    style={{ backgroundColor: "#B6FF00" }}
                />

                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <div className="flex items-center justify-between">

                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#A855F7" }}
                            >
                                07 — Where I'm Headed
                            </p>

                            <div className="hidden items-center gap-3 sm:flex">

                                <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                    Career Trajectory
                                </span>

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                        boxShadow: "0 0 12px rgba(182,255,0,0.7)",
                                    }}
                                />

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* MAIN HEADING */}
                    {/* ========================================= */}

                    <FadeIn delay={0.1}>

                        <h2
                            className="mt-14 max-w-6xl font-black uppercase leading-[0.82]"
                            style={{
                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                            }}
                        >

                            <span className="text-white">
                                Not
                            </span>{" "}

                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 40px rgba(168,85,247,0.25)",
                                }}
                            >
                                There
                            </span>

                            <br />

                            <span className="text-white">
                                Yet.
                            </span>{" "}

                            <span
                                style={{
                                    color: "#38BDF8",
                                    textShadow:
                                        "0 0 40px rgba(56,189,248,0.2)",
                                }}
                            >
                                Getting
                            </span>{" "}

                            <span className="text-white">
                                There.
                            </span>

                        </h2>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* INTRO */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>

                        <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                            <p className="max-w-2xl text-base leading-relaxed text-white/50 md:text-xl">
                                I'm still early in my journey, but I know the direction
                                I want to take. My goal is to become a strong Java backend
                                developer and eventually grow into an engineer capable of
                                designing complex, reliable systems.
                            </p>

                            <p className="text-xs uppercase tracking-[0.2em] text-white/20">
                                Destination: Software Engineering
                            </p>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* CAREER CARDS */}
                    {/* ========================================= */}

                    <div className="mt-24 grid items-stretch gap-5 md:mt-32 md:grid-cols-3">


                        {/* ======================================= */}
                        {/* CARD 01 — NOW */}
                        {/* ======================================= */}

                        <FadeIn delay={0.25} className="h-full">

                            <article
                                className="group relative flex h-full min-h-[500px] flex-col overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 sm:p-9"
                            >

                                {/* Purple glow */}

                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{
                                        backgroundColor: "#A855F7",
                                    }}
                                />

                                <div className="relative flex h-full flex-col">

                                    {/* Top */}

                                    <div className="flex items-center justify-between">

                                        <span
                                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.6)",
                                                color: "#A855F7",
                                                backgroundColor: "#0C0C0C",
                                                boxShadow:
                                                    "0 0 20px rgba(168,85,247,0.12)",
                                            }}
                                        >
                                            NOW
                                        </span>

                                        <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                            01
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="mt-12 flex-1">

                                        <p
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#A855F7" }}
                                        >
                                            Foundation
                                        </p>

                                        <h3
                                            className="mt-4 font-black uppercase leading-[0.9] tracking-tight"
                                            style={{
                                                color: "#A855F7",
                                                fontSize:
                                                    "clamp(2.5rem, 4vw, 4rem)",
                                                textShadow:
                                                    "0 0 30px rgba(168,85,247,0.12)",
                                            }}
                                        >
                                            Student
                                        </h3>

                                        <p className="mt-7 max-w-md text-sm leading-relaxed text-white/45">
                                            Building my foundation through academics,
                                            coding practice, backend projects, and
                                            continuous learning.
                                        </p>

                                    </div>


                                    {/* Tags */}

                                    <div className="mt-10 flex flex-wrap gap-2">

                                        {["B.Tech", "Java", "DSA"].map((item) => (

                                            <span
                                                key={item}
                                                className="rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-wider"
                                                style={{
                                                    borderColor:
                                                        "rgba(168,85,247,0.3)",
                                                    color: "#A855F7",
                                                }}
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>

                                </div>


                                {/* Bottom accent */}

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{
                                        backgroundColor: "#A855F7",
                                    }}
                                />

                            </article>

                        </FadeIn>


                        {/* ======================================= */}
                        {/* CARD 02 — NEXT */}
                        {/* ======================================= */}

                        <FadeIn delay={0.3} className="h-full">

                            <article
                                className="group relative flex h-full min-h-[500px] flex-col overflow-hidden border border-[#38BDF8]/30 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/60 sm:p-9"
                            >

                                {/* Blue glow */}

                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-[0.05] blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                    }}
                                />

                                <div className="relative flex h-full flex-col">

                                    {/* Top */}

                                    <div className="flex items-center justify-between">

                                        <span
                                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                                            style={{
                                                borderColor:
                                                    "rgba(56,189,248,0.6)",
                                                color: "#38BDF8",
                                                backgroundColor: "#0C0C0C",
                                                boxShadow:
                                                    "0 0 20px rgba(56,189,248,0.12)",
                                            }}
                                        >
                                            NEXT
                                        </span>

                                        <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                            02
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="mt-12 flex-1">

                                        <p
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#38BDF8" }}
                                        >
                                            Short-Term Goal
                                        </p>

                                        <h3
                                            className="mt-4 font-black uppercase leading-[0.88] tracking-tight"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize:
                                                    "clamp(2.2rem, 3.3vw, 3.3rem)",
                                                textShadow:
                                                    "0 0 30px rgba(56,189,248,0.12)",
                                            }}
                                        >
                                            Java
                                            <br />
                                            Developer
                                        </h3>

                                        <p className="mt-7 max-w-md text-sm leading-relaxed text-white/45">
                                            Become a capable Java developer with strong
                                            knowledge of backend development, Spring Boot,
                                            databases, security, APIs, and problem solving.
                                        </p>

                                    </div>


                                    {/* Tags */}

                                    <div className="mt-10 flex flex-wrap gap-2">

                                        {[
                                            "Spring Boot",
                                            "Backend",
                                            "Security",
                                        ].map((item) => (

                                            <span
                                                key={item}
                                                className="rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-wider"
                                                style={{
                                                    borderColor:
                                                        "rgba(56,189,248,0.3)",
                                                    color: "#38BDF8",
                                                }}
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>

                                </div>


                                {/* Bottom accent */}

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                    }}
                                />

                            </article>

                        </FadeIn>


                        {/* ======================================= */}
                        {/* CARD 03 — GOAL */}
                        {/* ======================================= */}

                        <FadeIn delay={0.35} className="h-full">

                            <article
                                className="group relative flex h-full min-h-[500px] flex-col overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00]/50 sm:p-9"
                            >

                                {/* Green glow */}

                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                    }}
                                />

                                <div className="relative flex h-full flex-col">

                                    {/* Top */}

                                    <div className="flex items-center justify-between">

                                        <span
                                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                                            style={{
                                                borderColor:
                                                    "rgba(182,255,0,0.6)",
                                                color: "#B6FF00",
                                                backgroundColor: "#0C0C0C",
                                                boxShadow:
                                                    "0 0 20px rgba(182,255,0,0.12)",
                                            }}
                                        >
                                            GOAL
                                        </span>

                                        <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                            03
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="mt-12 flex-1">

                                        <p
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#B6FF00" }}
                                        >
                                            Long-Term Goal
                                        </p>

                                        <h3
                                            className="mt-4 font-black uppercase leading-[0.88] tracking-tight"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize:
                                                    "clamp(2.2rem, 3.3vw, 3.3rem)",
                                                textShadow:
                                                    "0 0 30px rgba(182,255,0,0.12)",
                                            }}
                                        >
                                            Senior
                                            <br />
                                            Engineer
                                        </h3>

                                        <p className="mt-7 max-w-md text-sm leading-relaxed text-white/45">
                                            Grow into a senior engineer capable of designing,
                                            building, and reasoning about complex software
                                            systems from the ground up.
                                        </p>

                                    </div>


                                    {/* Tags */}

                                    <div className="mt-10 flex flex-wrap gap-2">

                                        {[
                                            "Architecture",
                                            "Scalability",
                                            "Systems",
                                        ].map((item) => (

                                            <span
                                                key={item}
                                                className="rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-wider"
                                                style={{
                                                    borderColor:
                                                        "rgba(182,255,0,0.3)",
                                                    color: "#B6FF00",
                                                }}
                                            >
                                                {item}
                                            </span>

                                        ))}

                                    </div>

                                </div>


                                {/* Bottom accent */}

                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                    }}
                                />

                            </article>

                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* MISSION STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.45}>

                        <div className="relative mt-20 overflow-hidden border border-white/10 p-8 sm:p-12 md:mt-28 md:p-16">

                            {/* Mission glow */}

                            <div
                                className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[120px]"
                                style={{
                                    backgroundColor: "#A855F7",
                                }}
                            />

                            <div className="relative">

                                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                    Mission
                                </p>

                                <h3
                                    className="mt-7 max-w-5xl font-black uppercase leading-[0.88]"
                                    style={{
                                        fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                    }}
                                >

                                    <span className="text-white">
                                        Become
                                    </span>{" "}

                                    <span style={{ color: "#A855F7" }}>
                                        exceptionally
                                    </span>

                                    <br />

                                    <span style={{ color: "#38BDF8" }}>
                                        good
                                    </span>{" "}

                                    <span className="text-white">
                                        at building.
                                    </span>

                                </h3>

                                <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
                                    I'm not trying to learn every technology that exists.
                                    I'm focused on developing the depth, discipline, and
                                    problem-solving ability needed to build software that
                                    actually works.
                                </p>

                            </div>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* CURRENT TRAJECTORY */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>

                        <div className="mt-16 border-t border-white/10 pt-8">

                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                                <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                    Current trajectory
                                </span>

                                <div className="flex flex-wrap items-center gap-3">

                                    <span
                                        className="text-xs font-medium uppercase tracking-wider"
                                        style={{ color: "#A855F7" }}
                                    >
                                        Student
                                    </span>

                                    <span className="text-white/20">
                                        →
                                    </span>

                                    <span
                                        className="text-xs font-medium uppercase tracking-wider"
                                        style={{ color: "#38BDF8" }}
                                    >
                                        Java Developer
                                    </span>

                                    <span className="text-white/20">
                                        →
                                    </span>

                                    <span
                                        className="text-xs font-medium uppercase tracking-wider"
                                        style={{ color: "#B6FF00" }}
                                    >
                                        Software Engineer
                                    </span>

                                </div>

                            </div>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* END ACCENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.55}>

                        <div className="mt-16 flex items-center gap-4">

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                            <span
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#B6FF00",
                                    boxShadow:
                                        "0 0 15px rgba(182,255,0,0.7)",
                                }}
                            />

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                        </div>

                    </FadeIn>

                </div>
            </section>
            {/* ========================================= */}
            {/* SECTION 08 — BEYOND THE CODE */}
            {/* ========================================= */}

            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -right-52 top-20 h-[550px] w-[550px] rounded-full opacity-[0.06] blur-[150px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -left-52 bottom-0 h-[500px] w-[500px] rounded-full opacity-[0.05] blur-[150px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div
                    className="pointer-events-none absolute right-[35%] bottom-[-250px] h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[150px]"
                    style={{ backgroundColor: "#B6FF00" }}
                />

                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* HEADER */}
                    {/* ========================================= */}

                    <FadeIn>

                        <div className="flex items-center justify-between">

                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#38BDF8" }}
                            >
                                08 — Beyond The Code
                            </p>

                            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/20 sm:block">
                                The person behind the developer
                            </span>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* BIG HEADING */}
                    {/* ========================================= */}

                    <FadeIn delay={0.1}>

                        <div className="mt-14">

                            <h2
                                className="font-black uppercase leading-[0.82]"
                                style={{
                                    fontSize: "clamp(3.5rem, 10vw, 10rem)",
                                }}
                            >

                                <span className="text-white">
                                    OFF
                                </span>{" "}

                                <span
                                    style={{
                                        color: "#A855F7",
                                        textShadow:
                                            "0 0 40px rgba(168,85,247,0.22)",
                                    }}
                                >
                                    THE
                                </span>

                                <br />

                                <span
                                    style={{
                                        color: "#38BDF8",
                                        textShadow:
                                            "0 0 40px rgba(56,189,248,0.2)",
                                    }}
                                >
                                    SCREEN.
                                </span>

                            </h2>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* INTRO */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>

                        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                            <p className="max-w-2xl text-base leading-relaxed text-white/50 md:text-xl">
                                Coding is a big part of my life, but it isn't the whole
                                story. Outside of building software, I enjoy activities
                                that keep me competitive, creative, and curious.
                            </p>

                            <span
                                className="text-xs uppercase tracking-[0.2em]"
                                style={{ color: "#B6FF00" }}
                            >
                                Balance matters
                            </span>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* HOBBY GRID */}
                    {/* ========================================= */}

                    <div className="mt-20 grid gap-5 md:grid-cols-3 md:mt-24">


                        {/* ======================================= */}
                        {/* CRICKET */}
                        {/* ======================================= */}

                        <FadeIn delay={0.25}>

                            <article
                                className="group relative min-h-[420px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 sm:p-9"
                            >

                                {/* Large background number */}

                                <span
                                    className="pointer-events-none absolute -right-3 -top-10 font-black leading-none opacity-[0.035]"
                                    style={{
                                        fontSize: "12rem",
                                    }}
                                >
                                    01
                                </span>


                                {/* Glow */}

                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{
                                        backgroundColor: "#A855F7",
                                    }}
                                />


                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}

                                    <div className="flex items-center justify-between">

                                        <div
                                            className="flex h-16 w-16 items-center justify-center rounded-full border text-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                            style={{
                                                borderColor:
                                                    "rgba(168,85,247,0.4)",
                                                backgroundColor:
                                                    "rgba(168,85,247,0.04)",
                                            }}
                                        >
                                            🏏
                                        </div>

                                        <span
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#A855F7" }}
                                        >
                                            01
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="mt-auto">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                            Competitive
                                        </p>

                                        <h3
                                            className="mt-3 font-black uppercase leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize:
                                                    "clamp(2.8rem, 5vw, 4.5rem)",
                                                textShadow:
                                                    "0 0 30px rgba(168,85,247,0.15)",
                                            }}
                                        >
                                            Cricket
                                        </h3>

                                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
                                            A game that keeps me competitive, energetic,
                                            and connected with people outside the world
                                            of technology.
                                        </p>

                                    </div>


                                    {/* Bottom accent */}

                                    <div
                                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                        style={{
                                            backgroundColor: "#A855F7",
                                        }}
                                    />

                                </div>

                            </article>

                        </FadeIn>


                        {/* ======================================= */}
                        {/* CHESS */}
                        {/* ======================================= */}

                        <FadeIn delay={0.3}>

                            <article
                                className="group relative min-h-[420px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/50 sm:p-9"
                            >

                                {/* Large background number */}

                                <span
                                    className="pointer-events-none absolute -right-3 -top-10 font-black leading-none opacity-[0.035]"
                                    style={{
                                        fontSize: "12rem",
                                    }}
                                >
                                    02
                                </span>


                                {/* Glow */}

                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                    }}
                                />


                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}

                                    <div className="flex items-center justify-between">

                                        <div
                                            className="flex h-16 w-16 items-center justify-center rounded-full border text-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                                            style={{
                                                borderColor:
                                                    "rgba(56,189,248,0.4)",
                                                backgroundColor:
                                                    "rgba(56,189,248,0.04)",
                                            }}
                                        >
                                            ♟
                                        </div>

                                        <span
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#38BDF8" }}
                                        >
                                            02
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="mt-auto">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                            Strategic
                                        </p>

                                        <h3
                                            className="mt-3 font-black uppercase leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize:
                                                    "clamp(2.8rem, 5vw, 4.5rem)",
                                                textShadow:
                                                    "0 0 30px rgba(56,189,248,0.15)",
                                            }}
                                        >
                                            Chess
                                        </h3>

                                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
                                            A reminder that good decisions come from
                                            thinking ahead, understanding possibilities,
                                            and staying patient.
                                        </p>

                                    </div>


                                    {/* Bottom accent */}

                                    <div
                                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                        style={{
                                            backgroundColor: "#38BDF8",
                                        }}
                                    />

                                </div>

                            </article>

                        </FadeIn>


                        {/* ======================================= */}
                        {/* COOKING */}
                        {/* ======================================= */}

                        <FadeIn delay={0.35}>

                            <article
                                className="group relative min-h-[420px] overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00]/50 sm:p-9"
                            >

                                {/* Large background number */}

                                <span
                                    className="pointer-events-none absolute -right-3 -top-10 font-black leading-none opacity-[0.035]"
                                    style={{
                                        fontSize: "12rem",
                                    }}
                                >
                                    03
                                </span>


                                {/* Glow */}

                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-20"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                    }}
                                />


                                <div className="relative flex h-full flex-col">

                                    {/* Icon */}

                                    <div className="flex items-center justify-between">

                                        <div
                                            className="flex h-16 w-16 items-center justify-center rounded-full border text-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                            style={{
                                                borderColor:
                                                    "rgba(182,255,0,0.4)",
                                                backgroundColor:
                                                    "rgba(182,255,0,0.04)",
                                            }}
                                        >
                                            🍳
                                        </div>

                                        <span
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#B6FF00" }}
                                        >
                                            03
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="mt-auto">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                            Creative
                                        </p>

                                        <h3
                                            className="mt-3 font-black uppercase leading-none"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize:
                                                    "clamp(2.8rem, 5vw, 4.5rem)",
                                                textShadow:
                                                    "0 0 30px rgba(182,255,0,0.15)",
                                            }}
                                        >
                                            Cooking
                                        </h3>

                                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
                                            Something completely different from coding —
                                            experimenting with ingredients, recipes,
                                            and creating something from scratch.
                                        </p>

                                    </div>


                                    {/* Bottom accent */}

                                    <div
                                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                                        style={{
                                            backgroundColor: "#B6FF00",
                                        }}
                                    />

                                </div>

                            </article>

                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* PERSONAL STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.45}>

                        <div className="relative mt-20 overflow-hidden border border-white/10 p-8 sm:p-12 md:mt-24 md:p-16">

                            {/* Decorative glow */}

                            <div
                                className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-[0.05] blur-[100px]"
                                style={{
                                    backgroundColor: "#38BDF8",
                                }}
                            />

                            <div
                                className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-[0.05] blur-[100px]"
                                style={{
                                    backgroundColor: "#A855F7",
                                }}
                            />


                            <div className="relative">

                                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                            A little more about me
                                        </p>

                                        <h3
                                            className="mt-6 max-w-4xl font-black uppercase leading-[0.9]"
                                            style={{
                                                fontSize:
                                                    "clamp(2.5rem, 5vw, 5.5rem)",
                                            }}
                                        >

                                            <span className="text-white">
                                                Build.
                                            </span>{" "}

                                            <span
                                                style={{
                                                    color: "#A855F7",
                                                }}
                                            >
                                                Think.
                                            </span>{" "}

                                            <span
                                                style={{
                                                    color: "#38BDF8",
                                                }}
                                            >
                                                Play.
                                            </span>

                                        </h3>

                                    </div>


                                    <div className="max-w-sm">

                                        <p className="text-sm leading-relaxed text-white/40 md:text-base">
                                            Whether I'm solving a programming problem,
                                            playing a game of chess, watching a cricket
                                            match, or experimenting in the kitchen, I enjoy
                                            learning, experimenting, and improving.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* FINAL PERSONALITY STRIP */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>

                        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                Outside the IDE
                            </span>

                            <div className="flex flex-wrap items-center gap-4">

                                <span
                                    className="text-xs font-medium uppercase tracking-wider"
                                    style={{ color: "#A855F7" }}
                                >
                                    Cricket
                                </span>

                                <span className="text-white/15">
                                    •
                                </span>

                                <span
                                    className="text-xs font-medium uppercase tracking-wider"
                                    style={{ color: "#38BDF8" }}
                                >
                                    Chess
                                </span>

                                <span className="text-white/15">
                                    •
                                </span>

                                <span
                                    className="text-xs font-medium uppercase tracking-wider"
                                    style={{ color: "#B6FF00" }}
                                >
                                    Cooking
                                </span>

                            </div>

                        </div>

                    </FadeIn>

                </div>
            </section>
            {/* ========================================= */}
            {/* ABOUT PAGE FOOTER */}
            {/* ========================================= */}

            <footer
                className="relative overflow-hidden border-t border-white/10 px-5 pb-8 pt-24 sm:px-8 sm:pt-28 md:px-10 md:pt-36"
                style={{ backgroundColor: "#080808" }}
            >
                {/* ========================================= */}
                {/* AMBIENT NEON GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[150px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-52 top-40 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[150px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div
                    className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.05] blur-[160px]"
                    style={{ backgroundColor: "#B6FF00" }}
                />

                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "90px 90px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* FINAL STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn>

                        <div className="relative">

                            <p
                                className="text-xs font-medium uppercase tracking-[0.25em]"
                                style={{ color: "#A855F7" }}
                            >
                                End of the page — not the journey
                            </p>


                            <h2
                                className="mt-8 max-w-6xl font-black uppercase leading-[0.8]"
                                style={{
                                    fontSize: "clamp(4rem, 11vw, 11rem)",
                                }}
                            >

                                <span className="text-white">
                                    Just
                                </span>{" "}

                                <span
                                    style={{
                                        color: "#A855F7",
                                        textShadow:
                                            "0 0 45px rgba(168,85,247,0.22)",
                                    }}
                                >
                                    The
                                </span>

                                <br />

                                <span
                                    style={{
                                        color: "#38BDF8",
                                        textShadow:
                                            "0 0 45px rgba(56,189,248,0.2)",
                                    }}
                                >
                                    Beginning.
                                </span>

                            </h2>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* CLOSING MESSAGE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.15}>

                        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                            <p className="max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                                I'm still learning, still building, and still figuring out
                                how far I can take this journey. But every project,
                                every problem solved, and every new concept learned
                                moves me one step forward.
                            </p>

                            <div className="flex items-center gap-3">

                                <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                    Keep building
                                </span>

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                        boxShadow:
                                            "0 0 14px rgba(182,255,0,0.8)",
                                    }}
                                />

                            </div>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* LARGE NAME */}
                    {/* ========================================= */}

                    <FadeIn delay={0.25}>

                        <div className="mt-24 border-y border-white/10 py-8 md:mt-32 md:py-10">

                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                                <h3
                                    className="font-black uppercase leading-none"
                                    style={{
                                        fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                    }}
                                >
                                    <span className="text-white">
                                        Prem
                                    </span>{" "}

                                    <span
                                        style={{
                                            color: "#A855F7",
                                        }}
                                    >
                                        Nandurkar
                                    </span>
                                </h3>


                                <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                                    Java • Backend • Builder
                                </span>

                            </div>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* FOOTER NAVIGATION */}
                    {/* ========================================= */}

                    <FadeIn delay={0.35}>

                        <div className="grid gap-12 py-14 sm:grid-cols-2 md:grid-cols-4 md:py-16">

                            {/* About */}

                            <div>

                                <p
                                    className="text-xs uppercase tracking-[0.2em]"
                                    style={{ color: "#A855F7" }}
                                >
                                    Explore
                                </p>

                                <div className="mt-6 flex flex-col gap-4">

                                    <a
                                        href="/"
                                        className="w-fit text-sm text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="/about"
                                        className="w-fit text-sm text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        About
                                    </a>

                                </div>

                            </div>


                            {/* Social */}

                            <div>

                                <p
                                    className="text-xs uppercase tracking-[0.2em]"
                                    style={{ color: "#38BDF8" }}
                                >
                                    Connect
                                </p>

                                <div className="mt-6 flex flex-col gap-4">

                                    <a
                                        href="https://github.com/Nandurkar-Prem"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-fit items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        GitHub

                                        <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1">
                                            ↗
                                        </span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/prem-nandurkar-0a09a0276/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-fit items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        LinkedIn

                                        <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1">
                                            ↗
                                        </span>
                                    </a>

                                    <a
                                        href="https://leetcode.com/u/Prem_Nandurkar/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-fit items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        LeetCode

                                        <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1">
                                            ↗
                                        </span>
                                    </a>

                                </div>

                            </div>


                            {/* Focus */}

                            <div>

                                <p
                                    className="text-xs uppercase tracking-[0.2em]"
                                    style={{ color: "#B6FF00" }}
                                >
                                    Currently
                                </p>

                                <div className="mt-6 flex flex-col gap-4">

                                    <span className="text-sm text-white/45">
                                        Java
                                    </span>

                                    <span className="text-sm text-white/45">
                                        Spring Boot
                                    </span>

                                    <span className="text-sm text-white/45">
                                        DSA
                                    </span>

                                </div>

                            </div>


                            {/* Contact */}

                            <div>

                                <p
                                    className="text-xs uppercase tracking-[0.2em]"
                                    style={{ color: "#A855F7" }}
                                >
                                    Say Hello
                                </p>

                                <div className="mt-6">

                                    <a
                                        href="mailto:nandurkarperem1@gmail.com"
                                        className="group block max-w-[220px] text-sm leading-relaxed text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        nandurkarperem1@gmail.com

                                        <span
                                            className="mt-3 block h-px w-0 transition-all duration-500 group-hover:w-full"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, #A855F7, #38BDF8)",
                                            }}
                                        />

                                    </a>

                                </div>

                            </div>

                        </div>

                    </FadeIn>


                    {/* ========================================= */}
                    {/* FINAL FOOTER BAR */}
                    {/* ========================================= */}

                    <FadeIn delay={0.45}>

                        <div className="border-t border-white/10 pt-6">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                                    © {new Date().getFullYear()} Prem Pramod Nandurkar
                                </p>


                                <div className="flex items-center gap-3">

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                                        Built with
                                    </span>

                                    <span
                                        className="text-[10px] font-medium uppercase tracking-[0.2em]"
                                        style={{ color: "#38BDF8" }}
                                    >
                                        Code
                                    </span>

                                    <span className="text-white/15">
                                        +
                                    </span>

                                    <span
                                        className="text-[10px] font-medium uppercase tracking-[0.2em]"
                                        style={{ color: "#A855F7" }}
                                    >
                                        Curiosity
                                    </span>

                                </div>


                                <span
                                    className="text-[10px] uppercase tracking-[0.2em]"
                                    style={{ color: "#B6FF00" }}
                                >
                                    Keep moving →
                                </span>
                            </div>
                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* FINAL NEON ACCENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.55}>

                        <div className="mt-12 flex items-center gap-4">

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                            <div
                                className="h-2 w-2 rounded-full"
                                style={{
                                    backgroundColor: "#B6FF00",
                                    boxShadow:
                                        "0 0 16px rgba(182,255,0,0.8)",
                                }}
                            />

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.1))",
                                }}
                            />

                        </div>

                    </FadeIn>

                </div>
            </footer>
        </main>
    );
}