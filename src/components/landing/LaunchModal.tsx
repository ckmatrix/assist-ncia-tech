import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket, MessageSquare } from "lucide-react";

interface LaunchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre o lançamento do Assistência Tech!");

const LaunchModal = ({ open, onOpenChange }: LaunchModalProps) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <div className="w-9 h-9 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            Lançamento em Breve!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">
            Sistema completo para assistências técnicas: OS online, painel do cliente e notificações via WhatsApp.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-primary">🎉 Condições especiais!</span> Garanta sua vaga entre os primeiros clientes.
            </p>
          </div>

          <Button 
            variant="hero" 
            className="w-full gap-2"
            onClick={handleWhatsApp}
          >
            <MessageSquare className="w-4 h-4" />
            Falar com a equipe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LaunchModal;
