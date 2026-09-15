import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen = ({
  onComplete,
}: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = window.setInterval(() => {
      let increment = 1;

      if (current < 20) {
        increment = 1.35;
      } else if (current < 55) {
        increment = 0.95;
      } else if (current < 80) {
        increment = 0.7;
      } else if (current < 95) {
        increment = 0.45;
      } else {
        increment = 0.25;
      }

      current = Math.min(100, current + increment);

      setProgress(Math.floor(current));

      if (current >= 100) {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setCompleted(true);
        }, 500);
      }
    }, 45);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style>{`
        /* =========================================================
           ROOT LOADER
        ========================================================= */

        .portfolio-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;

          width: 100%;
          height: 100vh;
          height: 100dvh;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #080b0b;
          color: #f4f7f6;

          font-family:
            Inter,
            "Helvetica Neue",
            Arial,
            sans-serif;
        }

        /* =========================================================
           BACKGROUND
        ========================================================= */

        .loader-background {
          position: absolute;
          inset: 0;

          z-index: 0;

          overflow: hidden;

          pointer-events: none;
        }

        .loader-background::before {
          content: "";

          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at 50% 44%,
              rgba(0, 255, 210, 0.075),
              transparent 28%
            ),
            radial-gradient(
              circle at 50% 90%,
              rgba(0, 255, 210, 0.06),
              transparent 32%
            );

          pointer-events: none;
        }

        /* =========================================================
           TECHNICAL GRID
        ========================================================= */

        .loader-grid {
          position: absolute;
          inset: 0;

          opacity: 0.16;

          background-image:
            linear-gradient(
              rgba(70, 255, 220, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(70, 255, 220, 0.045) 1px,
              transparent 1px
            );

          background-size: 72px 72px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black 0%,
              transparent 78%
            );

          -webkit-mask-image:
            radial-gradient(
              ellipse at center,
              black 0%,
              transparent 78%
            );
        }

        /* =========================================================
           STARS / PARTICLES
        ========================================================= */

        .loader-stars {
          position: absolute;
          inset: 0;

          opacity: 0.55;

          background-image:
            radial-gradient(
              circle at 8% 18%,
              rgba(80, 255, 220, 0.8) 0,
              transparent 1.5px
            ),
            radial-gradient(
              circle at 17% 73%,
              rgba(80, 255, 220, 0.55) 0,
              transparent 1.2px
            ),
            radial-gradient(
              circle at 27% 32%,
              rgba(255, 255, 255, 0.6) 0,
              transparent 1.2px
            ),
            radial-gradient(
              circle at 38% 16%,
              rgba(80, 255, 220, 0.6) 0,
              transparent 1.2px
            ),
            radial-gradient(
              circle at 61% 20%,
              rgba(80, 255, 220, 0.7) 0,
              transparent 1.4px
            ),
            radial-gradient(
              circle at 76% 35%,
              rgba(255, 255, 255, 0.5) 0,
              transparent 1.2px
            ),
            radial-gradient(
              circle at 87% 18%,
              rgba(80, 255, 220, 0.75) 0,
              transparent 1.4px
            ),
            radial-gradient(
              circle at 93% 68%,
              rgba(80, 255, 220, 0.55) 0,
              transparent 1.2px
            ),
            radial-gradient(
              circle at 68% 78%,
              rgba(255, 255, 255, 0.35) 0,
              transparent 1px
            );
        }

        /* =========================================================
           FLOATING PARTICLES
        ========================================================= */

        .floating-particle {
          position: absolute;

          width: 2px;
          height: 2px;

          border-radius: 50%;

          background: #65ffe0;

          box-shadow:
            0 0 6px rgba(80, 255, 220, 0.9),
            0 0 16px rgba(0, 255, 210, 0.35);
        }

        .fp-1 {
          left: 12%;
          top: 38%;
        }

        .fp-2 {
          left: 86%;
          top: 46%;
        }

        .fp-3 {
          left: 25%;
          top: 18%;
        }

        .fp-4 {
          left: 74%;
          top: 22%;
        }

        .fp-5 {
          left: 91%;
          top: 78%;
        }

        /* =========================================================
           CENTRAL HUD
           IMPORTANT: Decorative layer stays BEHIND content
        ========================================================= */

        .loader-hud {
          position: absolute;

          z-index: 1;

          left: 50%;
          top: 47%;

          width: min(700px, 82vw);
          aspect-ratio: 1;

          transform: translate(-50%, -50%);

          border: 1px solid rgba(70, 255, 220, 0.09);

          border-radius: 50%;

          pointer-events: none;
        }

        .loader-hud::before {
          content: "";

          position: absolute;
          inset: 8%;

          border: 1px solid rgba(70, 255, 220, 0.055);

          border-radius: 50%;
        }

        .loader-hud::after {
          content: "";

          position: absolute;

          inset: 18%;

          border: 1px dashed rgba(70, 255, 220, 0.045);

          border-radius: 50%;
        }

        /* =========================================================
           HUD ROTATING SEGMENTS
        ========================================================= */

        .hud-segment {
          position: absolute;

          inset: -1px;

          border-radius: 50%;

          border: 1px solid transparent;

          border-top-color: rgba(75, 255, 220, 0.65);
          border-right-color: rgba(75, 255, 220, 0.12);

          mask-image:
            conic-gradient(
              from 0deg,
              black 0deg,
              black 80deg,
              transparent 80deg,
              transparent 130deg,
              black 130deg,
              black 230deg,
              transparent 230deg,
              transparent 290deg,
              black 290deg,
              black 360deg
            );

          -webkit-mask-image:
            conic-gradient(
              from 0deg,
              black 0deg,
              black 80deg,
              transparent 80deg,
              transparent 130deg,
              black 130deg,
              black 230deg,
              transparent 230deg,
              transparent 290deg,
              black 290deg,
              black 360deg
            );
        }

        /* =========================================================
           CROSSHAIR
           Kept behind content
        ========================================================= */

        .hud-crosshair-horizontal {
          position: absolute;

          z-index: 1;

          left: 0;
          right: 0;
          top: 50%;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(70, 255, 220, 0.08) 30%,
              rgba(70, 255, 220, 0.12) 50%,
              rgba(70, 255, 220, 0.08) 70%,
              transparent
            );

          pointer-events: none;
        }

        .hud-crosshair-vertical {
          position: absolute;

          z-index: 1;

          top: 0;
          bottom: 0;
          left: 50%;

          width: 1px;

          background:
            linear-gradient(
              180deg,
              transparent,
              rgba(70, 255, 220, 0.08) 30%,
              rgba(70, 255, 220, 0.14) 50%,
              rgba(70, 255, 220, 0.08) 70%,
              transparent
            );

          pointer-events: none;
        }

        /* =========================================================
           CENTER BEAM
           Kept behind content
        ========================================================= */

        .loader-beam {
          position: absolute;

          z-index: 1;

          left: 50%;
          top: 0;

          width: 1px;
          height: 36%;

          transform: translateX(-50%);

          background:
            linear-gradient(
              180deg,
              transparent,
              rgba(80, 255, 220, 0.28),
              rgba(80, 255, 220, 0.75)
            );

          box-shadow:
            0 0 10px rgba(0, 255, 210, 0.35);

          pointer-events: none;
        }

        .loader-beam-point {
          position: absolute;

          z-index: 1;

          left: 50%;
          top: 35%;

          width: 8px;
          height: 8px;

          transform:
            translate(-50%, -50%)
            rotate(45deg);

          background: #6affdf;

          box-shadow:
            0 0 8px rgba(80, 255, 220, 0.95),
            0 0 24px rgba(0, 255, 210, 0.6);

          pointer-events: none;
        }

        /* =========================================================
           MAIN CONTENT
           IMPORTANT: High z-index prevents decorative overlap
        ========================================================= */

        .loader-content {
          position: relative;

          z-index: 20;

          width: min(820px, 88vw);

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          isolation: isolate;
        }

        /* Dedicated clean visual layer behind the content */

        .loader-content::before {
          content: "";

          position: absolute;

          z-index: -1;

          left: 50%;
          top: 50%;

          width: 105%;
          height: 90%;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse at center,
              rgba(8, 11, 11, 0.48) 0%,
              rgba(8, 11, 11, 0.28) 45%,
              transparent 75%
            );

          pointer-events: none;
        }

        /* =========================================================
           WELCOME
        ========================================================= */

        .loader-welcome {
          position: relative;
          z-index: 25;

          margin-bottom: 15px;

          color: rgba(100, 255, 224, 0.82);

          font-size: 0.58rem;

          font-weight: 400;

          letter-spacing: 0.52em;

          text-transform: uppercase;
        }

        /* =========================================================
           NAME
        ========================================================= */

        .loader-name {
          position: relative;

          z-index: 30;

          display: block;

          margin: 0;

          color: rgba(247, 249, 248, 0.98);

          font-size: clamp(
            1.8rem,
            5vw,
            4rem
          );

          font-weight: 300;

          letter-spacing: 0.27em;

          line-height: 1.1;

          white-space: nowrap;

          text-shadow:
            0 0 25px rgba(255, 255, 255, 0.08),
            0 0 45px rgba(0, 255, 210, 0.07);

          /* Keeps central decorative lines visually away */
          padding: 5px 12px;
        }

        /* =========================================================
           TAGLINE
        ========================================================= */

        .loader-tagline {
          position: relative;
          z-index: 25;

          margin-top: 18px;

          color: rgba(255, 255, 255, 0.48);

          font-size: clamp(
            0.48rem,
            1vw,
            0.66rem
          );

          letter-spacing: 0.45em;

          text-transform: uppercase;
        }

        /* =========================================================
           LOADING SECTION
        ========================================================= */

        .loader-loading-section {
          position: relative;
          z-index: 25;

          width: min(700px, 90vw);

          margin-top: 52px;
        }

        .loader-loading-title {
          margin-bottom: 17px;

          color: rgba(255, 255, 255, 0.92);

          font-size: clamp(
            0.75rem,
            1.5vw,
            1rem
          );

          font-weight: 400;

          letter-spacing: 0.48em;

          text-transform: uppercase;
        }

        /* =========================================================
           ADVANCED PROGRESS BAR
        ========================================================= */

        .loader-progress-shell {
          position: relative;

          width: 100%;

          padding: 8px 11px;

          border: 1px solid rgba(
            110,
            255,
            229,
            0.42
          );

          border-radius: 999px;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.018),
              rgba(0, 0, 0, 0.32)
            );

          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.75),
            0 0 18px rgba(0, 255, 210, 0.045);

          overflow: hidden;
        }

        .loader-progress-shell::before {
          content: "";

          position: absolute;
          inset: -2px;

          border-radius: inherit;

          border: 1px solid rgba(
            70,
            255,
            220,
            0.08
          );

          pointer-events: none;
        }

        .loader-progress-track {
          position: relative;

          width: 100%;
          height: 17px;

          overflow: hidden;

          border-radius: 999px;

          background:
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 0px,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px,
              transparent 13px
            );
        }

        /* =========================================================
           PROGRESS FILL
        ========================================================= */

        .loader-progress-fill {
          position: relative;

          height: 100%;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #0fbf9e 0%,
              #27e4bd 45%,
              #62ffe0 100%
            );

          box-shadow:
            0 0 12px rgba(0, 255, 210, 0.85),
            0 0 32px rgba(0, 255, 210, 0.35);

          overflow: hidden;
        }

        /* =========================================================
           ENERGY FLOW
        ========================================================= */

        .loader-energy {
          position: absolute;

          inset: 0;

          background:
            repeating-linear-gradient(
              110deg,
              transparent 0px,
              transparent 18px,
              rgba(255, 255, 255, 0.12) 25px,
              transparent 34px
            );

          animation:
            energyFlow 1.2s linear infinite;
        }

        @keyframes energyFlow {
          from {
            transform: translateX(-45px);
          }

          to {
            transform: translateX(45px);
          }
        }

        /* =========================================================
           PROGRESS LEADING EDGE
        ========================================================= */

        .loader-progress-edge {
          position: absolute;

          right: -1px;
          top: 50%;

          width: 8px;
          height: 150%;

          transform: translateY(-50%);

          border-radius: 50%;

          background: #b4fff2;

          box-shadow:
            0 0 8px #8affea,
            0 0 20px rgba(0, 255, 210, 0.95),
            0 0 42px rgba(0, 255, 210, 0.55);
        }

        /* =========================================================
           PROGRESS INFO
        ========================================================= */

        .loader-progress-info {
          display: flex;

          justify-content: space-between;

          margin-top: 12px;

          padding: 0 4px;
        }

        .progress-limit {
          color: rgba(255, 255, 255, 0.28);

          font-size: 0.48rem;

          letter-spacing: 0.3em;
        }

        /* =========================================================
           PERCENTAGE
        ========================================================= */

        .loader-percentage {
          position: relative;
          z-index: 25;

          margin-top: 19px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 22px;
        }

        .percentage-line {
          width: 105px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(75, 255, 220, 0.5)
            );
        }

        .percentage-line.right {
          background:
            linear-gradient(
              90deg,
              rgba(75, 255, 220, 0.5),
              transparent
            );
        }

        .percentage-value {
          min-width: 82px;

          color: rgba(255, 255, 255, 0.94);

          font-size: 1.45rem;

          font-weight: 300;

          letter-spacing: 0.16em;
        }

        /* =========================================================
           EXPERIENCE MESSAGE
        ========================================================= */

        .loader-experience {
          position: relative;
          z-index: 25;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 17px;

          margin-top: 20px;

          color: rgba(255, 255, 255, 0.42);

          font-size: 0.52rem;

          letter-spacing: 0.42em;

          text-transform: uppercase;
        }

        .experience-bracket {
          width: 1px;
          height: 17px;

          background: rgba(75, 255, 220, 0.7);

          box-shadow:
            0 0 7px rgba(0, 255, 210, 0.4);
        }

        /* =========================================================
           SIDE INFORMATION
        ========================================================= */

        .loader-side {
          position: fixed;

          z-index: 10;

          top: 50%;

          transform: translateY(-50%);

          display: flex;

          flex-direction: column;

          gap: 9px;

          color: rgba(255, 255, 255, 0.32);

          font-size: 0.48rem;

          letter-spacing: 0.35em;

          text-transform: uppercase;
        }

        .loader-side-left {
          left: 6vw;

          text-align: left;
        }

        .loader-side-right {
          right: 6vw;

          text-align: right;
        }

        .side-heading {
          color: rgba(80, 255, 220, 0.7);

          margin-bottom: 6px;
        }

        /* =========================================================
           BOTTOM HORIZON
        ========================================================= */

        .loader-horizon {
          position: absolute;

          z-index: 2;

          left: 50%;
          bottom: -19%;

          width: 125%;
          height: 30%;

          transform: translateX(-50%);

          border-radius: 50% 50% 0 0;

          border-top: 1px solid rgba(
            80,
            255,
            220,
            0.5
          );

          background:
            radial-gradient(
              ellipse at center top,
              rgba(0, 255, 210, 0.12),
              transparent 48%
            );

          box-shadow:
            0 -8px 45px rgba(0, 255, 210, 0.09);
        }

        .horizon-light {
          position: absolute;

          left: 50%;
          top: -2px;

          width: 2px;
          height: 140px;

          transform: translateX(-50%);

          background:
            linear-gradient(
              180deg,
              rgba(80, 255, 220, 0.8),
              transparent
            );

          box-shadow:
            0 0 20px rgba(0, 255, 210, 0.5);
        }

        .horizon-core {
          position: absolute;

          left: 50%;
          top: -4px;

          width: 9px;
          height: 9px;

          transform: translateX(-50%);

          border-radius: 50%;

          background: #75ffe5;

          box-shadow:
            0 0 10px rgba(80, 255, 220, 1),
            0 0 30px rgba(0, 255, 210, 0.7);
        }

        /* =========================================================
           BOTTOM METADATA
        ========================================================= */

        .loader-bottom {
          position: fixed;

          left: 0;
          right: 0;
          bottom: 25px;

          z-index: 15;

          display: flex;

          justify-content: space-between;

          padding: 0 4vw;

          color: rgba(255, 255, 255, 0.26);

          font-size: 0.45rem;

          letter-spacing: 0.32em;

          text-transform: uppercase;
        }

        /* =========================================================
           CURTAIN
        ========================================================= */

        .loader-curtain {
          position: fixed;

          z-index: 100;

          inset: 0;

          width: 100%;
          height: 100vh;
          height: 100dvh;

          overflow: hidden;

          background: #080b0b;

          pointer-events: none;
        }

        /* =========================================================
           CURTAIN FABRIC
        ========================================================= */

        .curtain-fabric {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025),
              transparent 8%,
              rgba(0, 255, 210, 0.025) 15%,
              transparent 23%,
              rgba(255, 255, 255, 0.018) 31%,
              transparent 40%,
              rgba(0, 255, 210, 0.025) 49%,
              transparent 57%,
              rgba(255, 255, 255, 0.02) 66%,
              transparent 74%,
              rgba(0, 255, 210, 0.025) 83%,
              transparent 92%
            );
        }

        .curtain-folds {
          position: absolute;
          inset: 0;

          background:
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.1) 0px,
              rgba(0, 0, 0, 0.1) 25px,
              rgba(255, 255, 255, 0.025) 42px,
              rgba(0, 0, 0, 0.1) 60px
            );

          opacity: 0.5;

          filter: blur(2px);
        }

        /* =========================================================
           CURTAIN LIGHT SWEEP
        ========================================================= */

        .curtain-light-sweep {
          position: absolute;

          top: -20%;
          left: -15%;

          width: 25%;
          height: 140%;

          transform: rotate(18deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(80, 255, 220, 0.05),
              rgba(255, 255, 255, 0.035),
              transparent
            );

          filter: blur(12px);

          animation:
            curtainLightSweep 3.2s ease-in-out infinite;
        }

        @keyframes curtainLightSweep {
          0% {
            transform:
              translateX(-80vw)
              rotate(18deg);
          }

          50% {
            transform:
              translateX(120vw)
              rotate(18deg);
          }

          100% {
            transform:
              translateX(120vw)
              rotate(18deg);
          }
        }

        /* =========================================================
           CURTAIN PARTICLES
        ========================================================= */

        .curtain-particle {
          position: absolute;

          width: 2px;
          height: 2px;

          border-radius: 50%;

          background: #65ffe0;

          box-shadow:
            0 0 5px rgba(90, 255, 220, 0.8),
            0 0 12px rgba(0, 255, 210, 0.4);
        }

        .curtain-particle-1 {
          left: 18%;
          top: 32%;
        }

        .curtain-particle-2 {
          left: 38%;
          top: 58%;
        }

        .curtain-particle-3 {
          left: 62%;
          top: 27%;
        }

        .curtain-particle-4 {
          left: 78%;
          top: 66%;
        }

        .curtain-particle-5 {
          left: 89%;
          top: 40%;
        }

        /* =========================================================
           CURTAIN EDGE
        ========================================================= */

        .curtain-edge-glow {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 2px;

          background: rgba(70, 255, 220, 0.85);

          box-shadow:
            0 0 12px rgba(0, 255, 210, 0.85),
            0 0 35px rgba(0, 255, 210, 0.3);
        }

        /* =========================================================
           WAVY CURTAIN EDGE
        ========================================================= */

        .curtain-bottom {
          position: absolute;

          left: -5%;
          bottom: -1px;

          width: 110%;
          height: 90px;

          background: #080b0b;

          clip-path: polygon(
            0% 58%,
            5% 45%,
            10% 55%,
            15% 40%,
            20% 54%,
            25% 43%,
            30% 58%,
            35% 42%,
            40% 55%,
            45% 39%,
            50% 54%,
            55% 42%,
            60% 57%,
            65% 40%,
            70% 54%,
            75% 43%,
            80% 57%,
            85% 41%,
            90% 55%,
            95% 43%,
            100% 56%,
            100% 100%,
            0% 100%
          );
        }

        .curtain-bottom-glow {
          position: absolute;

          left: 50%;
          bottom: -100px;

          transform: translateX(-50%);

          width: 70%;
          height: 180px;

          background: rgba(0, 255, 210, 0.07);

          filter: blur(70px);
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 800px) {
          .loader-hud {
            width: 105vw;
          }

          .loader-side {
            display: none;
          }

          .loader-content {
            width: 88vw;
          }

          .loader-name {
            font-size: clamp(
              1.25rem,
              7vw,
              2.5rem
            );

            letter-spacing: 0.19em;

            padding: 4px 8px;
          }

          .loader-tagline {
            font-size: 0.43rem;

            letter-spacing: 0.3em;

            max-width: 85vw;

            line-height: 1.8;
          }

          .loader-loading-section {
            width: 90vw;

            margin-top: 40px;
          }

          .loader-loading-title {
            font-size: 0.6rem;

            letter-spacing: 0.35em;
          }

          .loader-progress-shell {
            padding: 6px 8px;
          }

          .loader-progress-track {
            height: 13px;
          }

          .percentage-line {
            width: 55px;
          }

          .percentage-value {
            font-size: 1.15rem;
          }

          .loader-experience {
            font-size: 0.42rem;

            letter-spacing: 0.27em;

            gap: 10px;
          }

          .loader-bottom {
            bottom: 18px;

            padding: 0 20px;

            font-size: 0.36rem;

            letter-spacing: 0.22em;
          }

          .loader-welcome {
            font-size: 0.48rem;

            letter-spacing: 0.38em;
          }

          .loader-horizon {
            bottom: -14%;
          }
        }

        @media (max-width: 480px) {
          .loader-hud {
            width: 125vw;
          }

          .loader-loading-section {
            margin-top: 34px;
          }

          .loader-progress-shell {
            padding: 5px 7px;
          }

          .loader-progress-track {
            height: 11px;
          }

          .loader-experience {
            max-width: 80vw;

            line-height: 1.8;

            text-align: center;
          }

          .loader-bottom-left {
            display: none;
          }

          .loader-bottom {
            justify-content: center;
          }

          .loader-name {
            font-size: clamp(
              1.05rem,
              6vw,
              1.65rem
            );

            letter-spacing: 0.16em;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .loader-energy,
          .curtain-light-sweep {
            animation: none;
          }
        }
      `}</style>

      {/* =========================================================
          LOADING SCREEN
      ========================================================= */}

      <AnimatePresence>
        {!completed && (
          <motion.div
            className="portfolio-loader"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="loader-background">
              <div className="loader-grid" />

              <motion.div
                className="loader-ambient-glow"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.55, 0.85, 0.55],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="loader-stars" />

              {/* Floating particles */}

              <motion.div
                className="floating-particle fp-1"
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="floating-particle fp-2"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.2, 0.75, 0.2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />

              <motion.div
                className="floating-particle fp-3"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.15, 0.65, 0.15],
                }}
                transition={{
                  duration: 2.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />

              <motion.div
                className="floating-particle fp-4"
                animate={{
                  y: [0, 18, 0],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />

              <motion.div
                className="floating-particle fp-5"
                animate={{
                  y: [0, -22, 0],
                  opacity: [0.15, 0.65, 0.15],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />

              {/* Horizon */}

              <div className="loader-horizon">
                <div className="horizon-light" />
                <div className="horizon-core" />
              </div>
            </div>

            {/* =====================================================
                CENTRAL DECORATIVE HUD
            ===================================================== */}

            <motion.div
              className="loader-hud"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="hud-segment" />
            </motion.div>

            <div className="hud-crosshair-horizontal" />
            <div className="hud-crosshair-vertical" />

            <motion.div
              className="loader-beam"
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="loader-beam-point"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* =====================================================
                SIDE INFORMATION
            ===================================================== */}

            <motion.div
              className="loader-side loader-side-left"
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
            >
              <span className="side-heading">
                Explore
              </span>

              <span>Learn</span>
              <span>Connect</span>
              <span>Build</span>
            </motion.div>

            <motion.div
              className="loader-side loader-side-right"
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
            >
              <span className="side-heading">
                Passion
              </span>

              <span>Creativity</span>
              <span>Technology</span>
              <span>Impact</span>
            </motion.div>

            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <motion.div
              className="loader-content"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Welcome */}

              <motion.div
                className="loader-welcome"
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.6,
                }}
              >
                Welcome To
              </motion.div>

              {/* Name */}

              <motion.h1
                className="loader-name"
                initial={{
                  opacity: 0,
                  letterSpacing: "0.55em",
                }}
                animate={{
                  opacity: 1,
                  letterSpacing: "0.27em",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                PREM NANDURKAR
              </motion.h1>

              {/* Tagline */}

              <motion.div
                className="loader-tagline"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.7,
                }}
              >
                A Developer Who Builds Possibilities
              </motion.div>

              {/* Loading Section */}

              <motion.div
                className="loader-loading-section"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}
              >
                <div className="loader-loading-title">
                  Loading Portfolio
                </div>

                {/* Progress bar */}

                <div className="loader-progress-shell">
                  <div className="loader-progress-track">
                    <motion.div
                      className="loader-progress-fill"
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.12,
                        ease: "linear",
                      }}
                    >
                      <div className="loader-energy" />

                      {progress > 0 && (
                        <div className="loader-progress-edge" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Progress limits */}

                <div className="loader-progress-info">
                  <span className="progress-limit">
                    0%
                  </span>

                  <span className="progress-limit">
                    100%
                  </span>
                </div>

                {/* Percentage */}

                <motion.div
                  className="loader-percentage"
                  key={progress}
                  initial={{
                    opacity: 0.5,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.08,
                  }}
                >
                  <div className="percentage-line" />

                  <span className="percentage-value">
                    {progress}%
                  </span>

                  <div className="percentage-line right" />
                </motion.div>

                {/* Experience message */}

                <motion.div
                  className="loader-experience"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.7,
                  }}
                >
                  <span className="experience-bracket" />

                  <span>
                    Preparing An Exciting Visual Experience
                  </span>

                  <span className="experience-bracket" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* =====================================================
                BOTTOM INFORMATION
            ===================================================== */}

            <div className="loader-bottom">
              <span>
                EST. 2024
              </span>

              <span>
                CODE · BUILD · CREATE
              </span>

              <span className="loader-bottom-left">
                SYSTEM READY
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          CURTAIN REVEAL
      ========================================================= */}

      <AnimatePresence>
        {completed && (
          <motion.div
            className="loader-curtain"
            initial={{
              y: 0,
            }}
            animate={{
              y: "-105%",
            }}
            transition={{
              duration: 1.35,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => {
              onComplete?.();
            }}
          >
            {/* Fabric */}

            <div className="curtain-fabric" />

            {/* Folds */}

            <div className="curtain-folds" />

            {/* Light sweep */}

            <div className="curtain-light-sweep" />

            {/* Particles */}

            <motion.div
              className="curtain-particle curtain-particle-1"
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="curtain-particle curtain-particle-2"
              animate={{
                y: [0, -18, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />

            <motion.div
              className="curtain-particle curtain-particle-3"
              animate={{
                y: [0, -30, 0],
                opacity: [0.15, 0.75, 0.15],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />

            <motion.div
              className="curtain-particle curtain-particle-4"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />

            <motion.div
              className="curtain-particle curtain-particle-5"
              animate={{
                y: [0, -28, 0],
                opacity: [0.15, 0.8, 0.15],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />

            {/* Bottom glow */}

            <div className="curtain-bottom-glow" />

            {/* Wavy edge */}

            <div className="curtain-bottom" />

            {/* Edge glow */}

            <motion.div
              className="curtain-edge-glow"
              animate={{
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};