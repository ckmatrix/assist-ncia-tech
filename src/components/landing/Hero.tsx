import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Camera, Video, Shield, Wallet, MessageCircle, FileText, Bell } from "lucide-react";
import painelRelatorios from "@/assets/screenshots/painel-relatorios.png";
import painelFinanceiro from "@/assets/screenshots/painel-financeiro.png";
import conectarWhatsapp from "@/assets/screenshots/conectar-whatsapp.png";

const heroData = [
  { 
    src: painelRelatorios, 
    alt: "Painel de Relatórios - Assistência Tech",
    badge: { icon: "check", title: "OS Concluída!", subtitle: "iPhone 13 Pro Max" }
  },
  { 
    src: painelFinanceiro, 
    alt: "Painel Financeiro - Assistência Tech",
    badge: { icon: "wallet", title: "A Receber", subtitle: "R$ 1.000,00" }
  },
  { 
    src: conectarWhatsapp, 
    alt: "Integração WhatsApp - Assistência Tech",
    badge: { icon: "whatsapp", title: "WhatsApp Integrado", subtitle: "Notificações Automáticas" }
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToDemo = () => {
    // First dispatch the event to change tab to "cliente"
    window.dispatchEvent(new CustomEvent("showClienteDemo"));
    // Then scroll after a small delay to ensure tab is active
    setTimeout(() => {
      const demoSection = document.getElementById("demo-section");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Novo: Painel online para clientes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Gestão completa para sua{" "}
              <span className="text-gradient">assistência técnica</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Controle ordens de serviço, estoque, financeiro e clientes em um único sistema. 
              Seus clientes acompanham o reparo em tempo real.
            </p>

            {/* Seção Anexos na OS */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-5 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-primary/15 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Anexos na OS — acesso para você e seu cliente</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 pl-12">
                Tudo documentado dentro da ordem de serviço. Proteção garantida para ambos.
              </p>
              <div className="flex flex-wrap gap-3 pl-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Camera className="w-4 h-4 text-primary" />
                  <span>Fotos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Video className="w-4 h-4 text-primary" />
                  <span>Vídeos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Informações detalhadas</span>
                </div>
              </div>
            </div>

            {/* Seção WhatsApp Integrado */}
            <div className="bg-gradient-to-r from-[#25D366]/10 to-transparent rounded-2xl p-5 border-l-4 border-[#25D366]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-[#25D366]/15 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <h3 className="font-semibold text-foreground">WhatsApp Integrado — notificações automáticas</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 pl-12">
                Seu cliente recebe atualizações em tempo real direto no WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3 pl-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bell className="w-4 h-4 text-[#25D366]" />
                  <span>Status da OS</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Camera className="w-4 h-4 text-[#25D366]" />
                  <span>Fotos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 text-[#25D366]" />
                  <span>Documentos</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToDemo}>
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              {[
                "Sem cartão de crédito",
                "14 dias grátis",
                "Suporte incluído"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up lg:scale-125 lg:translate-x-8 lg:translate-y-8 self-start" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-6 bg-gradient-hero rounded-3xl opacity-25 blur-3xl"></div>
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {heroData.map((item, index) => (
                <img 
                  key={index}
                  src={item.src} 
                  alt={item.alt}
                  className={`w-full h-auto transition-opacity duration-700 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                />
              ))}
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  heroData[currentImageIndex].badge.icon === "check" 
                    ? "bg-success/20" 
                    : heroData[currentImageIndex].badge.icon === "whatsapp"
                    ? "bg-[#25D366]/20"
                    : "bg-primary/20"
                }`}>
                  {heroData[currentImageIndex].badge.icon === "check" ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : heroData[currentImageIndex].badge.icon === "whatsapp" ? (
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  ) : (
                    <Wallet className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{heroData[currentImageIndex].badge.title}</p>
                  <p className={`text-xs font-semibold ${
                    heroData[currentImageIndex].badge.icon === "check" 
                      ? "text-muted-foreground" 
                      : heroData[currentImageIndex].badge.icon === "whatsapp"
                      ? "text-[#25D366]"
                      : "text-primary"
                  }`}>
                    {heroData[currentImageIndex].badge.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
