export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 lg:mb-16 max-w-2xl ${className}`}>
      <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-4">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5 text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
