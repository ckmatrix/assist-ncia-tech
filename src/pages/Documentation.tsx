import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Code, Rocket, Database, Layers, Zap, ExternalLink } from "lucide-react";

const sections = [
  {
    icon: Rocket,
    title: "Primeiros Passos",
    items: [
      { title: "Criando sua conta", desc: "Como se cadastrar e acessar o sistema pela primeira vez." },
      { title: "Configuração inicial", desc: "Configure sua loja, dados fiscais e preferências do sistema." },
      { title: "Cadastro de clientes", desc: "Adicione e organize sua base de clientes de forma prática." },
      { title: "Sua primeira Ordem de Serviço", desc: "Passo a passo para criar e gerenciar uma OS." },
    ],
  },
  {
    icon: Layers,
    title: "Módulos do Sistema",
    items: [
      { title: "Ordens de Serviço", desc: "Gerencie todo o fluxo de trabalho das OS da abertura ao fechamento." },
      { title: "PDV - Ponto de Venda", desc: "Realize vendas rápidas com controle de estoque integrado." },
      { title: "Financeiro", desc: "Controle de caixa, contas a pagar/receber e relatórios financeiros." },
      { title: "Estoque", desc: "Cadastro de produtos, controle de entrada/saída e alertas de estoque baixo." },
    ],
  },
  {
    icon: Database,
    title: "Relatórios e Dados",
    items: [
      { title: "Relatório de faturamento", desc: "Visualize seu faturamento por período, cliente ou serviço." },
      { title: "Relatório de OS", desc: "Acompanhe métricas de ordens de serviço e produtividade." },
      { title: "Exportação de dados", desc: "Exporte relatórios em PDF e Excel para análise externa." },
      { title: "Dashboard", desc: "Visão geral do negócio com indicadores em tempo real." },
    ],
  },
  {
    icon: Zap,
    title: "Integrações",
    items: [
      { title: "WhatsApp", desc: "Envie notificações automáticas de status da OS para seus clientes." },
      { title: "Impressoras térmicas", desc: "Configure impressão de etiquetas e comprovantes." },
      { title: "Nota Fiscal Eletrônica", desc: "Emissão de NF-e e NFC-e integrada ao sistema." },
      { title: "Gateway de pagamento", desc: "Aceite pagamentos online via PIX, cartão e boleto." },
    ],
  },
  {
    icon: Code,
    title: "API e Desenvolvedores",
    items: [
      { title: "Introdução à API", desc: "Visão geral da API REST do Assistência Tech." },
      { title: "Autenticação", desc: "Como gerar e usar tokens de acesso à API." },
      { title: "Endpoints principais", desc: "Referência dos endpoints de clientes, OS e produtos." },
      { title: "Webhooks", desc: "Receba notificações em tempo real sobre eventos do sistema." },
    ],
  },
];

const Documentation = () => {
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
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Documentação</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            Guias completos e referência técnica do Assistência Tech.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl py-12 px-4 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {section.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
