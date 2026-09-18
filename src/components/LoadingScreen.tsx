"use client";

import { useEffect, useState } from "react";
import { DatalinesWithGrid } from "./neonblade-ui/datalines-with-grid";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "[ INITIALIZING SYSTEM... ]",
    "[ ESTABLISHING SECURE CONNECTION... ]",
    "[ DECRYPTING ASSETS... ]",
    "[ LOADING NEURAL INTERFACE... ]",
    "[ ACCESS GRANTED ]",
  ];

  useEffect(() => {
    // Sequence the loading text
    let interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < texts.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 800); // 800ms per text line

    // After the sequence is done (approx 4.5 seconds), finish loading
    const finishTimeout = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, [texts.length]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <DatalinesWithGrid lineColor="#54EAFD" shadowColor="#54EAFD" overlay={true} />
        <div className={styles.loadingContent}>
          <div className={styles.loadingText} data-text={texts[textIndex]}>
            {texts[textIndex]}
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
