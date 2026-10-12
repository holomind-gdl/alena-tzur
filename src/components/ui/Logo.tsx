export default function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const s = {
    sm: { icon: 28, text: "text-base" },
    md: { icon: 40, text: "text-xl" },
  }[size];

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="flex items-center justify-center rounded-xl bg-primary text-text-primary"
        style={{ width: s.icon, height: s.icon, fontSize: s.icon * 0.5 }}
      >
        A
      </span>
      <span className={`${s.text} font-bold text-text-primary tracking-tight`}>
        Alena<span className="text-primary">Tzur</span>
      </span>
    </span>
  );
}
