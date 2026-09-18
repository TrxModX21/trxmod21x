"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in a real app
    console.error("System Error Caught:", error);
  }, [error]);

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
          <span className={styles.tagCmd}>sudo</span>
          <span className={styles.tagArg}>--execute</span>
          <span className={styles.tagError}>— CRITICAL_FAIL</span>
        </div>

        {/* Glitchy 500 */}
        <h1 className={styles.code} data-text="500">
          500
        </h1>

        {/* Subtitle */}
        <h2 className={styles.title}>
          System <span className={styles.accent}>Failure</span>
        </h2>

        {/* Terminal output */}
        <div className={styles.terminal}>
          <div className={styles.termLine}>
            <span className={styles.prompt}>&#62;</span>
            <span className={styles.lineText}>
              A fatal error occurred on the main server.
            </span>
          </div>
          <div className={styles.termLine}>
            <span className={styles.prompt}>&#62;</span>
            <span className={styles.lineText}>
              Process terminated. Error data: <span className={styles.errorOutput}>{error.message || "Unknown Exception"}</span>
            </span>
          </div>
          <div className={styles.termLine}>
            <span className={styles.prompt}>&#62;</span>
            <span className={styles.lineText}>
              Please initiate a <span className={styles.highlight}>reboot</span> to recover the session.
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.actions}>
          <button onClick={() => reset()} className={styles.btnPrimary}>
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
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            <span>Reboot System</span>
          </button>
        </div>

        {/* Error code detail */}
        <p className={styles.errorMeta}>
          ERR_INTERNAL_500 — {error.digest || `0x${Math.floor(Date.now() / 1000).toString(16).toUpperCase()}`}
        </p>
      </main>
    </div>
  );
}
