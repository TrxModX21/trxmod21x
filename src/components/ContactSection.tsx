"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: "TrxMod21X Portfolio",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* ── Section Header ── */}
        <div 
          className={styles.sectionHeader}
          style={{ 
            opacity: inView ? 1 : 0, 
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 600ms ease-out"
          }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagPrompt}>$</span>
            <span className={styles.tagCmd}>ping</span>
            <span className={styles.tagArg}>-c 4 trxmod21x</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Establish <span className={styles.titleAccent}>Connection</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Interested in collaborating or have a question? Send a transmission
            to the main server. I will respond as soon as possible.
          </p>
        </div>

        <div className={styles.mainGrid}>
          
          {/* ── Contact Info Cards ── */}
          <div className={styles.infoArea}>
            
            {/* Email Card */}
            <Link 
              href="mailto:trxcode21@gmail.com" 
              className={styles.infoCard}
              style={{ 
                opacity: inView ? 1 : 0, 
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "all 500ms ease-out 200ms"
              }}
            >
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoLabel}>Email Transmit</h3>
                <p className={styles.infoValue}>trxcode21@gmail.com</p>
              </div>
              <div className={styles.infoArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>

            {/* GitHub Card */}
            <Link 
              href="https://github.com/TrxModX21" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.infoCard}
              style={{ 
                opacity: inView ? 1 : 0, 
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "all 500ms ease-out 300ms"
              }}
            >
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoLabel}>GitHub Registry</h3>
                <p className={styles.infoValue}>@TrxModX21</p>
              </div>
              <div className={styles.infoArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>

            {/* LinkedIn Card */}
            <Link 
              href="https://id.linkedin.com/in/teukurizky21" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.infoCard}
              style={{ 
                opacity: inView ? 1 : 0, 
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: "all 500ms ease-out 400ms"
              }}
            >
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoLabel}>LinkedIn Network</h3>
                <p className={styles.infoValue}>/in/teukurizky21</p>
              </div>
              <div className={styles.infoArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>

          </div>

          {/* ── Terminal Form ── */}
          <div 
            className={styles.formContainer}
            style={{ 
              opacity: inView ? 1 : 0, 
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "all 600ms ease-out 500ms"
            }}
          >
            {/* Window header */}
            <div className={styles.formHeader}>
              <div className={styles.windowControls}>
                <span className={styles.controlClose}></span>
                <span className={styles.controlMin}></span>
                <span className={styles.controlMax}></span>
              </div>
              <div className={styles.windowTitle}>transmit_data.exe</div>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} className={styles.formBody}>
              
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>
                  <span className={styles.prompt}>&#62;</span> Set Name:
                </label>
                <div className={styles.inputWrapper}>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input} 
                    placeholder="Enter designation..."
                    required
                    disabled={isSubmitting}
                  />
                  <div className={styles.inputFocusLine}></div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>
                  <span className={styles.prompt}>&#62;</span> Set Email:
                </label>
                <div className={styles.inputWrapper}>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input} 
                    placeholder="Enter commlink..."
                    required
                    disabled={isSubmitting}
                  />
                  <div className={styles.inputFocusLine}></div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.inputLabel}>
                  <span className={styles.prompt}>&#62;</span> Set Message:
                </label>
                <div className={styles.inputWrapper}>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.textarea} 
                    placeholder="Enter payload data..."
                    rows={4}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  <div className={styles.inputFocusLine}></div>
                </div>
              </div>

              <div className={styles.formFooter}>
                {submitStatus === "success" ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon}>✓</span>
                    <span className={styles.successText}>Payload transmitted successfully.</span>
                  </div>
                ) : (
                  <button 
                    type="submit" 
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.btnText}>Encrypting...</span>
                    ) : (
                      <>
                        <span className={styles.btnText}>INITIATE TRANSFER</span>
                        <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
