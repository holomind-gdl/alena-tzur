"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ANIMATION, VIEWPORT } from "@/lib/constants";

export default function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const variants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section
      id={id}
      className={`section relative py-14 lg:py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT.SECTION_MARGIN }}
      variants={variants}
      transition={{
        duration: isMobile ? ANIMATION.SECTION_DURATION_MOBILE : ANIMATION.SECTION_DURATION_DESKTOP,
        ease: isMobile ? ANIMATION.EASE_MOBILE : ANIMATION.EASE_SMOOTH,
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </motion.section>
  );
}
