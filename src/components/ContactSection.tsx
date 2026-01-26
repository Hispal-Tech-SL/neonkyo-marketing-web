const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{
        clipPath:
          "polygon(0 40px, 40px 40px, 45px 30px, 120px 30px, 125px 40px, 300px 40px, 305px 30px, 345px 30px, 350px 40px, 100% 40px, 100% 100%, 85% 100%, 80% calc(100% - 60px), 20% calc(100% - 60px), 15% 100%, 0 100%)",
        marginTop: "-40px",
        backgroundColor: "#FF0000",
      }}
    >
      {/* Grid Pattern Layer - More visible dots */}
      <div className="absolute inset-0 bg-grid-cyber opacity-60 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-display text-5xl md:text-[6rem] lg:text-[7rem] text-white mb-6 tracking-wide leading-none italic transform -skew-x-6 scale-x-95"
            style={{ fontWeight: 100 }}
          >
            || CONTACTO
          </h2>

          <p className="font-mono text-lg md:text-xl text-white mb-2 font-bold tracking-[0.15em]">
            ACTUALMENTE TRABAJAMOS EN TODO EL MUNDO
          </p>
          <p className="font-mono text-[9px] md:text-[10px] text-white/70 tracking-[0.25em] uppercase">
            &gt;&gt; PUEDES CONTACTARNOS EN CUALQUIER MOMENTO, A CUALQUIER HORA
            &lt;&lt;
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
                className="font-display text-4xl md:text-6xl lg:text-7xl text-white hover:opacity-80 transition-opacity tracking-wide block italic transform -skew-x-6 scale-x-95"
                style={{ fontWeight: 100 }}
              >
                NEONKYOSTUDIO@GMAIL.COM
              </a>
              <p className="font-mono text-[10px] md:text-[11px] text-white mt-8 md:mt-12 tracking-[0.35em] uppercase">
                TIEMPO ESTIMADO DE RESPUESTA: 24 HORAS
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button - Hexagonal with full border */}
        <div className="flex justify-center mt-8">
          <div
            className="relative bg-primary p-[2px]"
            style={{
              clipPath:
                "polygon(28px 0, calc(100% - 28px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 14px), 0 14px)",
            }}
          >
            <a
              href="https://wa.me/34695283616"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-3 bg-black/80 flex items-center gap-3 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(27px 0, calc(100% - 27px) 0, 100% 13px, 100% calc(100% - 13px), calc(100% - 27px) 100%, 27px 100%, 0 calc(100% - 13px), 0 13px)",
              }}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    fill="hsl(var(--primary))"
                  />
                </svg>
              </div>
              <span className="font-mono text-sm font-bold tracking-[0.25em] uppercase text-primary whitespace-nowrap">
                ¿ERES DE ESPAÑA?
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
