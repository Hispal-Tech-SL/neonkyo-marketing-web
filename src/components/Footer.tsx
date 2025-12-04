const Footer = () => {
  const asciiArt = `
███╗   ██╗███████╗ ██████╗ ███╗   ██╗██╗  ██╗██╗   ██╗ ██████╗ 
████╗  ██║██╔════╝██╔═══██╗████╗  ██║██║ ██╔╝╚██╗ ██╔╝██╔═══██╗
██╔██╗ ██║█████╗  ██║   ██║██╔██╗ ██║█████╔╝  ╚████╔╝ ██║   ██║
██║╚██╗██║██╔══╝  ██║   ██║██║╚██╗██║██╔═██╗   ╚██╔╝  ██║   ██║
██║ ╚████║███████╗╚██████╔╝██║ ╚████║██║  ██╗   ██║   ╚██████╔╝
╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ 
`;

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* ASCII Art */}
        <div className="mb-8 overflow-x-auto">
          <pre className="font-mono text-[6px] md:text-[8px] lg:text-xs text-primary/40 text-center whitespace-pre leading-tight">
            {asciiArt}
          </pre>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <span className="font-japanese text-primary/40">電脳</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Footer content */}
        <div className="text-center">
          <p className="font-mono text-xs text-muted-foreground mb-2">
            &copy; 2024 Neonkyo Studio. All systems operational.
          </p>
          <p className="font-mono text-xs text-muted-foreground/60 mb-4">
            <span className="text-primary">&gt;</span> The Future of Advertising <span className="text-primary">&lt;</span>
          </p>
        </div>

        {/* Mobile warning */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-accent/80 animate-pulse">
            ⚠ FLIP YOUR PHONE TO SEE PROPERLY ⚠
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-primary/60" />
          <span className="w-2 h-2 bg-primary/40" />
          <span className="w-2 h-2 bg-primary/20" />
          <span className="font-mono text-xs text-primary/40">SYSTEM_STATUS: ONLINE</span>
          <span className="w-2 h-2 bg-primary/20" />
          <span className="w-2 h-2 bg-primary/40" />
          <span className="w-2 h-2 bg-primary/60" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
