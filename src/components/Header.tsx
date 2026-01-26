import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Preguntas Frecuentes", href: "#faqs" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-primary text-3xl md:text-4xl">京</span>
            <div>
              <span className="font-display text-xl md:text-2xl text-primary neon-text">
                neonkyo
              </span>
              <span className="font-japanese text-xs md:text-sm text-primary/80 block">
                スタジオ
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-sm uppercase tracking-wider text-primary/60 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/20 animate-slide-up">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 font-mono text-sm uppercase tracking-wider text-primary/60 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-primary mr-2">&gt;</span>
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
