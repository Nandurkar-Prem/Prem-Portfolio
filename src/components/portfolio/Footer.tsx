import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";

const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    name: "GitHub",
    label: "Explore my code",
    href: "https://github.com/Nandurkar-Prem",
  },
  {
    name: "LinkedIn",
    label: "Connect professionally",
    href: "YOUR_LINKEDIN_URL",
  },
  {
    name: "LeetCode",
    label: "See my problem solving",
    href: "https://leetcode.com/u/Prem_Nandurkar/",
  },
  {
    name: "Email",
    label: "Start a conversation",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=your-email@example.com",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0C0C0C]
        px-5
        pb-6
        pt-16
        text-[#D7E2EA]
        sm:px-8
        sm:pt-20
        md:px-10
        md:pt-24
      "
    >
      {/* =========================================================
          SUBTLE TOP ACCENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl">
        <div className="relative h-px w-full bg-[#D7E2EA]/10">
          <div
            className="
              absolute
              left-0
              top-0
              h-px
              w-24
              bg-[#D7E2EA]/50
              sm:w-32
              md:w-40
            "
          />
        </div>

        {/* =======================================================
            MAIN FOOTER CONTENT
        ======================================================= */}

        <div
          className="
            grid
            gap-14
            py-14
            sm:py-16
            md:grid-cols-[1.35fr_0.75fr_1.15fr]
            md:gap-16
            md:py-20
          "
        >
          {/* =====================================================
              BRAND
          ===================================================== */}

          <FadeIn delay={0.05} y={20}>
            <div>
              <Link
                to="/"
                className="
                  group
                  inline-flex
                  items-baseline
                  text-4xl
                  font-black
                  uppercase
                  leading-none
                  tracking-[-0.06em]
                  text-[#D7E2EA]
                  transition-opacity
                  duration-300
                  hover:opacity-80
                  sm:text-5xl
                "
              >
                Prem
                <span
                  className="
                    ml-1
                    text-[#D7E2EA]/40
                    transition-colors
                    duration-300
                    group-hover:text-[#D7E2EA]
                  "
                >
                  .
                </span>
              </Link>

              <p
                className="
                  mt-6
                  max-w-sm
                  font-light
                  leading-relaxed
                  text-[#D7E2EA]/50
                "
                style={{
                  fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                }}
              >
                Computer Technology student and aspiring backend developer
                building real-world applications with Java and Spring Boot.
              </p>

              {/* Status */}

              <div
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D7E2EA]/15
                  bg-[#D7E2EA]/[0.025]
                  px-4
                  py-2.5
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#D7E2EA]/30
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-[#D7E2EA]/70
                    "
                  />
                </span>

                <span
                  className="
                    text-[0.55rem]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#D7E2EA]/45
                    sm:text-xs
                  "
                >
                  Building & Learning
                </span>
              </div>

              {/* Small visual signature */}

              <div className="mt-8 flex items-center gap-2">
                <span className="h-[2px] w-12 rounded-full bg-[#D7E2EA]/50" />
                <span className="h-[2px] w-5 rounded-full bg-[#D7E2EA]/25" />
                <span className="h-[2px] w-2 rounded-full bg-[#D7E2EA]/15" />
              </div>
            </div>
          </FadeIn>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <FadeIn delay={0.1} y={20}>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#D7E2EA]/30" />

                <span
                  className="
                    text-[0.55rem]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#D7E2EA]/40
                    sm:text-xs
                  "
                >
                  Navigate
                </span>
              </div>

              <nav className="mt-6 flex flex-col items-start gap-3.5">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.08em]
                      text-[#D7E2EA]/45
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[#D7E2EA]
                    "
                  >
                    <span
                      className="
                        text-[#D7E2EA]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-70
                      "
                    >
                      →
                    </span>

                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </FadeIn>

          {/* =====================================================
              SOCIAL LINKS
          ===================================================== */}

          <FadeIn delay={0.15} y={20}>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#D7E2EA]/30" />

                <span
                  className="
                    text-[0.55rem]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#D7E2EA]/40
                    sm:text-xs
                  "
                >
                  Connect With Me
                </span>
              </div>

              <div className="mt-5 flex flex-col">
                {SOCIALS.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      border-b
                      border-[#D7E2EA]/10
                      py-4
                      transition-all
                      duration-300
                      hover:border-[#D7E2EA]/20
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          w-5
                          text-[0.45rem]
                          font-medium
                          tracking-[0.15em]
                          text-[#D7E2EA]/20
                          sm:text-[0.5rem]
                        "
                      >
                        0{index + 1}
                      </span>

                      <div className="flex flex-col gap-1">
                        <span
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-[#D7E2EA]/70
                            transition-colors
                            duration-300
                            group-hover:text-[#D7E2EA]
                          "
                        >
                          {social.name}
                        </span>

                        <span className="text-[0.55rem] text-[#D7E2EA]/30 sm:text-xs">
                          {social.label}
                        </span>
                      </div>
                    </div>

                    <span
                      className="
                        text-sm
                        text-[#D7E2EA]/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#D7E2EA]/70
                      "
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================= */}

        <div className="relative border-t border-[#D7E2EA]/10">
          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-24
              -translate-x-1/2
              bg-[#D7E2EA]/25
              sm:w-32
            "
          />
        </div>

        {/* =======================================================
            LARGE NAME
        ======================================================= */}

        <FadeIn delay={0.2} y={20}>
          <div
            className="
              relative
              flex
              w-full
              justify-center
              overflow-hidden
              py-10
              sm:py-12
              md:py-14
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-20
                w-2/3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D7E2EA]/[0.025]
                blur-3xl
              "
            />

            <h2
              className="
                relative
                w-full
                text-center
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.055em]
                text-[#D7E2EA]/[0.10]
                transition-colors
                duration-700
                hover:text-[#D7E2EA]/[0.16]
              "
              style={{
                fontSize: "clamp(2.6rem, 9vw, 8.5rem)",
              }}
            >
              Prem Nandurkar
            </h2>
          </div>
        </FadeIn>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <FadeIn delay={0.25} y={15}>
          <div
            className="
              flex
              flex-col
              gap-6
              border-t
              border-[#D7E2EA]/10
              py-6
              text-[0.5rem]
              uppercase
              tracking-[0.18em]
              text-[#D7E2EA]/30
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:text-xs
            "
          >
            {/* Creator + Copyright */}

            <div className="flex flex-col gap-2">
              <span
                className="
                  text-[0.55rem]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#D7E2EA]/45
                  sm:text-xs
                "
              >
                Designed & developed by{" "}
                <span className="text-[#D7E2EA]/75">
                  Prem Nandurkar
                </span>
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span>© {currentYear} Prem Nandurkar</span>

                <span className="text-[#D7E2EA]/15">•</span>

                <span className="text-[#D7E2EA]/35">
                  Built with curiosity & code
                </span>
              </div>
            </div>

            {/* Closing statement */}

            <span className="hidden md:block">
              Keep building. Keep learning.
            </span>

            {/* Back to top */}

            <button
              type="button"
              onClick={handleBackToTop}
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-[#D7E2EA]/15
                bg-transparent
                px-4
                py-2.5
                text-[#D7E2EA]/40
                transition-all
                duration-300
                hover:border-[#D7E2EA]/35
                hover:bg-[#D7E2EA]/[0.04]
                hover:text-[#D7E2EA]
              "
            >
              <span>Back to top</span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              >
                ↑
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}