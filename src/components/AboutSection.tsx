"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";
import Link from "next/link";
import GlitchText from "./neonblade-ui/glitch-text";

/* ── Skill data ── */
const SKILLS = [
  {
    category: "Frontend",
    icon: "◆",
    items: [
      "React",
      "Next.js",
      "RN",
      "Flutter",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Laravel",
    ],
  },
  {
    category: "Backend",
    icon: "◆",
    items: ["Node.js", "Express", "Python", "REST API", "PHP"],
  },
  {
    category: "Database",
    icon: "◆",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "MySQL"],
  },
  {
    category: "DevOps",
    icon: "◆",
    items: ["Docker", "CI/CD", "Vercel", "Linux", "Git"],
  },
];

/* ── Timeline data ── */
const TIMELINE = [
  {
    year: "2024 — Now",
    title: "Full-Stack Developer",
    subtitle: "Nadev",
    description:
      "Spearheading full-stack development for diverse clientele. From initial consultation to final deployment, I architect and deliver custom web and mobile applications tailored to specific business requirements.",
  },
  {
    year: "2023 — 2024",
    title: "IT Infrastructure Staff",
    subtitle: "Harapan Bunda Hospital",
    description:
      "Managed critical hospital IT infrastructure, including server maintenance and the hospital management application. Ensured continuous operational readiness of all hardware and provided rapid response troubleshooting.",
  },
  {
    year: "2020 — 2023",
    title: "Mobile App Developer",
    subtitle: "SNIPITZ LLC",
    description:
      "Architected and developed high-performance iOS and Android applications. Conducted rigorous bug hunting, continuous maintenance, and iterative updates to ensure optimal performance and seamless feature rollouts.",
  },
  {
    year: "2019",
    title: "Full-Stack Bootcamp",
    subtitle: "Pijar Camp",
    description:
      "Mastered the fundamentals of web and mobile development. Gained hands-on experience with HTML, CSS, and JavaScript, while diving deep into modern frameworks including ReactJS, React Native, and Node.js.",
  },
];

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 2000, triggerOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, triggerOnView]);

  return { count, ref };
}

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stat1 = useCountUp(30, 2000);
  const stat2 = useCountUp(20, 2200);
  const stat3 = useCountUp(99, 2400);

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        {/* ── Section Header ── */}
        <div
          className={styles.sectionHeader}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 600ms ease-out",
          }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagPrompt}>$</span>
            <span className={styles.tagPath}>~/trxmod21x</span>
            <span className={styles.tagCmd}>cat</span>
            <span className={styles.tagArg}>about.md</span>
          </div>
          <h2 className={styles.sectionTitle}>
            About{" "}
            <GlitchText mode="active" intensity="heavy" speed="fast">
              Me
            </GlitchText>
          </h2>
          <p className={styles.sectionSubtitle}>
            Get to know the person behind this terminal — a developer obsessed
            with clean code, modern architecture, and unforgettable digital
            experiences.
          </p>
        </div>

        {/* ── Main Grid: Profile + Skills ── */}
        <div className={styles.mainGrid}>
          {/* ═══ Left: Profile Card ═══ */}
          <div
            className={styles.profileCard}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-32px)",
              transition: "all 700ms ease-out 200ms",
            }}
          >
            {/* Card border glow */}
            <div className={styles.cardGlow} />

            {/* Avatar area */}
            <div className={styles.avatarArea}>
              <div className={styles.avatarWrapper}>
                <Image
                  src="/me.jpg"
                  alt="TrxMod21X avatar"
                  width={220}
                  height={220}
                  className={styles.avatarImage}
                />
                <div className={styles.avatarRing} />
                <div className={styles.avatarStatus}>
                  <span className={styles.avatarStatusDot} />
                </div>
              </div>
              <div className={styles.avatarInfo}>
                <h3 className={styles.avatarName}>TrxMod21X</h3>
                <span className={styles.avatarRole}>Full-Stack Engineer</span>
                <span className={styles.avatarLocation}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Indonesia
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.cardDivider} />

            {/* Bio terminal */}
            <div className={styles.bioTerminal}>
              <div className={styles.bioLine}>
                <span className={styles.bioLabel}>// Motto</span>
              </div>
              <p className={styles.bioText}>
                &quot;Good code doesn't just work — it tells a story. Every
                function, every component, is part of a larger digital
                narrative.&quot;
              </p>
              <div className={styles.bioLine}>
                <span className={styles.bioLabel}>// Interest</span>
              </div>
              <div className={styles.bioTags}>
                {[
                  "Clean Architecture",
                  "UI/UX Design",
                  "Open Source",
                  "System Design",
                  "Cyberpunk Aesthetics",
                ].map((tag) => (
                  <span key={tag} className={styles.bioTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className={styles.socialLinks}>
              <Link
                href="https://github.com/TrxModX21"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/in/teukurizky21"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="mailto:trxcode21@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ═══ Right: Skills Grid ═══ */}
          <div className={styles.skillsArea}>
            <div className={styles.skillsHeader}>
              <h3 className={styles.skillsTitle}>
                <span className={styles.navPrefix}>//</span> Tech Arsenal
              </h3>
              <span className={styles.skillsBadge}>
                {SKILLS.reduce((sum, s) => sum + s.items.length, 0)} skills
              </span>
            </div>

            <div className={styles.skillsGrid}>
              {SKILLS.map((skill, idx) => (
                <div
                  key={skill.category}
                  className={styles.skillCard}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 500ms ease-out ${300 + idx * 120}ms`,
                  }}
                >
                  <div className={styles.skillCardHeader}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <h4 className={styles.skillCategory}>{skill.category}</h4>
                    <span className={styles.skillCount}>
                      {skill.items.length}
                    </span>
                  </div>
                  <div className={styles.skillItems}>
                    {skill.items.map((item) => (
                      <span key={item} className={styles.skillItem}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Counter Bar ── */}
        <div
          className={styles.statsSection}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 600ms ease-out 600ms",
          }}
        >
          <div className={styles.statsGrid}>
            <div className={styles.counterItem} ref={stat1.ref}>
              <span className={styles.counterValue}>{stat1.count}+</span>
              <span className={styles.counterLabel}>Projects Completed</span>
              <div className={styles.counterBar}>
                <div
                  className={styles.counterFill}
                  style={{ width: inView ? "85%" : "0%" }}
                />
              </div>
            </div>
            <div className={styles.counterDivider} />
            <div className={styles.counterItem} ref={stat2.ref}>
              <span className={styles.counterValue}>{stat2.count}+</span>
              <span className={styles.counterLabel}>Happy Clients</span>
              <div className={styles.counterBar}>
                <div
                  className={styles.counterFill}
                  style={{ width: inView ? "70%" : "0%" }}
                />
              </div>
            </div>
            <div className={styles.counterDivider} />
            <div className={styles.counterItem} ref={stat3.ref}>
              <span className={styles.counterValue}>{stat3.count}%</span>
              <span className={styles.counterLabel}>Code Passion</span>
              <div className={styles.counterBar}>
                <div
                  className={styles.counterFill}
                  style={{ width: inView ? "99%" : "0%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Experience Timeline ── */}
        <div className={styles.timelineSection}>
          <div
            className={styles.timelineHeader}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "all 600ms ease-out 400ms",
            }}
          >
            <h3 className={styles.timelineTitle}>
              <span className={styles.navPrefix}>//</span>{" "}
              <GlitchText mode="active" intensity="heavy" speed="fast">
                Experience Log
              </GlitchText>
            </h3>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {TIMELINE.map((item, idx) => (
              <div
                key={item.year}
                className={styles.timelineItem}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-24px)",
                  transition: `all 600ms ease-out ${500 + idx * 200}ms`,
                }}
              >
                <div className={styles.timelineDot}>
                  <div className={styles.timelineDotInner} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h4 className={styles.timelineRole}>{item.title}</h4>
                  <span className={styles.timelineCompany}>
                    {item.subtitle}
                  </span>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
