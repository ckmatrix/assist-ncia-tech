import { Button } from "@/components/ui/button";
import { Wrench, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Dispara o evento para ativar a aba "cliente"
    window.dispatchEvent(new CustomEvent('showClienteDemo'));
    // Rola até a seção demo após um pequeno delay
    setTimeout(() => {
      const element = document.getElementById('demo-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AT</span>
            </div>
            <span className="text-xl font-bold text-foreground">Assistência Tech</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Funcionalidades
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => scrollToSection(e, 'benefits')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Benefícios
            </a>
            <a 
              href="#demo-section" 
              onClick={scrollToDemo}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Ver Demonstração
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Preços
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="transition-all duration-300 hover:scale-105">Entrar</Button>
            <Button variant="hero" className="transition-all duration-300 hover:scale-105" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>Começar Grátis</Button>
          </div>

          <button
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                onClick={(e) => scrollToSection(e, 'features')}
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-2 py-1"
              >
                Funcionalidades
              </a>
              <a 
                href="#benefits" 
                onClick={(e) => scrollToSection(e, 'benefits')}
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-2 py-1"
              >
                Benefícios
              </a>
              <a 
                href="#demo-section" 
                onClick={scrollToDemo}
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-2 py-1"
              >
                Ver Demonstração
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => scrollToSection(e, 'pricing')}
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-2 py-1"
              >
                Preços
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-muted-foreground hover:text-primary transition-all duration-300 px-2 py-1"
              >
                Contato
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost">Entrar</Button>
                <Button variant="hero" onClick={() => { document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Começar Grátis</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
