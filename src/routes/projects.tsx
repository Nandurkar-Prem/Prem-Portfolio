import { createFileRoute } from "@tanstack/react-router";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

import booksInBudgetScreenshot from "@/assets/booksInBudget.png";
import springBootEcommerceScreenshot from "@/assets/springBootEcommerce.png";
import springSecurityScreenshot from "@/assets/springSecurity.png";
import microservicesScreenshot from "@/assets/microservicesImage.png";

export const Route = createFileRoute("/projects")({
    head: () => ({
        meta: [
            {
                title: "Projects | Prem's Portfolio",
            },
            {
                name: "description",
                content:
                    "Explore Prem Nandurkar's projects, applications and development work.",
            },
        ],
    }),
    component: Projects,
});

function Projects() {
    const { scrollYProgress } = useScroll();

    /* ============================================================
       HERO PARALLAX
    ============================================================ */

    const heroBackgroundY = useTransform(
        scrollYProgress,
        [0, 0.35],
        [0, 180]
    );

    const heroContentY = useTransform(
        scrollYProgress,
        [0, 0.35],
        [0, -90]
    );

    const heroObjectsY = useTransform(
        scrollYProgress,
        [0, 0.35],
        [0, -180]
    );

    const heroParticlesY = useTransform(
        scrollYProgress,
        [0, 0.35],
        [0, -260]
    );

    /* ============================================================
       HERO MOUSE PARALLAX
    ============================================================ */

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, {
        stiffness: 80,
        damping: 20,
    });

    const smoothMouseY = useSpring(mouseY, {
        stiffness: 80,
        damping: 20,
    });

    const objectX = useTransform(
        smoothMouseX,
        [-1, 1],
        [-25, 25]
    );

    const foregroundX = useTransform(
        smoothMouseX,
        [-1, 1],
        [-12, 12]
    );

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

            {/* ============================================================
          SECTION 1 — HERO
      ============================================================ */}

            <section
                className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#050507]
          border-b
          border-white/[0.08]
          flex
          items-center
        "
                onMouseMove={(event) => {
                    const rect =
                        event.currentTarget.getBoundingClientRect();

                    mouseX.set(
                        ((event.clientX - rect.left) / rect.width - 0.5) * 2
                    );

                    mouseY.set(
                        ((event.clientY - rect.top) / rect.height - 0.5) * 2
                    );
                }}
                onMouseLeave={() => {
                    mouseX.set(0);
                    mouseY.set(0);
                }}
            >

                {/* HERO ATMOSPHERE */}

                <motion.div
                    style={{
                        y: heroBackgroundY,
                    }}
                    className="absolute inset-0 pointer-events-none"
                >

                    <motion.div
                        animate={{
                            scale: [1, 1.18, 1],
                            opacity: [0.10, 0.20, 0.10],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              top-[-180px]
              right-[-120px]
              w-[700px]
              h-[700px]
              rounded-full
              bg-purple-700
              blur-[190px]
            "
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.06, 0.14, 0.06],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              bottom-[-220px]
              left-[-180px]
              w-[700px]
              h-[700px]
              rounded-full
              bg-blue-700
              blur-[200px]
            "
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.12, 1],
                            opacity: [0.025, 0.07, 0.025],
                        }}
                        transition={{
                            duration: 11,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              bottom-0
              left-[38%]
              w-[500px]
              h-[500px]
              rounded-full
              bg-yellow-400
              blur-[190px]
            "
                    />

                </motion.div>


                {/* HERO GRID */}

                <motion.div
                    style={{
                        y: heroBackgroundY,
                    }}
                    className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.04]
          "
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                )
              `,
                            backgroundSize: "65px 65px",
                        }}
                    />
                </motion.div>


                {/* HERO PARTICLES */}

                <motion.div
                    style={{
                        y: heroParticlesY,
                    }}
                    className="
            absolute
            inset-0
            pointer-events-none
            overflow-hidden
            z-[5]
          "
                >
                    {Array.from({ length: 55 }).map((_, index) => (
                        <HeroParticle
                            key={index}
                            index={index}
                        />
                    ))}
                </motion.div>


                {/* HERO ORBITS */}

                <motion.div
                    style={{
                        x: foregroundX,
                        y: heroObjectsY,
                    }}
                    className="
            absolute
            right-[8%]
            top-[20%]
            w-[600px]
            h-[600px]
            pointer-events-none
          "
                >

                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
              absolute
              inset-0
              rounded-full
              border
              border-purple-500/[0.12]
            "
                    />

                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 55,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
              absolute
              inset-[15%]
              rounded-full
              border
              border-blue-500/[0.10]
            "
                    />

                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 70,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
              absolute
              inset-[28%]
              rounded-full
              border
              border-white/[0.05]
            "
                    />

                </motion.div>


                {/* HERO CONTENT */}

                <motion.div
                    style={{
                        y: heroContentY,
                    }}
                    className="
            relative
            z-20
            w-full
            max-w-[1500px]
            mx-auto
            px-6
            sm:px-10
            md:px-16
            lg:px-24
            xl:px-28
            py-32
          "
                >

                    <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">

                        {/* HERO LEFT */}

                        <div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                }}
                                className="
                  flex
                  items-center
                  gap-4
                  mb-10
                "
                            >

                                <div className="flex items-center gap-2">

                                    <motion.span
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_15px_rgba(168,85,247,0.9)]
                    "
                                    />

                                    <motion.span
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.3,
                                            repeat: Infinity,
                                        }}
                                        className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_15px_rgba(59,130,246,0.9)]
                    "
                                    />

                                    <motion.span
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: 0.6,
                                            repeat: Infinity,
                                        }}
                                        className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-yellow-300
                      shadow-[0_0_15px_rgba(250,204,21,0.8)]
                    "
                                    />

                                </div>

                                <span
                                    className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                                >
                                    Projects / Selected Work
                                </span>

                            </motion.div>


                            <h1
                                className="
                  text-[clamp(4rem,9vw,9rem)]
                  font-semibold
                  leading-[0.82]
                  tracking-[-0.075em]
                "
                            >

                                <motion.span
                                    initial={{
                                        opacity: 0,
                                        x: -50,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="block"
                                >
                                    Things
                                </motion.span>

                                <motion.span
                                    initial={{
                                        opacity: 0,
                                        x: -80,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.12,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="
                    block
                    bg-gradient-to-r
                    from-purple-400
                    via-blue-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                                >
                                    That I
                                </motion.span>

                                <motion.span
                                    initial={{
                                        opacity: 0,
                                        x: -100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.24,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="block"
                                >
                                    Have Built.
                                </motion.span>

                            </h1>


                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.45,
                                }}
                                className="
                  mt-10
                  max-w-xl
                  text-base
                  md:text-lg
                  leading-relaxed
                  text-white/40
                "
                            >
                                Not just ideas on a screen.

                                <br />

                                <span className="text-white/75 font-medium">
                                    Real applications. Real systems. Real problems solved.
                                </span>
                            </motion.p>


                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.6,
                                }}
                                className="
                  mt-12
                  flex
                  items-center
                  gap-4
                "
                            >

                                <motion.div
                                    animate={{
                                        y: [0, 6, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/60
                  "
                                >
                                    ↓
                                </motion.div>

                                <span
                                    className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                  "
                                >
                                    Explore my work
                                </span>

                            </motion.div>

                        </div>


                        {/* HERO RIGHT */}

                        <motion.div
                            style={{
                                x: objectX,
                                y: heroObjectsY,
                            }}
                            className="
                relative
                min-h-[520px]
                hidden
                lg:block
              "
                        >

                            <motion.div
                                animate={{
                                    y: [0, -18, 0],
                                    rotate: [4, 7, 4],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                  absolute
                  top-[7%]
                  right-[5%]
                  w-48
                  h-32
                  rounded-3xl
                  bg-gradient-to-br
                  from-purple-500
                  to-purple-700
                  p-5
                  shadow-[0_0_70px_rgba(168,85,247,0.35)]
                "
                            >

                                <span
                                    className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                  "
                                >
                                    Backend
                                </span>

                                <h3 className="mt-5 text-lg font-semibold">
                                    Spring Boot
                                </h3>

                                <p className="mt-1 text-[8px] text-white/50">
                                    APIs • Security • Database
                                </p>

                            </motion.div>


                            <motion.div
                                animate={{
                                    y: [0, 16, 0],
                                    rotate: [-4, -7, -4],
                                }}
                                transition={{
                                    duration: 5.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                  absolute
                  top-[40%]
                  right-[0%]
                  w-48
                  h-32
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-500
                  to-blue-700
                  p-5
                  shadow-[0_0_70px_rgba(59,130,246,0.35)]
                "
                            >

                                <span
                                    className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                  "
                                >
                                    Frontend
                                </span>

                                <h3 className="mt-5 text-lg font-semibold">
                                    React
                                </h3>

                                <p className="mt-1 text-[8px] text-white/50">
                                    UI • Motion • Experience
                                </p>

                            </motion.div>


                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [-2, 1, -2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                  absolute
                  bottom-[7%]
                  right-[25%]
                  w-44
                  h-28
                  rounded-3xl
                  bg-yellow-300
                  text-black
                  p-5
                  shadow-[0_0_80px_rgba(250,204,21,0.30)]
                "
                            >

                                <span
                                    className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-black/40
                  "
                                >
                                    Currently
                                </span>

                                <h3 className="mt-5 text-lg font-semibold">
                                    Building →
                                </h3>

                            </motion.div>


                            <motion.div
                                style={{
                                    x: foregroundX,
                                }}
                                animate={{
                                    y: [0, 18, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                  absolute
                  bottom-[15%]
                  left-[4%]
                  w-11
                  h-11
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_50px_rgba(59,130,246,0.9)]
                "
                            />

                        </motion.div>

                    </div>


                    <div
                        className="
              absolute
              bottom-8
              left-6
              right-6
              md:left-16
              md:right-16
              lg:left-24
              lg:right-24
              flex
              items-center
              justify-between
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/25
            "
                    >

                        <span>
                            01 — Projects
                        </span>

                        <div className="flex items-center gap-4">

                            <span
                                className="
                  w-12
                  h-px
                  bg-gradient-to-r
                  from-purple-500
                  via-blue-500
                  to-yellow-400
                "
                            />

                            <span>
                                Design • Code • Motion
                            </span>

                        </div>

                        <span>
                            Scroll ↓
                        </span>

                    </div>

                </motion.div>

            </section>


            {/* ============================================================
          SECTION 2 — PROJECTS
      ============================================================ */}

            <section
                className="
          relative
          py-32
          md:py-40
          overflow-hidden
          bg-[#050507]
        "
            >

                {/* SECTION ATMOSPHERE */}

                <div className="absolute inset-0 pointer-events-none">

                    <motion.div
                        animate={{
                            scale: [1, 1.12, 1],
                            opacity: [0.08, 0.17, 0.08],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              top-[5%]
              right-[-150px]
              w-[650px]
              h-[650px]
              rounded-full
              bg-purple-700
              blur-[180px]
            "
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.05, 0.12, 0.05],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              bottom-[-200px]
              left-[-150px]
              w-[600px]
              h-[600px]
              rounded-full
              bg-blue-700
              blur-[180px]
            "
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.03, 0.08, 0.03],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
              absolute
              top-[45%]
              left-[40%]
              w-[450px]
              h-[450px]
              rounded-full
              bg-yellow-400
              blur-[180px]
            "
                    />

                </div>


                {/* GRID */}

                <div
                    className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.035]
          "
                    style={{
                        backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              )
            `,
                        backgroundSize: "65px 65px",
                    }}
                />


                {/* CONTENT */}

                <div
                    className="
            relative
            z-10
            max-w-[1500px]
            mx-auto
            px-6
            sm:px-10
            md:px-16
            lg:px-24
            xl:px-28
          "
                >

                    {/* ======================================================
              PROJECTS HEADING
          ====================================================== */}

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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mb-20"
                    >

                        <div
                            className="
                flex
                items-center
                gap-4
                mb-7
              "
                        >

                            <span
                                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                "
                            >
                                02
                            </span>

                            <span
                                className="
                  h-px
                  w-20
                  bg-gradient-to-r
                  from-purple-500
                  via-blue-500
                  to-transparent
                "
                            />

                            <span
                                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/30
                "
                            >
                                Selected Work
                            </span>

                        </div>


                        <h2
                            className="
                text-[clamp(4rem,9vw,9rem)]
                font-semibold
                leading-[0.82]
                tracking-[-0.07em]
              "
                        >
                            Projects
                            <span className="text-purple-400">
                                .
                            </span>
                        </h2>


                        <p
                            className="
                mt-8
                max-w-xl
                text-base
                md:text-lg
                leading-relaxed
                text-white/40
              "
                        >
                            Things I've designed, developed and brought to life.
                            Each project represents a different problem, approach
                            and part of my development journey.
                        </p>

                    </motion.div>


                    {/* ======================================================
              PROJECT 01 — BOOKS IN BUDGET
          ====================================================== */}

                    <ProjectShowcase
                        number="01"
                        title="Books"
                        highlightedTitle="in Budget."
                        description="A full-stack book marketplace built to make buying and selling books simple, searchable and affordable. Sellers can manage their listings while users can discover books through category and price-based search."
                        technologies={[
                            "Spring Boot",
                            "React",
                            "MySQL",
                            "Bcrypt",
                            "REST API",
                        ]}
                        image={booksInBudgetScreenshot}
                        accent="purple"
                        githubUrl="#"
                    />


                    {/* ======================================================
              PROJECT 02 — SPRING BOOT E-COMMERCE
          ====================================================== */}

                    <ProjectShowcase
                        number="02"
                        title="Spring Boot"
                        highlightedTitle="E-Commerce."
                        description="A backend-focused e-commerce platform built with Spring Boot, designed around secure APIs, product management, authentication and scalable business logic. The project focuses on building a structured real-world backend rather than just a collection of CRUD endpoints."
                        technologies={[
                            "Spring Boot",
                            "Spring Security",
                            "JWT",
                            "JPA",
                            "MySQL",
                            "REST API",
                        ]}
                        image={springBootEcommerceScreenshot}
                        accent="cyan"
                        githubUrl="https://github.com/Nandurkar-Prem/JWT-Authentication"
                    />


                    {/* ======================================================
              PROJECT 03 — AUTHENTICATION
          ====================================================== */}

                    <ProjectShowcase
                        number="03"
                        title="Authentication"
                        highlightedTitle="Project."
                        description="A secure authentication system built with Spring Security and JWT authentication. The project focuses on implementing protected APIs, user authentication, authorization and token-based security for a real-world Spring Boot application."
                        technologies={[
                            "Spring Boot",
                            "Spring Security",
                            "JWT",
                            "REST API",
                            "Authentication",
                            "Authorization",
                        ]}
                        image={springSecurityScreenshot}
                        accent="green"
                        githubUrl="#"
                    />


                    {/* ======================================================
              PROJECT 04 — MICROSERVICES
          ====================================================== */}

                    <ProjectShowcase
                        number="04"
                        title="Microservices"
                        highlightedTitle="Project."
                        description="A distributed application built around a microservices architecture, where individual services are separated into focused and independently manageable components. The project explores how modern backend systems can be structured for scalability, maintainability and service-to-service communication."
                        technologies={[
                            "Spring Boot",
                            "Microservices",
                            "REST API",
                            "Service Communication",
                            "Spring Cloud",
                        ]}
                        image={microservicesScreenshot}
                        accent="yellow"
                        githubUrl="#"
                    />

                </div>

            </section>
            {/* ============================================================
    PROJECTS FOOTER
============================================================ */}

            <footer
                className="
    relative
    min-h-[55vh]
    overflow-hidden
    border-t
    border-white/[0.08]
    bg-[#050507]
    flex
    items-center
    justify-center
  "
            >
                {/* Background glow */}

                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.12, 0.22, 0.12],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[550px]
      h-[550px]
      rounded-full
      bg-purple-600
      blur-[180px]
      pointer-events-none
    "
                />

                <motion.div
                    animate={{
                        x: [-30, 30, -30],
                        y: [20, -20, 20],
                        opacity: [0.08, 0.16, 0.08],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
      absolute
      right-[10%]
      bottom-[-100px]
      w-[350px]
      h-[350px]
      rounded-full
      bg-blue-600
      blur-[150px]
      pointer-events-none
    "
                />

                {/* Grid */}

                <div
                    className="
      absolute
      inset-0
      pointer-events-none
      opacity-[0.035]
    "
                    style={{
                        backgroundImage: `
        linear-gradient(
          to right,
          rgba(255,255,255,0.8) 1px,
          transparent 1px
        ),
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.8) 1px,
          transparent 1px
        )
      `,
                        backgroundSize: "65px 65px",
                    }}
                />

                {/* Floating particles */}

                <div className="absolute inset-0 pointer-events-none">

                    {Array.from({ length: 20 }).map((_, index) => (
                        <motion.span
                            key={index}
                            animate={{
                                y: [0, -25, 0],
                                opacity: [0.15, 0.8, 0.15],
                                scale: [0.6, 1.2, 0.6],
                            }}
                            transition={{
                                duration: 3 + (index % 4),
                                repeat: Infinity,
                                delay: index * 0.15,
                                ease: "easeInOut",
                            }}
                            className={`
          absolute
          w-[3px]
          h-[3px]
          rounded-full
          ${index % 3 === 0
                                    ? "bg-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.9)]"
                                    : index % 3 === 1
                                        ? "bg-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                                        : "bg-yellow-200 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                                }
        `}
                            style={{
                                left: `${5 + ((index * 17) % 90)}%`,
                                top: `${8 + ((index * 29) % 82)}%`,
                            }}
                        />
                    ))}

                </div>


                {/* Footer content */}

                <motion.div
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
      relative
      z-10
      w-full
      max-w-5xl
      mx-auto
      px-6
      text-center
    "
                >

                    {/* Small label */}

                    <div
                        className="
        flex
        items-center
        justify-center
        gap-4
        mb-8
      "
                    >

                        <span
                            className="
          w-2
          h-2
          rounded-full
          bg-purple-400
          shadow-[0_0_15px_rgba(168,85,247,0.9)]
        "
                        />

                        <span
                            className="
          text-[9px]
          uppercase
          tracking-[0.35em]
          text-white/35
        "
                        >
                            The Beginning
                        </span>

                        <span
                            className="
          w-2
          h-2
          rounded-full
          bg-blue-400
          shadow-[0_0_15px_rgba(59,130,246,0.9)]
        "
                        />

                    </div>


                    {/* Main message */}

                    <h2
                        className="
        text-[clamp(3rem,7vw,7rem)]
        font-semibold
        leading-[0.9]
        tracking-[-0.07em]
      "
                    >
                        This is just
                        <br />

                        <span
                            className="
          bg-gradient-to-r
          from-purple-400
          via-blue-400
          to-cyan-400
          bg-clip-text
          text-transparent
        "
                        >
                            the beginning.
                        </span>
                    </h2>


                    {/* Supporting message */}

                    <p
                        className="
        max-w-xl
        mx-auto
        mt-8
        text-sm
        md:text-base
        leading-relaxed
        text-white/40
      "
                    >
                        These projects are only the first chapter.
                        <br className="hidden md:block" />
                        More ideas, experiments and things I'm building
                        are coming soon.
                    </p>


                    {/* Animated line */}

                    <div
                        className="
        relative
        w-32
        h-px
        mx-auto
        mt-12
        overflow-hidden
        bg-white/10
      "
                    >

                        <motion.div
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
          absolute
          inset-y-0
          w-1/2
          bg-gradient-to-r
          from-transparent
          via-purple-400
          to-transparent
        "
                        />

                    </div>


                    {/* Bottom */}

                    <div
                        className="
        mt-14
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        text-[8px]
        uppercase
        tracking-[0.25em]
        text-white/20
      "
                    >

                        <span>
                            Prem's Portfolio
                        </span>

                        <span>
                            Design • Code • Motion
                        </span>

                        <span>
                            More Coming Soon →
                        </span>

                    </div>

                </motion.div>

            </footer>

        </main>
    );
}


