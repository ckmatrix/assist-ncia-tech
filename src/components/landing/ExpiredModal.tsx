import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Search, Loader2, ExternalLink, MessageCircle, Unlock } from "lucide-react";
import { useState } from "react";

interface ExpiredModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  companyName?: string;
}

const ExpiredModal = ({ open, onOpenChange, companyName }: ExpiredModalProps) => {
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSearchInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setInvoiceUrl(null);

    try {
      const cleanDoc = document.replace(/\D/g, "");
      const res = await fetch(`https://api.assistenciatech.com.br/public/invoice?document=${cleanDoc}`);

      if (!res.ok) {
        setError("Nenhuma fatura encontrada para este CPF/CNPJ.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setInvoiceUrl(data.url || data.invoiceUrl || null);
      if (!data.url && !data.invoiceUrl) {
        setError("Nenhuma fatura pendente encontrada.");
      }
    } catch {
      setError("Erro ao buscar fatura. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleContactFinancial = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá, preciso de ajuda com minha assinatura vencida.",
      "_blank"
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            Assinatura Vencida
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">
            {companyName
              ? `A assinatura da empresa "${companyName}" está vencida.`
              : "Sua assinatura está vencida."}{" "}
            Regularize para continuar acessando o sistema.
          </p>

          {/* Buscar fatura */}
          <form onSubmit={handleSearchInvoice} className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Buscar fatura por CPF/CNPJ
            </label>
            <div className="flex gap-2">
              <Input
                placeholder="Digite seu CPF ou CNPJ"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                required
                disabled={loading}
              />
              <Button type="submit" variant="default" size="default" disabled={loading} className="shrink-0">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                Buscar
              </Button>
            </div>
          </form>

          {error && (
            <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-3">
              {error}
            </p>
          )}

          {invoiceUrl && (
            <Button
              variant="hero"
              className="w-full gap-2"
              onClick={() => window.open(invoiceUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Abrir Fatura Agora
            </Button>
          )}

          <div className="border-t border-border pt-4 space-y-2">
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={handleContactFinancial}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Financeiro
            </Button>

            <Button
              variant="ghost"
              className="w-full gap-2 text-muted-foreground"
              onClick={() => {
                window.open(
                  "https://wa.me/5511999999999?text=Olá, gostaria de solicitar o desbloqueio de confiança (2 dias).",
                  "_blank"
                );
              }}
            >
              <Unlock className="w-4 h-4" />
              Desbloqueio de confiança (2 dias)
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExpiredModal;
