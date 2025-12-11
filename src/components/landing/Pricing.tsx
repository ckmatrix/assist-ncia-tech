import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "29,90",
    description: "Ideal para assistências pequenas",
    features: [
      "Até 100 OS por mês",
      "1 usuário",
      "Painel do cliente",
      "Relatórios básicos",
      "Suporte por email"
    ],
    popular: false,
    isCustom: false
  },
  {
    name: "Profissional",
    price: "49,90",
    description: "Para assistências em crescimento",
    features: [
      "OS ilimitadas",
      "5 usuários",
      "Painel do cliente",
      "Relatórios avançados",
      "Controle de estoque",
      "Financeiro completo",
      "Notificações WhatsApp",
      "Suporte prioritário"
    ],
    popular: true,
    isCustom: false
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Para redes e franquias",
    features: [
      "Tudo do Profissional",
      "Usuários ilimitados",
      "Multi-lojas",
      "API de integração",
      "Relatórios personalizados",
      "Gerente de conta dedicado",
      "SLA garantido"
    ],
    popular: false,
    isCustom: true
  }
];

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Tenho interesse no sistema Assistência Tech. Gostaria de saber mais informações.");

const handleWhatsAppClick = (planName: string) => {
  const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} do sistema Assistência Tech.`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Planos para cada tamanho de negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Comece com 14 dias grátis. Cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-500 group cursor-pointer ${
                plan.popular 
                  ? "border-primary shadow-xl scale-105 hover:scale-110 hover:shadow-2xl hover:shadow-primary/20" 
                  : "border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              }`}
              onClick={() => handleWhatsAppClick(plan.name)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-hero text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {!plan.isCustom && <span className="text-sm text-muted-foreground">R$</span>}
                  <span className={`font-extrabold group-hover:text-primary transition-colors ${plan.isCustom ? "text-3xl" : "text-5xl"}`}>{plan.price}</span>
                  {!plan.isCustom && <span className="text-muted-foreground">/mês</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-success/30 group-hover:scale-110 transition-all">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className={`w-full transition-all duration-300 ${
                  plan.popular 
                    ? "group-hover:shadow-lg group-hover:shadow-primary/30" 
                    : "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                }`}
                size="lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppClick(plan.name);
                }}
              >
                {plan.isCustom ? "Falar com Consultor" : "Começar Agora"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
