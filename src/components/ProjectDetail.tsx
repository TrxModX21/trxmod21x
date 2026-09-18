"use client";

import Link from "next/link";
import Image from "next/image";
import { PROJECTS, type Project } from "@/data/projects";
import GlitchText from "./neonblade-ui/glitch-text";
import styles from "./ProjectDetail.module.css";

/* ── Helper: find prev/next projects ── */
function getAdjacentProjects(currentId: string) {
  const idx = PROJECTS.findIndex((p) => p.id === currentId);
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : null,
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null,
  };
}

export default function ProjectDetail({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.id);

  const statusLabel =
    project.status === "live"
      ? "Live"
      : project.status === "dev"
        ? "In Development"
        : "Archived";

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* ── Back Navigation ── */}
        <Link href="/#projects" className={`${styles.backLink} ${styles.fadeIn}`}>
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Projects</span>
        </Link>

        {/* ── Hero Banner ── */}
        <div className={`${styles.heroBanner} ${styles.fadeInDelay1}`}>
          {project.image && (
            <div className={styles.heroBannerImageWrapper}>
              <Image
                src={project.image}
                fill
                sizes="100vw"
                alt={`${project.title} background`}
                className={styles.heroImage}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
          <div
            className={styles.heroBannerBg}
            style={{ background: project.gradient }}
          >
            <div className={styles.heroContent}>
              <div className={styles.terminalTag}>
                <span className={styles.tagPrompt}>$</span>
                <span className={styles.tagPath}>~/trxmod21x</span>
                <span className={styles.tagCmd}>cat</span>
                <span className={styles.tagArg}>
                  ~/projects/{project.id}/README.md
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                <GlitchText mode="active" intensity="heavy" speed="fast">
                  {project.title}
                </GlitchText>
              </h1>

              <div className={styles.heroBadges}>
                <span className={styles.categoryBadge}>
                  {project.categories.join(", ")}
                </span>
                <span
                  className={`${styles.statusBadge} ${
                    project.status === "live"
                      ? styles.statusLive
                      : project.status === "dev"
                        ? styles.statusDev
                        : styles.statusArchived
                  }`}
                >
                  <span className={styles.statusDot} />
                  {statusLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content Grid ── */}
        <div className={`${styles.contentGrid} ${styles.fadeInDelay2}`}>
          {/* ── Main Content ── */}
          <div className={styles.mainContent}>
            {/* Description */}
            <div className={styles.contentSection}>
              <h2 className={styles.contentSectionTitle}>Overview</h2>
              <p className={styles.description}>{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className={styles.contentSection}>
              <h2 className={styles.contentSectionTitle}>Key Features</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureBullet} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className={styles.contentSection}>
              <h2 className={styles.contentSectionTitle}>
                Technical Challenges
              </h2>
              <div className={styles.challengesList}>
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className={styles.challengeItem}>
                    <h3 className={styles.challengeTitle}>
                      {challenge.title}
                    </h3>
                    <span className={styles.challengeLabel}>Solution →</span>
                    <p className={styles.challengeSolution}>
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>
            {/* Tech Stack */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tech Stack</h3>
              <div className={styles.techGrid}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Project Links</h3>
              <div className={styles.linksList}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
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
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  <span className={styles.projectLinkLabel}>Live Demo</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.projectLinkArrow}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                {project.repoUrl === "#" ? (
                  <div className={`${styles.projectLink} ${styles.projectLinkDisabled}`}>
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
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0110 0v4"></path>
                    </svg>
                    <span className={styles.projectLinkLabel}>Private Repo</span>
                  </div>
                ) : (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className={styles.projectLinkLabel}>Source Code</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.projectLinkArrow}
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Status */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Status</h3>
              <div className={styles.statusInfo}>
                <span
                  className={`${styles.statusInfoDot} ${styles[project.status]}`}
                />
                <span className={styles.statusInfoText}>{statusLabel}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Terminal Block ── */}
        <div className={`${styles.terminalBlock} ${styles.fadeInDelay3}`}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.terminalTitle}>
              trxmod21x@{project.id}:~
            </span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>$</span>
              <span className={styles.terminalCmd}>
                {project.terminalCmd}
              </span>
            </div>
            <div className={styles.terminalOutput}>
              ✓ Build completed successfully. Ready for deployment.
            </div>
          </div>
        </div>

        {/* ── Prev / Next Navigation ── */}
        <nav className={`${styles.projectNav} ${styles.fadeInDelay4}`}>
          {prev ? (
            <Link
              href={`/projects/${prev.id}`}
              className={styles.navLink}
            >
              <span className={styles.navLabel}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Previous Project
              </span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : (
            <span className={styles.navPlaceholder} />
          )}

          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className={`${styles.navLink} ${styles.navLinkNext}`}
            >
              <span className={styles.navLabel}>
                Next Project
                <svg
                  width="12"
                  height="12"
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
              </span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : (
            <span className={styles.navPlaceholder} />
          )}
        </nav>
      </div>
    </div>
  );
}
