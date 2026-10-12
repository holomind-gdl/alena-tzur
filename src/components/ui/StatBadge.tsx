"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function StatBadge({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: isMobile ? 0.3 : 0.5,
        delay: isMobile ? 0 : index * 0.1,
      }}
    >
      <p className="font-sans text-3xl lg:text-4xl font-semibold text-text-primary leading-none tabular-nums text-balance">
        {value}
      </p>
      <p className="text-sm text-text-secondary mt-2">{label}</p>
    </motion.div>
  );
}
