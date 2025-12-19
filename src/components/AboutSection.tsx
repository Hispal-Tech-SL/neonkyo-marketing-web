const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-4 bg-primary overflow-hidden"
    >
      {/* Large kanji background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="font-japanese text-[30rem] md:text-[40rem] lg:text-[50rem] text-black leading-none select-none">
          ネオ京
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Kanji logo with brackets */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-black text-4xl md:text-5xl">┌</span>
          <h2 className="font-japanese text-6xl md:text-8xl lg:text-9xl text-black mx-4">
            ネオ京
          </h2>
          <span className="text-black text-4xl md:text-5xl">┐</span>
        </div>

        <div className="flex items-center justify-center mb-12">
          <span className="text-black text-4xl md:text-5xl">└</span>
          <p className="font-display text-2xl md:text-3xl text-black mx-4">
            neonkyo スタジオ
          </p>
          <span className="text-black text-4xl md:text-5xl">┘</span>
        </div>

        {/* Description text */}
        <div className="text-center space-y-6">
          <p className="font-mono text-sm md:text-base text-black leading-relaxed">
            Neonkyo Studio es el futuro del marketing y la
            publicidad. Especialistas en el desarrollo de nuevos
            proyectos y marcas desde cero. Gracias a nuestra IA,
            ofrecemos soluciones y estrategias de comunicación
            extremadamente precisas y eficaces, adaptadas a las
            necesidades de cada proyecto. Somos la primera
            agencia de comunicación 100% Digital del mundo. Una
            Agencia de Publicidad originaria de Japón, con sede
            en España, y trabajando en todo el mundo.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-mono text-lg md:text-xl text-black font-bold mb-6">
            ¿TIENES UN PROYECTO?
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-accent text-white font-mono uppercase tracking-wider hover:bg-accent/90 transition-all duration-300"
          >
            HABLEMOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
