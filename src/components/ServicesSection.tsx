const services = [
  {
    icon: "ESPECIALISTAS",
    title: "ESPECIALISTAS",
    description: (
      <>
        Nuestra agencia está
        <br />
        especializada en branding y<br />
        desarrollo de marcas,
        <br />
        ofreciendo asesoramiento de
        <br />
        alto nivel para todo tipo de
        <br />
        proyectos.
      </>
    ),
    label: "SPECIALIST",
  },
  {
    icon: "100% DIGITAL",
    title: "100% DIGITAL",
    description: (
      <>
        Apostamos por un modelo de negocio íntegramente digital. Si bien
        contamos con sede física, optamos por un modelo de teletrabajo y citas
        telemáticas.
      </>
    ),
    label: "DIGITAL",
  },
  {
    icon: "AI POWERED",
    title: "AI POWERED",
    description: (
      <>
        Entrenamos nuestros propios modelos de Inteligencia Artificial de última
        generación y los utilizamos para desarrollar estrategias avanzadas de
        comunicación.
      </>
    ),
    label: "AI POWERED",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 bg-black overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-left mb-24 pl-4 md:pl-0">
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4 italic leading-none transform -skew-x-6">
            || SOMOS LO QUE NECESITAS
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative px-4 md:px-0 flex flex-col h-full"
            >
              {/* Icon Container with Brackets */}
              <div className="relative w-32 h-32 mb-10 mx-auto md:mx-0 flex-shrink-0">
                {/* Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-primary" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-primary" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-primary" />

                {/* Small Label - Two lines */}
                <div className="absolute -top-1 -right-6 transform translate-x-full">
                  <div className="flex flex-col items-start">
                    <span className="font-mono text-[10px] text-white uppercase tracking-wider leading-none mb-1">
                      {service.label}
                    </span>
                    <span className="font-mono text-[10px] text-white uppercase tracking-wider leading-none">
                      &lt;&lt;
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {index === 0 && (
                    <img
                      src="/assets/icons/Grupo 263.svg"
                      alt="Specialists"
                      className="w-full h-full object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(84%) sepia(35%) saturate(836%) hue-rotate(1deg) brightness(108%) contrast(105%)",
                      }}
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="/assets/icons/Grupo 264.svg"
                      alt="100% Digital"
                      className="w-full h-full object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(84%) sepia(35%) saturate(836%) hue-rotate(1deg) brightness(108%) contrast(105%)",
                      }}
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="/assets/icons/Grupo 265.svg"
                      alt="AI Powered"
                      className="w-full h-full object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(84%) sepia(35%) saturate(836%) hue-rotate(1deg) brightness(108%) contrast(105%)",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Title - Counter-skewed to make it straight */}
              <h3 className="font-display text-2xl md:text-3xl text-primary mb-6 uppercase font-bold tracking-wide text-center md:text-left flex-shrink-0 transform -skew-x-12 md:-skew-x-12">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-white/90 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0 text-center md:text-left flex-grow">
                {service.description}
              </p>

              {/* CTA Button - Pushed to bottom */}
              <div className="text-center md:text-left mt-auto">
                <a
                  href="#contact"
                  className="inline-block w-full md:w-auto min-w-[200px] px-8 py-3 bg-[#FF0000] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-all duration-300 transform -skew-x-12 text-center"
                >
                  <span className="inline-block transform skew-x-12">
                    SABER MÁS
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
