import { Mail, MessageCircle, Globe, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary/60 tracking-[0.3em] uppercase">
            // Contact
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground italic mt-4 mb-2">
            Let's <span className="text-primary neon-text">Connect</span>
          </h2>
          <span className="font-japanese text-xl text-primary/60">連絡</span>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <a
            href="mailto:neonkyostudio@gmail.com"
            className="group p-6 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-neon-sm text-center"
          >
            <Mail className="mx-auto mb-4 text-primary" size={32} strokeWidth={1.5} />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
              Email
            </span>
            <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors break-all">
              neonkyostudio@gmail.com
            </span>
            <ArrowUpRight className="mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/34695283616"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-neon-sm text-center"
          >
            <MessageCircle className="mx-auto mb-4 text-primary" size={32} strokeWidth={1.5} />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
              WhatsApp
            </span>
            <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
              +34 695 283 616
            </span>
            <ArrowUpRight className="mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
          </a>

          {/* Website */}
          <a
            href="https://www.neonkyostudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-neon-sm text-center"
          >
            <Globe className="mx-auto mb-4 text-primary" size={32} strokeWidth={1.5} />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
              Website
            </span>
            <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
              www.neonkyostudio.com
            </span>
            <ArrowUpRight className="mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block p-8 border border-primary/30 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

            <p className="font-mono text-sm text-muted-foreground mb-4">
              Ready to hack the future of your brand?
            </p>
            <span className="font-japanese text-3xl md:text-4xl text-primary neon-text animate-pulse-neon">
              始めましょう
            </span>
            <p className="font-display text-xl md:text-2xl text-foreground italic mt-2">
              Let's Begin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
