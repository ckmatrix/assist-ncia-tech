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
  { icon: ClipboardList, label: "Gestão de Ordens de Serviço" },
  { icon: Smartphone, label: "Painel online para clientes" },
  { icon: Bell, label: "Notificações via WhatsApp" },
  { icon: BarChart3, label: "Relatórios financeiros" },
];

const LaunchModal = ({ open, onOpenChange }: LaunchModalProps) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            Lançamento em Breve!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-muted-foreground">
            O <span className="font-semibold text-foreground">Assistência Tech</span> está chegando! 
            Um sistema completo para gestão de assistências técnicas com foco em profissionalismo e 
            transparência para seus clientes.
          </p>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Funcionalidades principais:</h4>
            <div className="grid grid-cols-1 gap-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg bg-muted/50"
                >
                  <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-foreground">
              <span className="font-bold text-primary">🎉 Condições especiais de lançamento!</span>
              <br />
              Entre em contato para garantir sua vaga e aproveitar benefícios exclusivos para os primeiros clientes.
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
