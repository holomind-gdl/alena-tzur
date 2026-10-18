"use client";

import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import { CheckCircle2, X } from "lucide-react";
import { instructor } from "@/lib/data";
import OptimizedImage from "@/components/ui/OptimizedImage";

const instructorImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-15%20at%2011.40.43-jZD4sh5bh0Se1u9w0Wr9U78tRQbP63.png";

export default function Instructor() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsImageOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageOpen]);

  return (
    <Section id="instructor">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Course image ── */}
        <div className="hidden lg:order-1 lg:block max-w-sm mx-auto w-full lg:mx-0">
          <figure>
            <button
              type="button"
              className="relative block aspect-4/3 w-full overflow-hidden rounded-3xl bg-surface cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => setIsImageOpen(true)}
              aria-label="Открыть фото преподавателя"
            >
              <OptimizedImage
                src={instructorImage}
                alt="Преподаватель выполняет уходовую процедуру для лица"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover"
              />
            </button>
            <figcaption className="mt-3 text-xs text-text-secondary">
              Фото преподавателя ·{" "}
              <a
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-15%20at%2011.40.43-jZD4sh5bh0Se1u9w0Wr9U78tRQbP63.png"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Источник изображения
              </a>
            </figcaption>
            
          </figure>
        </div>

        {/* ── RIGHT: Info ── */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-4">Преподаватель</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary mb-4 text-balance">
            {instructor.name}
          </h2>

          <div className="lg:hidden max-w-sm mb-8">
            <figure>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-surface">
                <OptimizedImage
                  src={instructorImage}
                  alt="Преподаватель выполняет уходовую процедуру для лица"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-text-secondary">
                Фото преподавателя · Алёна тур
              </figcaption>

            </figure>
          </div>

          <p className="text-text-secondary mb-8 leading-relaxed text-lg">{instructor.bio}</p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {instructor.stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-surface border border-border p-5">
                <p className="font-serif text-3xl font-bold text-text-primary leading-none">{stat.value}</p>
                <p className="text-sm text-text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <ul className="space-y-3">
            {instructor.credentials.map((cred, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-primary">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {cred}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Фото преподавателя"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full p-2 text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Закрыть фото"
            onClick={() => setIsImageOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={instructorImage}
            alt="Преподаватель выполняет уходовую процедуру для лица"
            className="max-h-[calc(100vh-2rem)] max-w-full object-contain"
          />
        </div>
      )}
    </Section>
  );
}
