import { 
  Clock, 
  TrendingUp, 
  Heart, 
  Zap
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economize Tempo",
    description: "Automatize processos repetitivos e foque no que importa: o reparo dos aparelhos.",
    stat: "70%",
    statLabel: "menos tempo em tarefas administrativas"
  },
  {
    icon: TrendingUp,
    title: "Aumente a Receita",
    description: "Com relatórios detalhados, identifique oportunidades e otimize seus serviços.",
    stat: "35%",
    statLabel: "aumento médio no faturamento"
  },
  {
    icon: Heart,
    title: "Clientes Satisfeitos",
    description: "Transparência total no acompanhamento gera confiança e fideliza clientes.",
    stat: "95%",
    statLabel: "taxa de satisfação"
  },
  {
    icon: Zap,
    title: "Produtividade",
    description: "Equipe mais organizada com alertas e lembretes automáticos de prazos.",
    stat: "2x",
    statLabel: "mais produtividade"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Resultados que transformam seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Assistências técnicas que usam nosso sistema relatam melhorias significativas em suas operações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gradient">{benefit.stat}</span>
                <p className="text-xs text-muted-foreground mt-1">{benefit.statLabel}</p>
              </div>

              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
