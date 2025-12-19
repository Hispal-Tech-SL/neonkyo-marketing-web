const Footer = () => {
  return (
    <footer
      className="relative pb-16 pt-24 px-4 bg-black overflow-hidden"
      style={{
        clipPath: "polygon(0 60px, 15% 60px, 20% 0, 80% 0, 85% 60px, 100% 60px, 100% 100%, 0 100%)",
        marginTop: "-60px"
      }}
    >
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Legal links & Socials aligned */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a
              href="#"
              className="font-mono text-[9px] md:text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              &gt; POLÍTICA DE PRIVACIDAD
            </a>
            <a
              href="#"
              className="font-mono text-[9px] md:text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              &gt; COOKIES
            </a>
            <a
              href="#"
              className="font-mono text-[9px] md:text-[10px] text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              &gt; AVISO LEGAL Y CONDICIONES DE USO
            </a>
          </div>

          {/* Social icons inline with links */}
          <div className="flex items-center gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <img src="/assets/icons/iconmonstr-whatsapp-1.svg" alt="WhatsApp" className="w-5 h-5 invert" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <img src="/assets/icons/youtube-svgrepo-com.svg" alt="YouTube" className="w-5 h-5 invert" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <img src="/assets/icons/Grupo 54.svg" alt="Instagram" className="w-5 h-5 invert" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center opacity-20 mt-12 pb-4">
          <p className="font-mono text-[8px] md:text-[9px] text-white uppercase tracking-[0.4em]">
            NEONKYO (c) 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
