"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQItem from "@/components/ui/FAQItem";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function FAQ({
  faqs,
}: {
  faqs: {
    question: string;
    answer: string;
  }[] | null;
}) {
  const isMobile = useIsMobile();

  if (!faqs) return null;

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Частые вопросы"
        subtitle="Ответы на самые популярные вопросы о курсе"
      />

      <div
        className="max-w-3xl mx-auto animate-fade-up"
        style={{
          opacity: isMobile ? 1 : 0,
          animationFillMode: isMobile ? "none" : "forwards",
        }}
      >
        {faqs.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Section>
  );
}