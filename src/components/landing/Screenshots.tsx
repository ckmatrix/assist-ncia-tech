import { useState } from "react";
import painelRelatorios from "@/assets/screenshots/painel-relatorios.png";
import acompanhamentoOs from "@/assets/screenshots/acompanhamento-os.png";
import painelCliente from "@/assets/screenshots/painel-cliente.png";
import relatoriosLoja from "@/assets/screenshots/relatorios-loja.png";
import cadastroOs from "@/assets/screenshots/cadastro-os.png";

const tabs = [
  { id: "dashboard", label: "Dashboard", description: "Visão geral com métricas e relatórios em tempo real", image: painelRelatorios },
  { id: "os", label: "Ordens de Serviço", description: "Gerencie todas as OS com filtros e status", image: acompanhamentoOs },
  { id: "cadastro", label: "Cadastro OS", description: "Cadastre novas ordens de serviço rapidamente", image: cadastroOs },
  { id: "cliente", label: "Painel Cliente", description: "Área do cliente para acompanhamento online", image: painelCliente },
  { id: "financeiro", label: "Financeiro", description: "Controle de receitas, despesas e fluxo de caixa", image: relatoriosLoja }
];

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Veja em Ação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Interface intuitiva e moderna
          </h2>
          <p className="text-muted-foreground text-lg">
            Design pensado para facilitar o dia a dia da sua assistência técnica.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-gradient-hero text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-10 blur-2xl"></div>
          <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
            <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                <div className="w-3 h-3 rounded-full bg-warning/60"></div>
                <div className="w-3 h-3 rounded-full bg-success/60"></div>
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                {activeTabData?.description}
              </span>
            </div>
            
            <div className="relative overflow-hidden bg-secondary/30 flex items-center justify-center p-4">
              <img 
                key={activeTab}
                src={activeTabData?.image} 
                alt={activeTabData?.label}
                className="max-w-full h-auto max-h-[550px] object-contain animate-fade-in rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
