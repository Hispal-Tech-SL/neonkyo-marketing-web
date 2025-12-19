const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}
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
      <div className="absolute top-6 left-8 text-primary text-6xl font-bold z-20 leading-none">
        京
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full h-full flex">
        {/* Left side - Hero image (50%) */}
        <div className="w-1/2 h-full relative flex items-center justify-center overflow-hidden">
          <img
            src="/assets/images/hero-image.png"
            alt="Neonkyo Studio - Cyborg"
            className="h-full w-auto object-contain"
          />
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
