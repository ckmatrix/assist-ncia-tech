import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  MessageSquare, 
  ClipboardList, 
  Smartphone, 
  BarChart3, 
  Users, 
  Package,
  Bell
} from "lucide-react";

interface LaunchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre o lançamento do Assistência Tech!");

const features = [
  { icon: ClipboardList, label: "Gestão completa de Ordens de Serviço" },
  { icon: Smartphone, label: "Painel online para clientes acompanharem OS" },
  { icon: Bell, label: "Notificações automáticas via WhatsApp" },
  { icon: BarChart3, label: "Relatórios e painel financeiro" },
  { icon: Users, label: "Cadastro de clientes integrado" },
  { icon: Package, label: "Controle de estoque" },
];

const LaunchModal = ({ open, onOpenChange }: LaunchModalProps) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            Lançamento em Breve!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">
            O <span className="font-semibold text-foreground">Assistência Tech</span> está chegando! 
            Sistema completo para gestão de assistências técnicas.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20"
              >
                <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
            <p className="text-xs text-foreground">
              <span className="font-bold text-primary">🎉 Condições especiais!</span> Entre em contato para garantir sua vaga.
            </p>
          </div>

          <Button 
            variant="hero" 
            className="w-full gap-2 h-9 text-sm"
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
