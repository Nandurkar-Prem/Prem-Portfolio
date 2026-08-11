import { FadeIn } from "./FadeIn";

const EMAIL = "nandurkarprem1@gmail.com";

const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const CONTACT_LINKS = [
  {
    name: "GitHub",
    label: "Explore my code",
    href: "https://github.com/Nandurkar-Prem",
    external: true,
  },
  {
    name: "LeetCode",
    label: "See my problem solving",
    href: "https://leetcode.com/u/Prem_Nandurkar/",
    external: true,
  },
  {
    name: "LinkedIn",
    label: "Connect professionally",
    href: "https://www.linkedin.com/in/prem-nandurkar-0a09a0276/",
    external: true,
  },
  {
    name: "Email",
    label: "Start a conversation",
    href: GMAIL_URL,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0C0C0C]
        px-5
        py-24
        text-[#D7E2EA]
        sm:px-8
        sm:py-28
        md:px-10
        md:py-36
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/[0.035]
          blur-[120px]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(215,226,234,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(215,226,234,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =======================================================
            TOP LABEL
        ======================================================= */}

        <FadeIn delay={0.05} y={20}>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D7E2EA]/20 sm:w-12" />

            <span className="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40 sm:text-xs">
              Have something in mind?
            </span>

            <span className="h-px w-8 bg-[#D7E2EA]/20 sm:w-12" />
          </div>
        </FadeIn>

        {/* =======================================================
            MAIN HEADING
        ======================================================= */}

        <FadeIn delay={0.1} y={45}>
          <h2
            className="
              mt-8
              text-center
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.06em]
              text-[#D7E2EA]
            "
            style={{
              fontSize: "clamp(4rem, 14vw, 11rem)",
            }}
          >
            Let's
            <br />
            Connect
          </h2>
        </FadeIn>

        {/* =======================================================
            MESSAGE
        ======================================================= */}

        <FadeIn delay={0.2} y={25}>
          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-center
              font-light
              leading-relaxed
              text-[#D7E2EA]/50
            "
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
            }}
          >
            I'm always interested in connecting with developers, recruiters,
            builders, and people working on interesting ideas. Whether you
            have an opportunity, a project, or simply want to say hello —
            feel free to reach out.
          </p>
        </FadeIn>

        {/* =======================================================
            PRIMARY GMAIL CTA
        ======================================================= */}

        <FadeIn delay={0.3} y={25}>
          <div className="mt-12 flex justify-center sm:mt-14">
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                overflow-hidden
                rounded-full
                border
                border-[#D7E2EA]/20
                bg-[#D7E2EA]
                px-7
                py-4
                text-[#0C0C0C]
                transition-all
                duration-500
                hover:border-[#D7E2EA]
                hover:bg-transparent
                hover:text-[#D7E2EA]
                sm:px-9
                sm:py-5
              "
            >
              <span
                className="
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  sm:text-xs
                "
              >
                Start a Conversation
              </span>

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>
          </div>
        </FadeIn>

        {/* =======================================================
            SOCIAL / PROFESSIONAL LINKS
        ======================================================= */}

        <div className="mx-auto mt-20 max-w-5xl sm:mt-24 md:mt-28">
          <FadeIn delay={0.35} y={25}>
            <div className="border-t border-[#D7E2EA]/10">
              {CONTACT_LINKS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={
                    link.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-5
                    border-b
                    border-[#D7E2EA]/10
                    py-6
                    transition-all
                    duration-500
                    hover:px-3
                    sm:py-7
                    md:py-8
                  "
                >
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span className="text-[0.5rem] font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/20 sm:text-xs">
                      0{index + 1}
                    </span>

                    <div className="flex flex-col gap-1">
                      <span
                        className="
                          text-xl
                          font-medium
                          uppercase
                          leading-none
                          tracking-tight
                          text-[#D7E2EA]
                          transition-colors
                          duration-300
                          group-hover:text-cyan-200
                          sm:text-2xl
                          md:text-3xl
                        "
                      >
                        {link.name}
                      </span>

                      <span className="text-[0.55rem] uppercase tracking-[0.15em] text-[#D7E2EA]/30 sm:text-xs">
                        {link.label}
                      </span>
                    </div>
                  </div>

                  <span
                    className="
                      text-xl
                      text-[#D7E2EA]/30
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-cyan-200
                      sm:text-2xl
                    "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* =======================================================
            AVAILABILITY
        ======================================================= */}

        <FadeIn delay={0.45} y={20}>
          <div className="mt-16 flex justify-center sm:mt-20">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-emerald-300/15
                bg-emerald-300/[0.035]
                px-4
                py-2.5
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300/70" />
              </span>

              <span className="text-[0.5rem] font-medium uppercase tracking-[0.2em] text-emerald-200/50 sm:text-xs">
                Open to opportunities & collaborations
              </span>
            </div>
          </div>
        </FadeIn>

        {/* =======================================================
            CLOSING LINE
        ======================================================= */}

        <FadeIn delay={0.5} y={15}>
          <p className="mt-20 text-center text-[0.5rem] uppercase tracking-[0.3em] text-[#D7E2EA]/20 sm:mt-24 sm:text-xs">
            Let's turn ideas into something real.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}