import { Button } from "@/components/ui/button";
import { Check, Sparkles, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Plan {
  id: string;
  name: string;
  price: number | null;
  description: string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
}

const WHATSAPP_NUMBER = "5511996053510";

const handleWhatsAppClick = (planName: string) => {
  const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} do sistema Assistência Tech.`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

const fallbackPlans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: null,
    description: "Ideal para assistências pequenas",
    features: ["Até 100 OS por mês", "1 usuário", "Painel do cliente", "Relatórios básicos", "Suporte por email"],
    popular: false,
    isCustom: true,
  },
  {
    id: "profissional",
    name: "Profissional",
    price: null,
    description: "Para assistências em crescimento",
    features: ["OS ilimitadas", "5 usuários", "Painel do cliente", "Relatórios avançados", "Controle de estoque", "Financeiro completo", "Notificações WhatsApp", "Suporte prioritário"],
    popular: true,
    isCustom: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    description: "Para redes e franquias",
    features: ["Tudo do Profissional", "Usuários ilimitados", "Multi-lojas", "API de integração", "Relatórios personalizados", "Gerente de conta dedicado", "SLA garantido"],
    popular: false,
    isCustom: true,
  },
];

const Pricing = () => {
  const [plans, setPlans] = useState<Plan[]>(fallbackPlans);
  const [loading, setLoading] = useState(true);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  useEffect(() => {
    fetch("https://api.assistenciatech.com.br/public/plans")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch plans");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPlans(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getPrice = (plan: Plan) => {
    if (plan.isCustom || plan.price == null) return null;
    const price = billing === "annual" ? plan.price * 0.75 : plan.price;
    return price;
  };

  const formatPrice = (plan: Plan) => {
    const price = getPrice(plan);
    if (price == null) return "Em breve";
    return price.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              billing === "monthly"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setBilling("annual")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${
              billing === "annual"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Anual
            <span className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              -25%
            </span>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id || plan.name}
                className={`relative bg-card rounded-2xl p-8 border transition-all duration-500 group cursor-pointer flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-xl md:scale-105 hover:shadow-2xl hover:shadow-primary/20"
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
                    {getPrice(plan) != null && <span className="text-sm text-muted-foreground">R$</span>}
                    <span className={`font-extrabold group-hover:text-primary transition-colors ${getPrice(plan) == null ? "text-3xl" : "text-5xl"}`}>
                      {formatPrice(plan)}
                    </span>
                    {getPrice(plan) != null && (
                      <span className="text-muted-foreground">/{billing === "annual" ? "mês" : "mês"}</span>
                    )}
                  </div>
                  {billing === "annual" && getPrice(plan) != null && (
                    <p className="text-xs text-accent font-semibold mt-1">
                      Economia de 25% no plano anual
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
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
                  className={`w-full transition-all duration-300 mt-auto ${
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
                  {plan.isCustom || plan.price == null ? "Falar com Consultor" : "Começar Agora"}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
