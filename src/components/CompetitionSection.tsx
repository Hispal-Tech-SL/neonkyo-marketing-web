const CompetitionSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/icons/Cuadrícula de repetición 4.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main text */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl text-primary italic leading-tight mb-4">
            NO TENEMOS COMPETENCIA,
          </h2>
          <h3 className="font-display text-3xl md:text-5xl lg:text-7xl text-white italic leading-tight">
            TAMPOCO LA NECESITAMOS
          </h3>
        </div>

        {/* Decorative element */}
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 relative">
            <img
              src="/assets/icons/Grupo 266.svg"
              alt="Decorative element"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
