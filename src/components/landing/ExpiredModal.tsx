import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ExternalLink, MessageCircle, Unlock } from "lucide-react";

interface ExpiredModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  companyName?: string;
  paymentUrl?: string;
  trustUnlockAvailable?: boolean;
}

const ExpiredModal = ({ open, onOpenChange, companyName, paymentUrl, trustUnlockAvailable }: ExpiredModalProps) => {
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

          {paymentUrl && (
            <Button
              variant="hero"
              className="w-full gap-2"
              onClick={() => window.open(paymentUrl, "_blank")}
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

            {trustUnlockAvailable && (
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
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExpiredModal;
