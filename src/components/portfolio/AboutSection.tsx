import React from "react";
import aboutImage from "@/assets/prem_about_section.png";

/* -------------------------------------------------------------------------- */
/*                                   Icons                                    */
/* -------------------------------------------------------------------------- */

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.5 11L12 15.5L16.5 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 9.5L12 5L20.5 9.5L12 14L3.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 12V16.5C7 18.2 9.24 19.5 12 19.5C14.76 19.5 17 18.2 17 16.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20.5 10V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L13.7 9.3L20 11L13.7 12.7L12 19L10.3 12.7L4 11L10.3 9.3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 8L4.5 12L8.5 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8L19.5 12L15.5 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5L10.5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Information Card                              */
/* -------------------------------------------------------------------------- */

interface InfoCardProps {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function InfoCard({
  number,
  label,
  title,
  description,
  icon,
}: InfoCardProps) {
  return (
    <div className="about-info-card">
      <div className="about-info-card-top">
        <div className="about-info-icon">{icon}</div>

        <span className="about-info-number">{number}</span>
      </div>

      <div className="about-info-label">{label}</div>

      <h3 className="about-info-title">{title}</h3>

      <p className="about-info-description">{description}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              About Section                                 */
/* -------------------------------------------------------------------------- */

export function AboutSection() {
  return (
    <>
      <section id="about" className="about-section">
        {/* ---------------------------------------------------------------- */}
        {/* Background                                                        */}
        {/* ---------------------------------------------------------------- */}

        <div className="about-background">
          <div className="about-grid" />

          <div className="about-green-glow about-green-glow-one" />
          <div className="about-green-glow about-green-glow-two" />

          <div className="about-noise" />
        </div>

        <div className="about-container">
          {/* -------------------------------------------------------------- */}
          {/* Section Header                                                  */}
          {/* -------------------------------------------------------------- */}

          <div className="about-section-header">
            <div className="about-section-label">
              <span className="about-section-dot" />
              <span>PERSONAL IDENTITY</span>
            </div>

            <div className="about-section-index">
              02 <span>/</span> 05
            </div>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Main Content                                                    */}
          {/* -------------------------------------------------------------- */}

          <div className="about-main">
            {/* ============================================================ */}
            {/* LEFT SIDE                                                      */}
            {/* ============================================================ */}

            <div className="about-content">
              <div className="about-eyebrow">
                <span />
                ABOUT ME
              </div>

              <h2 className="about-title">
                Hello, I&apos;m
                <br />
                <span>Prem</span>
                <br />
                <em>Nandurkar.</em>
              </h2>

              <div className="about-title-line">
                <span className="line-primary" />
                <span className="line-secondary" />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Short Introduction                                         */}
              {/* ---------------------------------------------------------- */}

              <div className="about-introduction">
                <p className="about-introduction-main">
                  I&apos;m a Computer Technology student and developer who
                  enjoys turning ideas into reliable software. I&apos;m
                  particularly interested in backend development, building
                  thoughtful user experiences, and continuously learning how
                  things work under the hood.
                </p>

                <p className="about-introduction-secondary">
                  I believe the best way to learn is to build — experiment,
                  break things, understand them, and improve.
                </p>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Information Cards                                           */}
              {/* ---------------------------------------------------------- */}

              <div className="about-info-grid">
                <InfoCard
                  number="01"
                  label="EDUCATION"
                  title="B.Tech in Computer Technology"
                  description="Building strong foundations in software engineering, programming and computer science."
                  icon={<GraduationIcon />}
                />

                <InfoCard
                  number="02"
                  label="INTERESTS"
                  title="Building & Exploring"
                  description="Backend systems, problem solving, UI/UX design and turning ideas into useful products."
                  icon={<SparkIcon />}
                />

                <InfoCard
                  number="03"
                  label="CURRENTLY"
                  title="Learning by Building"
                  description="Strengthening fundamentals while creating meaningful projects and improving every day."
                  icon={<CodeIcon />}
                />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* CTA Buttons                                                 */}
              {/* ---------------------------------------------------------- */}

