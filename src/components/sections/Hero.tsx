"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { course } from "@/lib/data";
import StatBadge from "@/components/ui/StatBadge";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { ANIMATION } from "@/lib/constants";

export default function Hero() {
  const isMobile = useIsMobile();
  const anim = (delay: number) => ({
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: ANIMATION.EASE_SMOOTH },
  });

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--dusty-rose-200) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="min-w-0 max-w-xl">
            <motion.p {...anim(0)} className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-5">
              Онлайн-курс по косметологии
            </motion.p>

            <motion.h1
              {...anim(0.1)}
              className="font-serif text-[clamp(1.875rem,8vw,3rem)] sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-[1.05] text-balance"
            >
              {course.name}
            </motion.h1>

            <motion.p {...anim(0.2)} className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-10">
              {course.subtitle}
            </motion.p>

            {/* Proof pills */}
            <motion.ul {...anim(0.25)} className="flex flex-wrap gap-3 mb-10">
              {[
                "Без опыта",
                "48 видеоуроков",
                "Сертификат",
                "Поддержка ментора",
              ].map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-1.5 text-sm font-medium text-text-secondary bg-surface border border-border rounded-full px-3 py-1.5"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  {tag}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div {...anim(0.3)} className="flex flex-wrap gap-3 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary text-background px-7 py-3.5 text-sm font-bold hover:bg-secondary transition-colors min-h-12"
              >
                Записаться на курс
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border px-6 py-3.5 text-sm font-semibold text-text-primary hover:border-text-primary transition-colors min-h-12"
              >
                Смотреть программу
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div {...anim(0.4)} className="flex flex-wrap items-center gap-x-6 gap-y-5 pt-8 border-t border-border sm:gap-8">
              {course.stats.map((s, index) => (
                <StatBadge key={s.label} value={s.value} label={s.label} index={index} />
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: ANIMATION.EASE_SMOOTH, delay: 0.2 }}
            className="relative block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface lg:aspect-[4/5]">
              <OptimizedImage
                src="/images/cosmetology-treatment-unsplash.jpg"
                alt="Косметолог проводит уходовую процедуру"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/25 to-transparent p-5 pt-20 text-white sm:p-7 sm:pt-24">
                <p className="font-serif text-xl font-semibold">Практика косметологии</p>
                <p className="mt-1 text-xs text-white/90">
                  Иллюстративное фото ·{" "}
                  <a
                    href="https://unsplash.com/photos/woman-receiving-facial-mask-treatment-at-spa-Pe9IXUuC6QU"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Rosa Rafael / Unsplash
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
