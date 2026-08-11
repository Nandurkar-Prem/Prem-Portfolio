import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { Link } from "@tanstack/react-router";
import premAvatar from "@/assets/premAvatar.png";

const NAV = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const TECH_STACK = ["JAVA", "SPRING BOOT", "REST APIs"];

export function HeroSection() {
  return (
    <section
      className="hero-section relative flex min-h-screen min-h-[100svh] flex-col overflow-hidden bg-[#0C0C0C]"
      aria-label="Introduction"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Main ambient glow */}
        <div
          className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)",
          }}
        />

        {/* Top-right glow */}
        <div
          className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-15 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full opacity-10 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Floating particles */}
        <span className="hero-particle absolute left-[10%] top-[25%] h-1 w-1 rounded-full bg-white" />
        <span className="hero-particle hero-particle-delay-1 absolute left-[22%] top-[65%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
        <span className="hero-particle hero-particle-delay-2 absolute left-[78%] top-[22%] h-1 w-1 rounded-full bg-purple-300" />
        <span className="hero-particle hero-particle-delay-3 absolute left-[88%] top-[58%] h-1.5 w-1.5 rounded-full bg-blue-300" />
        <span className="hero-particle hero-particle-delay-4 absolute left-[68%] top-[78%] h-1 w-1 rounded-full bg-white" />
        <span className="hero-particle hero-particle-delay-5 absolute left-[35%] top-[18%] h-1 w-1 rounded-full bg-cyan-200" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="relative z-30 px-6 pt-6 md:px-10 md:pt-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Initial */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="group hidden text-xl font-black tracking-tight text-[#D7E2EA] md:block"
          >
            P
            <span className="text-cyan-300 transition-colors duration-300 group-hover:text-purple-300">
              .
            </span>
          </Link>

          <ul className="flex w-full items-center justify-between gap-3 md:w-auto md:gap-8 lg:gap-12">
            {NAV.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="
                    group
                    relative
                    text-[#D7E2EA]
                    font-medium
                    uppercase
                    tracking-wider
                    text-[0.65rem]
                    sm:text-xs
                    md:text-sm
                    lg:text-base
                    transition-colors
                    duration-300
                    hover:text-white
                    focus:outline-none
                    focus-visible:text-cyan-300
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      w-0
                      bg-gradient-to-r
                      from-cyan-300
                      to-purple-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* =========================================================
          HERO TITLE
      ========================================================= */}

      <div className="relative z-10 mt-8 overflow-visible sm:mt-6 md:mt-2">
        <FadeIn delay={0.15} y={40}>
          <div className="flex flex-col items-center">
            {/* Small identity label */}
            <p
              className="
                mb-3
                text-[0.65rem]
                font-medium
                uppercase
                tracking-[0.35em]
                text-cyan-300/80
                sm:text-xs
                md:mb-4
              "
            >
              Java • Spring Boot • Full Stack
            </p>

            <h1
              className="
                hero-heading
                w-full
                text-center
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.055em]
                text-[#E8F0F5]
                text-[16vw]
                sm:text-[15vw]
                md:text-[14.5vw]
                lg:text-[15vw]
              "
            >
              Prem
            </h1>

            <h2
              className="
                -mt-1
                w-full
                text-center
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.055em]
                text-[#343A40]
                text-[13vw]
                sm:text-[12vw]
                md:text-[11.5vw]
                lg:text-[12vw]
              "
            >
              Nandurkar
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          FLOATING INFORMATION CARD - LEFT
      ========================================================= */}

      <FadeIn
        delay={0.4}
        y={15}
        className="
          absolute
          left-5
          top-[38%]
          z-20
          hidden
          md:block
          lg:left-10
        "
      >
        <div
          className="
            hero-floating-card
            w-[145px]
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            p-4
            backdrop-blur-md
            lg:w-[165px]
          "
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />

            <span className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/50">
              Currently
            </span>
          </div>

          <p className="text-sm font-semibold leading-tight text-[#D7E2EA] lg:text-base">
            Building
            <br />
            backend systems
          </p>

          <div className="mt-3 h-px w-full bg-white/10" />

          <p className="mt-3 text-[0.55rem] uppercase tracking-wider text-white/40">
            Java / Spring Boot
          </p>
        </div>
      </FadeIn>

      {/* =========================================================
          FLOATING INFORMATION CARD - RIGHT
      ========================================================= */}

      <FadeIn
        delay={0.5}
        y={15}
        className="
          absolute
          right-5
          top-[43%]
          z-20
          hidden
          md:block
          lg:right-10
        "
      >
        <div
          className="
            hero-floating-card
            w-[145px]
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            p-4
            backdrop-blur-md
            lg:w-[165px]
          "
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,0.8)]" />

            <span className="text-[0.55rem] font-medium uppercase tracking-[0.2em] text-white/50">
              Stack
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-2.5
                  py-1.5
                  text-[0.5rem]
                  font-medium
                  uppercase
                  tracking-wider
                  text-white/55
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* =========================================================
          AVATAR
      ========================================================= */}

      <FadeIn
        delay={0.6}
        y={30}
        className="
          absolute
          left-1/2
          top-[47%]
          z-10
          w-[245px]
          -translate-x-1/2
          -translate-y-1/2
          sm:top-auto
          sm:bottom-[-5px]
          sm:w-[330px]
          sm:translate-y-0
          md:w-[410px]
          lg:w-[480px]
          xl:w-[530px]
        "
      >
        {/* Avatar ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[55%]
            h-[65%]
            w-[70%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/10
            blur-[70px]
          "
          aria-hidden="true"
        />

        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="hero-avatar-float relative">
            <img
              src={premAvatar}
              alt="3D avatar representing Prem Nandurkar"
              className="relative z-10 h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* =========================================================
          BOTTOM CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-20
          mt-auto
          flex
          items-end
          justify-between
          gap-5
          px-6
          pb-6
          sm:pb-8
          md:px-10
          md:pb-10
        "
      >
        {/* Left description */}
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[190px] sm:max-w-[260px] md:max-w-[330px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-cyan-300/70 sm:w-10" />

              <span className="text-[0.5rem] uppercase tracking-[0.25em] text-white/40 sm:text-xs">
                Java Developer
              </span>
            </div>

            <p
              className="
                font-light
                uppercase
                leading-snug
                tracking-wide
                text-[#D7E2EA]
              "
              style={{
                fontSize: "clamp(0.68rem, 1.15vw, 1.2rem)",
              }}
            >
              Building reliable backend systems with Java, Spring Boot and a
              curiosity for solving real-world problems.
            </p>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col items-end gap-2 sm:flex-row sm:gap-3">
            <Link
              to="/projects"
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                px-4
                py-2.5
                text-[0.6rem]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#D7E2EA]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-cyan-300/40
                hover:bg-cyan-300/10
                hover:text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-300
                sm:px-5
                sm:py-3
                sm:text-xs
              "
            >
              <span>View Projects</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                rounded-full
                bg-[#D7E2EA]
                px-4
                py-2.5
                text-[0.6rem]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#0C0C0C]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-white
                hover:shadow-[0_0_30px_rgba(215,226,234,0.15)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-300
                sm:px-5
                sm:py-3
                sm:text-xs
              "
            >
              <span>Let's Connect</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <FadeIn
        delay={0.8}
        y={10}
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          sm:block
        "
      >
        <Link
          to="/about"
          className="
            group
            flex
            flex-col
            items-center
            gap-2
            text-white/30
            transition-colors
            duration-300
            hover:text-cyan-300
            focus:outline-none
            focus-visible:text-cyan-300
          "
          aria-label="Explore the portfolio"
        >
          <span className="text-[0.5rem] uppercase tracking-[0.3em]">
            Explore
          </span>

          <span className="hero-scroll-line relative h-8 w-px overflow-hidden bg-white/10">
            <span className="absolute left-0 top-0 h-1/2 w-full bg-cyan-300" />
          </span>
        </Link>
      </FadeIn>

      {/* =========================================================
          LOCAL ANIMATIONS
      ========================================================= */}

      <style>{`
        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes heroParticle {
          0%,
          100% {
            opacity: 0.15;
            transform: translateY(0px) scale(1);
          }

          50% {
            opacity: 0.7;
            transform: translateY(-14px) scale(1.4);
          }
        }

        @keyframes heroScroll {
          0% {
            transform: translateY(-100%);
          }

          100% {
            transform: translateY(200%);
          }
        }

        .hero-avatar-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .hero-floating-card {
          animation: heroFloat 6s ease-in-out infinite;
        }

        .hero-particle {
          animation: heroParticle 4s ease-in-out infinite;
        }

        .hero-particle-delay-1 {
          animation-delay: 0.8s;
        }

        .hero-particle-delay-2 {
          animation-delay: 1.5s;
        }

        .hero-particle-delay-3 {
          animation-delay: 2.2s;
        }

        .hero-particle-delay-4 {
          animation-delay: 2.8s;
        }

        .hero-particle-delay-5 {
          animation-delay: 1.1s;
        }

        .hero-scroll-line span {
          animation: heroScroll 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-avatar-float,
          .hero-floating-card,
          .hero-particle,
          .hero-scroll-line span {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}