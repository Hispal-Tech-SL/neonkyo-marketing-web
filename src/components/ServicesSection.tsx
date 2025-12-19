const services = [
  {
    icon: "ESPECIALISTAS",
    title: "ESPECIALISTAS",
    description: "Nuestra agencia está especializada en branding y desarrollo de marcas, ofreciendo asesoramiento de alto nivel para todo tipo de proyectos.",
    label: "SPECIALIST"
  },
  {
    icon: "100% DIGITAL",
    title: "100% DIGITAL",
    description: "Apostamos por un modelo de negocio íntegramente digital. Si bien contamos con sede física, optamos por un modelo de teletrabajo y citas telemáticas.",
    label: "DIGITAL"
  },
  {
    icon: "AI POWERED",
    title: "AI POWERED",
    description: "Entrenamos nuestros propios modelos de Inteligencia Artificial de última generación y los utilizamos para desarrollar estrategias avanzadas de comunicación.",
    label: "AI POWERED"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            || SOMOS LO QUE NECESITAS
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-black border-2 border-primary hover:border-primary/80 transition-all duration-300"
            >
              {/* Decorative brackets */}
              <div className="flex items-center justify-center mb-6">
                <span className="text-primary text-2xl">┌</span>
                <div className="mx-4">
                  {/* Icon using SVG from assets */}
                  {index === 0 && (
                    <img
                      src="/assets/icons/Grupo 263.svg"
                      alt="Specialists"
                      className="w-16 h-16 mx-auto"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="/assets/icons/Grupo 264.svg"
                      alt="100% Digital"
                      className="w-16 h-16 mx-auto"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="/assets/icons/Grupo 265.svg"
                      alt="AI Powered"
                      className="w-16 h-16 mx-auto"
                    />
                  )}
                </div>
                <span className="text-primary text-2xl">┐</span>
              </div>

              {/* Title */}
              <h3 className="font-mono text-xl text-primary mb-4 text-center uppercase">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-white/80 leading-relaxed mb-6 text-center">
                {service.description}
              </p>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 bg-accent text-white font-mono text-sm uppercase hover:bg-accent/90 transition-all duration-300"
                >
                  SABER MÁS
                </a>
              </div>

              {/* Bottom brackets */}
              <div className="flex items-center justify-center mt-6">
                <span className="text-primary text-2xl">└</span>
                <span className="font-mono text-xs text-primary/60 mx-4 uppercase">
                  &lt;&lt; {service.label} &gt;&gt;
                </span>
                <span className="text-primary text-2xl">┘</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
