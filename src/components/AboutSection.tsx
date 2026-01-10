const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-4 bg-[#DCE512] overflow-hidden"
      style={{
        clipPath: "polygon(0 10px, 10px 0, 20% 0, 21% 10px, 79% 10px, 80% 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 80% 100%, 79% calc(100% - 10px), 21% calc(100% - 10px), 20% 100%, 10px 100%, 0 calc(100% - 10px))"
      }}
    >
      <div className="container mx-auto max-w-4xl relative z-10">

        {/* Logo Container with Brackets */}
        <div className="relative mb-12 flex justify-center">
          <div className="relative p-8 inline-block">
            {/* Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-[3px] border-l-[3px] border-black" />
            <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-[3px] border-r-[3px] border-black" />
            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-[3px] border-l-[3px] border-black" />
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-[3px] border-r-[3px] border-black" />

            <div className="text-center px-4 md:px-8">
              <h2 className="font-japanese text-6xl md:text-8xl lg:text-9xl text-black leading-none mb-1 tracking-tighter">
                ネオン京
              </h2>
              <p className="text-3xl md:text-5xl text-black tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                neonkyo <span className="font-japanese">スタジオ</span>
              </p>
            </div>
          </div>
        </div>

        {/* Description text */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <p className="font-mono text-sm md:text-base lg:text-lg text-black leading-relaxed font-bold tracking-tight">
            Neonkyo Studio es el <span className="font-black">futuro del marketing y la publicidad</span>.
            Especialistas en el <span className="font-black">desarrollo de nuevos proyectos</span> y marcas desde cero. <span className="font-black">Gracias a nuestra IA</span>,
            ofrecemos soluciones y estrategias de comunicación extremadamente precisas y eficaces, adaptadas a las
            necesidades de cada proyecto. Somos la primera agencia de comunicación <span className="font-black">100% Digital</span> del mundo. Una
            Agencia de Publicidad originaria de Japón, con sede en España, y <span className="font-black">trabajando en todo el mundo</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-display text-2xl md:text-4xl text-black font-black mb-8 uppercase tracking-wide transform -skew-x-12">
            ¿TIENES UN PROYECTO?
          </p>
          <a
            href="#contact"
            className="inline-block px-12 md:px-16 py-3 md:py-4 bg-[#FF0000] text-white font-mono text-lg font-bold uppercase tracking-wider hover:bg-red-600 transition-all duration-300 transform -skew-x-12 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <span className="inline-block transform skew-x-12">HABLEMOS</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
