"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import GlitchText from "./neonblade-ui/glitch-text";
import { PROJECTS, CATEGORIES } from "@/data/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
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
            <span className={styles.tagCmd}>ls</span>
            <span className={styles.tagArg}>~/projects</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Featured{" "}
            <span className={styles.titleAccent}>
              <GlitchText mode="active" intensity="heavy" speed="fast">
                Projects
              </GlitchText>
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A curated collection of projects demonstrating my expertise and
            dedication to building high-quality digital solutions.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div
          className={styles.filterBar}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "all 500ms ease-out 200ms",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                activeFilter === cat ? styles.filterActive : ""
              }`}
              onClick={() => setActiveFilter(cat)}
              type="button"
            >
              {cat}
              {cat === "All" && (
                <span className={styles.filterCount}>{PROJECTS.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ── Project Grid ── */}
        <div className={styles.projectGrid}>
          {filtered.map((project, idx) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={styles.projectCardLink}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 500ms ease-out ${300 + idx * 100}ms`,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <article className={styles.projectCard}>
                {/* Card preview / thumbnail area */}
                <div
                  className={styles.cardPreview}
                  style={{ background: project.gradient }}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`${project.title} preview`}
                      className={styles.projectImage}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  {/* Status badge */}
                  <div
                    className={`${styles.statusBadge} ${
                      project.status === "live"
                        ? styles.statusLive
                        : project.status === "dev"
                          ? styles.statusDev
                          : styles.statusArchived
                    }`}
                  >
                    <span className={styles.statusDot} />
                    {project.status === "live"
                      ? "Live"
                      : project.status === "dev"
                        ? "In Dev"
                        : "Archived"}
                  </div>

                  {/* Terminal simulation in preview */}
                  <div className={styles.previewTerminal}>
                    <div className={styles.previewDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.previewCmd}>
                      <span className={styles.previewPrompt}>$</span>
                      <span className={styles.previewText}>
                        {project.terminalCmd}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={styles.cardOverlay}>
                    <div className={styles.overlayActions}>
                      <span
                        className={styles.overlayBtn}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${project.title} live`}
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
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        <span>Live Demo</span>
                      </span>
                      <span
                        className={styles.overlayBtnGhost}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (project.repoUrl !== "#") {
                            window.open(project.repoUrl, "_blank");
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${project.title} source`}
                        style={project.repoUrl === "#" ? { opacity: 0.6, cursor: "not-allowed" } : {}}
                      >
                        {project.repoUrl === "#" ? (
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
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0110 0v4"></path>
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        )}
                        <span>{project.repoUrl === "#" ? "Private" : "Source"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className={styles.cardBody}>
                  {/* Category + Title */}
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>
                      {project.categories.join(", ")}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  {/* Tech stack */}
                  <div className={styles.cardTech}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* ── View All CTA ── */}
        <div
          className={styles.viewAll}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "all 600ms ease-out 800ms",
          }}
        >
          <Link
            href="https://github.com/TrxModX21"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllBtn}
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
            <span>View All on GitHub</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
