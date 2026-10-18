"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import PriceCard from "@/components/ui/PriceCard";

export default function Pricing({
  pricing,
}: {
  pricing: {
    id: string;
    name: string;
    price: string;
    oldPrice?: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  }[] | null;
}) {
  if (!pricing) return null;

  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Цены"
        title="Выберите подходящий формат"
        subtitle="Три тарифа — от базового доступа к материалам до персонального менторства под ключ."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3 items-stretch">
        {pricing.map((plan, index) => (
          <PriceCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            oldPrice={plan.oldPrice}
            description={plan.description}
            features={plan.features}
            cta={plan.cta}
            popular={plan.popular}
            index={index}
            className={
              index === pricing.length - 1
                ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.75rem)] xl:col-span-1 xl:max-w-none"
                : ""
            }
          />
        ))}
      </div>

      <p className="text-center text-sm text-text-secondary mt-8">
        🛡️ 14 дней на возврат средств без вопросов · Рассрочка 0% на 3 и 6 месяцев
      </p>
    </Section>
  );
}
