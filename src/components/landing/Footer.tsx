import { useState } from "react";
import FooterModals from "./FooterModals";

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AT</span>
                </div>
                <span className="text-xl font-bold">Assistência Tech</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Sistema completo de gestão para assistências técnicas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Funcionalidades</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Preços</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Integrações</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Atualizações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setAboutOpen(true)} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Sobre nós
                  </button>
                </li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Documentação</a></li>
                <li>
                  <button 
                    onClick={() => setStatusOpen(true)} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Status do Sistema
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Assistência Tech. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => setTermsOpen(true)} 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => setPrivacyOpen(true)} 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Privacidade
              </button>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <FooterModals
        aboutOpen={aboutOpen}
        setAboutOpen={setAboutOpen}
        statusOpen={statusOpen}
        setStatusOpen={setStatusOpen}
        termsOpen={termsOpen}
        setTermsOpen={setTermsOpen}
        privacyOpen={privacyOpen}
        setPrivacyOpen={setPrivacyOpen}
      />
    </>
  );
};

export default Footer;
