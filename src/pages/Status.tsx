import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertCircle, Info, Clock, Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface StatusService {
  name: string;
  key?: string;
  status: string;
  label: string;
  message?: string;
}

interface HistoryEntry {
  title?: string;
  body?: string;
  status: string;
  createdAt?: string;
  resolvedAt?: string;
}

interface StatusData {
  summary?: { label?: string };
  services?: StatusService[];
  history?: HistoryEntry[];
  updatedAt?: string;
  generatedAt?: string;
  statusText?: string;
  plannedUpdates?: string;
  infoBlocks?: { title?: string; body?: string }[];
}

const CACHE_KEY = "system_status_cache_v1";
const TIMEOUT_MS = 2500;

const DEFAULT_SERVICES = [
  { key: "web", name: "Plataforma Web" },
  { key: "integration_api", name: "API de Integração" },
  { key: "database", name: "Banco de Dados" },
  { key: "notifications", name: "Serviço de Notificações" },
  { key: "client_portal", name: "Painel do Cliente" },
];

const ptLabel = (s: string) =>
  ({ OPERATIONAL: "Operacional", DEGRADED: "Instável", MAINTENANCE: "Manutenção", OUTAGE: "Fora do ar" }[
    String(s || "").toUpperCase()
  ] || String(s || ""));

const loadCache = (): { cachedAt?: string; payload?: StatusData } | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
};

const saveCache = (payload: StatusData) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ cachedAt: new Date().toISOString(), payload }));
  } catch {
    void 0;
  }
};

const fetchWithTimeout = async (url: string): Promise<StatusData> => {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { cache: "no-store", signal: ctrl.signal });
    if (!res.ok) throw new Error("http_" + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "OPERATIONAL":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "DEGRADED":
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case "MAINTENANCE":
      return <Info className="w-5 h-5 text-blue-500" />;
    case "OUTAGE":
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    default:
      return <Clock className="w-5 h-5 text-muted-foreground" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "OPERATIONAL":
      return "bg-green-500/10 border-green-500/20 text-green-600";
    case "DEGRADED":
      return "bg-yellow-500/10 border-yellow-500/20 text-yellow-600";
    case "MAINTENANCE":
      return "bg-blue-500/10 border-blue-500/20 text-blue-600";
    case "OUTAGE":
      return "bg-red-500/10 border-red-500/20 text-red-600";
    default:
      return "bg-muted/50 border-border text-muted-foreground";
  }
};

const getPillColor = (status: string) => {
  switch (status) {
    case "OPERATIONAL":
      return "bg-green-500/10 border-green-500/20 text-green-600";
    case "DEGRADED":
      return "bg-yellow-500/10 border-yellow-500/20 text-yellow-600";
    case "MAINTENANCE":
      return "bg-blue-500/10 border-blue-500/20 text-blue-600";
    case "OUTAGE":
      return "bg-red-500/10 border-red-500/20 text-red-600";
    default:
      return "bg-muted/50 border-border text-muted-foreground";
  }
};

