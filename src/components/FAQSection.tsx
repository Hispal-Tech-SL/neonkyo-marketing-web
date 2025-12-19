import { useState } from "react";

const faqs = [
  {
    question: "¿WHAT IS AN ADVERTISING AGENCY?",
    answer: "NEONKYO Studio is the future of advertising and communication strategy. The first 100% Digital Agency in the world. Powered by AI, we can offer an extremely accurate and effective marketing strategy due to your needs. An Advertising Agency from Japan, based in Spain, and working worldwide."
  },
  {
    question: "¿WHY DO I NEED AN ADVERTISING AGENCY?",
    answer: "NEONKYO Studio is the future of advertising and communication strategy. The first 100% Digital Agency in the world. Powered by AI, we can offer an extremely accurate and effective marketing strategy due to your needs. An Advertising Agency from Japan, based in Spain, and working worldwide."
  },
  {
    question: "¿WHAT IS AN ADVERTISING AGENCY?",
    answer: "NEONKYO Studio is the future of advertising and communication strategy. The first 100% Digital Agency in the world. Powered by AI, we can offer an extremely accurate and effective marketing strategy due to your needs. An Advertising Agency from Japan, based in Spain, and working worldwide."
  },
  {
    question: "¿WHAT IS AN ADVERTISING AGENCY?",
    answer: "NEONKYO Studio is the future of advertising and communication strategy. The first 100% Digital Agency in the world. Powered by AI, we can offer an extremely accurate and effective marketing strategy due to your needs. An Advertising Agency from Japan, based in Spain, and working worldwide."
  },
  {
    question: "¿WHAT IS AN ADVERTISING AGENCY?",
    answer: "NEONKYO Studio is the future of advertising and communication strategy. The first 100% Digital Agency in the world. Powered by AI, we can offer an extremely accurate and effective marketing strategy due to your needs. An Advertising Agency from Japan, based in Spain, and working worldwide."
  },
  {
    question: "¿WHAT IS AN ADVERTISING AGENCY?",
    answer: "NEONKYO Studio is the future of advertising and communication strategy. The first 100% Digital Agency in the world. Powered by AI, we can offer an extremely accurate and effective marketing strategy due to your needs. An Advertising Agency from Japan, based in Spain, and working worldwide."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 md:py-32 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            || FAQ'S
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-primary bg-black overflow-hidden transition-all duration-300"
            >
              {/* Question button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-mono text-sm md:text-base text-primary uppercase">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <img
                      src="/assets/icons/-.svg"
                      alt="Collapse"
                      className="w-6 h-6"
                    />
                  ) : (
                    <img
                      src="/assets/icons/+ V2.svg"
                      alt="Expand"
                      className="w-6 h-6"
                    />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="font-mono text-sm text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
