"use client";

import { useEffect, useState } from "react";
import {
  Accessibility,
  Check,
  Eye,
  Focus,
  Link2,
  Minus,
  Plus,
  RotateCcw,
  TextCursorInput,
  X,
} from "lucide-react";

const DEFAULT_SETTINGS = {
  contrast: false,
  grayscale: false,
  underlineLinks: false,
  reducedMotion: false,
  fontScale: 1,
};

type Settings = typeof DEFAULT_SETTINGS;

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("accessibility-high-contrast", settings.contrast);
    root.classList.toggle("accessibility-grayscale", settings.grayscale);
    root.classList.toggle("accessibility-underline-links", settings.underlineLinks);
    root.classList.toggle("accessibility-reduced-motion", settings.reducedMotion);
    root.style.setProperty("--accessibility-font-scale", String(settings.fontScale));

    return () => {
      root.classList.remove(
        "accessibility-high-contrast",
        "accessibility-grayscale",
        "accessibility-underline-links",
        "accessibility-reduced-motion",
      );
      root.style.removeProperty("--accessibility-font-scale");
    };
  }, [settings]);

  const toggle = (key: keyof Omit<Settings, "fontScale">) => {
    setSettings((current) => ({ ...current, [key]: !current[key] }));
  };

  const reset = () => setSettings(DEFAULT_SETTINGS);

  return (
    <div className="fixed bottom-5 left-5 z-50 sm:bottom-6 sm:left-6">
      {isOpen && (
        <div
          id="accessibility-panel"
          role="dialog"
          aria-label="Настройки доступности"
          className="absolute bottom-16 left-0 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-border bg-background p-4 shadow-lg"
        >
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-border pb-3">
            <div>
              <p className="font-semibold text-text-primary">Настройки доступности</p>
              <p className="text-xs text-text-secondary">Настройте отображение страницы</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть настройки доступности"
              className="rounded-md p-1.5 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              aria-pressed={settings.contrast}
              onClick={() => toggle("contrast")}
              className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span className="flex items-center gap-3"><Eye className="size-4" aria-hidden="true" />Высокий контраст</span>
              {settings.contrast && <Check className="size-4 text-primary" aria-hidden="true" />}
            </button>
            <button
              type="button"
              aria-pressed={settings.grayscale}
              onClick={() => toggle("grayscale")}
              className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span className="flex items-center gap-3"><Focus className="size-4" aria-hidden="true" />Чёрно-белый режим</span>
              {settings.grayscale && <Check className="size-4 text-primary" aria-hidden="true" />}
            </button>
            <button
              type="button"
              aria-pressed={settings.underlineLinks}
              onClick={() => toggle("underlineLinks")}
              className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span className="flex items-center gap-3"><Link2 className="size-4" aria-hidden="true" />Подчеркнуть ссылки</span>
              {settings.underlineLinks && <Check className="size-4 text-primary" aria-hidden="true" />}
            </button>
            <button
              type="button"
              aria-pressed={settings.reducedMotion}
              onClick={() => toggle("reducedMotion")}
              className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left text-sm text-text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span className="flex items-center gap-3"><TextCursorInput className="size-4" aria-hidden="true" />Уменьшить анимацию</span>
              {settings.reducedMotion && <Check className="size-4 text-primary" aria-hidden="true" />}
            </button>
          </div>

          <div className="mt-3 border-t border-border pt-3">
            <div className="flex items-center justify-between gap-2 text-sm text-text-primary">
              <span className="flex items-center gap-3"><TextCursorInput className="size-4" aria-hidden="true" />Размер текста</span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => setSettings((s) => ({ ...s, fontScale: Math.max(0.9, s.fontScale - 0.1) }))} aria-label="Уменьшить размер текста" className="rounded-md p-2 hover:bg-surface focus-visible:outline-2 focus-visible:outline-focus"><Minus className="size-3.5" aria-hidden="true" /></button>
                <span className="min-w-10 text-center" aria-live="polite">{Math.round(settings.fontScale * 100)}%</span>
                <button type="button" onClick={() => setSettings((s) => ({ ...s, fontScale: Math.min(1.3, s.fontScale + 0.1) }))} aria-label="Увеличить размер текста" className="rounded-md p-2 hover:bg-surface focus-visible:outline-2 focus-visible:outline-focus"><Plus className="size-3.5" aria-hidden="true" /></button>
              </div>
            </div>
            <button type="button" onClick={reset} className="mt-2 flex min-h-10 items-center gap-2 text-xs text-text-secondary underline-offset-2 hover:text-text-primary hover:underline focus-visible:outline-2 focus-visible:outline-focus"><RotateCcw className="size-3.5" aria-hidden="true" />Сбросить настройки</button>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="Открыть настройки доступности"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-12 items-center justify-center rounded-full border border-border bg-primary text-white shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <Accessibility className="size-6" aria-hidden="true" />
      </button>
    </div>
  );
}
