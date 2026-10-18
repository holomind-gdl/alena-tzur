import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ANIMATION } from "@/lib/constants";

export default function Modules({
  modules,
}: {
  modules: {
    id: number;
    title: string;
    lessons: number;
    description: string;
    topics: string[];
    image?: { url?: string; alt?: string } | null;
  }[] | null;
}) {
  if (!modules) return null;

  const ACCENT_COLOR_CLASSES = [
    "bg-dusty-rose-300",
    "bg-champagne-300",
    "bg-warm-taupe-300",
    "bg-dusty-rose-200",
    "bg-champagne-200",
    "bg-fresh-sky-blue-300",
  ];

  const ACCENT_TEXT_CLASSES = [
    "text-dusty-rose-300",
    "text-champagne-300",
    "text-warm-taupe-300",
    "text-dusty-rose-200",
    "text-champagne-200",
    "text-fresh-sky-blue-300",
  ];

  return (
    <Section id="modules" className="bg-surface/40">
      <SectionHeader
        eyebrow="Программа курса"
        title="6 модулей — от нуля до профессионала"
        subtitle="Каждый модуль содержит видеоуроки, схемы и практические задания. Вы получите все знания и навыки для работы косметологом."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod, index) => (
          <div
            key={mod.id}
            className="group relative rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-up"
            style={{
              animationDelay: `${index * ANIMATION.MODULE_STAGGER_DELAY}s`,
            }}
          >
            <div className={`h-1 w-full ${ACCENT_COLOR_CLASSES[index]}`} />

            <div className="p-6 lg:p-7">
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`font-serif text-3xl font-bold tabular-nums leading-none ${ACCENT_TEXT_CLASSES[index]}`}
                >
                  {String(mod.id).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold text-text-secondary bg-surface border border-border px-3 py-1 rounded-full">
                  {mod.lessons} уроков
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-text-primary mb-3 text-balance leading-snug">
                {mod.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {mod.description}
              </p>

              <a
                href="#curriculum"
                className="text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
              >
                Смотреть уроки →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}