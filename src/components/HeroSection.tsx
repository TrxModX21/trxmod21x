"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import GlitchText from "./neonblade-ui/glitch-text";

/* ── Terminal typing simulation ── */
function useTypingEffect(text: string, speed = 50, delay = 800) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return { displayed, cursor: showCursor ? "▌" : " " };
}

/* ── Stat items ── */
const STATS = [
  { value: "5+", label: "Years Exp" },
  { value: "30+", label: "Projects" },
  { value: "∞", label: "Passion" },
];

/* ── Tech stack icons ── */
const TECH_STACK = [
  "React",
  "Next.js",
  "Flutter",
  "React Native",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
];

export default function HeroSection() {
  const { displayed, cursor } = useTypingEffect(
    "Building cross-platform digital experiences from the future.",
    45,
    1200,
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className={styles.hero}>
      {/* ── Atmospheric background ── */}
      <div className={styles.heroBg}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* ═══ Left: Content ═══ */}
          <div className={styles.heroContent}>
            {/* Terminal-style status line */}
            <div
              className={styles.terminalTag}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 500ms ease-out 200ms",
              }}
            >
              <span className={styles.terminalPrompt}>$</span>
              <span className={styles.terminalPath}>~/trxmod21x</span>
              <span className={styles.terminalCmd}>status</span>
              <span className={styles.terminalResult}>
                <span className={styles.statusOnline} />
                online
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={styles.heroTitle}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "all 600ms ease-out 400ms",
              }}
            >
              <span className={styles.heroTitleLine1}>Digital</span>
              <span className={styles.heroTitleLine2}>
                Archi<span className={styles.glitchChar}>t</span>ect
              </span>
              <span className={styles.heroTitleLine3}>
                <span className={styles.ampersand}>&</span>{" "}
                <GlitchText mode="active" intensity="heavy" speed="fast">
                  Code Artisan
                </GlitchText>
              </span>
            </h1>

            {/* Typing subtitle */}
            <div
              className={styles.typingWrapper}
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 500ms ease-out 900ms",
              }}
            >
              <span className={styles.typingPrefix}>&gt;</span>
              <span className={styles.typingText}>{displayed}</span>
              <span className={styles.typingCursor}>{cursor}</span>
            </div>

            {/* Description */}
            <p
              className={styles.heroDescription}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 600ms ease-out 1400ms",
              }}
            >
              I design and build modern web and mobile applications that
              prioritize performance, aesthetics, and user experience. From
              scalable backend architecture to stunning cross-platform
              interfaces — every line of code is art.
            </p>

            {/* CTA Buttons */}
            <div
              className={styles.heroCtas}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 600ms ease-out 1600ms",
              }}
            >
              <a href="#projects" className={styles.btnPrimary}>
                <span>Explore Projects</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Stats bar */}
            <div
              className={styles.statsBar}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 600ms ease-out 1800ms",
              }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ Right: Visual ═══ */}
          <div
            className={styles.heroVisual}
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translateY(0) scale(1)"
                : "translateY(32px) scale(0.95)",
              transition: "all 800ms ease-out 600ms",
            }}
          >
            {/* Terminal window */}
            <div className={styles.terminalWindow}>
              {/* Title bar */}
              <div className={styles.terminalTitleBar}>
                <div className={styles.terminalDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <span className={styles.terminalTitle}>
                  trxmod21x@portfolio:~
                </span>
                <div
                  className={styles.terminalDots}
                  style={{ visibility: "hidden" }}
                >
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
              </div>

              {/* Terminal body */}
              <div className={styles.terminalBody}>
                <div className={styles.terminalLine}>
                  <span className={styles.tPrompt}>$</span>
                  <span className={styles.tCmd}>cat</span>
                  <span className={styles.tArg}>about.json</span>
                </div>
                <div className={styles.terminalOutput}>
                  <div className={styles.jsonBrace}>{"{"}</div>
                  <div className={styles.jsonLine}>
                    <span className={styles.jsonKey}>&quot;name&quot;</span>
                    <span className={styles.jsonColon}>:</span>
                    <span className={styles.jsonString}>
                      &quot;TrxMod21X&quot;
                    </span>
                  </div>
                  <div className={styles.jsonLine}>
                    <span className={styles.jsonKey}>&quot;role&quot;</span>
                    <span className={styles.jsonColon}>:</span>
                    <span className={styles.jsonString}>
                      &quot;Full-Stack & Mobile Dev&quot;
                    </span>
                  </div>
                  <div className={styles.jsonLine}>
                    <span className={styles.jsonKey}>&quot;focus&quot;</span>
                    <span className={styles.jsonColon}>:</span>
                    <span className={styles.jsonString}>
                      &quot;Cross-Platform Architecture&quot;
                    </span>
                  </div>
                  <div className={styles.jsonLine}>
                    <span className={styles.jsonKey}>&quot;passion&quot;</span>
                    <span className={styles.jsonColon}>:</span>
                    <span className={styles.jsonString}>
                      &quot;Crafting the Future&quot;
                    </span>
                  </div>
                  <div className={styles.jsonBrace}>{"}"}</div>
                </div>
                <div className={styles.terminalLine}>
                  <span className={styles.tPrompt}>$</span>
                  <span className={styles.tCursorBlock}>▌</span>
                </div>
              </div>

              {/* Logo float */}
              <div className={styles.floatingLogo}>
                <Image
                  src="/logo.jpg"
                  alt="TrxMod21X emblem"
                  width={72}
                  height={72}
                  className={styles.floatingLogoImg}
                />
              </div>
            </div>

            {/* Tech stack ticker */}
            <div className={styles.techStack}>
              <span className={styles.techLabel}>Tech Stack</span>
              <div className={styles.techList}>
                {TECH_STACK.map((tech) => (
                  <span key={tech} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={styles.scrollIndicator}
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 600ms ease-out 2200ms",
        }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </div>
    </section>
  );
}
