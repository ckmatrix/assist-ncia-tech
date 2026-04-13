import { Link } from "react-router-dom";
import { ArrowLeft, Search, MessageCircle, FileText, Settings, Shield, CreditCard, HelpCircle, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const categories = [
  {
    icon: FileText,
    title: "Ordens de Serviço",
    description: "Como criar, editar e gerenciar ordens de serviço.",
    articles: [
      "Como criar uma nova ordem de serviço",
      "Como alterar o status de uma OS",
      "Impressão de comprovantes e etiquetas",
      "Campos personalizados nas OS",
    ],
  },
  {
    icon: Settings,
    title: "Configurações do Sistema",
    description: "Personalize o sistema conforme sua necessidade.",
    articles: [
      "Configurações gerais da loja",
      "Gerenciamento de usuários e permissões",
      "Personalização de templates de impressão",
      "Configuração de notificações",
    ],
  },
  {
    icon: CreditCard,
    title: "Financeiro e Pagamentos",
    description: "Controle financeiro, cobranças e relatórios.",
    articles: [
      "Como registrar um pagamento",
      "Relatório de faturamento mensal",
      "Configuração de formas de pagamento",
      "Gestão de contas a receber",
    ],
  },
  {
    icon: Shield,
    title: "Segurança e Conta",
    description: "Proteja sua conta e gerencie acessos.",
    articles: [
      "Como alterar sua senha",
      "Autenticação em duas etapas",
      "Gerenciamento de sessões ativas",
      "Política de privacidade e dados",
    ],
  },
  {
    icon: MessageCircle,
    title: "Integrações",
    description: "Conecte o sistema a outras ferramentas.",
    articles: [
      "Integração com WhatsApp",
      "Integração com impressoras térmicas",
      "API para desenvolvedores",
      "Webhooks e automações",
    ],
  },
  {
    icon: HelpCircle,
    title: "Perguntas Frequentes",
    description: "Respostas rápidas para dúvidas comuns.",
    articles: [
      "Como funciona o período de teste?",
      "Posso cancelar a qualquer momento?",
      "Como migrar dados de outro sistema?",
      "Suporte técnico e horários de atendimento",
    ],
  },
];

const HelpCenter = () => {
  const [search, setSearch] = useState("");

  const filtered = categories
    .map((cat) => ({
      ...cat,
      articles: cat.articles.filter((a) =>
        a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(
      (cat) =>
        search === "" ||
        cat.articles.length > 0 ||
        cat.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Central de Ajuda
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Encontre respostas, tutoriais e guias para aproveitar ao máximo o
            Assistência Tech.
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar artigos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-background text-foreground border-border h-12"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                  <p className="text-muted-foreground text-xs">
                    {cat.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {cat.articles.map((article) => (
                  <li key={article}>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {article}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nenhum resultado encontrado para "{search}".
          </p>
        )}

        {/* Contact */}
        <div className="mt-16 text-center bg-card border border-border rounded-xl p-8">
          <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Não encontrou o que procura?
          </h3>
          <p className="text-muted-foreground mb-4">
            Nossa equipe de suporte está pronta para ajudar.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda com o sistema."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com Suporte
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
