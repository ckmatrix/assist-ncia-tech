import { Rocket } from "lucide-react";

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de aproveitar a condição especial de lançamento do Assistência Tech!");

const AnnouncementBanner = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <div 
      className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <div className="animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap py-2.5 flex items-center gap-12">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm font-medium tracking-wide">
            <Rocket className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground/90">
              <span className="font-bold text-primary-foreground">Assistência Tech</span>
              {" — "}Sistema completo para Assistência Técnica
              {" • "}
              <span className="text-primary-foreground/80">OS online</span>
              {" • "}
              <span className="text-primary-foreground/80">WhatsApp integrado</span>
              {" • "}
              <span className="text-primary-foreground/80">Mais controle e profissionalismo</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