/* ========================================================================
   HERO PARTICLE
======================================================================== */

function HeroParticle({
    index,
}: {
    index: number;
}) {
    const positions: Array<[string, string]> = [
        ["5%", "12%"],
        ["9%", "42%"],
        ["14%", "75%"],
        ["19%", "24%"],
        ["24%", "60%"],
        ["29%", "85%"],
        ["34%", "15%"],
        ["39%", "48%"],
        ["44%", "75%"],
        ["49%", "28%"],
        ["54%", "88%"],
        ["59%", "52%"],
        ["64%", "12%"],
        ["69%", "70%"],
        ["74%", "35%"],
        ["79%", "82%"],
        ["84%", "18%"],
        ["89%", "55%"],
        ["94%", "30%"],
        ["97%", "76%"],
    ];

    const position =
        positions[index % positions.length] ?? ["50%", "50%"];

    const isBlue = index % 5 === 0;
    const isYellow = index % 9 === 0;

    return (
        <motion.span
            animate={{
                y: [0, -20, 0],
                x: [0, index % 2 === 0 ? 8 : -8, 0],
                opacity: [0.15, 0.9, 0.15],
                scale: [0.6, 1.4, 0.6],
            }}
            transition={{
                duration: 3 + (index % 5),
                repeat: Infinity,
                delay: index * 0.08,
                ease: "easeInOut",
            }}
            className={`
        absolute
        w-[3px]
        h-[3px]
        rounded-full

        ${isYellow
                    ? "bg-yellow-200 shadow-[0_0_14px_rgba(250,204,21,1)]"
                    : isBlue
                        ? "bg-blue-200 shadow-[0_0_14px_rgba(59,130,246,1)]"
                        : "bg-purple-200 shadow-[0_0_14px_rgba(168,85,247,1)]"
                }
      `}
            style={{
                left: position[0],
                top: position[1],
            }}
        />
    );
}