const Status = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<{
    summaryLabel: string;
    subtitle: string;
    statusText: string;
    services: StatusService[];
    history: HistoryEntry[];
    plannedUpdates: string;
    infoBlocks: { title?: string; body?: string }[];
  } | null>(null);

  const histRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const d = await fetchWithTimeout("https://api.assistenciatech.com.br/system/status");
        saveCache(d);
        const updatedAt = d?.updatedAt ? new Date(d.updatedAt).toLocaleString("pt-BR") : null;
        const generatedAt = d?.generatedAt ? new Date(d.generatedAt).toLocaleString("pt-BR") : "—";
        setData({
          summaryLabel: d?.summary?.label || "Status do Sistema",
          subtitle: `Atualizado em: ${updatedAt || generatedAt}`,
          statusText: d?.statusText || "",
          services: Array.isArray(d?.services) ? d.services : [],
          history: Array.isArray(d?.history) ? d.history : [],
          plannedUpdates: d?.plannedUpdates || "",
          infoBlocks: Array.isArray(d?.infoBlocks) ? d.infoBlocks : [],
        });
      } catch {
        const cached = loadCache();
        const cachedAt = cached?.cachedAt ? new Date(cached.cachedAt).toLocaleString("pt-BR") : null;
        setData({
          summaryLabel: "Fora do ar",
          subtitle: cachedAt
            ? `Servidor de status indisponível • último status: ${cachedAt}`
            : "Servidor de status indisponível",
          statusText: "",
          services: DEFAULT_SERVICES.map((s) => ({
            ...s,
            status: "OUTAGE",
            label: "Fora do ar",
            message: "Não foi possível consultar o servidor de status",
          })),
          history: Array.isArray(cached?.payload?.history) ? cached.payload.history : [],
          plannedUpdates: "",
          infoBlocks: [],
        });
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Scroll to #historico on load
  useEffect(() => {
    if (!loading && window.location.hash === "#historico" && histRef.current) {
      setTimeout(() => histRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [loading]);

  const allOperational = data?.services?.every((s) => s.status === "OPERATIONAL");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao site
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-1">
          {data?.summaryLabel || "Status do Sistema"}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {data?.subtitle || "Monitoramento em tempo real dos nossos serviços"}
        </p>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Carregando...</span>
          </div>
        ) : data ? (
          <div className="space-y-6">
            {/* Status text */}
            {data.statusText && (
              <p className="text-sm text-muted-foreground">{data.statusText}</p>
            )}

            {/* All operational banner */}
            {allOperational && !error && (
              <div className="flex items-center gap-2 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium text-green-600">Todos os sistemas operacionais</span>
              </div>
            )}

            {/* Services */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Serviços</h2>
              {data.services.map((service) => (
                <div
                  key={service.name}
                  className={`flex items-center justify-between p-4 rounded-lg border ${getStatusColor(service.status)}`}
                >
                  <div>
                    <span className="text-sm font-medium text-foreground">{service.name}</span>
                    {service.message && (
                      <p className="text-xs text-muted-foreground mt-0.5">{service.message}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(service.status)}
                    <span className="text-sm font-medium">{service.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Planned updates */}
            {data.plannedUpdates && (
              <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/10 space-y-1">
                <h2 className="text-sm font-semibold text-blue-700">Atualizações planejadas</h2>
                <p className="text-sm text-blue-600">{data.plannedUpdates}</p>
              </div>
            )}

            {/* Info blocks */}
            {data.infoBlocks.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Mais informações</h2>
                {data.infoBlocks.map((b, i) => (
                  <div key={i} className="p-4 border rounded-lg bg-card space-y-1">
                    <p className="text-sm font-semibold text-foreground">{b.title || "Informação"}</p>
                    <p className="text-sm text-muted-foreground">{b.body}</p>
                  </div>
                ))}
              </div>
            )}

            {/* History */}
            <div ref={histRef} id="historico" className="space-y-3 pt-2">
              <h2 className="text-lg font-semibold text-foreground">Histórico</h2>
              {data.history.length > 0 ? (
                data.history.map((h, i) => (
                  <div key={i} className="p-4 border rounded-lg bg-card space-y-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {h.title || "Atualização"}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {h.createdAt ? new Date(h.createdAt).toLocaleString("pt-BR") : "—"}
                          {h.resolvedAt &&
                            ` • resolvido em ${new Date(h.resolvedAt).toLocaleString("pt-BR")}`}
                        </p>
                      </div>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-semibold border ${getPillColor(h.status)}`}
                      >
                        {ptLabel(h.status)}
                      </span>
                    </div>
                    {h.body && <p className="text-xs text-muted-foreground">{h.body}</p>}
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Nenhum evento registrado.</p>
              )}
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground text-center pt-4">{data.subtitle}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Status;
