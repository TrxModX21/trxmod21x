"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="site-header"
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.headerInner}>
        {/* ── Logo ── */}
        <Link href="/" className={styles.logoLink} aria-label="TrxMod21X — Home">
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.jpg"
              alt="TrxMod21X logo"
              width={40}
              height={40}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoGlow} />
          </div>
          <span className={styles.logoText}>
            Trx<span className={styles.logoAccent}>Mod21X</span>
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  <span className={styles.navPrefix}>//</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Status indicator + CTA ── */}
        <div className={styles.headerActions}>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Available</span>
          </div>
          <a href="#contact" className={styles.ctaButton}>
            <span>Hire Me</span>
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
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={styles.mobileNavItem}
                style={{ animationDelay: `${i * 80 + 100}ms` }}
              >
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={styles.navPrefix}>//</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Available for work</span>
            </div>
            <a
              href="#contact"
              className={styles.ctaButton}
              onClick={() => setMobileOpen(false)}
            >
              <span>Hire Me</span>
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
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
