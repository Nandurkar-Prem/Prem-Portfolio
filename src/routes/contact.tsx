import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact | Prem's Portfolio",
      },
      {
        name: "description",
        content:
          "Get in touch with Prem Nandurkar for projects, collaborations, opportunities or just a conversation.",
      },
    ],
  }),
  component: Contact,
});

const CONTACT_EMAIL = "nandurkarprem1@gmail.com";

const contactMessages: Record<string, string> = {
  Project:
    "I'm reaching out regarding a project and would love to discuss the idea with you.",

  Collaboration:
    "I'm interested in collaborating with you and would love to explore how we could work together.",

  Opportunity:
    "I'd like to discuss an opportunity with you and would love to share more details.",

  "Just Hello":
    "I came across your portfolio and wanted to say hello. I thought I'd reach out and start a conversation.",
};

/* =========================================================
   PARTICLES
========================================================= */

const particles = [
  { left: "4%", top: "12%", size: 3, delay: 0, duration: 5 },
  { left: "11%", top: "36%", size: 2, delay: 1, duration: 6 },
  { left: "18%", top: "74%", size: 3, delay: 2, duration: 7 },
  { left: "27%", top: "19%", size: 2, delay: 0.5, duration: 5 },
  { left: "34%", top: "58%", size: 3, delay: 1.5, duration: 6 },
  { left: "43%", top: "31%", size: 2, delay: 2.5, duration: 7 },
  { left: "51%", top: "83%", size: 3, delay: 1, duration: 5 },
  { left: "59%", top: "14%", size: 2, delay: 3, duration: 6 },
  { left: "67%", top: "47%", size: 3, delay: 0.5, duration: 7 },
  { left: "73%", top: "72%", size: 2, delay: 2, duration: 5 },
  { left: "81%", top: "25%", size: 3, delay: 1.2, duration: 6 },
  { left: "89%", top: "59%", size: 2, delay: 2.7, duration: 7 },
  { left: "94%", top: "17%", size: 3, delay: 0.8, duration: 5 },
  { left: "7%", top: "88%", size: 2, delay: 3, duration: 6 },
  { left: "38%", top: "92%", size: 2, delay: 1.8, duration: 7 },
  { left: "77%", top: "91%", size: 3, delay: 2.2, duration: 6 },
];

