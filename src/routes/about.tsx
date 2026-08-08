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
            {/* TECH STACK */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full opacity-[0.07] blur-[130px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-40 top-[45%] h-[450px] w-[450px] rounded-full opacity-[0.06] blur-[130px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div
                    className="pointer-events-none absolute bottom-0 left-[40%] h-[350px] w-[350px] rounded-full opacity-[0.04] blur-[120px]"
                    style={{ backgroundColor: "#B6FF00" }}
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
                                03 — Technical Skills
                            </p>

                            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/20 sm:block">
                                Developer Stack
                            </span>

                        </div>
                    </FadeIn>


                    <FadeIn delay={0.1}>
                        <h2
                            className="mt-12 font-black uppercase leading-[0.8] text-white"
                            style={{
                                fontSize: "clamp(4rem, 10vw, 10rem)",
                            }}
                        >
                            My
                            <br />

                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 35px rgba(168,85,247,0.25)",
                                }}
                            >
                                Stack
                            </span>

                            <span style={{ color: "#38BDF8" }}>
                                .
                            </span>
                        </h2>
                    </FadeIn>


                    <FadeIn delay={0.15}>
                        <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                            The technologies I use to turn ideas into applications — from
                            backend architecture and APIs to frontend interfaces, databases,
                            and development tools.
                        </p>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* CORE STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>
                        <div className="mt-20 border-y border-white/10 py-10 md:mt-28 md:py-14">

                            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                                {/* Primary Focus */}

                                <div>

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                        Primary Focus
                                    </p>

                                    <p
                                        className="mt-4 font-black uppercase leading-none"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                            textShadow:
                                                "0 0 25px rgba(56,189,248,0.2)",
                                        }}
                                    >
                                        Backend
                                    </p>

                                </div>


                                {/* Backend Identity */}

                                <div className="max-w-xl md:text-right">

                                    <p className="text-sm leading-relaxed text-white/50 md:text-base">
                                        My primary development focus is Java backend development,
                                        especially building secure REST APIs and applications with
                                        Spring Boot.
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2 md:justify-end">

                                        <span
                                            className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.3)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            Java
                                        </span>

                                        <span
                                            className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.3)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            Spring Boot
                                        </span>

                                        <span
                                            className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.3)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            REST APIs
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* SKILL DOMAINS */}
                    {/* ========================================= */}

                    <div className="mt-16 md:mt-24">


                        {/* ===================================== */}
                        {/* 01 — PROGRAMMING */}
                        {/* ===================================== */}

                        <FadeIn delay={0.25}>
                            <div className="group relative border-b border-white/10 py-10 md:py-14">

                                <div className="grid gap-8 md:grid-cols-[140px_0.8fr_1.2fr] md:items-start">

                                    {/* Number */}

                                    <div>

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            01
                                        </span>

                                    </div>


                                    {/* Heading */}

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Foundation
                                        </p>

                                        <h3
                                            className="mt-3 font-medium uppercase"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                                            }}
                                        >
                                            Programming
                                        </h3>

                                    </div>


                                    {/* Technologies */}

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "Java",
                                            "Python",
                                            "JavaScript",
                                            "SQL",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border px-5 py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.18)]"
                                                style={{
                                                    borderColor: "rgba(168,85,247,0.35)",
                                                    color: "#A855F7",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 02 — BACKEND */}
                        {/* ===================================== */}

                        <FadeIn delay={0.3}>
                            <div className="group relative border-b border-white/10 py-10 md:py-14">

                                <div className="grid gap-8 md:grid-cols-[140px_0.8fr_1.2fr] md:items-start">

                                    {/* Number */}

                                    <div>

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            02
                                        </span>

                                    </div>


                                    {/* Heading */}

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Core Development
                                        </p>

                                        <h3
                                            className="mt-3 font-medium uppercase"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                                            }}
                                        >
                                            Backend
                                        </h3>

                                    </div>


                                    {/* Technologies */}

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "Spring Boot",
                                            "Spring MVC",
                                            "Spring Security",
                                            "REST APIs",
                                            "JPA",
                                            "Hibernate",
                                            "JWT",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border px-5 py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]"
                                                style={{
                                                    borderColor: "rgba(56,189,248,0.35)",
                                                    color: "#38BDF8",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 03 — FRONTEND */}
                        {/* ===================================== */}

                        <FadeIn delay={0.35}>
                            <div className="group relative border-b border-white/10 py-10 md:py-14">

                                <div className="grid gap-8 md:grid-cols-[140px_0.8fr_1.2fr] md:items-start">

                                    {/* Number */}

                                    <div>

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            03
                                        </span>

                                    </div>


                                    {/* Heading */}

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Interface
                                        </p>

                                        <h3
                                            className="mt-3 font-medium uppercase"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                                            }}
                                        >
                                            Frontend
                                        </h3>

                                    </div>


                                    {/* Technologies */}

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "React",
                                            "TypeScript",
                                            "HTML",
                                            "CSS",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border px-5 py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.18)]"
                                                style={{
                                                    borderColor: "rgba(168,85,247,0.35)",
                                                    color: "#A855F7",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 04 — DATABASE */}
                        {/* ===================================== */}

                        <FadeIn delay={0.4}>
                            <div className="group relative border-b border-white/10 py-10 md:py-14">

                                <div className="grid gap-8 md:grid-cols-[140px_0.8fr_1.2fr] md:items-start">

                                    {/* Number */}

                                    <div>

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            04
                                        </span>

                                    </div>


                                    {/* Heading */}

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Data Layer
                                        </p>

                                        <h3
                                            className="mt-3 font-medium uppercase"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                                            }}
                                        >
                                            Database
                                        </h3>

                                    </div>


                                    {/* Technologies */}

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "MySQL",
                                            "MongoDB",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border px-5 py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(56,189,248,0.18)]"
                                                style={{
                                                    borderColor: "rgba(56,189,248,0.35)",
                                                    color: "#38BDF8",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* 05 — TOOLS */}
                        {/* ===================================== */}

                        <FadeIn delay={0.45}>
                            <div className="group relative border-b border-white/10 py-10 md:py-14">

                                <div className="grid gap-8 md:grid-cols-[140px_0.8fr_1.2fr] md:items-start">

                                    {/* Number */}

                                    <div>

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize: "clamp(3rem, 5vw, 5rem)",
                                            }}
                                        >
                                            05
                                        </span>

                                    </div>


                                    {/* Heading */}

                                    <div>

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                            Workflow
                                        </p>

                                        <h3
                                            className="mt-3 font-medium uppercase"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                                            }}
                                        >
                                            Tools
                                        </h3>

                                    </div>


                                    {/* Technologies */}

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "Git",
                                            "GitHub",
                                            "Docker",
                                            "Postman",
                                            "Maven",
                                            "IntelliJ IDEA",
                                            "VS Code",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border px-5 py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(182,255,0,0.18)]"
                                                style={{
                                                    borderColor: "rgba(182,255,0,0.35)",
                                                    color: "#B6FF00",
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* STACK SUMMARY */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>
                        <div className="mt-20 overflow-hidden border border-white/10 md:mt-28">

                            <div className="grid md:grid-cols-2">

                                {/* LEFT — CURRENT DIRECTION */}

                                <div className="relative border-b border-white/10 p-7 sm:p-10 md:border-b-0 md:border-r md:p-14">

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        Current Direction
                                    </p>

                                    <h3
                                        className="mt-8 font-black uppercase leading-[0.9]"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(2.5rem, 5vw, 5rem)",
                                        }}
                                    >
                                        Java
                                        <br />
                                        Backend
                                    </h3>

                                    <p className="mt-8 max-w-md text-sm leading-relaxed text-white/45">
                                        Building a strong foundation in Java and Spring Boot while
                                        exploring backend architecture, security, databases, and
                                        scalable application development.
                                    </p>

                                </div>


                                {/* RIGHT — EXPLORING NEXT */}

                                <div className="relative p-7 sm:p-10 md:p-14">

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        Exploring Next
                                    </p>

                                    <h3
                                        className="mt-8 font-black uppercase leading-[0.9]"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(2.5rem, 5vw, 5rem)",
                                        }}
                                    >
                                        Spring
                                        <br />
                                        Ecosystem
                                    </h3>

                                    <p className="mt-8 max-w-md text-sm leading-relaxed text-white/45">
                                        Continuing to explore Spring Security, Spring AI,
                                        microservices, and the technologies required to build
                                        production-ready backend systems.
                                    </p>

                                </div>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* BOTTOM STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.55}>
                        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <p className="max-w-xl text-xs uppercase leading-relaxed tracking-[0.15em] text-white/25">
                                Technologies change.
                                <br />
                                The ability to learn them doesn't.
                            </p>

                            <div className="flex items-center gap-3">

                                {/* Purple */}

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow:
                                            "0 0 12px rgba(168,85,247,0.6)",
                                    }}
                                />

                                {/* Blue */}

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                        boxShadow:
                                            "0 0 12px rgba(56,189,248,0.6)",
                                    }}
                                />

                                {/* Green */}

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#B6FF00",
                                        boxShadow:
                                            "0 0 12px rgba(182,255,0,0.6)",
                                    }}
                                />

                            </div>

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
            {/* PROJECT EXPERIENCE */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT GLOWS */}
                {/* ========================================= */}

                {/* Purple Glow */}
                <div
                    className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full opacity-[0.07] blur-[120px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                {/* Blue Glow */}
                <div
                    className="pointer-events-none absolute -right-40 bottom-32 h-96 w-96 rounded-full opacity-[0.06] blur-[120px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* SECTION HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <p
                            className="mb-12 text-sm font-medium uppercase tracking-[0.2em]"
                            style={{ color: "#A855F7" }}
                        >
                            06 — Project Experience
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2
                            className="font-black uppercase leading-[0.85] text-white"
                            style={{
                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                            }}
                        >
                            Things
                            <br />
                            I've{" "}
                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 30px rgba(168,85,247,0.25)",
                                }}
                            >
                                Built
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/55 md:text-lg">
                            A selection of projects I've built while learning software
                            development, backend engineering, and full-stack application
                            development.
                        </p>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* PROJECT 01 */}
                    {/* ========================================= */}

                    <FadeIn delay={0.2}>
                        <article className="group relative mt-20 overflow-hidden border border-white/10 md:mt-28">

                            {/* Hover Background */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #A855F7, transparent 60%)",
                                }}
                            />

                            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">

                                {/* Project Header */}
                                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">

                                    {/* Project Number */}
                                    <div>
                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(4rem, 8vw, 8rem)",
                                                textShadow:
                                                    "0 0 25px rgba(168,85,247,0.2)",
                                            }}
                                        >
                                            01
                                        </span>
                                    </div>

                                    {/* Project Type */}
                                    <div className="md:text-right">
                                        <p
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#A855F7" }}
                                        >
                                            Full-Stack Web Application
                                        </p>

                                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/30">
                                            Personal Project
                                        </p>
                                    </div>

                                </div>


                                {/* Project Name */}
                                <div className="mt-10">

                                    <h3
                                        className="font-black uppercase leading-[0.85]"
                                        style={{
                                            color: "#A855F7",
                                            fontSize: "clamp(2.8rem, 7vw, 7rem)",
                                            textShadow:
                                                "0 0 30px rgba(168,85,247,0.2)",
                                        }}
                                    >
                                        Books
                                        <br />
                                        In Budget
                                    </h3>

                                </div>


                                {/* Project Description */}
                                <div className="mt-12 grid gap-10 md:grid-cols-[0.35fr_0.65fr] md:gap-16">

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                            Overview
                                        </p>

                                        <p className="mt-4 text-sm uppercase leading-relaxed text-white/50">
                                            An e-commerce platform designed for selling books online
                                            with category-based browsing and role-based access.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                            What I Built
                                        </p>

                                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
                                            A full-stack book marketplace built to support the practical
                                            requirements of an online book-selling business. The
                                            application allows users to browse books by category,
                                            price, type, and genre while providing sellers with
                                            dedicated controls for managing their listings.
                                        </p>
                                    </div>

                                </div>


                                {/* Technologies */}
                                <div className="mt-12 border-t border-white/10 pt-8">

                                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "Java",
                                            "Spring Boot",
                                            "Spring Security",
                                            "React",
                                            "MySQL",
                                            "REST APIs",
                                            "Bcrypt",
                                        ].map((tech, index) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-1"
                                                style={{
                                                    borderColor:
                                                        index % 2 === 0
                                                            ? "rgba(168,85,247,0.4)"
                                                            : "rgba(56,189,248,0.4)",
                                                    color:
                                                        index % 2 === 0
                                                            ? "#A855F7"
                                                            : "#38BDF8",
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>
                                </div>


                                {/* Key Features */}
                                <div className="mt-12 border-t border-white/10 pt-8">

                                    <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/35">
                                        Key Features
                                    </p>

                                    <div className="grid gap-4 md:grid-cols-2">

                                        {[
                                            "Book browsing with category-based filtering",
                                            "Search by price, type, and genre",
                                            "Role-based seller access",
                                            "Seller book listing management",
                                            "Secure authentication",
                                            "Responsive full-stack architecture",
                                        ].map((feature, index) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-4"
                                            >
                                                <span
                                                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            index % 2 === 0
                                                                ? "#A855F7"
                                                                : "#38BDF8",
                                                        boxShadow:
                                                            index % 2 === 0
                                                                ? "0 0 10px rgba(168,85,247,0.5)"
                                                                : "0 0 10px rgba(56,189,248,0.5)",
                                                    }}
                                                />

                                                <p className="text-sm leading-relaxed text-white/60">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}

                                    </div>
                                </div>


                                {/* Project Links */}
                                <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">

                                    <a
                                        href="#"
                                        className="rounded-full border border-[#A855F7] px-6 py-3 text-sm uppercase tracking-wider text-[#A855F7] transition-all duration-300 hover:bg-[#A855F7] hover:text-black"
                                    >
                                        GitHub →
                                    </a>

                                    <a
                                        href="#"
                                        className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white/60 transition-all duration-300 hover:border-[#38BDF8] hover:text-[#38BDF8]"
                                    >
                                        Live Demo →
                                    </a>

                                </div>

                            </div>
                        </article>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* PROJECT 02 */}
                    {/* ========================================= */}

                    <FadeIn delay={0.3}>
                        <article className="group relative mt-12 overflow-hidden border border-white/10 md:mt-16">

                            {/* Hover Background */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #38BDF8, transparent 60%)",
                                }}
                            />

                            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">

                                {/* Project Header */}
                                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">

                                    {/* Project Number */}
                                    <div>
                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(4rem, 8vw, 8rem)",
                                                textShadow:
                                                    "0 0 25px rgba(56,189,248,0.2)",
                                            }}
                                        >
                                            02
                                        </span>
                                    </div>

                                    {/* Project Type */}
                                    <div className="md:text-right">
                                        <p
                                            className="text-xs uppercase tracking-[0.2em]"
                                            style={{ color: "#38BDF8" }}
                                        >
                                            Full-Stack Management System
                                        </p>

                                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/30">
                                            Personal Project
                                        </p>
                                    </div>

                                </div>


                                {/* Project Name */}
                                <div className="mt-10">

                                    <h3
                                        className="font-black uppercase leading-[0.85]"
                                        style={{
                                            color: "#38BDF8",
                                            fontSize: "clamp(2.8rem, 7vw, 7rem)",
                                            textShadow:
                                                "0 0 30px rgba(56,189,248,0.2)",
                                        }}
                                    >
                                        Employee
                                        <br />
                                        Management
                                        <br />
                                        System
                                    </h3>

                                </div>


                                {/* Project Description */}
                                <div className="mt-12 grid gap-10 md:grid-cols-[0.35fr_0.65fr] md:gap-16">

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                            Overview
                                        </p>

                                        <p className="mt-4 text-sm uppercase leading-relaxed text-white/50">
                                            A role-based employee management platform focused on
                                            secure access, employee operations, and administrative
                                            control.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                            What I Built
                                        </p>

                                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
                                            A full-stack management system that provides different
                                            capabilities based on user roles. Employees have controlled
                                            read access while administrators can create, update, delete,
                                            and manage employee records through a secure backend.
                                        </p>
                                    </div>

                                </div>


                                {/* Technologies */}
                                <div className="mt-12 border-t border-white/10 pt-8">

                                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-3">

                                        {[
                                            "Java",
                                            "Spring Boot",
                                            "Spring Security",
                                            "JWT",
                                            "React",
                                            "MySQL",
                                            "REST APIs",
                                        ].map((tech, index) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-1"
                                                style={{
                                                    borderColor:
                                                        index % 2 === 0
                                                            ? "rgba(56,189,248,0.4)"
                                                            : "rgba(168,85,247,0.4)",
                                                    color:
                                                        index % 2 === 0
                                                            ? "#38BDF8"
                                                            : "#A855F7",
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>
                                </div>


                                {/* Key Features */}
                                <div className="mt-12 border-t border-white/10 pt-8">

                                    <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/35">
                                        Key Features
                                    </p>

                                    <div className="grid gap-4 md:grid-cols-2">

                                        {[
                                            "Employee CRUD operations",
                                            "JWT-based authentication",
                                            "Role-based authorization",
                                            "Admin and employee access levels",
                                            "Employee search and filtering",
                                            "Secure REST API architecture",
                                        ].map((feature, index) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-4"
                                            >
                                                <span
                                                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            index % 2 === 0
                                                                ? "#38BDF8"
                                                                : "#A855F7",
                                                        boxShadow:
                                                            index % 2 === 0
                                                                ? "0 0 10px rgba(56,189,248,0.5)"
                                                                : "0 0 10px rgba(168,85,247,0.5)",
                                                    }}
                                                />

                                                <p className="text-sm leading-relaxed text-white/60">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}

                                    </div>
                                </div>


                                {/* Project Links */}
                                <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">

                                    <a
                                        href="#"
                                        className="rounded-full border border-[#38BDF8] px-6 py-3 text-sm uppercase tracking-wider text-[#38BDF8] transition-all duration-300 hover:bg-[#38BDF8] hover:text-black"
                                    >
                                        GitHub →
                                    </a>

                                    <a
                                        href="#"
                                        className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white/60 transition-all duration-300 hover:border-[#A855F7] hover:text-[#A855F7]"
                                    >
                                        Live Demo →
                                    </a>

                                </div>

                            </div>
                        </article>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* BOTTOM DECORATIVE LINE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.4}>
                        <div className="mt-20 flex items-center gap-4 md:mt-24">

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
                                        "0 0 15px rgba(168,85,247,0.5)",
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
            {/* CERTIFICATIONS */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full opacity-[0.06] blur-[120px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full opacity-[0.05] blur-[120px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* SECTION HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <p
                            className="mb-12 text-sm font-medium uppercase tracking-[0.2em]"
                            style={{ color: "#A855F7" }}
                        >
                            07 — Certifications
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2
                            className="font-black uppercase leading-[0.85] text-white"
                            style={{
                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                            }}
                        >
                            Proof Of
                            <br />
                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 30px rgba(168,85,247,0.25)",
                                }}
                            >
                                Learning
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/55 md:text-lg">
                            Certifications that represent the technologies and concepts I've
                            invested time in learning beyond the classroom.
                        </p>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* CERTIFICATION GRID */}
                    {/* ========================================= */}

                    <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-2">

                        {/* ===================================== */}
                        {/* CERTIFICATION 01 */}
                        {/* ===================================== */}

                        <FadeIn delay={0.2}>
                            <article className="group relative h-full overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 sm:p-9 md:p-10">

                                {/* Hover Glow */}
                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                                <div className="relative">

                                    {/* Top Row */}
                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(168,85,247,0.2)",
                                            }}
                                        >
                                            01
                                        </span>

                                        <span
                                            className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em]"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.4)",
                                                color: "#A855F7",
                                            }}
                                        >
                                            2026
                                        </span>

                                    </div>


                                    {/* Certification Title */}
                                    <div className="mt-14">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                            Udemy
                                        </p>

                                        <h3
                                            className="mt-4 font-medium uppercase leading-tight"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                                            }}
                                        >
                                            Spring Boot 4
                                            <br />
                                            & Spring 7
                                        </h3>

                                    </div>


                                    {/* Description */}
                                    <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                                        Certification covering Spring Boot and Spring Framework
                                        concepts with a focus on building modern Java-based
                                        applications.
                                    </p>


                                    {/* Bottom */}
                                    <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                                Issued By
                                            </p>

                                            <p className="mt-2 text-sm uppercase text-white/70">
                                                Udemy
                                            </p>
                                        </div>

                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-[#A855F7] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.5)",
                                                color: "#A855F7",
                                            }}
                                        >
                                            ↗
                                        </div>

                                    </div>

                                </div>
                            </article>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* CERTIFICATION 02 */}
                        {/* ===================================== */}

                        <FadeIn delay={0.3}>
                            <article className="group relative h-full overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/50 sm:p-9 md:p-10">

                                {/* Hover Glow */}
                                <div
                                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20"
                                    style={{ backgroundColor: "#38BDF8" }}
                                />

                                <div className="relative">

                                    {/* Top Row */}
                                    <div className="flex items-start justify-between">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(56,189,248,0.2)",
                                            }}
                                        >
                                            02
                                        </span>

                                        <span
                                            className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em]"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.4)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            2026
                                        </span>

                                    </div>


                                    {/* Certification Title */}
                                    <div className="mt-14">

                                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                            Udemy
                                        </p>

                                        <h3
                                            className="mt-4 font-medium uppercase leading-tight"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                                            }}
                                        >
                                            Spring Boot
                                            <br />
                                            Professional E-Commerce
                                        </h3>

                                    </div>


                                    {/* Description */}
                                    <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                                        A practical course focused on building an e-commerce
                                        application with Spring Boot and understanding the architecture
                                        behind a real-world backend system.
                                    </p>


                                    {/* Bottom */}
                                    <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">

                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                                Issued By
                                            </p>

                                            <p className="mt-2 text-sm uppercase text-white/70">
                                                Udemy
                                            </p>
                                        </div>

                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.5)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            ↗
                                        </div>

                                    </div>

                                </div>
                            </article>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* CREDENTIAL NOTE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.4}>
                        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <p className="max-w-xl text-xs uppercase leading-relaxed tracking-[0.15em] text-white/30">
                                Continuous learning is part of my development journey.
                            </p>

                            <div className="flex items-center gap-3">

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow:
                                            "0 0 12px rgba(168,85,247,0.6)",
                                    }}
                                />

                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{
                                        backgroundColor: "#38BDF8",
                                        boxShadow:
                                            "0 0 12px rgba(56,189,248,0.6)",
                                    }}
                                />

                                <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                                    Always Learning
                                </span>

                            </div>

                        </div>
                    </FadeIn>

                </div>
            </section>
            {/* ACHIEVEMENTS */}
            <section
                className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* AMBIENT GLOWS */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full opacity-[0.07] blur-[120px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                <div
                    className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full opacity-[0.06] blur-[120px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div className="relative mx-auto max-w-7xl">

                    {/* ========================================= */}
                    {/* HEADER */}
                    {/* ========================================= */}

                    <FadeIn>
                        <p
                            className="mb-12 text-sm font-medium uppercase tracking-[0.2em]"
                            style={{ color: "#A855F7" }}
                        >
                            08 — Achievements
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2
                            className="font-black uppercase leading-[0.85] text-white"
                            style={{
                                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                            }}
                        >
                            Proof Of
                            <br />
                            <span
                                style={{
                                    color: "#A855F7",
                                    textShadow:
                                        "0 0 30px rgba(168,85,247,0.25)",
                                }}
                            >
                                Progress
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/55 md:text-lg">
                            Milestones that reflect my consistency, curiosity, and commitment
                            to becoming a better software developer.
                        </p>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* BIG STATS */}
                    {/* ========================================= */}

                    <div className="mt-20 grid gap-5 md:mt-28 md:grid-cols-3">

                        {/* ===================================== */}
                        {/* STAT 01 — LEETCODE */}
                        {/* ===================================== */}

                        <FadeIn delay={0.2}>
                            <div className="group relative overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00]/40 sm:p-9">

                                {/* Glow */}
                                <div
                                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20"
                                    style={{ backgroundColor: "#B6FF00" }}
                                />

                                <div className="relative">

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                        Problem Solving
                                    </p>

                                    <div className="mt-10 flex items-end gap-3">

                                        <span
                                            className="font-black leading-none"
                                            style={{
                                                color: "#B6FF00",
                                                fontSize: "clamp(4rem, 8vw, 7rem)",
                                                textShadow:
                                                    "0 0 25px rgba(182,255,0,0.2)",
                                            }}
                                        >
                                            75+
                                        </span>

                                        <span className="mb-2 text-sm uppercase tracking-wider text-white/40">
                                            Problems
                                        </span>

                                    </div>

                                    <p className="mt-6 text-sm leading-relaxed text-white/55">
                                        LeetCode problems solved while strengthening Data Structures
                                        and Algorithms knowledge.
                                    </p>

                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: "#B6FF00",
                                                boxShadow:
                                                    "0 0 12px rgba(182,255,0,0.6)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                                            Consistency
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* STAT 02 — HACKATHON */}
                        {/* ===================================== */}

                        <FadeIn delay={0.25}>
                            <div className="group relative overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/40 sm:p-9">

                                {/* Glow */}
                                <div
                                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20"
                                    style={{ backgroundColor: "#A855F7" }}
                                />

                                <div className="relative">

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                        Competition
                                    </p>

                                    <div className="mt-10">

                                        <span
                                            className="block break-words font-black uppercase leading-[0.85]"
                                            style={{
                                                color: "#A855F7",
                                                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(168,85,247,0.2)",
                                            }}
                                        >
                                            National
                                        </span>

                                        <p
                                            className="mt-2 text-xl font-medium uppercase"
                                            style={{ color: "#A855F7" }}
                                        >
                                            Level Hackathon
                                        </p>

                                    </div>

                                    <p className="mt-6 text-sm leading-relaxed text-white/55">
                                        Participated in a National Level Hackathon, gaining experience
                                        in collaborative problem-solving, rapid development, and
                                        building solutions under time constraints.
                                    </p>

                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: "#A855F7",
                                                boxShadow:
                                                    "0 0 12px rgba(168,85,247,0.6)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                                            Teamwork • Innovation
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </FadeIn>


                        {/* ===================================== */}
                        {/* STAT 03 — TECH LEAD */}
                        {/* ===================================== */}

                        <FadeIn delay={0.3}>
                            <div className="group relative overflow-hidden border border-white/10 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/40 sm:p-9">

                                {/* Glow */}
                                <div
                                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20"
                                    style={{ backgroundColor: "#38BDF8" }}
                                />

                                <div className="relative">

                                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                        Leadership
                                    </p>

                                    <div className="mt-10">

                                        <span
                                            className="block break-words font-black uppercase leading-[0.85]"
                                            style={{
                                                color: "#38BDF8",
                                                fontSize: "clamp(2.5rem, 3.7vw, 4.5rem)",
                                                textShadow:
                                                    "0 0 25px rgba(56,189,248,0.2)",
                                            }}
                                        >
                                            Technical
                                        </span>

                                        <p
                                            className="mt-2 text-xl font-medium uppercase"
                                            style={{ color: "#38BDF8" }}
                                        >
                                            Lead
                                        </p>

                                    </div>

                                    <p className="mt-6 text-sm leading-relaxed text-white/55">
                                        Worked as a Technical Lead during a departmental techfest,
                                        contributing to technical coordination, collaboration, and
                                        event execution.
                                    </p>

                                    <div className="mt-8 flex items-center gap-3">

                                        <span
                                            className="h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: "#38BDF8",
                                                boxShadow:
                                                    "0 0 12px rgba(56,189,248,0.6)",
                                            }}
                                        />

                                        <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                                            Leadership • Collaboration
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* ACHIEVEMENT TIMELINE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.35}>
                        <div className="mt-20 border-t border-white/10 pt-10 md:mt-28">

                            <div className="mb-10 flex items-center justify-between">

                                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                    Milestones
                                </p>

                                <span
                                    className="text-xs uppercase tracking-[0.15em]"
                                    style={{ color: "#A855F7" }}
                                >
                                    2026 →
                                </span>

                            </div>


                            {/* Milestone 01 */}
                            <div className="group grid gap-4 border-b border-white/10 py-7 transition-colors duration-300 hover:border-[#A855F7]/40 md:grid-cols-[120px_1fr_auto] md:items-center">

                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "#A855F7" }}
                                >
                                    01
                                </span>

                                <div>
                                    <h3 className="text-lg font-medium uppercase text-white transition-colors duration-300 group-hover:text-[#A855F7]">
                                        National Level Hackathon
                                    </h3>

                                    <p className="mt-2 text-sm text-white/40">
                                        Collaborative problem-solving and rapid project development.
                                    </p>
                                </div>

                                <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                    Experience
                                </span>

                            </div>


                            {/* Milestone 02 */}
                            <div className="group grid gap-4 border-b border-white/10 py-7 transition-colors duration-300 hover:border-[#38BDF8]/40 md:grid-cols-[120px_1fr_auto] md:items-center">

                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "#38BDF8" }}
                                >
                                    02
                                </span>

                                <div>
                                    <h3 className="text-lg font-medium uppercase text-white transition-colors duration-300 group-hover:text-[#38BDF8]">
                                        Technical Lead
                                    </h3>

                                    <p className="mt-2 text-sm text-white/40">
                                        Technical coordination and leadership during departmental
                                        techfest activities.
                                    </p>
                                </div>

                                <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                    Leadership
                                </span>

                            </div>


                            {/* Milestone 03 */}
                            <div className="group grid gap-4 border-b border-white/10 py-7 transition-colors duration-300 hover:border-[#B6FF00]/40 md:grid-cols-[120px_1fr_auto] md:items-center">

                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "#B6FF00" }}
                                >
                                    03
                                </span>

                                <div>
                                    <h3 className="text-lg font-medium uppercase text-white transition-colors duration-300 group-hover:text-[#B6FF00]">
                                        75+ LeetCode Problems
                                    </h3>

                                    <p className="mt-2 text-sm text-white/40">
                                        Continuous practice focused on improving problem-solving and
                                        algorithmic thinking.
                                    </p>
                                </div>

                                <span className="text-xs uppercase tracking-[0.15em] text-white/25">
                                    DSA
                                </span>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* BOTTOM STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.45}>
                        <div className="mt-16 max-w-4xl md:mt-20">

                            <p
                                className="font-black uppercase leading-[0.9] text-white"
                                style={{
                                    fontSize: "clamp(2rem, 5vw, 5rem)",
                                }}
                            >
                                Still{" "}
                                <span
                                    style={{
                                        color: "#A855F7",
                                    }}
                                >
                                    Learning.
                                </span>
                                <br />
                                Still{" "}
                                <span
                                    style={{
                                        color: "#38BDF8",
                                    }}
                                >
                                    Building.
                                </span>
                            </p>

                        </div>
                    </FadeIn>


                    {/* Decorative Line */}
                    <FadeIn delay={0.5}>
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
                                    backgroundColor: "#B6FF00",
                                    boxShadow:
                                        "0 0 15px rgba(182,255,0,0.6)",
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
            {/* LET'S CONNECT */}
            <section
                className="relative min-h-screen overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
                style={{ backgroundColor: "#0C0C0C" }}
            >
                {/* ========================================= */}
                {/* BACKGROUND GRID */}
                {/* ========================================= */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Purple Glow */}
                <div
                    className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-[0.12] blur-[150px]"
                    style={{ backgroundColor: "#A855F7" }}
                />

                {/* Blue Glow */}
                <div
                    className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full opacity-[0.1] blur-[150px]"
                    style={{ backgroundColor: "#38BDF8" }}
                />

                <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-between">

                    {/* ========================================= */}
                    {/* SECTION LABEL */}
                    {/* ========================================= */}

                    <FadeIn>
                        <div className="flex items-center justify-between">

                            <p
                                className="text-sm font-medium uppercase tracking-[0.2em]"
                                style={{ color: "#A855F7" }}
                            >
                                11 — Let's Connect
                            </p>

                            <p className="hidden text-xs uppercase tracking-[0.2em] text-white/25 sm:block">
                                End of About
                            </p>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* MAIN CONTENT */}
                    {/* ========================================= */}

                    <div className="mt-24">

                        <FadeIn delay={0.1}>
                            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/35">
                                Have an idea?
                            </p>
                        </FadeIn>


                        {/* MAIN HEADING */}
                        <FadeIn delay={0.15}>
                            <h2
                                className="font-black uppercase leading-[0.78]"
                                style={{
                                    fontSize: "clamp(4rem, 12vw, 12rem)",
                                }}
                            >
                                <span className="text-white">
                                    Let's
                                </span>

                                <br />

                                <span
                                    style={{
                                        color: "#A855F7",
                                        textShadow:
                                            "0 0 40px rgba(168,85,247,0.25)",
                                    }}
                                >
                                    Connect
                                </span>

                                <span style={{ color: "#38BDF8" }}>
                                    .
                                </span>
                            </h2>
                        </FadeIn>


                        {/* DESCRIPTION */}
                        <FadeIn delay={0.25}>
                            <p className="mt-12 max-w-2xl text-base leading-relaxed text-white/55 md:text-xl">
                                I'm always interested in learning, building, and connecting with
                                people who are passionate about technology and creating meaningful
                                things.
                            </p>
                        </FadeIn>


                        {/* ========================================= */}
                        {/* EMAIL CTA */}
                        {/* ========================================= */}

                        <FadeIn delay={0.3}>
                            <div className="mt-12">

                                <a
                                    href="mailto:nandurkarperem1@gmail.com"
                                    className="group inline-flex items-center gap-5 border px-6 py-4 transition-all duration-500 hover:-translate-y-1 sm:px-8 sm:py-5"
                                    style={{
                                        borderColor: "rgba(168,85,247,0.5)",
                                        boxShadow:
                                            "0 0 0 rgba(168,85,247,0)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow =
                                            "0 0 35px rgba(168,85,247,0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow =
                                            "0 0 0 rgba(168,85,247,0)";
                                    }}
                                >
                                    {/* IMPORTANT: no uppercase class here */}
                                    <span
                                        className="text-sm tracking-[0.05em] transition-colors duration-300 group-hover:text-white sm:text-base"
                                        style={{
                                            color: "#A855F7",
                                        }}
                                    >
                                        nandurkarperem1@gmail.com
                                    </span>

                                    <span
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#A855F7] group-hover:text-black"
                                        style={{
                                            borderColor: "rgba(168,85,247,0.5)",
                                            color: "#A855F7",
                                        }}
                                    >
                                        →
                                    </span>

                                </a>

                            </div>
                        </FadeIn>

                    </div>


                    {/* ========================================= */}
                    {/* CONNECT WITH ME */}
                    {/* ========================================= */}

                    <FadeIn delay={0.4}>
                        <div className="mt-24">

                            <div className="mb-8 flex items-end justify-between">

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                        Find me online
                                    </p>

                                    <p className="mt-2 text-sm text-white/20">
                                        Let's connect beyond the portfolio.
                                    </p>
                                </div>

                                <span
                                    className="hidden text-xs uppercase tracking-[0.2em] sm:block"
                                    style={{ color: "#38BDF8" }}
                                >
                                    03 Platforms
                                </span>

                            </div>


                            {/* ===================================== */}
                            {/* SOCIAL CARDS */}
                            {/* ===================================== */}

                            <div className="grid gap-4 md:grid-cols-3">


                                {/* ================================= */}
                                {/* GITHUB */}
                                {/* ================================= */}

                                <a
                                    href="https://github.com/Nandurkar-Prem"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative min-h-[230px] overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/60 sm:p-8"
                                >

                                    {/* Hover Glow */}
                                    <div
                                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20"
                                        style={{ backgroundColor: "#A855F7" }}
                                    />

                                    {/* Number */}
                                    <div className="relative flex items-start justify-between">

                                        <span
                                            className="font-black text-5xl leading-none"
                                            style={{
                                                color: "#A855F7",
                                                textShadow:
                                                    "0 0 20px rgba(168,85,247,0.2)",
                                            }}
                                        >
                                            01
                                        </span>

                                        <span
                                            className="flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#A855F7] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(168,85,247,0.4)",
                                                color: "#A855F7",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    {/* Content */}
                                    <div className="relative mt-16">

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                            Code & Projects
                                        </p>

                                        <h3
                                            className="mt-3 text-2xl font-medium uppercase tracking-wide transition-all duration-300 group-hover:translate-x-1"
                                            style={{
                                                color: "#A855F7",
                                            }}
                                        >
                                            GitHub
                                        </h3>

                                        <p className="mt-2 text-xs text-white/35">
                                            Explore my repositories →
                                        </p>

                                    </div>

                                    {/* Bottom Accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                                        style={{ backgroundColor: "#A855F7" }}
                                    />

                                </a>


                                {/* ================================= */}
                                {/* LINKEDIN */}
                                {/* ================================= */}

                                <a
                                    href="https://www.linkedin.com/in/prem-nandurkar-0a09a0276/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative min-h-[230px] overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/60 sm:p-8"
                                >

                                    {/* Hover Glow */}
                                    <div
                                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20"
                                        style={{ backgroundColor: "#38BDF8" }}
                                    />

                                    {/* Number */}
                                    <div className="relative flex items-start justify-between">

                                        <span
                                            className="font-black text-5xl leading-none"
                                            style={{
                                                color: "#38BDF8",
                                                textShadow:
                                                    "0 0 20px rgba(56,189,248,0.2)",
                                            }}
                                        >
                                            02
                                        </span>

                                        <span
                                            className="flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#38BDF8] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(56,189,248,0.4)",
                                                color: "#38BDF8",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    {/* Content */}
                                    <div className="relative mt-16">

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                            Professional Network
                                        </p>

                                        <h3
                                            className="mt-3 text-2xl font-medium uppercase tracking-wide transition-all duration-300 group-hover:translate-x-1"
                                            style={{
                                                color: "#38BDF8",
                                            }}
                                        >
                                            LinkedIn
                                        </h3>

                                        <p className="mt-2 text-xs text-white/35">
                                            Connect professionally →
                                        </p>

                                    </div>

                                    {/* Bottom Accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                                        style={{ backgroundColor: "#38BDF8" }}
                                    />

                                </a>


                                {/* ================================= */}
                                {/* LEETCODE */}
                                {/* ================================= */}

                                <a
                                    href="https://leetcode.com/u/Prem_Nandurkar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative min-h-[230px] overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#B6FF00]/60 sm:p-8"
                                >

                                    {/* Hover Glow */}
                                    <div
                                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20"
                                        style={{ backgroundColor: "#B6FF00" }}
                                    />

                                    {/* Number */}
                                    <div className="relative flex items-start justify-between">

                                        <span
                                            className="font-black text-5xl leading-none"
                                            style={{
                                                color: "#B6FF00",
                                                textShadow:
                                                    "0 0 20px rgba(182,255,0,0.2)",
                                            }}
                                        >
                                            03
                                        </span>

                                        <span
                                            className="flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#B6FF00] group-hover:text-black"
                                            style={{
                                                borderColor: "rgba(182,255,0,0.4)",
                                                color: "#B6FF00",
                                            }}
                                        >
                                            ↗
                                        </span>

                                    </div>


                                    {/* Content */}
                                    <div className="relative mt-16">

                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                            Problem Solving
                                        </p>

                                        <h3
                                            className="mt-3 text-2xl font-medium uppercase tracking-wide transition-all duration-300 group-hover:translate-x-1"
                                            style={{
                                                color: "#B6FF00",
                                            }}
                                        >
                                            LeetCode
                                        </h3>

                                        <p className="mt-2 text-xs text-white/35">
                                            See my coding progress →
                                        </p>

                                    </div>

                                    {/* Bottom Accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                                        style={{ backgroundColor: "#B6FF00" }}
                                    />

                                </a>

                            </div>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* FINAL STATEMENT */}
                    {/* ========================================= */}

                    <FadeIn delay={0.5}>
                        <div className="mt-24 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                    Prem Pramod Nandurkar
                                </p>

                                <p className="mt-3 text-sm text-white/35">
                                    Java • Spring Boot • Backend Development
                                </p>

                            </div>


                            {/* Back To Top */}
                            <a
                                href="#top"
                                className="group flex items-center gap-4"
                            >
                                <span className="text-xs uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-white">
                                    Back to top
                                </span>

                                <span
                                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-1"
                                    style={{
                                        borderColor: "rgba(56,189,248,0.4)",
                                        color: "#38BDF8",
                                    }}
                                >
                                    ↑
                                </span>
                            </a>

                        </div>
                    </FadeIn>


                    {/* ========================================= */}
                    {/* FINAL DECORATIVE LINE */}
                    {/* ========================================= */}

                    <FadeIn delay={0.55}>
                        <div className="mt-10 flex items-center gap-4">

                            <div
                                className="h-px flex-1"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(168,85,247,0.5), rgba(56,189,248,0.15))",
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
                                        "linear-gradient(to left, rgba(168,85,247,0.5), rgba(56,189,248,0.15))",
                                }}
                            />

                        </div>
                    </FadeIn>

                </div>
            </section>
        </main>
    );
}