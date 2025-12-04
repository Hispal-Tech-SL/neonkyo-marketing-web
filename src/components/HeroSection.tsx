import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-5xl mx-auto">
        {/* Japanese subtitle */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="font-japanese text-sm md:text-base text-primary/80 tracking-[0.5em]">
            未来の広告
          </span>
        </div>

        {/* Main title */}
        <h1 className="mb-6 animate-slide-up">
          <span 
            className="block font-display text-5xl md:text-7xl lg:text-9xl text-foreground italic glitch flicker"
            data-text="NEONKYO"
          >
            NEONKYO
          </span>
          <span className="block font-japanese text-3xl md:text-5xl lg:text-6xl text-primary neon-text mt-2">
            スタジオ
          </span>
        </h1>

        {/* Slogan */}
        <p 
          className="font-mono text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-primary">&lt;</span>
          THE FUTURE OF ADVERTISING
          <span className="text-primary">/&gt;</span>
        </p>

        {/* Decorative line */}
        <div 
          className="flex items-center justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-primary" />
          <span className="font-japanese text-primary text-xl">電</span>
          <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-primary" />
        </div>

        {/* CTA Button */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary bg-transparent text-primary font-mono uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-neon-sm hover:shadow-neon group"
          >
            <span>Initialize Contact</span>
            <span className="text-accent group-hover:text-primary-foreground transition-colors">
              _
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <a href="#services" className="text-primary/50 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-4 md:left-8 text-primary/30 font-mono text-xs hidden md:block">
        <div>01.</div>
        <div>NEONKYO</div>
        <div>STUDIO</div>
      </div>

      <div className="absolute top-24 right-4 md:right-8 text-primary/30 font-mono text-xs text-right hidden md:block">
        <div>2024</div>
        <div>CYBER</div>
        <div>AGENCY</div>
      </div>
    </section>
  );
};

export default HeroSection;
