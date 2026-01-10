const CompetitionSection = () => {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: '#3D3D1F' }}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />

      {/* Top yellow line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />

      {/* Bottom yellow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />

      {/* Double white bars - positioned to overpass the top yellow line on the right */}
      <div className="absolute top-0 -translate-y-1/3 right-12 md:right-24 lg:right-32 flex gap-3 md:gap-4">
        <div className="w-8 h-20 md:w-12 md:h-28 lg:w-14 lg:h-32 bg-white transform skew-x-12" />
        <div className="w-8 h-20 md:w-12 md:h-28 lg:w-14 lg:h-32 bg-white transform skew-x-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main text - left aligned using font-display which is Seriguela italic */}
        <div className="text-left pl-4 md:pl-16 lg:pl-24">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary leading-none italic" style={{ fontWeight: 100 }}>
            NO TENEMOS COMPETENCIA,
          </h2>
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-none italic mt-1 md:mt-2 pl-12 md:pl-24 lg:pl-32" style={{ fontWeight: 100 }}>
            TAMPOCO LA NECESITAMOS
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
