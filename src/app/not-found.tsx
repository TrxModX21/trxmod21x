import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      {/* ── Atmospheric background ── */}
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.gridOverlay} />
      </div>

      {/* ── Scanline pass ── */}
      <div className={styles.scanline} />

      <main className={styles.main}>
        {/* Terminal tag */}
        <div className={styles.terminalTag}>
          <span className={styles.tagPrompt}>$</span>
          <span className={styles.tagCmd}>find</span>
          <span className={styles.tagArg}>/page</span>
          <span className={styles.tagError}>— ERROR</span>
        </div>

        {/* Glitchy 404 */}
        <h1 className={styles.code} data-text="404">
          404
        </h1>

        {/* Subtitle */}
        <h2 className={styles.title}>
          Signal <span className={styles.accent}>Lost</span>
        </h2>

        {/* Terminal output */}
        <div className={styles.terminal}>
          <div className={styles.termLine}>
            <span className={styles.prompt}>&#62;</span>
            <span className={styles.lineText}>
              The page you are looking for was not found in the system.
            </span>
          </div>
          <div className={styles.termLine}>
            <span className={styles.prompt}>&#62;</span>
            <span className={styles.lineText}>
              It might have been deleted, moved, or never existed.
            </span>
          </div>
          <div className={styles.termLine}>
            <span className={styles.prompt}>&#62;</span>
            <span className={styles.lineText}>
              Return to <span className={styles.highlight}>home base</span>{" "}
              to continue.
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Error code detail */}
        <p className={styles.errorMeta}>
          ERR_NOT_FOUND — 0x{Math.floor(Date.now() / 1000).toString(16).toUpperCase()}
        </p>
      </main>
    </div>
  );
}
