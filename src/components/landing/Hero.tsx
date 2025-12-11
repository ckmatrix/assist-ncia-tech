import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Camera, Video, Shield } from "lucide-react";
import painelRelatorios from "@/assets/screenshots/painel-relatorios.png";

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

            {/* Destaque de proteção */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Proteja seu negócio e seus clientes</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Camera className="w-4 h-4 text-primary" />
                  <span>Anexe fotos do aparelho</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Video className="w-4 h-4 text-primary" />
                  <span>Grave vídeos de funcionamento</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Registre informações detalhadas</span>
                </div>
              </div>
            </div>

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
            <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              <img 
                src={painelRelatorios} 
                alt="Painel de Relatórios - Assistência Tech"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium">OS Concluída!</p>
                  <p className="text-xs text-muted-foreground">iPhone 13 Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
