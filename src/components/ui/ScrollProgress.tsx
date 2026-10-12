"use client";

import { useEffect, useState } from "react";
import { SCROLL_PROGRESS } from "@/lib/constants";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 origin-left bg-gradient-to-r from-primary to-accent"
      aria-hidden="true"
      style={{
        height: `${SCROLL_PROGRESS.HEIGHT}px`,
        zIndex: SCROLL_PROGRESS.Z_INDEX,
        transform: `scaleX(${progress / 100})`,
      }}
    />
  );
}