const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 bg-accent overflow-hidden"
      style={{
        clipPath: "polygon(0 40px, 40px 40px, 45px 30px, 120px 30px, 125px 40px, 300px 40px, 305px 30px, 345px 30px, 350px 40px, 100% 40px, 100% 100%, 85% 100%, 80% calc(100% - 60px), 20% calc(100% - 60px), 15% 100%, 0 100%)",
        marginTop: "-40px"
      }}
    >
      {/* Grid Pattern Layer - More visible dots */}
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-5xl md:text-[6rem] lg:text-[7rem] text-white mb-6 tracking-tight leading-none italic transform -skew-x-6">
            || CONTACTO
          </h2>

          <p className="font-mono text-lg md:text-xl text-white mb-2 font-bold tracking-[0.15em]">
            WE ARE CURRENTLY WORKING WORLDWIDE
          </p>
          <p className="font-mono text-[9px] md:text-[10px] text-white/70 tracking-[0.25em] uppercase">
            &gt;&gt; SO YOU CAN CONTACT US ANY TIME, ANY HOUR &lt;&lt;
          </p>
        </div>

        {/* Email Box with Corners - Much larger brackets */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block px-20 py-16 md:px-32 md:py-20">
            {/* L-brackets - Much larger and further from content */}
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-t-[3px] border-l-[3px] border-white" />
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-t-[3px] border-r-[3px] border-white" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-b-[3px] border-l-[3px] border-white" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-b-[3px] border-r-[3px] border-white" />

            {/* Email */}
            <div className="text-center">
              <a
                href="mailto:neonkyostudio@gmail.com"
                className="font-display text-3xl md:text-5xl lg:text-6xl text-white hover:opacity-80 transition-opacity tracking-tight block italic transform -skew-x-6"
              >
                NEONKYOSTUDIO@GMAIL.COM
              </a>
              <p className="font-mono text-[9px] md:text-[10px] text-white/80 mt-8 md:mt-12 tracking-[0.35em] uppercase">
                ESTIMATED RESPONSE TIME: 24 HOURS
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button - Darker background, specific shape */}
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/34695283616"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2.5 bg-[#1a0f00]/90 border border-primary/20 hover:bg-[#2a1a00] transition-all duration-300"
            style={{
              clipPath: "polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px)"
            }}
          >
            <div className="flex items-center gap-3 text-white">
              <img
                src="/assets/icons/iconmonstr-whatsapp-1.svg"
                alt="WhatsApp"
                className="w-4 h-4 invert"
              />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary">
                ¿ERES DE ESPAÑA?
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
