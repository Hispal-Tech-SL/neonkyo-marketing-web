import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es Neonkyo Studio?",
    answer:
      'Neonkyo Studio es la primera agencia de publicidad 100% digital del mundo, con raíces en la visión japonesa futurista de "Capital de neón" (Neonkyo: NEONネオン + KYO京). Operamos internacionalmente con más de 15 años de experiencia, usando IA entrenada internamente para entregar logos profesionales y estrategias personalizadas que posicionan marcas en cualquier mercado global.',
  },
  {
    question: "¿Qué servicios ofrece Neonkyo Studio?",
    answer:
      "Ofrecemos servicios integrales de agencia publicidad: diseño de logos profesionales, naming, claims, identidades visuales completas con manuales y análisis de mercado vía IA. Creamos paquetes únicos para proyectos globales, desde auditorías iniciales hasta campañas omnicanal, adaptados a presupuestos y objetivos internacionales.",
  },
  {
    question: "¿En qué se especializa Neonkyo Studio?",
    answer:
      "Nos especializamos en desarrollo de marcas y proyectos nuevos, detectando oportunidades con precisión quirúrgica gracias a nuestra IA propia. Fusionamos innovación tecnológica japonesa con métodos tradicionales para logos profesionales y arquitecturas coherentes que escalan mundialmente.",
  },
  {
    question: '¿Qué hace único nuestro enfoque "AI Powered"?',
    answer:
      "Pioneros globales, entrenamos modelos de IA de última generación para estrategias predictivas y logos profesionales que analizan audiencias en tiempo real. Esto genera resultados sobrehumanos con un trato cercano, permitiendo colaboraciones fluidas con clientes de cualquier país.",
  },
  {
    question: "¿Por qué Neonkyo Studio es 100% digital?",
    answer:
      "Nuestro modelo íntegramente digital con teletrabajo y citas telemáticas habilita respuestas inmediatas para clientes internacionales. Aceleramos diseños de logos profesionales y validaciones en entornos virtuales, eliminando barreras geográficas para eficiencia global.",
  },
  {
    question: "¿Cuál es la inspiración japonesa de Neonkyo Studio?",
    answer:
      'De Japón tomamos la fusión de neón vanguardista y perfección meticulosa, creando logos profesionales impactantes y marcas eternamente relevantes. Representamos "el futuro de la publicidad" (広告の未来), adaptando calidad artesanal a la era digital para audiencias mundiales.',
  },
  {
    question: "¿Por qué es clave un logo profesional para tu marca?",
    answer:
      "Un logo profesional construye reconocimiento emocional instantáneo, posiciona valores top-of-mind y fomenta lealtad global en mercados saturados. Transforma conceptos en iconos perdurables, soportando precios premium y crecimiento internacional como los maestros japoneses.",
  },
  {
    question: "¿Cuáles son los beneficios de un logo profesional con Neonkyo?",
    answer:
      "Nuestros logos profesionales elevan el reconocimiento un 70%, multiplican ventas y valor percibido mientras alinean equipos globales. Atraen talento top y facilitan expansiones, con métricas claras como NPS para impacto medible en cualquier región.",
  },
  {
    question: "¿Cómo beneficia la IA de Neonkyo en logos profesionales?",
    answer:
      "Nuestra IA analiza datos masivos para optimizar logos profesionales con resonancia cultural precisa, simulando campañas para conversiones un 40% superiores. Perfecto para startups globales o revitalizaciones, asegura alineación total con tu visión internacional.",
  },
  {
    question:
      "¿Por qué elegir Neonkyo Studio como agencia publicidad internacional?",
    answer:
      "Elige Neonkyo por su IA propietaria, herencia japonesa y proceso con auditorías gratuitas que desbloquean potencial global. Superamos límites tradicionales con logos profesionales y ROI medible, impulsando marcas desde cualquier punto del mundo.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            || FAQ'S
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
                  {/* Question button */}
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

                  {/* Answer */}
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
