"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";
import { NAVBAR } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > NAVBAR.SCROLL_THRESHOLD);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/#top" aria-label="Home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex list-none items-center gap-6 p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Primary call to action */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex ml-auto items-center justify-center rounded-full bg-text-primary text-background px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary hover:text-background min-h-[44px] shrink-0"
        >
          Записаться
        </Link>

        {/* Mobile burger */}
        <button
          className="flex lg:hidden items-center justify-center h-10 w-10 rounded-full border border-border text-text-secondary ml-auto shrink-0"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background/98 backdrop-blur-xl transition-all duration-300 lg:hidden border-b border-border/50 ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base font-medium text-text-primary transition-colors hover:bg-surface hover:text-primary"
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              className="block rounded-full bg-text-primary text-background px-3 py-3 text-base font-semibold text-center"
              onClick={() => scrollToSection("#contact")}
            >
              Записаться
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
