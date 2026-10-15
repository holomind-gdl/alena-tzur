import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { instructor } from "@/lib/data";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Instructor() {
  return (
    <Section id="instructor">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Course image ── */}
        <div className="hidden lg:order-1 lg:block max-w-sm mx-auto w-full lg:mx-0">
          <figure>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-surface">
              <OptimizedImage
                src="/images/cosmetology-facial-unsplash.jpg"
                alt="Клиентка проходит уходовую процедуру для лица"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-text-secondary">
              Иллюстративное фото процедуры ·{" "}
              <a
                href="https://unsplash.com/photos/woman-lying-on-blue-towel-with-white-cream-on-face-g-m8EDc4X6Q"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                engin akyurt / Unsplash
              </a>
            </figcaption>
            <p className="mt-1 text-xs text-text-secondary">
              Фото преподавателя в материалах проекта отсутствует.
            </p>
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
                  src="/images/cosmetology-facial-unsplash.jpg"
                  alt="Клиентка проходит уходовую процедуру для лица"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-text-secondary">
                Иллюстративное фото процедуры ·{" "}
                <a
                  href="https://unsplash.com/photos/woman-lying-on-blue-towel-with-white-cream-on-face-g-m8EDc4X6Q"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  engin akyurt / Unsplash
                </a>
              </figcaption>
              <p className="mt-1 text-xs text-text-secondary">
                Фото преподавателя в материалах проекта отсутствует.
              </p>
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
    </Section>
  );
}
