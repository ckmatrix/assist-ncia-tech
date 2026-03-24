import { 
  ClipboardList, 
  Users, 
  Package, 
  Wallet, 
  Bell, 
  BarChart3,
  Smartphone,
  Shield,
  ShoppingCart
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import pdvImg from "@/assets/screenshots/pdv.png";
import portalOsCliente from "@/assets/screenshots/portal-os-cliente.png";
import portalClienteOs from "@/assets/screenshots/portal-cliente-os.png";

const features = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    description: "Cadastre e gerencie OS com status em tempo real. Controle prazos, valores e histórico completo.",
    color: "bg-primary/10 text-primary",
    screenshot: null
  },
  {
    icon: ShoppingCart,
    title: "PDV — Ponto de Venda",
    description: "Venda produtos e serviços com carrinho inteligente, busca rápida e finalização em segundos.",
    color: "bg-accent/20 text-accent-foreground",
    screenshot: pdvImg
  },
  {
    icon: Smartphone,
    title: "Portal do Cliente",
    description: "Clientes consultam a OS com Chave Web e acompanham status, histórico e anexos em tempo real.",
    color: "bg-success/10 text-success",
    screenshot: portalOsCliente
  },
  {
    icon: Shield,
    title: "Acompanhamento da OS",
    description: "Painel completo com dados do cliente, aparelho, problema relatado e timeline de atualizações.",
    color: "bg-info/10 text-info",
    screenshot: portalClienteOs
  },
  {
    icon: Wallet,
    title: "Controle Financeiro",
    description: "Fluxo de caixa, contas a receber, pagamentos e relatórios financeiros detalhados.",
    color: "bg-warning/10 text-warning",
    screenshot: null
  },
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle de peças e componentes. Alertas de estoque baixo e histórico de movimentações.",
    color: "bg-info/10 text-info",
    screenshot: null
  },
  {
    icon: Bell,
    title: "WhatsApp Integrado",
    description: "Notificações automáticas via WhatsApp: envio de fotos, documentos, status da OS e atualizações em tempo real.",
    color: "bg-[#25D366]/15 text-[#25D366]",
    screenshot: null
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Dashboard com métricas, gráficos e exportação de relatórios em PDF.",
    color: "bg-primary/10 text-primary",
    screenshot: null
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const card = (
    <div
      className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <feature.icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.description}</p>
    </div>
  );

  if (!feature.screenshot) return card;

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        {card}
      </HoverCardTrigger>
      <HoverCardContent className="w-[420px] p-2" side="top" sideOffset={8}>
        <img
          src={feature.screenshot}
          alt={feature.title}
          className="w-full h-auto rounded-lg border border-border"
        />
        <p className="text-xs text-muted-foreground text-center mt-2">{feature.title}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

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
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