/* ========================================================================
   PROJECT SHOWCASE
======================================================================== */

function ProjectShowcase({
    number,
    title,
    highlightedTitle,
    description,
    technologies,
    image,
    accent,
    githubUrl,
}: {
    number: string;
    title: string;
    highlightedTitle: string;
    description: string;
    technologies: string[];
    image: string;
    accent: "purple" | "cyan" | "yellow" | "green";
    githubUrl: string;
}) {
    const cardRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    /* ============================================================
       PROJECT PARALLAX
    ============================================================ */

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        [55, -55]
    );

    const contentY = useTransform(
        scrollYProgress,
        [0, 1],
        [20, -20]
    );

    const orbitY = useTransform(
        scrollYProgress,
        [0, 1],
        [80, -80]
    );

    const particleY = useTransform(
        scrollYProgress,
        [0, 1],
        [110, -110]
    );

    const numberY = useTransform(
        scrollYProgress,
        [0, 1],
        [60, -60]
    );

    const floatingOrbY = useTransform(
        scrollYProgress,
        [0, 1],
        [80, -80]
    );


    /* ============================================================
       ACCENT THEMES
    ============================================================ */

    const accentData = {
        purple: {
            titleGradient:
                "from-purple-400 via-blue-400 to-blue-500",

            dot:
                "bg-purple-300",

            border:
                "group-hover:border-purple-400/40",

            cardShadow:
                "group-hover:shadow-[0_0_130px_rgba(168,85,247,0.28)]",

            atmosphere:
                "bg-[radial-gradient(circle_at_70%_45%,rgba(168,85,247,0.34),transparent_34%),radial-gradient(circle_at_25%_70%,rgba(59,130,246,0.22),transparent_35%)]",

            imageGlow:
                "from-purple-600/35 via-blue-500/20 to-purple-500/10",

            orb:
                "bg-purple-500 shadow-[0_0_55px_rgba(168,85,247,0.95)]",

            hoverOrb:
                "group-hover:shadow-[0_0_90px_rgba(168,85,247,1)]",

            particle:
                "bg-purple-200 shadow-[0_0_14px_rgba(168,85,247,1)]",

            orbit:
                "border-purple-500/[0.12]",
        },

        cyan: {
            titleGradient:
                "from-cyan-300 via-blue-400 to-cyan-500",

            dot:
                "bg-cyan-300",

            border:
                "group-hover:border-cyan-400/50",

            cardShadow:
                "group-hover:shadow-[0_0_150px_rgba(34,211,238,0.32)]",

            atmosphere:
                "bg-[radial-gradient(circle_at_70%_45%,rgba(34,211,238,0.32),transparent_34%),radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.18),transparent_30%)]",

            imageGlow:
                "from-cyan-500/35 via-blue-500/25 to-cyan-400/10",

            orb:
                "bg-cyan-400 shadow-[0_0_60px_rgba(34,211,238,1)]",

            hoverOrb:
                "group-hover:shadow-[0_0_100px_rgba(34,211,238,1)]",

            particle:
                "bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,1)]",

            orbit:
                "border-cyan-400/[0.14]",
        },

        yellow: {
            titleGradient:
                "from-yellow-300 via-orange-300 to-yellow-400",

            dot:
                "bg-yellow-300",

            border:
                "group-hover:border-yellow-400/45",

            cardShadow:
                "group-hover:shadow-[0_0_140px_rgba(250,204,21,0.25)]",

            atmosphere:
                "bg-[radial-gradient(circle_at_70%_45%,rgba(250,204,21,0.28),transparent_34%),radial-gradient(circle_at_25%_70%,rgba(249,115,22,0.20),transparent_35%)]",

            imageGlow:
                "from-yellow-400/25 via-orange-500/20 to-yellow-300/10",

            orb:
                "bg-yellow-300 shadow-[0_0_55px_rgba(250,204,21,0.95)]",

            hoverOrb:
                "group-hover:shadow-[0_0_90px_rgba(250,204,21,1)]",

            particle:
                "bg-yellow-200 shadow-[0_0_14px_rgba(250,204,21,1)]",

            orbit:
                "border-yellow-400/[0.12]",
        },

        green: {
            titleGradient:
                "from-emerald-300 via-cyan-300 to-teal-400",

            dot:
                "bg-emerald-300",

            border:
                "group-hover:border-emerald-400/50",

            cardShadow:
                "group-hover:shadow-[0_0_150px_rgba(16,185,129,0.30)]",

            atmosphere:
                "bg-[radial-gradient(circle_at_70%_45%,rgba(16,185,129,0.32),transparent_34%),radial-gradient(circle_at_30%_70%,rgba(20,184,166,0.24),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.18),transparent_30%)]",

            imageGlow:
                "from-emerald-500/35 via-cyan-500/25 to-teal-400/10",

            orb:
                "bg-emerald-400 shadow-[0_0_60px_rgba(16,185,129,1)]",

            hoverOrb:
                "group-hover:shadow-[0_0_100px_rgba(16,185,129,1)]",

            particle:
                "bg-emerald-200 shadow-[0_0_16px_rgba(16,185,129,1)]",

            orbit:
                "border-emerald-400/[0.14]",
        },
    };

    const currentAccent = accentData[accent];


    return (
        <motion.article
            ref={cardRef}
            initial={{
                opacity: 0,
                y: 80,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`
        group
        relative
        w-full
        lg:h-[760px]
        rounded-[36px]
        border
        border-white/[0.10]
        bg-[#09090d]
        overflow-hidden
        transition-all
        duration-700
        ${currentAccent.border}
        ${currentAccent.cardShadow}
        mb-28
      `}
        >

            {/* ======================================================
          CARD ATMOSPHERE
      ====================================================== */}

            <div
                className={`
          absolute
          inset-[-20%]
          pointer-events-none
          opacity-20
          group-hover:opacity-100
          transition-all
          duration-1000
          ${currentAccent.atmosphere}
          blur-[85px]
          group-hover:scale-110
        `}
            />


            {/* ======================================================
          PARTICLES
      ====================================================== */}

            <motion.div
                style={{
                    y: particleY,
                }}
                className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
          z-10
        "
            >

                {Array.from({ length: 36 }).map((_, index) => (
                    <ProjectParticle
                        key={index}
                        index={index}
                        particleClass={currentAccent.particle}
                    />
                ))}

            </motion.div>


            {/* ======================================================
          ORBITS
      ====================================================== */}

            <motion.div
                style={{
                    y: orbitY,
                }}
                className="
          absolute
          inset-0
          pointer-events-none
          z-[5]
        "
            >

                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`
            absolute
            top-[8%]
            right-[5%]
            w-[600px]
            h-[600px]
            rounded-full
            border
            ${currentAccent.orbit}
          `}
                />

                <motion.div
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 48,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`
            absolute
            top-[18%]
            right-[14%]
            w-[430px]
            h-[430px]
            rounded-full
            border
            ${currentAccent.orbit}
          `}
                />

            </motion.div>


            {/* ======================================================
          GRID
      ====================================================== */}

            <div
                className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.035]
          z-[6]
        "
                style={{
                    backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
                    backgroundSize: "55px 55px",
                }}
            />


            {/* ======================================================
          CARD HEADER
      ====================================================== */}

            <div
                className="
          relative
          z-30
          h-16
          px-6
          md:px-10
          border-b
          border-white/[0.08]
          flex
          items-center
          justify-between
        "
            >

                <div className="flex items-center gap-3">

                    <span
                        className={`
              w-2.5
              h-2.5
              rounded-full
              ${currentAccent.dot}
            `}
                    />

                    <span
                        className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/40
            "
                    >
                        Selected Project
                    </span>

                </div>

                <span
                    className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-white/35
          "
                >
                    {number}
                </span>

            </div>


            {/* ======================================================
          MAIN CARD AREA
      ====================================================== */}

            <div
                className="
          relative
          z-20
          lg:h-[624px]
          grid
          lg:grid-cols-[0.75fr_1.25fr]
        "
            >

                {/* ====================================================
            LEFT CONTENT
        ==================================================== */}

                <motion.div
                    style={{
                        y: contentY,
                    }}
                    className="
            relative
            z-30
            p-8
            md:p-10
            lg:p-12
            pt-10
            md:pt-12
            lg:pt-14
            flex
            flex-col
            justify-start
            border-b
            lg:border-b-0
            lg:border-r
            border-white/[0.08]
            overflow-visible
          "
                >

                    {/* LARGE NUMBER */}

                    <motion.div
                        style={{
                            y: numberY,
                        }}
                        className="
              absolute
              top-[7%]
              left-8
              md:left-10
              text-[clamp(8rem,14vw,11rem)]
              font-bold
              leading-none
              tracking-[-0.08em]
              text-white/[0.06]
              select-none
              pointer-events-none
            "
                    >
                        {number}
                    </motion.div>


                    {/* TITLE */}

                    <h3
                        className="
              relative
              z-10
              max-w-full
              text-[clamp(2.7rem,4.2vw,4.5rem)]
              font-semibold
              leading-[0.84]
              tracking-[-0.065em]
              break-words
            "
                    >

                        {title}

                        <br />

                        <span
                            className={`
                bg-gradient-to-r
                ${currentAccent.titleGradient}
                bg-clip-text
                text-transparent
              `}
                        >
                            {highlightedTitle}
                        </span>

                    </h3>


                    {/* DESCRIPTION */}

                    <p
                        className="
              relative
              z-10
              mt-6
              max-w-md
              text-sm
              leading-[1.6]
              text-white/45
            "
                    >
                        {description}
                    </p>


                    {/* TECH STACK */}

                    <div className="relative z-10 mt-6">

                        <span
                            className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/30
              "
                        >
                            Tech Stack
                        </span>

                        <div
                            className="
                flex
                flex-wrap
                gap-1.5
                mt-3
                max-w-lg
              "
                        >

                            {technologies.map((technology) => (
                                <ProjectCardTag
                                    key={technology}
                                    text={technology}
                                    accent={accent}
                                />
                            ))}

                        </div>

                    </div>


                    {/* VIEW PROJECT */}

                    <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.04,
                            x: 4,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
              relative
              z-50
              self-start
              w-fit
              mt-6
              flex
              items-center
              gap-4
              px-5
              py-3
              rounded-full
              border
              border-white/15
              bg-black/30
              backdrop-blur-md
              hover:bg-white/[0.06]
              hover:border-white/30
              hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/70
              transition-all
              duration-300
            "
                    >

                        <span>
                            View Project
                        </span>

                        <span
                            className={`
                ${accent === "green"
                                    ? "text-emerald-300"
                                    : accent === "cyan"
                                        ? "text-cyan-300"
                                        : accent === "yellow"
                                            ? "text-yellow-300"
                                            : "text-purple-300"
                                }
              `}
                        >
                            ↗
                        </span>

                    </motion.a>

                </motion.div>


                {/* ====================================================
            RIGHT — REAL PROJECT IMAGE
        ==================================================== */}

                <div
                    className="
            relative
            h-[420px]
            md:h-[520px]
            lg:h-full
            flex
            items-center
            justify-center
            p-6
            md:p-10
            lg:p-14
            overflow-hidden
          "
                >

                    {/* IMAGE GLOW */}

                    <motion.div
                        style={{
                            y: imageY,
                        }}
                        className={`
              absolute
              inset-[8%]
              rounded-full
              bg-gradient-to-br
              ${currentAccent.imageGlow}
              blur-[120px]
              opacity-50
              group-hover:opacity-100
              scale-90
              group-hover:scale-110
              transition-all
              duration-1000
            `}
                    />


                    {/* REAL SCREENSHOT */}

                    <motion.div
                        style={{
                            y: imageY,
                        }}
                        whileHover={{
                            scale: 1.025,
                            rotateX: 1,
                            rotateY: -1,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="
              relative
              z-30
              w-full
              max-w-[720px]
              max-h-[470px]
              rounded-[22px]
              overflow-hidden
              border
              border-white/[0.12]
              bg-[#0c0c10]
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
              group-hover:border-white/20
              transition-all
              duration-700
            "
                    >

                        {/* BROWSER BAR */}

                        <div
                            className="
                h-11
                px-4
                border-b
                border-white/[0.08]
                flex
                items-center
                gap-2
              "
                        >

                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />

                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/70" />

                            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />

                            <div
                                className="
                  ml-3
                  flex-1
                  h-6
                  rounded-full
                  bg-white/[0.035]
                  border
                  border-white/[0.05]
                  px-3
                  flex
                  items-center
                "
                            >

                                <span className="text-[7px] text-white/20">
                                    project-preview.app
                                </span>

                            </div>

                        </div>


                        <img
                            src={image}
                            alt={`${title} ${highlightedTitle} project screenshot`}
                            className="
                block
                w-full
                max-h-[425px]
                object-contain
                object-center
              "
                        />

                    </motion.div>


                    {/* PROJECT NUMBER ORB */}

                    <motion.div
                        style={{
                            y: floatingOrbY,
                        }}
                        animate={{
                            rotate: [5, 8, 5],
                            scale: [1, 1.04, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`
              absolute
              z-40
              top-[7%]
              right-[7%]
              w-16
              h-16
              rounded-full
              bg-gradient-to-br
              ${accent === "green"
                                ? "from-emerald-300 via-teal-400 to-cyan-500"
                                : accent === "cyan"
                                    ? "from-cyan-300 via-blue-500 to-purple-500"
                                    : accent === "yellow"
                                        ? "from-yellow-200 via-orange-400 to-yellow-500"
                                        : "from-purple-300 via-purple-500 to-blue-500"
                            }
              flex
              items-center
              justify-center
              font-semibold
              text-white
              ${accent === "green"
                                ? "shadow-[0_0_70px_rgba(16,185,129,0.7)]"
                                : accent === "cyan"
                                    ? "shadow-[0_0_70px_rgba(34,211,238,0.7)]"
                                    : accent === "yellow"
                                        ? "shadow-[0_0_70px_rgba(250,204,21,0.8)]"
                                        : "shadow-[0_0_70px_rgba(168,85,247,0.7)]"
                            }
            `}
                    >
                        {number}
                    </motion.div>


                    {/* FLOATING ACCENT ORB */}

                    <motion.div
                        style={{
                            y: floatingOrbY,
                        }}
                        animate={{
                            x: [0, 8, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`
              absolute
              z-40
              bottom-[8%]
              left-[7%]
              w-10
              h-10
              rounded-full
              ${currentAccent.orb}
              ${currentAccent.hoverOrb}
              transition-shadow
              duration-700
            `}
                    />

                </div>

            </div>


            {/* ======================================================
          PROJECT FOOTER
      ====================================================== */}

            <div
                className="
          relative
          z-30
          h-[60px]
          px-8
          md:px-12
          border-t
          border-white/[0.08]
          flex
          items-center
          justify-between
        "
            >

                <div
                    className="
            flex
            flex-wrap
            items-center
            gap-5
          "
                >

                    <span
                        className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/30
            "
                    >
                        Spring Boot
                    </span>

                    <span
                        className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/30
            "
                    >
                        Microservices
                    </span>

                    <span
                        className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/30
            "
                    >
                        Distributed Systems
                    </span>

                </div>

                <span
                    className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
                >
                    Project {number}
                </span>

            </div>

        </motion.article>
    );
}


/* ========================================================================
   PROJECT PARTICLE
======================================================================== */

function ProjectParticle({
    index,
    particleClass,
}: {
    index: number;
    particleClass: string;
}) {
    const positions: Array<[string, string]> = [
        ["7%", "12%"],
        ["15%", "32%"],
        ["20%", "75%"],
        ["28%", "20%"],
        ["35%", "62%"],
        ["42%", "85%"],
        ["50%", "30%"],
        ["58%", "72%"],
        ["65%", "15%"],
        ["70%", "48%"],
        ["78%", "25%"],
        ["84%", "68%"],
        ["91%", "18%"],
        ["94%", "80%"],
        ["12%", "55%"],
        ["31%", "90%"],
        ["47%", "10%"],
        ["63%", "90%"],
        ["74%", "78%"],
        ["88%", "52%"],
    ];

    const position =
        positions[index % positions.length] ?? ["50%", "50%"];

    return (
        <motion.span
            animate={{
                opacity: [0.15, 1, 0.15],
                scale: [0.6, 1.5, 0.6],
                y: [0, -18, 0],
            }}
            transition={{
                duration: 2.5 + (index % 5),
                repeat: Infinity,
                delay: index * 0.12,
                ease: "easeInOut",
            }}
            className={`
        absolute
        w-[3px]
        h-[3px]
        rounded-full
        ${particleClass}
      `}
            style={{
                left: position[0],
                top: position[1],
            }}
        />
    );
}


/* ========================================================================
   PROJECT TAG
======================================================================== */

function ProjectCardTag({
    text,
    accent,
}: {
    text: string;
    accent: "purple" | "cyan" | "yellow" | "green";
}) {
    const hoverClasses = {
        purple:
            "hover:border-purple-400/30 hover:text-purple-300 hover:bg-purple-500/[0.06]",

        cyan:
            "hover:border-cyan-400/35 hover:text-cyan-300 hover:bg-cyan-500/[0.06]",

        yellow:
            "hover:border-yellow-400/30 hover:text-yellow-300 hover:bg-yellow-500/[0.06]",

        green:
            "hover:border-emerald-400/35 hover:text-emerald-300 hover:bg-emerald-500/[0.06]",
    };

    return (
        <motion.span
            whileHover={{
                y: -3,
                scale: 1.05,
            }}
            className={`
        px-3
        py-1.5
        rounded-full
        border
        border-white/10
        bg-white/[0.025]
        text-[8px]
        uppercase
        tracking-[0.18em]
        text-white/45
        transition-all
        duration-300
        ${hoverClasses[accent]}
      `}
        >
            {text}
        </motion.span>
    );
}