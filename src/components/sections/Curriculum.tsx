"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";

export default function Curriculum({
  modules,
}: {
  modules: {
    id: number;
    title: string;
    lessons: number;
    description: string;
    topics: string[];
  }[] | null;
}) {
  const [expanded, setExpanded] = useState<Set<number>>(() =>
    new Set(modules?.length ?? 0 > 0 ? [modules![0].id] : [])
  );

  const toggle = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (!modules) return null;

  return (
    <Section id="curriculum" className="bg-surface-elevated/50">
      <SectionHeader
        eyebrow="Уроки"
        title="Программа по модулям"
        subtitle="Раскройте модуль, чтобы увидеть его уроки. В программе 6 модулей и 48 уроков."
      />

      <div className="space-y-4">
        {modules.map((module) => {
          const isOpen = expanded.has(module.id);
          const panelId = `curriculum-module-${module.id}`;
          return (
            <div
              key={module.id}
              className="rounded-xl bg-surface border border-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(module.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated text-primary font-bold text-sm">
                    {String(module.id).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-text-primary text-base">
                      {module.title}
                    </p>
                    <p className="mt-0.5 text-sm text-text-secondary">
                      {module.lessons} тем · {module.description}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-text-secondary transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div id={panelId} className="border-t border-border px-5 py-5 sm:px-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                    Темы модуля
                  </p>
                  <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {module.topics.map((topic, index) => (
                      <li key={topic} className="flex gap-3 text-sm leading-relaxed text-text-primary">
                        <span aria-hidden="true" className="shrink-0 font-medium text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
