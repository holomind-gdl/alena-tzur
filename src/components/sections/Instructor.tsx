import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function Instructor({
  instructor,
}: {
  instructor: {
    name: string;
    title: string;
    bio: string;
    credentials: string[];
    stats: { value: string; label: string }[];
    image?: { url?: string; alt?: string } | null;
  } | null;
}) {
  if (!instructor) return null;

  return (
    <Section id="instructor">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="max-w-sm mx-auto w-full lg:mx-0">
          <figure>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-surface">
              {instructor.image?.url ? (
                <OptimizedImage
                  src={instructor.image.url}
                  alt={instructor.image.alt || instructor.name}
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <OptimizedImage
                  src="/images/cosmetology-facial-unsplash.jpg"
                  alt="Клиентка проходит уходовую процедуру для лица"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
              )}
            </div>
            <figcaption className="mt-3 text-xs text-text-secondary">
              {instructor.image?.url ? (
                <span>Фото преподавателя</span>
              ) : (
                <>
                  Иллюстративное фото процедуры ·{" "}
                  <a
                    href="https://unsplash.com/photos/woman-lying-on-blue-towel-with-white-cream-on-face-g-m8EDc4X6Q"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    engin akyurt / Unsplash
                  </a>
                </>
              )}
            </figcaption>
            {!instructor.image?.url && (
              <p className="mt-1 text-xs text-text-secondary">
                Фото преподавателя можно добавить в Sanity Studio.
              </p>
            )}
          </figure>
        </div>

        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-4">
            Преподаватель
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary mb-4 text-balance">
            {instructor.name}
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed text-lg">
            {instructor.bio}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {instructor.stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-surface border border-border p-5">
                <p className="font-serif text-3xl font-bold text-text-primary leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

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
