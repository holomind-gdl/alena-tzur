"use client";

import { useState } from "react";
import { Send, Check, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import { email, phone } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка отправки");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Неизвестная ошибка");
    }
  };

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── LEFT ── */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-4">Записаться</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary mb-5 text-balance leading-tight">
            Начните новую профессию
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            Оставьте заявку — мы свяжемся в течение 2 рабочих дней. Бесплатная консультация по программе и условиям.
          </p>

          {/* Benefits */}
          <ul className="space-y-4 mb-10">
            {[
              "Бесплатный звонок с разбором вашей ситуации",
              "Индивидуальный план обучения",
              "Помощь с трудоустройством после курса",
              "14 дней на возврат средств без вопросов",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-text-primary">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Contact info */}
          <div className="space-y-3 pt-8 border-t border-border">
            <a href={`tel:${phone}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" />
              {phone}
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              {email}
            </a>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-3xl border border-border p-8 lg:p-10"
          noValidate
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">Заявка отправлена!</h3>
              <p className="text-sm text-text-secondary">Мы свяжемся с вами в течение 2 рабочих дней.</p>
            </div>
          ) : (
            <>
              {status === "error" && (
                <div role="alert" className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
                  <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-text-primary mb-6">Оставить заявку</h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Имя *</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      className="input-base"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email *</label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="input-base"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Телефон</label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+972 50 123 4567"
                    className="input-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Расскажите о себе</label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Хочу записаться на курс..."
                    className="input-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-text-primary text-background px-8 py-4 text-sm font-bold hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-13"
                >
                  {status === "loading" ? "Отправка..." : (
                    <><Send className="h-4 w-4" />Отправить заявку</>
                  )}
                </button>

                <p className="text-xs text-text-secondary text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </Section>
  );
}