              <div className="about-actions">
                {/* Download Resume */}

                <a
                  href="/Prem-Nandurkar-Resume.pdf"
                  download="Prem-Nandurkar-Resume.pdf"
                  className="about-button about-button-primary"
                >
                  <span>DOWNLOAD RESUME</span>
                  <DownloadIcon />
                </a>

                {/* View Projects */}

                <a
                  href="#projects"
                  className="about-button about-button-secondary"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRightIcon />
                </a>

                {/* Let's Connect */}

                <a
                  href="#contact"
                  className="about-button about-button-secondary"
                >
                  <span>LET&apos;S CONNECT</span>
                  <ArrowUpRightIcon />
                </a>
              </div>
            </div>

            {/* ============================================================ */}
            {/* RIGHT SIDE                                                     */}
            {/* ============================================================ */}

            <div className="about-visual">
              <div className="about-image-card">
                {/* Image atmosphere */}

                <div className="about-image-glow" />

                {/* Image */}

                <img
                  src={aboutImage}
                  alt="Prem Nandurkar"
                  className="about-image"
                />

                {/* Image overlay */}

                <div className="about-image-overlay" />

                {/* Developer badge */}

                <div className="about-developer-badge">
                  <span className="about-developer-dot" />
                  <span>DEVELOPER</span>
                </div>

                {/* Image bottom accent */}

