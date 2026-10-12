"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { CheckCircle2 } from "lucide-react";

interface PriceCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  index: number;
  className?: string;
  ctaClassName?: string;
  style?: React.CSSProperties;
}

export default function PriceCard({
  name,
  price,
  oldPrice,
  description,
  features,
  cta,
  popular = false,
  index,
  className = "",
  ctaClassName,
  style,
}: PriceCardProps) {
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
      style={style}
      className={`relative flex flex-col overflow-hidden rounded-3xl p-6 lg:p-8 border transition-all duration-300 ${
        popular
          ? "bg-surface border-primary/50 shadow-xl shadow-primary/10"
          : "bg-surface border-border hover:border-text-primary/30 hover:shadow-md"
      } ${className}`}
    >
      {popular && (
        <div className="bg-text-primary text-background text-xs font-bold text-center py-2 tracking-widest uppercase">
          ✦ Популярный выбор
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{name}</p>
        <p className="text-sm text-text-secondary mb-6">{description}</p>
        <div className="flex items-baseline gap-2 mb-8">
          <p className="font-serif text-5xl font-bold text-text-primary leading-none">{price}</p>
          {oldPrice && (
            <p className="text-sm text-text-secondary line-through">{oldPrice}</p>
          )}
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-text-primary">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`block w-full rounded-full px-6 py-3.5 text-sm font-bold text-center transition-all min-h-12 ${
            ctaClassName ||
            (popular
              ? "bg-text-primary text-background hover:bg-secondary"
              : "border-2 border-border text-text-primary hover:border-text-primary")
          }`}
        >
          {cta}
        </a>
      </div>
    </motion.div>
  );
}
