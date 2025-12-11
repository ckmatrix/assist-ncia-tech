import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

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
            <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                  <div className="w-3 h-3 rounded-full bg-warning/60"></div>
                  <div className="w-3 h-3 rounded-full bg-success/60"></div>
                </div>
                <span className="text-xs text-muted-foreground ml-2">Painel de Relatórios</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <StatCard icon="📱" label="Aparelhos" value="12" color="bg-primary/10" />
                  <StatCard icon="🔧" label="Em Reparo" value="7" color="bg-warning/10" />
                  <StatCard icon="✅" label="Prontos" value="2" color="bg-success/10" />
                  <StatCard icon="⏳" label="Análise" value="1" color="bg-info/10" />
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Valor Estimado</span>
                    <span className="text-lg font-bold text-success">R$ 720,00</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-hero w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>
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

const StatCard = ({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) => (
  <div className={`${color} rounded-xl p-4`}>
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  </div>
);

export default Hero;
