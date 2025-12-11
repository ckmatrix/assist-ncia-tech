import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroPainel from "@/assets/screenshots/hero-painel.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Novo: Painel online para clientes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Gestão completa para sua{" "}
              <span className="text-gradient">assistência técnica</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Controle ordens de serviço, estoque, financeiro e clientes em um único sistema. 
              Seus clientes acompanham o reparo em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              {[
                "Sem cartão de crédito",
                "14 dias grátis",
                "Suporte incluído"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative">
              <img 
                src={heroPainel} 
                alt="Painel de Relatórios do Assistência Tech" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
