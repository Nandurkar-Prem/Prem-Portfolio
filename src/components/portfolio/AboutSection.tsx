import { FadeIn } from "./FadeIn";
import { Link } from "@tanstack/react-router";

const ABOUT_CARDS = [
  {
    number: "01",
    title: "Education",
    heading: "B.Tech",
    description:
      "Currently pursuing a B.Tech in Computer Technology at Yeshwantrao Chavan College of Engineering, Nagpur.",
    meta: "2024 — 2028",
    side: "left",
  },
  {
    number: "02",
    title: "My Story",
    heading: "Curiosity",
    description:
      "I'm someone who enjoys understanding how things work, experimenting with ideas, and continuously learning from new experiences.",
    meta: "A journey in progress",
    side: "right",
  },
  {
    number: "03",
    title: "Interests",
    heading: "What I Like",
    description:
      "I enjoy problem solving, building things from scratch, participating in hackathons, exploring ideas, and constantly improving myself.",
    meta: "Curiosity • Exploration",
    side: "left",
  },
  {
    number: "04",
    title: "Currently",
    heading: "Right Now",
    description:
      "I'm focused on growing as a person, strengthening my fundamentals, building meaningful projects, and preparing for the opportunities ahead.",
    meta: "Learning • Building • Improving",
    side: "right",
  },
];

const LEFT_CARDS = ABOUT_CARDS.filter((card) => card.side === "left");
const RIGHT_CARDS = ABOUT_CARDS.filter((card) => card.side === "right");

