const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-black"
    >
      {/* Background with code pattern */}
      <div className="absolute inset-0 opacity-20 text-[8px] md:text-[10px] leading-tight overflow-hidden">
        <pre className="font-mono text-primary/30">
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
 TIME.SLEEP(3)
 PRINT("HACKING THE PASSWORD...")
 TIME.SLEEP(4)
 PRINT("ACCESS GRANTED.")
 TIME.SLEEP(1)
 PRINT("DOWNLOADING CONFIDENTIAL FILES...")
 TIME.SLEEP(5)
 PRINT("OPERATION COMPLETED SUCCESSFULLY!")
 RETURN DATABASE["CONFIDENTIAL_INFO"]
# SIMULATING ACCESSING CONFIDENTIAL INFORMATION
PRINT("INITIATING HACKING SEQUENCE...")
TIME.SLEEP(2)
PRINT("LOCATING TARGET NETWORK...")
TIME.SLEEP(3)
PRINT("IDENTIFYING VULNERABILITIES...")
TIME.SLEEP(4)
PRINT("INFILTRATING THE SYSTEM...")
TIME.SLEEP(5)
PRINT("ACCESS GRANTED!")
TIME.SLEEP(1)
CONFIDENTIAL_INFO = HACK_DATABASE()
PRINT("CONFIDENTIAL INFORMATION OBTAINED:",
CONFIDENTIAL_INFO)`}
        </pre>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left side - Text content */}
        <div className="text-left space-y-6">
          {/* Top corner icon */}
          <div className="text-primary text-5xl mb-4">
            京
          </div>

          {/* Logo with brackets */}
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="text-primary text-3xl md:text-4xl mr-2">┌</span>
              <div>
                <h1 className="font-display text-5xl md:text-7xl text-primary neon-text leading-tight">
                  neonkyo
                </h1>
                <p className="font-japanese text-xl md:text-2xl text-primary/80">
                  スタジオ
                </p>
              </div>
              <span className="text-primary text-3xl md:text-4xl ml-2">┐</span>
            </div>
            <div className="flex items-end">
              <span className="text-primary text-3xl md:text-4xl mr-2">└</span>
              <span className="text-primary text-3xl md:text-4xl ml-auto">┘</span>
            </div>
          </div>

          {/* Hero title */}
          <div className="space-y-2">
            <h2 className="font-japanese text-3xl md:text-4xl text-white leading-tight">
              広告の未来
            </h2>
            <h2 className="font-display text-4xl md:text-6xl text-white italic leading-tight">
              || THE FUTURE <br/>OF ADVERTISING
            </h2>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-mono uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 group"
            >
              <span className="text-2xl">&gt;&gt;&gt;</span>
              <span>ACCEDER...</span>
            </a>
          </div>
        </div>

        {/* Right side - Hero image */}
        <div className="relative">
          <img
            src="/assets/images/hero-image.png"
            alt="Neonkyo Studio - The Future of Advertising"
            className="w-full h-auto object-contain"
          />

          {/* Overlay text on image */}
          <div className="absolute top-4 right-4 text-right">
            <p className="font-mono text-xs text-white/70 leading-relaxed">
              ADVERTISING SERVICES NEONKYO STUDIO<br/>
              EU-ES VERSION<br/>
              AI POWERED<br/>
              REV 06.24
            </p>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="font-mono text-xs text-primary/60 uppercase tracking-wider">
          DESLIZA PARA ACCEDER...
        </p>
      </div>

      {/* Right side decorative text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="writing-mode-vertical text-xs font-mono text-primary/40 tracking-widest">
          NEONKYO STUDIO ES EL FUTURO DE LA PUBLICIDAD
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
