const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100vh", marginTop: "0" }}
    >
      {/* Background with code pattern */}
      <div className="absolute inset-0 opacity-5 text-[8px] leading-tight overflow-hidden pointer-events-none">
        <pre className="font-mono text-primary/40 whitespace-pre">
          {`IMPORT TIME
# SIMULATED DATABASE
DATABASE = {
 "CONFIDENTIAL_INFO": "ULTRA SECRET DATA",
 "OTHER_DATA": "LESS RELEVANT INFORMATION"
}
DEF HACK_DATABASE():
 PRINT("ACCESSING THE DATABASE...")
 TIME.SLEEP(2)
 PRINT("ESTABLISHING SECURE CONNECTION...")
 TIME.SLEEP(2)
 PRINT("BYPASSING FIREWALLS...")
 TIME.SLEEP(3)`}
        </pre>
      </div>

      {/* Top left corner icon */}
      <div className="absolute top-2 left-4 md:left-8 text-primary text-5xl md:text-6xl font-bold z-50 leading-none">
        京
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden relative z-10 w-full h-full flex flex-col">
        {/* Hero image - centered, anchored to bottom, very large */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/images/hero-image.png"
            alt="Neonkyo Studio - Cyborg"
            className="w-full h-full object-cover object-center z-10"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 pt-3 pb-4">
          {/* Top section */}
          <div className="flex justify-end">
            {/* Top info text - right aligned */}
            <div className="text-right">
              <p className="font-mono text-[6px] text-white/50 leading-tight tracking-widest">
                &gt;&gt;
                <br />
                REV 06.24
                <br />
                ADVERTISING SERVICES NEONKYO STUDIO
                <br />
                EU-ES VERSION
                <br />
                AI POWERED
              </p>
            </div>
          </div>

          {/* Center area - Logo positioned */}
          <div className="absolute top-12 right-2 z-40 pointer-events-none">
            <div className="relative">
              <div className="px-2 py-1">
                <h1
                  className="text-[85px] text-primary leading-none tracking-tight italic"
                  style={{ fontFamily: "Seriguela", fontWeight: "400" }}
                >
                  neonkyo
                </h1>
                <p className="font-japanese text-[28px] text-primary leading-none">
                  ネオン京
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-2">
            {/* Description text */}
            <div className="text-left">
              <p className="font-mono text-[6px] text-white/40 leading-relaxed tracking-widest">
                NEONKYO STUDIO ES EL FUTURO DE LA PUBLICIDAD
                <br />
                DESLIZA PARA ACCEDER...
              </p>
            </div>

            {/* Decorative text */}
            <div className="text-left">
              <p className="font-mono text-[6px] text-white/30 leading-relaxed tracking-widest">
                &lt;&lt;
              </p>
            </div>

            {/* Hero titles */}
            <div className="mb-2">
              <h2 className="font-japanese text-[42px] text-white leading-none font-bold drop-shadow-lg">
                広告の未来
              </h2>
              <h2 className="font-display text-[56px] text-white italic leading-[0.9] font-bold tracking-tight drop-shadow-lg mt-1">
                || THE FUTURE
                <br />
                OF ADVERTISING
              </h2>
            </div>

            {/* CTA Button */}
            <div className="mt-3 w-full">
              <a href="#contact" className="block">
                <div className="relative w-full h-14 rounded-full overflow-hidden border-3 border-red-600 bg-red-600/10 backdrop-blur flex items-center gap-0">
                  <div className="bg-red-600 h-full w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">›</span>
                  </div>
                  <div className="flex-1 text-center pr-4">
                    <span className="font-mono text-white text-[10px] font-bold tracking-widest">
                      ACCEDER...
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:flex relative z-10 w-full h-full">
        {/* Left side - Hero image (50%) */}
        <div className="w-1/2 h-full relative flex items-center justify-center overflow-hidden">
          <img
            src="/assets/images/hero-image.png"
            alt="Neonkyo Studio - Cyborg"
            className="hidden md:block h-full w-auto object-contain ring-4 ring-blue-500/30"
          />
          <div className="hidden md:block absolute top-6 left-6 z-50 text-sm text-blue-400 font-bold pointer-events-none">
            DESKTOP IMAGE
          </div>
        </div>

        {/* Right side - Content (50%) */}
        <div className="w-1/2 h-full flex flex-col justify-center items-end pr-12 space-y-10">
          {/* Top info text */}
          <div className="text-right">
            <p className="font-mono text-[10px] text-white/40 leading-relaxed tracking-wide">
              REV 06.24
              <br />
              ADVERTISING SERVICES NEONKYO STUDIO
              <br />
              EU-ES VERSION
              <br />
              AI POWERED
            </p>
          </div>

          {/* Logo with brackets */}
          <div className="relative">
            {/* Corner brackets */}
            <span className="absolute -top-5 -left-5 text-primary text-4xl leading-none">
              ┌
            </span>
            <span className="absolute -top-5 -right-5 text-primary text-4xl leading-none">
              ┐
            </span>
            <span className="absolute -bottom-5 -left-5 text-primary text-4xl leading-none">
              └
            </span>
            <span className="absolute -bottom-5 -right-5 text-primary text-4xl leading-none">
              ┘
            </span>

            <div className="px-16 py-8">
              <h1 className="font-display text-[140px] text-primary neon-text leading-none tracking-tight">
                neonkyo
              </h1>
              <p className="font-japanese text-6xl text-primary/90 text-right mt-2">
                スタジオ
              </p>
            </div>
          </div>

          {/* Description text */}
          <div className="text-right max-w-md">
            <p className="font-mono text-[10px] text-white/30 leading-relaxed tracking-wide">
              NEONKYO STUDIO ES EL FUTURO DE LA PUBLICIDAD
              <br />
              DIGITAL PARA ACCEDER...
            </p>
          </div>

          {/* Hero title */}
          <div className="text-right space-y-4">
            <h2 className="font-japanese text-7xl text-white leading-none">
              広告の未来
            </h2>
            <h2 className="font-display text-[90px] text-white italic leading-none font-bold tracking-tight">
              || THE FUTURE OF ADVERTISING
            </h2>
          </div>

          {/* CTA Button */}
          <div className="w-full">
            <a href="#contact" className="relative group block">
              <div className="flex items-stretch border-2 border-accent/60 hover:border-accent transition-all duration-300">
                {/* Arrow section */}
                <div className="bg-accent flex items-center justify-center px-10 py-8">
                  <span className="text-white text-5xl font-bold leading-none">
                    &gt;&gt;&gt;
                  </span>
                </div>
                {/* Text section */}
                <div className="flex-1 flex items-center px-14 py-8 bg-transparent">
                  <span className="font-mono text-white/60 uppercase tracking-[0.3em] text-lg group-hover:text-white transition-colors">
                    ACCEDER...
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
