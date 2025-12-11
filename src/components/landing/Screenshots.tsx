import { useState } from "react";
import { Camera, Video, Shield } from "lucide-react";
import painelRelatorios from "@/assets/screenshots/painel-relatorios.png";
import acompanhamentoOs from "@/assets/screenshots/acompanhamento-os.png";
import painelCliente from "@/assets/screenshots/painel-cliente.png";
import relatoriosLoja from "@/assets/screenshots/relatorios-loja.png";
import cadastroOs from "@/assets/screenshots/cadastro-os.png";

const tabs = [
  { id: "dashboard", label: "Dashboard", description: "Visão geral com métricas e relatórios em tempo real", image: painelRelatorios, isVideo: false },
  { id: "os", label: "Ordens de Serviço", description: "Gerencie todas as OS com filtros e status", image: acompanhamentoOs, isVideo: false },
  { id: "cadastro", label: "Cadastro OS", description: "Cadastre novas ordens de serviço rapidamente", image: cadastroOs, isVideo: false },
  { id: "cliente", label: "Painel Cliente", description: "Área do cliente para acompanhamento online", video: "/videos/painel-cliente.mov", isVideo: true },
  { id: "financeiro", label: "Financeiro", description: "Controle de receitas, despesas e fluxo de caixa", image: relatoriosLoja, isVideo: false }
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

        <div className="relative max-w-6xl mx-auto flex justify-center">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-10 blur-2xl"></div>
          <div className={`relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden ${
            activeTab === "cadastro" ? "w-auto" : "w-full"
          }`}>
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
            
            <div className={`relative overflow-hidden ${
              activeTab === "cadastro" 
                ? "" 
                : "bg-secondary/30 flex items-center justify-center p-4"
            }`}>
              {activeTabData?.isVideo ? (
                <video 
                  key={activeTab}
                  src={activeTabData?.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-full h-auto max-h-[550px] object-contain animate-fade-in rounded-lg"
                />
              ) : (
                <img 
                  key={activeTab}
                  src={activeTabData?.image} 
                  alt={activeTabData?.label}
                  className={`animate-fade-in ${
                    activeTab === "cadastro"
                      ? "h-auto max-h-[550px]"
                      : "max-w-full h-auto max-h-[550px] object-contain rounded-lg"
                  }`}
                />
              )}
              
              {activeTab === "cliente" && (
                <div className="absolute bottom-6 left-6 right-6 animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Proteção garantida para você e seu cliente</span>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
