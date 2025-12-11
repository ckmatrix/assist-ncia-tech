import { useState } from "react";

const tabs = [
  { id: "dashboard", label: "Dashboard", description: "Visão geral com métricas e relatórios em tempo real" },
  { id: "os", label: "Ordens de Serviço", description: "Gerencie todas as OS com filtros e status" },
  { id: "cliente", label: "Painel Cliente", description: "Área do cliente para acompanhamento online" },
  { id: "financeiro", label: "Financeiro", description: "Controle de receitas, despesas e fluxo de caixa" }
];

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-hero text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-10 blur-2xl"></div>
          <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
            <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                <div className="w-3 h-3 rounded-full bg-warning/60"></div>
                <div className="w-3 h-3 rounded-full bg-success/60"></div>
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                {tabs.find(t => t.id === activeTab)?.description}
              </span>
            </div>
            
            <div className="p-6 min-h-[400px]">
              {activeTab === "dashboard" && <DashboardMockup />}
              {activeTab === "os" && <OSMockup />}
              {activeTab === "cliente" && <ClienteMockup />}
              {activeTab === "financeiro" && <FinanceiroMockup />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardMockup = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {[
        { label: "Aparelhos", value: "12", icon: "📱", bg: "bg-primary/10" },
        { label: "Em Reparo", value: "7", icon: "🔧", bg: "bg-warning/10" },
        { label: "Prontos", value: "2", icon: "✅", bg: "bg-success/10" },
        { label: "Análise", value: "1", icon: "⏳", bg: "bg-info/10" },
        { label: "Atrasados", value: "6", icon: "⚠️", bg: "bg-destructive/10" }
      ].map((stat) => (
        <div key={stat.label} className={`${stat.bg} rounded-xl p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{stat.icon}</span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-secondary/30 rounded-xl p-4">
        <h4 className="font-semibold mb-3">Pendentes Prioritários</h4>
        <div className="space-y-2">
          {["iPhone 8 Plus - Atrasado", "iPhone XR - Atrasado", "Notebook Samsung"].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
              <span className="text-sm">{item}</span>
              <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Atrasado</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary/30 rounded-xl p-4">
        <h4 className="font-semibold mb-3">Financeiro</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">A Receber</span>
            <span className="font-bold text-success">R$ 1.110,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Recebidos</span>
            <span className="font-bold">R$ 0,00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OSMockup = () => (
  <div className="space-y-4 animate-fade-in">
    <div className="flex gap-4 items-center">
      <input 
        type="text" 
        placeholder="Busque por OS, Modelo ou Loja" 
        className="flex-1 px-4 py-2 bg-secondary/50 rounded-xl border border-border text-sm"
      />
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium">Ver em Cards</button>
        <button className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium">Ver em Lista</button>
      </div>
    </div>
    <div className="bg-secondary/30 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-secondary/50">
          <tr>
            <th className="text-left p-3">Resumo</th>
            <th className="text-left p-3">Loja</th>
            <th className="text-left p-3">Início</th>
            <th className="text-left p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { os: "3661", model: "iPhone 8 Plus", loja: "Loja 1", date: "15/11/2025", status: "EM REPARO", statusColor: "bg-warning/20 text-warning" },
            { os: "1972", model: "iPhone XR", loja: "Loja 3", date: "19/11/2025", status: "EM REPARO", statusColor: "bg-warning/20 text-warning" },
            { os: "3599", model: "iPhone 12", loja: "Loja 1", date: "03/12/2025", status: "PRONTO", statusColor: "bg-success/20 text-success" }
          ].map((row) => (
            <tr key={row.os} className="border-t border-border/30">
              <td className="p-3"><span className="font-medium">OS {row.os}</span> - {row.model}</td>
              <td className="p-3"><span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{row.loja}</span></td>
              <td className="p-3 text-muted-foreground">{row.date}</td>
              <td className="p-3"><span className={`${row.statusColor} px-2 py-1 rounded text-xs font-medium`}>{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ClienteMockup = () => (
  <div className="space-y-4 animate-fade-in">
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-primary font-bold">RV</span>
        </div>
        <div>
          <p className="font-medium">Seja bem-vindo, Responsável!</p>
          <p className="text-sm text-muted-foreground">Acompanhe seus aparelhos</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-destructive/10 px-3 py-2 rounded-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
        </span>
        <span className="text-sm text-destructive font-medium">1 notificação</span>
      </div>
    </div>
    <div className="bg-secondary/30 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
          <span>🔔</span>
        </div>
        <div>
          <p className="font-medium">Nova OS criada: 2389</p>
          <p className="text-sm text-muted-foreground">iPhone 13 Pro • Não Liga</p>
          <p className="text-xs text-muted-foreground mt-1">11/12/2025, 11:48:59</p>
        </div>
      </div>
    </div>
  </div>
);

const FinanceiroMockup = () => (
  <div className="space-y-4 animate-fade-in">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "A Receber", value: "R$ 1.110,00", color: "text-success", bg: "bg-success/10" },
        { label: "Recebidos", value: "R$ 0,00", color: "text-foreground", bg: "bg-secondary" },
        { label: "Estimado", value: "R$ 720,00", color: "text-primary", bg: "bg-primary/10" },
        { label: "Pendentes", value: "5", color: "text-warning", bg: "bg-warning/10" }
      ].map((stat) => (
        <div key={stat.label} className={`${stat.bg} rounded-xl p-4`}>
          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
          <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="bg-secondary/30 rounded-xl p-4">
      <h4 className="font-semibold mb-3">Exportar Relatórios</h4>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-secondary/80 transition">📄 Todos</button>
        <button className="px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-secondary/80 transition">⏳ Pendentes</button>
        <button className="px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-secondary/80 transition">✅ Concluídos</button>
      </div>
    </div>
  </div>
);

export default Screenshots;
