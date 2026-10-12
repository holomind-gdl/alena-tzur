import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { results } from "@/lib/data";
import { ANIMATION } from "@/lib/constants";

export default function Results() {
  return (
    <Section id="results" className="bg-surface/40">
      <SectionHeader
        eyebrow="Результаты выпускников"
        title="Истории учеников"
        subtitle="Примеры индивидуального пути после обучения: старт, срок и результат."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <div
            key={result.name}
            className="flex flex-col rounded-2xl bg-background border border-border overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-up"
            style={{
              animationDelay: `${index * ANIMATION.STAGGER_DELAY}s`,
            }}
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-5 border-b border-border">
              <div className="flex items-center gap-3 mb-1">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-bold text-primary">
                    {result.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{result.name}</p>
                  <p className="text-xs text-text-secondary">{result.timeline}</p>
                </div>
              </div>
            </div>

            {/* Before / After */}
            <div className="px-6 py-5 flex-1 space-y-3">
              <div className="rounded-xl border border-border bg-surface-elevated p-4">
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1.5">Было</p>
                <p className="text-sm text-text-primary">{result.before}</p>
              </div>
              <div className="flex justify-center text-text-secondary text-xs">↓</div>
              <div className="rounded-xl border border-medical-light bg-medical-light p-4">
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-medical-dark">Стало</p>
                <p className="text-sm font-semibold text-text-primary">{result.after}</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="px-6 pb-6 text-sm text-text-secondary italic border-t border-border pt-4">
              &ldquo;{result.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-text-secondary">
        Имена изменены. Указанные доходы и сроки — индивидуальные примеры,
        не гарантирующие аналогичных результатов. Подробные кейсы доступны
        по запросу с согласия участников.
      </p>
    </Section>
  );
}
