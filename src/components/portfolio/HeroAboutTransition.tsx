import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PARTICLES = [
  { x: "18%", y: "35%", delay: 0, duration: 3.2 },
  { x: "28%", y: "62%", delay: 0.8, duration: 3.8 },
  { x: "39%", y: "28%", delay: 1.4, duration: 3.4 },
  { x: "61%", y: "30%", delay: 0.5, duration: 3.6 },
  { x: "72%", y: "65%", delay: 1.1, duration: 3.1 },
  { x: "82%", y: "38%", delay: 1.8, duration: 3.7 },
];

export function HeroAboutTransition() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.5, 0.82, 1],
    [0, 1, 1, 1, 0]
  );

  const lineWidth = useTransform(
    scrollYProgress,
    [0.05, 0.5, 0.9],
    ["15%", "90%", "35%"]
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8, 1],
    [0.4, 1.2, 1, 0.5]
  );

  const ringScale = useTransform(
    scrollYProgress,
    [0.05, 0.55, 1],
    [0.5, 1.25, 1.6]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [35, 0, -20]
  );

  return (
    <section
      ref={ref}
      className="relative h-[260px] sm:h-[300px] overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}
      <div
        className="absolute inset-0 opacity-[0.045]"
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

      {/* =====================================================
          CYAN AMBIENT GLOW
      ====================================================== */}
      <motion.div
        style={{ opacity }}
        className="
          absolute
          left-[20%]
          top-1/2
          -translate-y-1/2
          w-[320px]
          h-[180px]
          rounded-full
          bg-cyan-400/10
          blur-[90px]
        "
      />

      {/* =====================================================
          PURPLE AMBIENT GLOW
      ====================================================== */}
      <motion.div
        style={{ opacity }}
        className="
          absolute
          right-[20%]
          top-1/2
          -translate-y-1/2
          w-[320px]
          h-[180px]
          rounded-full
          bg-purple-500/10
          blur-[90px]
        "
      />

      {/* =====================================================
          CENTRAL ENERGY GLOW
      ====================================================== */}
      <motion.div
        style={{
          opacity,
          scale: glowScale,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-32
          h-32
          sm:w-44
          sm:h-44
          rounded-full
          bg-gradient-to-r
          from-cyan-400/20
          via-purple-500/20
          to-blue-500/20
          blur-3xl
        "
      />

      {/* =====================================================
          OUTER ENERGY RINGS
      ====================================================== */}
      <motion.div
        style={{
          opacity,
          scale: ringScale,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-32
          h-32
          sm:w-40
          sm:h-40
          rounded-full
          border
          border-cyan-400/20
        "
      />

      <motion.div
        style={{
          opacity,
          scale: ringScale,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-24
          h-24
          sm:w-32
          sm:h-32
          rounded-full
          border
          border-purple-500/25
        "
      />

      {/* =====================================================
          MAIN ENERGY LINE
      ====================================================== */}
      <motion.div
        style={{
          width: lineWidth,
          opacity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300
          to-transparent
        "
      />

      {/* Purple secondary line */}
      <motion.div
        style={{
          width: lineWidth,
          opacity,
        }}
        className="
          absolute
          left-1/2
          top-[calc(50%+3px)]
          -translate-x-1/2
          h-px
          bg-gradient-to-r
          from-transparent
          via-purple-400/70
          to-transparent
        "
      />

      {/* =====================================================
          CENTRAL ENERGY CORE
      ====================================================== */}
      <motion.div
        style={{
          opacity,
          scale: glowScale,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-3
          h-3
          rounded-full
          bg-[#D7E2EA]
          shadow-[0_0_15px_rgba(110,231,249,0.9),0_0_35px_rgba(168,85,247,0.7)]
        "
      />

      {/* =====================================================
          MOVING PARTICLES
      ====================================================== */}
      {PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          className="
            absolute
            w-1
            h-1
            rounded-full
            bg-[#D7E2EA]
          "
          style={{
            left: particle.x,
            top: particle.y,
            opacity,
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-4, 4, -4],
            opacity: [0.15, 0.8, 0.15],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          ENERGY PARTICLES MOVING TOWARD CENTER
      ====================================================== */}
      <motion.div
        style={{ opacity }}
        animate={{
          x: ["-45vw", "0vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-1
          h-1
          rounded-full
          bg-cyan-300
          shadow-[0_0_12px_rgba(103,232,249,1)]
        "
      />

      <motion.div
        style={{ opacity }}
        animate={{
          x: ["45vw", "0vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-1
          h-1
          rounded-full
          bg-purple-300
          shadow-[0_0_12px_rgba(168,85,247,1)]
        "
      />

      {/* =====================================================
          ABOUT LABEL
      ====================================================== */}
      <motion.div
        style={{
          opacity,
          y: contentY,
        }}
        className="
          absolute
          left-1/2
          bottom-10
          -translate-x-1/2
          flex
          items-center
          gap-4
          whitespace-nowrap
        "
      >
        <span
          className="
            w-12
            h-px
            bg-gradient-to-r
            from-transparent
            to-cyan-400/70
          "
        />

        <span
          className="
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.45em]
            font-medium
            text-[#D7E2EA]/70
          "
        >
          About Me
        </span>

        <span
          className="
            w-12
            h-px
            bg-gradient-to-r
            from-purple-400/70
            to-transparent
          "
        />
      </motion.div>

      {/* =====================================================
          TOP / BOTTOM FADE
      ====================================================== */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-20
          bg-gradient-to-b
          from-[#0C0C0C]
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-[#0C0C0C]
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}