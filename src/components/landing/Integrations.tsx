import { Puzzle, Sparkles } from "lucide-react";

const Integrations = () => {
  return (
    <section id="integrations" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Integrações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Conecte com suas ferramentas favoritas
          </h2>
          
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Em breve!</h3>
            <p className="text-muted-foreground">
              Estamos trabalhando em novas integrações incríveis para você. 
              Em breve você poderá conectar o Assistência Tech com diversas ferramentas 
              para automatizar ainda mais seu negócio.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="bg-background/50 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground">
                NFe/NFSe
              </span>
              <span className="bg-background/50 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground">
                Mercado Pago
              </span>
              <span className="bg-background/50 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground">
                PagSeguro
              </span>
              <span className="bg-background/50 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground">
                PIX Automático
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