                <div className="about-image-bottom-line" />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Floating Philosophy Card                                   */}
              {/* ---------------------------------------------------------- */}

              <div className="about-floating-card">
                <div className="about-floating-content">
                  <span className="about-floating-small">
                    ALWAYS LEARNING
                  </span>

                  <p>
                    Building
                    <br />
                    <span>the future.</span>
                  </p>
                </div>

                <div className="about-floating-icon">
                  <ArrowUpRightIcon />
                </div>
              </div>

              {/* Decorative corner */}

              <div className="about-visual-decoration">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Bottom Philosophy                                              */}
          {/* -------------------------------------------------------------- */}

          <div className="about-bottom">
            <div className="about-bottom-status">
              <span className="about-bottom-dot" />

              <span>
                CURIOUS <b>•</b> CONSISTENT <b>•</b> BUILDING
              </span>
            </div>

            <div className="about-bottom-text">
              Always learning and building{" "}
              <span>the future.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*                              STYLES                                */}
      {/* ================================================================== */}

      <style>{`
        /* ---------------------------------------------------------------- */
        /* Base                                                              */
        /* ---------------------------------------------------------------- */

        .about-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 72% 48%,
              rgba(0, 255, 170, 0.055),
              transparent 28%
            ),
            #050807;

          color: #e6ebef;

          isolation: isolate;
        }

        /* ---------------------------------------------------------------- */
        /* Background                                                        */
        /* ---------------------------------------------------------------- */

        .about-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: -1;
        }

        .about-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(150, 170, 170, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(150, 170, 170, 0.025) 1px,
              transparent 1px
            );

          background-size: 64px 64px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .about-green-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
        }

        .about-green-glow-one {
          width: 420px;
          height: 420px;

          top: 28%;
          right: 10%;

          background: rgba(0, 255, 170, 0.075);
        }

        .about-green-glow-two {
          width: 300px;
          height: 300px;

          bottom: 4%;
          left: 5%;

          background: rgba(0, 200, 130, 0.045);
        }

        .about-noise {
          position: absolute;
          inset: 0;

          opacity: 0.035;

          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");

          mix-blend-mode: soft-light;
        }

        /* ---------------------------------------------------------------- */
        /* Container                                                         */
        /* ---------------------------------------------------------------- */

        .about-container {
          position: relative;

          width: min(1480px, calc(100% - 80px));
          min-height: 100vh;
          min-height: 100svh;

          margin: 0 auto;

          padding:
            clamp(90px, 8vh, 120px)
            0
            clamp(32px, 5vh, 70px);

          display: flex;
          flex-direction: column;
        }

        /* ---------------------------------------------------------------- */
        /* Header                                                            */
        /* ---------------------------------------------------------------- */

        .about-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: clamp(40px, 6vh, 75px);
        }

        .about-section-label {
          display: flex;
          align-items: center;
          gap: 14px;

          color: #7dffdc;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .about-section-dot {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #00e6a0;

          box-shadow:
            0 0 8px rgba(0, 255, 180, 0.75),
            0 0 24px rgba(0, 255, 180, 0.3);
        }

        .about-section-index {
          color: #566169;

          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
        }

        .about-section-index span {
          margin: 0 7px;
          color: #273035;
        }

        /* ---------------------------------------------------------------- */
        /* Main Layout                                                       */
        /* ---------------------------------------------------------------- */

        .about-main {
          flex: 1;

          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(420px, 0.86fr);

          gap: clamp(60px, 8vw, 130px);

          align-items: center;
        }

        /* ---------------------------------------------------------------- */
        /* Left Content                                                      */
        /* ---------------------------------------------------------------- */

        .about-content {
          min-width: 0;
          padding-bottom: 10px;
        }

        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 25px;

          color: #63717b;

          font-family: monospace;
          font-size: 10px;
          font-weight: 600;

          letter-spacing: 0.3em;
        }

        .about-eyebrow span {
          width: 38px;
          height: 1px;

          background: #00d9a0;

          box-shadow: 0 0 10px rgba(0, 255, 170, 0.35);
        }

        .about-title {
          margin: 0;

          font-size: clamp(58px, 6.2vw, 100px);
          line-height: 0.92;

          font-weight: 700;
          letter-spacing: -0.065em;

          color: #edf2f5;
        }

        .about-title span {
          color: #e9eef2;
        }

        .about-title em {
          font-style: normal;

          background: linear-gradient(
            110deg,
            #cbd4db 0%,
            #9caab5 45%,
            #6f7e8b 100%
          );

          -webkit-background-clip: text;
          background-clip: text;

          -webkit-text-fill-color: transparent;
        }

        .about-title-line {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-top: 38px;
        }

        .line-primary {
          width: 68px;
          height: 2px;

          background: #00d9a0;

          box-shadow: 0 0 14px rgba(0, 255, 170, 0.35);
        }

        .line-secondary {
          width: 25px;
          height: 1px;

          background: #315e54;
        }

        /* ---------------------------------------------------------------- */
        /* Introduction                                                      */
        /* ---------------------------------------------------------------- */

        .about-introduction {
          max-width: 700px;

          margin-top: 30px;
        }

        .about-introduction-main {
          margin: 0;

          color: #8c9ba7;

          font-size: clamp(15px, 1.15vw, 18px);
          line-height: 1.8;

          letter-spacing: 0.005em;
        }

        .about-introduction-secondary {
          margin: 16px 0 0;

          color: #65747f;

          font-size: 14px;
          line-height: 1.75;
        }

        /* ---------------------------------------------------------------- */
        /* Info Cards                                                        */
        /* ---------------------------------------------------------------- */

        .about-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 12px;

          margin-top: 30px;
        }

        .about-info-card {
          position: relative;

          min-height: 160px;

          padding: 18px;

          overflow: hidden;

          border: 1px solid rgba(140, 160, 160, 0.13);
          border-radius: 16px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.032),
              rgba(255, 255, 255, 0.008)
            );

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          transition:
            transform 0.35s cubic-bezier(.2,.8,.2,1),
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .about-info-card::before {
          content: "";

          position: absolute;

          width: 120px;
          height: 120px;

          top: -80px;
          right: -60px;

          border-radius: 50%;

          background: rgba(0, 255, 170, 0.08);

          filter: blur(25px);

          transition: transform 0.4s ease;
        }

        .about-info-card:hover {
          transform: translateY(-6px);

          border-color: rgba(0, 255, 170, 0.28);

          background:
            linear-gradient(
              145deg,
              rgba(0, 255, 170, 0.055),
              rgba(255, 255, 255, 0.012)
            );

          box-shadow:
            0 18px 50px rgba(0, 0, 0, 0.3),
            0 0 28px rgba(0, 255, 170, 0.055);
        }

        .about-info-card:hover::before {
          transform: scale(1.6);
        }

        .about-info-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .about-info-icon {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(0, 255, 170, 0.18);
          border-radius: 50%;

          color: #5cebc5;

          background: rgba(0, 255, 170, 0.035);
        }

        .about-info-number {
          color: #39454d;

          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
        }

        .about-info-label {
          margin-top: 22px;

          color: #42b99c;

          font-family: monospace;
          font-size: 8px;
          font-weight: 700;

          letter-spacing: 0.2em;
        }

        .about-info-title {
          margin: 7px 0 0;

          color: #d5dce1;

          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
        }

        .about-info-description {
          margin: 8px 0 0;

          color: #64727b;

          font-size: 10px;
          line-height: 1.55;
        }

        /* ---------------------------------------------------------------- */
        /* Buttons                                                           */
        /* ---------------------------------------------------------------- */

        .about-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px;

          margin-top: 30px;
        }

        .about-button {
          position: relative;

          min-height: 46px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          padding: 0 20px;

          border-radius: 999px;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.15em;

          text-decoration: none;

          white-space: nowrap;

          overflow: hidden;

          transition:
            transform 0.3s cubic-bezier(.2,.8,.2,1),
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .about-button::before {
          content: "";

          position: absolute;
          inset: 0;

          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.18),
            transparent 75%
          );

          transform: translateX(-120%);

          transition: transform 0.55s ease;
        }

        .about-button:hover::before {
          transform: translateX(120%);
        }

        .about-button:hover {
          transform: translateY(-3px);
        }

        .about-button svg,
        .about-button span {
          position: relative;
          z-index: 1;
        }

        .about-button-primary {
          color: #06100d;

          background: #dbe2e7;

          border: 1px solid #dbe2e7;

          box-shadow:
            0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .about-button-primary:hover {
          color: #ffffff;

          background: #00bd8b;

          border-color: #00bd8b;

          box-shadow:
            0 8px 28px rgba(0, 255, 170, 0.16),
            0 0 25px rgba(0, 255, 170, 0.1);
        }

        .about-button-secondary {
          color: #aeb9c1;

          background: rgba(255, 255, 255, 0.018);

          border: 1px solid rgba(150, 165, 175, 0.22);
        }

        .about-button-secondary:hover {
          color: #eef3f5;

          border-color: rgba(0, 255, 170, 0.38);

          background: rgba(0, 255, 170, 0.035);

          box-shadow:
            0 8px 26px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(0, 255, 170, 0.055);
        }

        /* ---------------------------------------------------------------- */
        /* Right Visual                                                      */
        /* ---------------------------------------------------------------- */

        .about-visual {
          position: relative;

          min-height: clamp(520px, 72vh, 760px);

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-image-card {
          position: relative;

          width: min(100%, 600px);
          height: clamp(520px, 68vh, 720px);

          overflow: hidden;

          border: 1px solid rgba(120, 145, 145, 0.25);
          border-radius: 28px;

          background: #0a0f0e;

          box-shadow:
            0 35px 100px rgba(0, 0, 0, 0.5),
            inset 0 0 60px rgba(0, 255, 170, 0.025);

          transition:
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            transform 0.5s cubic-bezier(.2,.8,.2,1);
        }

        .about-image-card:hover {
          transform: translateY(-5px);

          border-color: rgba(0, 255, 170, 0.35);

          box-shadow:
            0 40px 110px rgba(0, 0, 0, 0.55),
            0 0 45px rgba(0, 255, 170, 0.06),
            inset 0 0 60px rgba(0, 255, 170, 0.035);
        }

        .about-image-glow {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(0, 255, 170, 0.06),
              transparent 38%
            );

          z-index: 1;

          pointer-events: none;
        }

        .about-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          display: block;

          filter:
            saturate(0.88)
            contrast(1.02);

          transition:
            transform 0.8s cubic-bezier(.2,.8,.2,1),
            filter 0.5s ease;
        }

        .about-image-card:hover .about-image {
          transform: scale(1.025);

          filter:
            saturate(0.98)
            contrast(1.04);
        }

        .about-image-overlay {
          position: absolute;
          inset: 0;

          z-index: 2;

          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.1),
              transparent 35%,
              rgba(3, 8, 7, 0.2) 70%,
              rgba(3, 8, 7, 0.7)
            );

          pointer-events: none;
        }

        /* ---------------------------------------------------------------- */
        /* Developer Badge                                                   */
        /* ---------------------------------------------------------------- */

        .about-developer-badge {
          position: absolute;

          top: 20px;
          left: 20px;

          z-index: 5;

          display: flex;
          align-items: center;
          gap: 9px;

          padding: 9px 13px;

          border: 1px solid rgba(120, 150, 145, 0.2);
          border-radius: 999px;

          background: rgba(6, 12, 11, 0.72);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          color: #9ca9af;

          font-family: monospace;
          font-size: 8px;
          font-weight: 700;

          letter-spacing: 0.18em;
        }

        .about-developer-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #00e6a0;

          box-shadow:
            0 0 7px rgba(0, 255, 170, 0.8);
        }

        .about-image-bottom-line {
          position: absolute;

          left: 8%;
          right: 8%;
          bottom: 0;

          z-index: 4;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 170, 0.55),
            transparent
          );
        }

        /* ---------------------------------------------------------------- */
        /* Floating Card                                                     */
        /* ---------------------------------------------------------------- */

        .about-floating-card {
          position: absolute;

          right: -35px;
          bottom: 52px;

          z-index: 10;

          width: 250px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 18px 18px 18px 22px;

          border: 1px solid rgba(100, 125, 120, 0.28);
          border-radius: 18px;

          background:
            linear-gradient(
              135deg,
              rgba(8, 15, 14, 0.9),
              rgba(5, 10, 9, 0.82)
            );

          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.45),
            0 0 30px rgba(0, 255, 170, 0.025);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .about-floating-card:hover {
          transform: translateY(-5px);

          border-color: rgba(0, 255, 170, 0.32);
        }

        .about-floating-small {
          color: #5e6b72;

          font-family: monospace;
          font-size: 7px;
          font-weight: 700;

          letter-spacing: 0.18em;
        }

        .about-floating-content p {
          margin: 5px 0 0;

          color: #d6dde1;

          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
        }

        .about-floating-content p span {
          color: #00dca3;
        }

        .about-floating-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(0, 255, 170, 0.3);
          border-radius: 50%;

          color: #6eeecb;

          background: rgba(0, 255, 170, 0.035);
        }

        /* ---------------------------------------------------------------- */
        /* Visual Decoration                                                 */
        /* ---------------------------------------------------------------- */

        .about-visual-decoration {
          position: absolute;

          top: 8%;
          right: -25px;

          display: flex;
          gap: 6px;

          opacity: 0.65;
        }

        .about-visual-decoration span {
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: #00d9a0;

          box-shadow: 0 0 8px rgba(0, 255, 170, 0.5);
        }

        .about-visual-decoration span:nth-child(2) {
          opacity: 0.5;
        }

        .about-visual-decoration span:nth-child(3) {
          opacity: 0.25;
        }

        /* ---------------------------------------------------------------- */
        /* Bottom                                                            */
        /* ---------------------------------------------------------------- */

        .about-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: clamp(35px, 5vh, 65px);

          padding-top: 20px;

          border-top: 1px solid rgba(140, 155, 160, 0.09);
        }

        .about-bottom-status {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #4d5b62;

          font-family: monospace;
          font-size: 8px;
          font-weight: 700;

          letter-spacing: 0.2em;
        }

        .about-bottom-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #00d9a0;

          box-shadow: 0 0 8px rgba(0, 255, 170, 0.6);
        }

        .about-bottom-status b {
          color: #263c35;
          margin: 0 3px;
        }

        .about-bottom-text {
          color: #59666e;

          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .about-bottom-text span {
          color: #00b98b;
        }

        /* ---------------------------------------------------------------- */
        /* Large Tablets                                                     */
        /* ---------------------------------------------------------------- */

        @media (max-width: 1100px) {
          .about-container {
            width: min(100% - 50px, 900px);
          }

          .about-main {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .about-content {
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
          }

          .about-visual {
            min-height: auto;
          }

          .about-image-card {
            width: min(100%, 620px);
            height: 600px;
          }

          .about-floating-card {
            right: max(0px, calc(50% - 340px));
          }
        }

        /* ---------------------------------------------------------------- */
        /* Tablets                                                           */
        /* ---------------------------------------------------------------- */

        @media (max-width: 760px) {
          .about-container {
            width: calc(100% - 32px);

            padding-top: 75px;
          }

          .about-section-header {
            margin-bottom: 45px;
          }

          .about-section-label {
            font-size: 9px;
            letter-spacing: 0.2em;
          }

          .about-section-index {
            font-size: 9px;
          }

          .about-title {
            font-size: clamp(54px, 14vw, 78px);
          }

          .about-info-grid {
            grid-template-columns: 1fr;
          }

          .about-info-card {
            min-height: auto;
          }

          .about-actions {
            gap: 8px;
          }

          .about-button {
            flex: 1 1 auto;
            min-width: 150px;
          }

          .about-image-card {
            height: 560px;
            border-radius: 22px;
          }

          .about-floating-card {
            right: 15px;
            bottom: 25px;

            width: 230px;
          }

          .about-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }
        }

        /* ---------------------------------------------------------------- */
        /* Mobile                                                            */
        /* ---------------------------------------------------------------- */

        @media (max-width: 520px) {
          .about-container {
            width: calc(100% - 24px);

            padding-top: 68px;
          }

          .about-section-header {
            margin-bottom: 38px;
          }

          .about-section-label {
            gap: 9px;

            font-size: 8px;
          }

          .about-section-dot {
            width: 6px;
            height: 6px;
          }

          .about-title {
            font-size: clamp(50px, 15vw, 68px);
            line-height: 0.94;
          }

          .about-title-line {
            margin-top: 28px;
          }

          .about-introduction {
            margin-top: 24px;
          }

          .about-introduction-main {
            font-size: 14px;
            line-height: 1.75;
          }

          .about-introduction-secondary {
            font-size: 12px;
          }

          .about-info-grid {
            margin-top: 25px;
          }

          .about-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .about-button {
            width: 100%;
            min-width: 0;
          }

          .about-visual {
            width: 100%;
          }

          .about-image-card {
            width: 100%;
            height: 520px;

            border-radius: 20px;
          }

          .about-floating-card {
            right: 10px;
            left: 10px;

            width: auto;

            bottom: 18px;
          }

          .about-visual-decoration {
            display: none;
          }

          .about-bottom-text {
            font-size: 10px;
          }
        }

        /* ---------------------------------------------------------------- */
        /* Reduced Motion                                                    */
        /* ---------------------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .about-info-card,
          .about-button,
          .about-image-card,
          .about-image,
          .about-floating-card {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}