import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* ── Top Border ── */}
      <div className={styles.footerTopBorder} />

      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* ── Brand Section ── */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logoGroup}>
              <div className={styles.logoOrb}>
                <div className={styles.orbCore} />
              </div>
              <span className={styles.logoText}>TRXMOD21X</span>
            </Link>
            <p className={styles.brandDesc}>
              Building future digital experiences with modern architecture
              and high performance.
            </p>
          </div>

          {/* ── Navigation Links ── */}
          <div className={styles.navSection}>
            <h4 className={styles.navTitle}>// SYSTEM_NAV</h4>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  <span className={styles.navPrefix}>&#62;</span> Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className={styles.navLink}>
                  <span className={styles.navPrefix}>&#62;</span> About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={styles.navLink}>
                  <span className={styles.navPrefix}>&#62;</span> Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.navLink}>
                  <span className={styles.navPrefix}>&#62;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Social / External Links ── */}
          <div className={styles.navSection}>
            <h4 className={styles.navTitle}>// EXTERNAL_LINKS</h4>
            <ul className={styles.navList}>
              <li>
                <a
                  href="https://github.com/trxmod21x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  <span className={styles.navPrefix}>&#62;</span> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/trxmod21x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  <span className={styles.navPrefix}>&#62;</span> LinkedIn
                </a>
              </li>              
            </ul>
          </div>
        </div>

        {/* ── Bottom Section ── */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span className={styles.copySymbol}>&copy;</span> {currentYear} TRXMOD21X.
            ALL SYSTEMS OPERATIONAL.
          </div>
          <div className={styles.statusGroup}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} />
              STATUS: ONLINE
            </div>
            <div className={styles.serverLoc}>SERVER: AP-SOUTHEAST-1</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
