import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { brand, email, phone, location } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-text-secondary mb-6 max-w-xs">
              Онлайн-обучение косметологии и профессиям индустрии красоты для начинающих.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary mb-4">Курс</p>
            <ul className="space-y-3">
              {[
                { label: "Программа", href: "#modules" },
                { label: "Уроки", href: "#curriculum" },
                { label: "Цены", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary mb-4">О нас</p>
            <ul className="space-y-3">
              {[
                { label: "Преподаватель", href: "#instructor" },
                { label: "Результаты", href: "#results" },
                { label: "Отзывы", href: "#results" },
                { label: "Контакты", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary mb-4">Контакты</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin className="h-4 w-4" />
                  {location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © 2026 {brand}. Все права защищены.
          </p>
          <a
            href="/privacy"
            className="text-sm text-text-secondary hover:text-primary transition-colors underline underline-offset-2"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