function Contact() {
  const [selectedReason, setSelectedReason] = useState("Project");

  const reasons = [
    {
      title: "Project",
      description: "I have an idea I'd like to build.",
      symbol: "✦",
      glow: "from-purple-500/30 to-fuchsia-500/10",
      iconGlow: "bg-purple-500/20 text-purple-300",
    },
    {
      title: "Collaboration",
      description: "Let's work on something together.",
      symbol: "↗",
      glow: "from-cyan-500/30 to-blue-500/10",
      iconGlow: "bg-cyan-500/20 text-cyan-300",
    },
    {
      title: "Opportunity",
      description: "I'd like to discuss an opportunity.",
      symbol: "◈",
      glow: "from-pink-500/30 to-rose-500/10",
      iconGlow: "bg-pink-500/20 text-pink-300",
    },
    {
      title: "Just Hello",
      description: "I simply want to say hello.",
      symbol: "◌",
      glow: "from-amber-500/30 to-orange-500/10",
      iconGlow: "bg-amber-500/20 text-amber-300",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      username: "@Nandurkar-Prem",
      description: "Explore my projects & code",
      href: "https://github.com/Nandurkar-Prem",
      icon: FaGithub,
      glow: "bg-purple-500/20",
      hoverGlow: "group-hover:bg-purple-500/30",
      border: "group-hover:border-purple-400/30",
    },
    {
      name: "LinkedIn",
      username: "Let's connect",
      description: "Connect professionally",
      href: "https://www.linkedin.com/in/prem-nandurkar-0a09a0276/",
      icon: FaLinkedinIn,
      glow: "bg-blue-500/20",
      hoverGlow: "group-hover:bg-blue-500/30",
      border: "group-hover:border-blue-400/30",
    },
    {
      name: "LeetCode",
      username: "Prem_Nandurkar",
      description: "Follow my problem-solving journey",
      href: "https://leetcode.com/u/Prem_Nandurkar/",
      icon: SiLeetcode,
      glow: "bg-orange-500/20",
      hoverGlow: "group-hover:bg-orange-500/30",
      border: "group-hover:border-orange-400/30",
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const defaultMessage = contactMessages[selectedReason];

    const subject = `${selectedReason} — Portfolio Contact`;

    const body = `Hi Prem,

${defaultMessage}

Name: ${name}
Email: ${email}

Message:
${message}

Looking forward to hearing from you.

Best,
${name}`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const openGmail = () => {
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(CONTACT_EMAIL)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const selectedOption = reasons.find(
    (reason) => reason.title === selectedReason,
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040407] text-white">
      {/* =========================================================
          GLOBAL AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Purple atmosphere */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-12%] top-[5%] h-[550px] w-[550px] rounded-full bg-purple-600/[0.12] blur-[150px]"
        />

        {/* Blue atmosphere */}
        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-12%] top-[18%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.1] blur-[160px]"
        />

        {/* Pink atmosphere */}
        <motion.div
          animate={{
            x: [0, 50, -60, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[12%] left-[25%] h-[500px] w-[500px] rounded-full bg-pink-500/[0.08] blur-[160px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* =====================================================
            PARTICLES
        ===================================================== */}

        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.15, 0.5, 0.1],
              y: [0, -18, 5, -10, 0],
              scale: [1, 1.5, 0.8, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center px-6 py-24 sm:px-10 lg:px-20">
        {/* Decorative orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute right-[8%] top-[18%] hidden h-56 w-56 rounded-full border border-purple-400/10 lg:block"
        >
          <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute right-[11%] top-[21%] hidden h-40 w-40 rounded-full border border-blue-400/10 lg:block"
        >
          <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.8)]" />
        </motion.div>

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-4"
          >
            <motion.span
              animate={{ width: ["48px", "80px", "48px"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-r from-purple-400 to-blue-400"
            />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/50">
              Get in touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative max-w-6xl text-[16vw] font-semibold leading-[0.78] tracking-[-0.07em] sm:text-[13vw] lg:text-[11vw]"
          >
            LET'S
            <br />

            <span className="relative inline-block overflow-hidden bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              CONNECT.

              {/* Moving shine */}
              <motion.span
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto]"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">
              Whether you have an idea, an opportunity, or simply want to talk
              about technology — I'd love to hear from you.
            </p>

            <div className="flex items-end">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [0.35, 0.7, 0.35] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-sm uppercase tracking-[0.3em] text-white/35"
              >
                Scroll ↓
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          START A CONVERSATION
      ========================================================= */}

      <section className="relative z-10 px-6 py-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
              01 / Conversation
            </p>

            <h2 className="max-w-3xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Where do we
              <span className="text-white/30"> start?</span>
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            {/* =====================================================
                OPTIONS
            ===================================================== */}

            <div>
              <p className="mb-8 max-w-md text-white/45">
                Choose what brings you here. Whatever it is, I'm always open
                to a good conversation.
              </p>

              <div className="space-y-3">
                {reasons.map((reason) => {
                  const active = selectedReason === reason.title;

                  return (
                    <motion.button
                      key={reason.title}
                      type="button"
                      whileHover={{
                        x: 8,
                        scale: 1.01,
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedReason(reason.title)}
                      className={`group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ${
                        active
                          ? "border-white/20 bg-white/[0.08]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      {/* Colored hover glow */}

                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${reason.glow} opacity-0 blur-2xl transition-opacity duration-500 ${
                          active ? "opacity-100" : "group-hover:opacity-70"
                        }`}
                      />

                      {/* Animated top line */}

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: active ? 1 : 0,
                        }}
                        className={`absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r ${reason.glow}`}
                      />

                      <div
                        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-500 ${
                          active
                            ? `${reason.iconGlow} shadow-[0_0_30px_rgba(168,85,247,0.15)]`
                            : "bg-white/[0.06] text-white/50"
                        }`}
                      >
                        {reason.symbol}
                      </div>

                      <div className="relative z-10 flex-1">
                        <h3
                          className={`font-medium transition-colors ${
                            active ? "text-white" : "text-white/65"
                          }`}
                        >
                          {reason.title}
                        </h3>

                        <p className="mt-1 text-sm text-white/35">
                          {reason.description}
                        </p>
                      </div>

                      <span
                        className={`relative z-10 transition-all duration-300 ${
                          active
                            ? "translate-x-0 text-white"
                            : "-translate-x-2 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                FORM
            ===================================================== */}

            <motion.form
              key={selectedReason}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              onSubmit={handleSubmit}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
            >
              {/* Form ambient glow */}

              <div
                className={`pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br ${selectedOption?.glow} opacity-50 blur-[90px]`}
              />

              {/* Moving border */}

              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/10 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="text-sm text-white/30">
                    Selected conversation
                  </span>

                  <motion.h3
                    key={selectedReason}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-2xl font-medium"
                  >
                    {selectedReason}
                  </motion.h3>
                </div>

                <div className="space-y-8">
                  {/* NAME */}

                  <div className="group/input">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-purple-400/70"
                    />
                  </div>

                  {/* EMAIL */}

                  <div className="group/input">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                    >
                      Your email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-blue-400/70"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="group/input">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                    >
                      Your message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me what's on your mind..."
                      className="w-full resize-none border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-pink-400/70"
                    />
                  </div>
                </div>

                {/* SEND */}

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/30">
                    Gmail will open with your message prepared.
                  </p>

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 35px rgba(168,85,247,0.25)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="group/send relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-medium text-black"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 transition-transform duration-500 group-hover/send:translate-x-0" />

                    <span className="relative z-10">
                      Send message
                    </span>

                    <span className="relative z-10 transition-transform duration-300 group-hover/send:translate-x-1">
                      →
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </div>

          {/* =====================================================
              EMAIL CAPSULE
          ===================================================== */}

          <div className="mt-10 flex justify-center lg:justify-start">
            <motion.button
              type="button"
              onClick={openGmail}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-purple-400/20 bg-white/[0.035] px-5 py-3 text-sm text-white/60 backdrop-blur-md transition-all duration-500 hover:border-purple-400/40 hover:text-white"
            >
              {/* Capsule glow */}

              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-sm text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                ✉
              </span>

              <span className="relative z-10">
                {CONTACT_EMAIL}
              </span>

              <span className="relative z-10 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-300">
                ↗
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIVIDER
      ========================================================= */}

      <div className="relative z-10 mx-auto h-px w-[90%] overflow-hidden bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-1/4 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
        />
      </div>

      {/* =========================================================
          FIND ME ELSEWHERE
      ========================================================= */}

      <section className="relative z-10 px-6 py-32 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              02 / Elsewhere
            </p>

            <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Find me
              <span className="text-white/30"> elsewhere.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 ${social.border}`}
                >
                  {/* Large color aura */}

                  <motion.div
                    className={`absolute -right-20 -top-20 h-56 w-56 rounded-full ${social.glow} blur-[70px] transition-all duration-700 ${social.hoverGlow}`}
                  />

                  {/* Secondary aura */}

                  <div
                    className={`absolute -bottom-20 -left-20 h-40 w-40 rounded-full ${social.glow} opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-50`}
                  />

                  {/* Animated border light */}

                  <motion.div
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index,
                      ease: "linear",
                    }}
                    className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />

                  <div className="relative z-10">
                    <div className="mb-12 flex items-center justify-between">
                      {/* REAL ICON */}

                      <motion.div
                        whileHover={{
                          rotate: -8,
                          scale: 1.08,
                        }}
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/70 transition-all duration-500 group-hover:text-white ${social.border}`}
                      >
                        <div
                          className={`absolute inset-0 rounded-2xl ${social.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        <Icon
                          size={26}
                          className="relative z-10"
                        />
                      </motion.div>

                      <motion.span
                        whileHover={{ x: 5, y: -5 }}
                        className="text-xl text-white/20 transition-colors duration-300 group-hover:text-white"
                      >
                        ↗
                      </motion.span>
                    </div>

                    <h3 className="text-2xl font-medium">
                      {social.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/35">
                      {social.description}
                    </p>

                    <p className="mt-6 text-sm text-white/60 transition-colors duration-300 group-hover:text-white/80">
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}

      <section className="relative z-10 overflow-hidden px-6 py-40 sm:px-10 lg:px-20">
        {/* Central colorful aura */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-sm uppercase tracking-[0.4em] text-white/30"
          >
            03 / What's next
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11vw] font-semibold leading-[0.85] tracking-[-0.07em] sm:text-[9vw] lg:text-[8vw]"
          >
            THE JOURNEY
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              DOESN'T END HERE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-white/40"
          >
            Every conversation can become an idea. Every idea can become a
            project. And every project can become something worth remembering.
          </motion.p>

          {/* Small decorative stars */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-auto mt-16 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-purple-300"
          >
            ✦
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.08] px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-medium">Prem Nandurkar</p>

            <p className="mt-1 text-sm text-white/30">
              Developer • Learner • Builder
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm text-white/40">
              This is just the beginning.
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/20">
              More things are coming soon.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 h-px max-w-7xl bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30" />

        <div className="mx-auto mt-6 flex max-w-7xl flex-col justify-between gap-3 text-xs text-white/20 sm:flex-row">
          <span>© {new Date().getFullYear()} Prem Nandurkar</span>

          <span>Built with curiosity & code.</span>
        </div>
      </footer>
    </main>
  );
}