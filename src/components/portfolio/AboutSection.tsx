import React from "react";
import premAboutImage from "@/assets/prem_about_section.png";
import {
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  CircleUserRound,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";

export function AboutSection(): React.ReactElement {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-[#080a0a] text-slate-200"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Large emerald atmosphere */}
      <div className="pointer-events-none absolute -right-[15%] top-[20%] h-[700px] w-[700px] rounded-full bg-emerald-400/[0.045] blur-[160px]" />

      {/* Secondary green glow */}
      <div className="pointer-events-none absolute -left-[15%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.025] blur-[150px]" />

      {/* Subtle center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.012] blur-[140px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* =======================================================
            TOP LABEL
        ======================================================= */}

        <div className="mb-12 flex items-center gap-4 lg:mb-16">
          <span className="h-px w-10 bg-emerald-300/70" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
              About Me
            </span>
          </div>

          <span className="h-px flex-1 bg-gradient-to-r from-slate-700/60 to-transparent" />

          <span className="hidden font-mono text-[9px] tracking-[0.25em] text-slate-600 sm:block">
            02 / 05
          </span>
        </div>

        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              LEFT INFORMATION
          ===================================================== */}

          <div className="relative z-10">
            {/* Heading */}

            <h2 className="max-w-[700px] text-[clamp(3.2rem,6.8vw,6.8rem)] font-black leading-[0.9] tracking-[-0.065em]">
              <span className="block text-slate-100">
                Getting to know
              </span>

              <span className="mt-2 block bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">
                the real me.
              </span>
            </h2>

            {/* Green accent */}

            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-14 bg-emerald-300/80 shadow-[0_0_10px_rgba(110,231,183,0.35)]" />

              <span className="h-px w-5 bg-slate-600/80" />
            </div>

            {/* Introduction */}

            <p className="max-w-[600px] text-sm leading-7 text-slate-500 sm:text-base">
              A glimpse into my education, my story, the things that interest
              me, and the person I&apos;m becoming.
            </p>

            {/* =====================================================
                INFORMATION LIST
            ===================================================== */}

            <div className="mt-9 max-w-[650px]">
              {/* Education */}

              <InfoRow
                icon={<GraduationCap size={16} />}
                label="Education"
                value={
                  <>
                    <span className="block text-slate-300">
                      B.Tech in Computer Technology
                    </span>

                    <span className="mt-1 block text-xs text-slate-600">
                      Yeshwantrao Chavan College of Engineering
                    </span>
                  </>
                }
              />

              {/* Location */}

              <InfoRow
                icon={<MapPin size={16} />}
                label="Location"
                value="Nagpur, Maharashtra, India"
              />

              {/* Born */}

              <InfoRow
                icon={<CalendarDays size={16} />}
                label="Born"
                value="2 April 2004"
              />

              {/* Interests */}

              <InfoRow
                icon={<Target size={16} />}
                label="Interests"
                value={
                  <>
                    <span className="block text-slate-300">
                      Problem Solving, Building Projects
                    </span>

                    <span className="mt-1 block text-xs text-slate-600">
                      Exploring Ideas · UI/UX Design
                    </span>
                  </>
                }
              />

              {/* Email */}

              <InfoRow
                icon={<Mail size={16} />}
                label="Email"
                value="premnandurkarofficial@gmail.com"
              />
            </div>

            {/* =====================================================
                BUTTONS
            ===================================================== */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-emerald-300/40 bg-emerald-300/[0.07] px-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/70 hover:bg-emerald-300/[0.12] hover:shadow-[0_0_35px_rgba(110,231,183,0.12)]"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 transition-colors group-hover:text-emerald-200">
                  Download Resume
                </span>

                <ArrowDownToLine
                  size={14}
                  className="text-slate-500 transition-all duration-500 group-hover:translate-y-0.5 group-hover:text-emerald-200"
                />
              </a>

              {/* Connect */}

              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-4 rounded-full border border-slate-600/70 bg-white/[0.015] px-7 transition-all duration-500 hover:-translate-y-1 hover:border-slate-400/70 hover:bg-white/[0.04]"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors group-hover:text-slate-200">
                  Let&apos;s Connect
                </span>

                <ArrowRight
                  size={14}
                  className="text-slate-500 transition-all duration-500 group-hover:translate-x-1 group-hover:text-emerald-200"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <div className="relative">
            {/* ===================================================
                IMAGE OUTER GLOW
            =================================================== */}

            <div className="absolute -inset-3 rounded-[1.8rem] bg-emerald-400/[0.025] blur-2xl transition-all duration-700 hover:bg-emerald-300/[0.08]" />

            {/* ===================================================
                IMAGE FRAME
            =================================================== */}

            <div className="group relative overflow-hidden rounded-[1.6rem] border border-slate-700/60 bg-[#0b0e0e] transition-all duration-700 hover:border-emerald-300/35 hover:shadow-[0_0_70px_rgba(110,231,183,0.07)]">
              {/* Green top glow */}

              <div className="pointer-events-none absolute left-1/2 top-0 z-30 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Image */}

              {/*
                ====================================================
                CHANGE THIS PATH TO YOUR ACTUAL IMAGE
                ====================================================

                If your image is:

                public/images/prem-about.png

                then keep:

                /images/prem-about.png
              */}

              <img
                src={premAboutImage}
                alt="Prem"
                className="block aspect-[0.88] w-full object-cover object-center grayscale-[20%] transition-all duration-[1200ms] ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
              />

              {/* =================================================
                  DARK IMAGE GRADIENT
              ================================================= */}

              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#070909] via-transparent to-transparent opacity-90" />

              {/* =================================================
                  SUBTLE GREEN IMAGE LIGHT
              ================================================= */}

              <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_75%_45%,rgba(110,231,183,0.09),transparent_42%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

              {/* =================================================
                  DECORATIVE DOTS
              ================================================= */}

              <span className="absolute left-[8%] top-[15%] z-30 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(110,231,183,0.9)]" />

              <span className="absolute right-[9%] top-[18%] z-30 h-1 w-1 rounded-full bg-slate-300/70 shadow-[0_0_12px_rgba(226,232,240,0.6)]" />

              <span className="absolute right-[15%] top-[12%] z-30 text-emerald-300/70">
                <Sparkles size={13} />
              </span>

              {/* =================================================
                  BOTTOM MESSAGE CARD
              ================================================= */}

              <div className="absolute bottom-6 left-5 right-5 z-40 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex items-center justify-between gap-5 rounded-2xl border border-emerald-300/25 bg-[#090d0d]/90 px-5 py-4 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 group-hover:border-emerald-300/40 group-hover:bg-[#0a1110]/95 sm:px-6 sm:py-5">
                  <div>
                    <p className="max-w-[270px] text-sm font-semibold leading-6 text-slate-300 sm:text-base">
                      Always learning and building{" "}
                      <span className="text-emerald-300">
                        the future.
                      </span>
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />

                      <span className="font-mono text-[7px] font-bold uppercase tracking-[0.25em] text-slate-600">
                        Curious · Consistent · Building
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-300/[0.04] transition-all duration-500 group-hover:border-emerald-300/60 group-hover:bg-emerald-300/[0.10] group-hover:shadow-[0_0_25px_rgba(110,231,183,0.12)]">
                    <ArrowRight
                      size={16}
                      className="text-emerald-200 transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  IMAGE CORNER LABEL
              ================================================= */}

              <div className="absolute left-6 top-6 z-40">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/30 px-3 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />

                  <span className="font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Personal Identity
                  </span>
                </div>
              </div>
            </div>

            {/* ===================================================
                OUTER TECHNICAL LINES
            =================================================== */}

            <div className="pointer-events-none absolute -right-3 top-[18%] hidden h-px w-12 bg-gradient-to-r from-emerald-300/40 to-transparent lg:block" />

            <div className="pointer-events-none absolute -left-3 bottom-[22%] hidden h-px w-12 bg-gradient-to-l from-emerald-300/40 to-transparent lg:block" />
          </div>
        </div>

        {/* =======================================================
            BOTTOM PHILOSOPHY
        ======================================================= */}

        <div className="mt-16 border-t border-white/[0.07] pt-7 lg:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />

              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.28em] text-slate-600">
                Curious · Consistent · Building
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
              Always becoming.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080a0a] to-transparent" />
    </section>
  );
}

/* =============================================================
   INFORMATION ROW COMPONENT
   ============================================================= */

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps): React.ReactElement {
  return (
    <div className="group flex min-h-[58px] items-center border-b border-white/[0.055] py-3 transition-colors duration-300 hover:border-emerald-300/20">
      {/* Icon */}

      <div className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700/80 bg-white/[0.015] text-slate-500 transition-all duration-300 group-hover:border-emerald-300/40 group-hover:bg-emerald-300/[0.05] group-hover:text-emerald-300">
        {icon}
      </div>

      {/* Label */}

      <div className="w-[90px] shrink-0">
        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-emerald-300/70">
          {label}
        </span>
      </div>

      {/* Value */}

      <div className="min-w-0 flex-1 text-xs leading-5 text-slate-400 sm:text-sm">
        {value}
      </div>
    </div>
  );
}