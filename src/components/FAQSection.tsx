import { useState } from "react";
import { useI18n } from "@/i18n/i18n";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();
  const faqs = t("faqs.items");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two balanced columns
  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <section
      id="faqs"
      className="relative py-24 md:py-32 px-4 bg-black overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-[5rem] text-white italic transform -skew-x-6 font-light">
            {t("faqs.title")}
          </h2>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {leftFaqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-6">
                {/* Question button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between text-left group"
                >
                  <span className="font-mono text-sm md:text-base text-white uppercase tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <rect
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          fill="hsl(var(--primary))"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <rect
                          x="11"
                          y="4"
                          width="2"
                          height="16"
                          fill="hsl(var(--primary))"
                        />
                        <rect
                          x="4"
                          y="11"
                          width="16"
                          height="2"
                          fill="hsl(var(--primary))"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="mt-4 pr-8">
                    <p className="font-mono text-xs md:text-sm text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightFaqs.map((faq, index) => {
              const actualIndex = index + mid;
              return (
                <div
                  key={actualIndex}
                  className="border-b border-white/20 pb-6"
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full flex items-start justify-between text-left group"
                  >
                    <span className="font-mono text-sm md:text-base text-white uppercase tracking-wide pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === actualIndex ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-6 h-6"
                        >
                          <rect
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            fill="hsl(var(--primary))"
                          />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-6 h-6"
                        >
                          <rect
                            x="11"
                            y="4"
                            width="2"
                            height="16"
                            fill="hsl(var(--primary))"
                          />
                          <rect
                            x="4"
                            y="11"
                            width="16"
                            height="2"
                            fill="hsl(var(--primary))"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {openIndex === actualIndex && (
                    <div className="mt-4 pr-8">
                      <p className="font-mono text-xs md:text-sm text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
