import { 
  ClipboardList, 
  Users, 
  Package, 
  Wallet, 
  Bell, 
  BarChart3,
  Smartphone,
  Shield
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    description: "Cadastre e gerencie OS com status em tempo real. Controle prazos, valores e histórico completo.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Smartphone,
    title: "Painel do Cliente",
    description: "Clientes acompanham seus aparelhos online com notificações automáticas de cada etapa.",
    color: "bg-success/10 text-success"
  },
  {
    icon: Wallet,
    title: "Controle Financeiro",
    description: "Fluxo de caixa, contas a receber, pagamentos e relatórios financeiros detalhados.",
    color: "bg-warning/10 text-warning"
  },
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle de peças e componentes. Alertas de estoque baixo e histórico de movimentações.",
    color: "bg-info/10 text-info"
  },
  {
    icon: Users,
    title: "Cadastro de Clientes",
    description: "Base de clientes organizada com histórico de serviços e preferências de contato.",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Bell,
    title: "WhatsApp Integrado",
    description: "Notificações automáticas via WhatsApp: envio de fotos, documentos, status da OS e atualizações em tempo real para seus clientes.",
    color: "bg-[#25D366]/15 text-[#25D366]"
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Dashboard com métricas, gráficos e exportação de relatórios em PDF.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Shield,
    title: "Multi-lojas",
    description: "Gerencie múltiplas lojas ou filiais com controle centralizado de todas as operações.",
    color: "bg-success/10 text-success"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Tudo que sua assistência técnica precisa
          </h2>
          <p className="text-muted-foreground text-lg">
            Sistema completo para gerenciar ordens de serviço, clientes, estoque e finanças em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