function AboutCard({
  card,
  delay,
}: {
  card: (typeof ABOUT_CARDS)[number];
  delay: number;
}) {
  return (
    <FadeIn delay={delay} y={30}>
      <div
        className="
          group
          relative
          flex
          min-h-[330px]
          w-full
          flex-col
          overflow-hidden
          rounded-[32px]
          border
          border-white/[0.09]
          bg-[#0b0d17]/90
          p-7
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-white/[0.20]
          hover:bg-[#0e101c]
          sm:min-h-[360px]
          sm:p-8
          md:min-h-[375px]
        "
      >
        {/* Top accent */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-px
            w-0
            transition-all
            duration-700
            group-hover:w-full
          "
          style={{
            background:
              card.side === "left"
                ? "linear-gradient(90deg, #c653ff, transparent)"
                : "linear-gradient(90deg, #32aaff, transparent)",
          }}
        />

        {/* Ambient card glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-48
            w-48
            rounded-full
            opacity-0
            blur-[80px]
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
          style={{
            background:
              card.side === "left"
                ? "rgba(180,70,255,0.18)"
                : "rgba(40,150,255,0.18)",
          }}
        />

        {/* Card header */}

        <div className="relative z-10 flex items-center justify-between">
          <span
            className="
              flex
              h-10
              min-w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.12]
              bg-white/[0.035]
              px-3
              text-[0.6rem]
              font-semibold
              tracking-[0.15em]
              text-white/60
              transition-all
              duration-500
              group-hover:border-white/[0.25]
              group-hover:text-white
            "
          >
            {card.number}
          </span>

          <span
            className="
              text-sm
              text-white/20
              transition-all
              duration-500
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-white/70
            "
          >
            ↗
          </span>
        </div>

        {/* Main content */}

        <div className="relative z-10 mt-10 flex flex-1 flex-col">
          <span
            className="
              text-[0.6rem]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            {card.title}
          </span>

          <h3
            className="
              mt-4
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.05em]
              text-white
            "
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
            }}
          >
            {card.heading}
          </h3>

          {/* Accent line */}

          <div
            className="
              mt-5
              h-px
              w-10
              shrink-0
              transition-all
              duration-500
              group-hover:w-20
            "
            style={{
              background:
                card.side === "left"
                  ? "linear-gradient(90deg, #c653ff, transparent)"
                  : "linear-gradient(90deg, #32aaff, transparent)",
            }}
          />

          <p className="mt-6 max-w-md text-sm font-normal leading-[1.75] text-white/45 sm:text-[0.95rem]">
            {card.description}
          </p>
        </div>

        {/* Metadata
            No absolute positioning anymore.
            This prevents overlap with long descriptions. */}

        <div className="relative z-10 mt-7 shrink-0 border-t border-white/[0.07] pt-4">
          <span className="text-[0.55rem] font-medium uppercase tracking-[0.22em] text-white/25">
            {card.meta}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

function OrbitSystem() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Main ambient glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.055]
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-purple-500/[0.14]
          group-hover:blur-[110px]
        "
      />

      {/* Blue secondary glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-[70px]
          transition-all
          duration-700
          group-hover:bg-blue-400/[0.12]
          group-hover:blur-[90px]
        "
      />

      {/* Outer orbit */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#914cff]/25
          transition-all
          duration-700
          group-hover:border-[#b86cff]/65
          group-hover:shadow-[0_0_35px_rgba(168,85,247,0.20)]
        "
      />

      {/* Second orbit */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[330px]
          w-[330px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#238cff]/20
          transition-all
          duration-700
          group-hover:border-[#38aaff]/55
        "
      />

      {/* Third orbit */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[270px]
          w-[270px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#c34dff]/15
          transition-all
          duration-700
          group-hover:border-[#d35cff]/50
        "
      />

      {/* Rotating orbit */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          animate-[spin_18s_linear_infinite]
          rounded-full
          border
          border-dashed
          border-[#38aaff]/20
          transition-all
          duration-700
          group-hover:border-[#38aaff]/50
        "
      >
        <span
          className="
            absolute
            -right-1
            top-1/2
            h-2
            w-2
            -translate-y-1/2
            rounded-full
            bg-[#38aaff]
            shadow-[0_0_12px_#38aaff]
            transition-all
            duration-500
            group-hover:h-3
            group-hover:w-3
            group-hover:shadow-[0_0_25px_#38aaff]
          "
        />
      </div>

      {/* Reverse orbit */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          animate-[spin_12s_linear_infinite_reverse]
          rounded-full
          border
          border-[#c84cff]/20
          transition-all
          duration-700
          group-hover:border-[#c84cff]/50
        "
      >
        <span
          className="
            absolute
            -left-1
            top-1/2
            h-2
            w-2
            -translate-y-1/2
            rounded-full
            bg-[#c84cff]
            shadow-[0_0_12px_#c84cff]
            transition-all
            duration-500
            group-hover:h-3
            group-hover:w-3
            group-hover:shadow-[0_0_25px_#c84cff]
          "
        />
      </div>

      {/* Floating points */}

      <span
        className="
          absolute
          left-[17%]
          top-[30%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#c84cff]
          shadow-[0_0_15px_#c84cff]
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:shadow-[0_0_25px_#c84cff]
        "
      />

      <span
        className="
          absolute
          right-[17%]
          top-[34%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#38aaff]
          shadow-[0_0_15px_#38aaff]
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:shadow-[0_0_25px_#38aaff]
        "
      />

      <span
        className="
          absolute
          bottom-[25%]
          left-[25%]
          h-1
          w-1
          rounded-full
          bg-white/60
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:bg-white
        "
      />

      <span
        className="
          absolute
          bottom-[27%]
          right-[24%]
          h-1
          w-1
          rounded-full
          bg-[#a855f7]
          shadow-[0_0_10px_#a855f7]
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:shadow-[0_0_20px_#a855f7]
        "
      />
    </div>
  );
}

function PersonalCore() {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        min-h-[560px]
        cursor-default
        items-center
        justify-center
      "
    >
      <OrbitSystem />

      {/* Central glow behind PREM */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/[0.03]
          blur-[60px]
          transition-all
          duration-700
          group-hover:bg-purple-500/[0.13]
          group-hover:blur-[80px]
        "
      />

      {/* Central panel */}

      <div
        className="
          relative
          z-10
          flex
          h-[310px]
          w-[310px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/[0.12]
          bg-[#080a13]/90
          text-center
          shadow-[0_0_50px_rgba(100,70,220,0.08)]
          backdrop-blur-xl
          transition-all
          duration-700
          group-hover:border-purple-300/30
          group-hover:shadow-[0_0_80px_rgba(145,76,255,0.22)]
          sm:h-[350px]
          sm:w-[350px]
        "
      >
        {/* Inner gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-10
            rounded-full
            bg-gradient-to-br
            from-purple-500/[0.06]
            via-transparent
            to-blue-500/[0.06]
            blur-2xl
            transition-all
            duration-700
            group-hover:from-purple-500/[0.16]
            group-hover:to-blue-500/[0.13]
          "
        />

        {/* Center highlight */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-20
            w-40
            -translate-x-1/2
            rounded-full
            bg-purple-400/[0.05]
            blur-3xl
            transition-all
            duration-700
            group-hover:bg-purple-400/[0.15]
          "
        />

        {/* Label */}

        <span className="relative z-10 text-[0.55rem] font-semibold uppercase tracking-[0.45em] text-white/35">
          A little about
        </span>

        {/* Name */}

        <h3
          className="
            relative
            z-10
            mt-4
            font-bold
            uppercase
            leading-none
            tracking-[-0.07em]
            text-white
            transition-all
            duration-500
            group-hover:text-white
          "
          style={{
            fontSize: "clamp(3.8rem, 7vw, 5.5rem)",
          }}
        >
          PREM
        </h3>

        {/* Gradient line */}

        <div
          className="
            relative
            z-10
            mt-4
            h-px
            w-20
            bg-gradient-to-r
            from-[#c653ff]
            via-[#9b5cff]
            to-[#38aaff]
            transition-all
            duration-500
            group-hover:w-28
            group-hover:shadow-[0_0_12px_rgba(168,85,247,0.7)]
          "
        />

        {/* Personal statement */}

        <p className="relative z-10 mt-5 max-w-[220px] text-xs font-normal leading-relaxed text-white/45 transition-colors duration-500 group-hover:text-white/60 sm:text-sm">
          Curious by nature.
          <br />
          Consistent by choice.
          <br />
          Always becoming.
        </p>

        {/* Traits */}

        <div className="relative z-10 mt-7 flex items-center gap-3">
          <span
            className="
              rounded-full
              border
              border-purple-400/20
              bg-purple-400/[0.06]
              px-3
              py-1.5
              text-[0.48rem]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-purple-200/70
              transition-all
              duration-500
              group-hover:border-purple-400/40
              group-hover:bg-purple-400/[0.12]
              group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]
            "
          >
            Curious
          </span>

          <span
            className="
              rounded-full
              border
              border-blue-400/20
              bg-blue-400/[0.06]
              px-3
              py-1.5
              text-[0.48rem]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-blue-200/70
              transition-all
              duration-500
              group-hover:border-blue-400/40
              group-hover:bg-blue-400/[0.12]
              group-hover:shadow-[0_0_15px_rgba(56,170,255,0.15)]
            "
          >
            Growing
          </span>
        </div>
      </div>

      {/* Top label */}

      <div
        className="
          absolute
          left-1/2
          top-[3%]
          z-20
          -translate-x-1/2
          whitespace-nowrap
        "
      >
        <span className="text-[0.5rem] font-medium uppercase tracking-[0.35em] text-white/20 transition-colors duration-500 group-hover:text-white/45">
          Personal Identity
        </span>
      </div>

      {/* Bottom status */}

      <div
        className="
          absolute
          bottom-[3%]
          left-1/2
          z-20
          -translate-x-1/2
          whitespace-nowrap
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_10px_#4ade80] transition-all duration-500 group-hover:h-2 group-hover:w-2 group-hover:shadow-[0_0_18px_#4ade80]" />

          <span className="text-[0.5rem] font-medium uppercase tracking-[0.25em] text-white/25 transition-colors duration-500 group-hover:text-white/45">
            Still becoming
          </span>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#060812]
        px-5
        py-24
        text-white
        sm:px-8
        sm:py-28
        md:px-10
        md:py-36
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(80,100,150,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80,100,150,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Purple ambient light */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-[20%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-700/[0.07]
          blur-[160px]
        "
      />

      {/* Blue ambient light */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/[0.07]
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <FadeIn delay={0.05} y={30}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#a855f7] sm:w-16" />

              <span className="text-[0.55rem] font-medium uppercase tracking-[0.45em] text-white/40 sm:text-xs">
                About Me
              </span>

              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#38bdf8] sm:w-16" />
            </div>

            <h2
              className="
                mx-auto
                mt-8
                max-w-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
              "
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
              }}
            >
              Getting to know
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#d946ef]
                  via-[#9b5cff]
                  to-[#38bdf8]
                  bg-clip-text
                  text-transparent
                "
              >
                the real me.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm font-normal leading-relaxed text-white/40 sm:text-base md:text-lg">
              A glimpse into my education, my story, the things that interest
              me, and the person I'm becoming.
            </p>
          </div>
        </FadeIn>

        {/* ======================================================
            MAIN LAYOUT
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-7
            md:mt-20
            md:grid-cols-[1.05fr_0.9fr_1.05fr]
            md:items-center
            md:gap-8
            lg:gap-10
          "
        >
          {/* LEFT */}

          <div className="relative z-20 flex flex-col gap-7">
            {LEFT_CARDS.map((card, index) => (
              <AboutCard
                key={card.number}
                card={card}
                delay={0.15 + index * 0.12}
              />
            ))}
          </div>

          {/* CENTER */}

          <FadeIn
            delay={0.3}
            y={25}
            className="relative order-first md:order-none"
          >
            <PersonalCore />
          </FadeIn>

          {/* RIGHT */}

          <div className="relative z-20 flex flex-col gap-7">
            {RIGHT_CARDS.map((card, index) => (
              <AboutCard
                key={card.number}
                card={card}
                delay={0.2 + index * 0.12}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            MORE ABOUT ME
        ====================================================== */}

        <FadeIn delay={0.55} y={25}>
          <div
            className="
              relative
              mx-auto
              mt-12
              flex
              max-w-4xl
              flex-col
              items-center
              justify-between
              gap-6
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.10]
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              sm:flex-row
              sm:p-7
            "
          >
            {/* Gradient top line */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-2/3
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#a855f7]
                to-transparent
              "
            />

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-purple-400/25
                  bg-purple-400/[0.06]
                  text-xl
                  text-white
                  shadow-[0_0_30px_rgba(168,85,247,0.10)]
                "
              >
                ✦
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Want to know more about my journey?
                </h3>

                <p className="mt-1 text-xs text-white/35 sm:text-sm">
                  Explore my full story, experiences and achievements.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="
                group
                flex
                items-center
                gap-4
                rounded-full
                border
                border-purple-400/40
                bg-gradient-to-r
                from-purple-500/[0.12]
                to-blue-500/[0.12]
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white
                transition-all
                duration-300
                hover:border-blue-400/60
                hover:shadow-[0_0_35px_rgba(120,80,255,0.15)]
              "
            >
              <span>More About Me</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}