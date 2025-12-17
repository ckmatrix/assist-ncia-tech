import { Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de aproveitar a condição especial de lançamento do Assistência Tech!");

const AnnouncementBanner = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <div 
      className="fixed top-16 left-0 right-0 z-40 bg-gradient-hero overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <div className="py-3 flex items-center justify-center animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="inline-flex items-center gap-3 mx-12">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm md:text-base font-bold text-primary-foreground tracking-wide">
              🚀 LANÇAMENTO EM BREVE
            </span>
            <span className="text-accent font-extrabold text-sm md:text-base">
              •
            </span>
            <span className="text-sm md:text-base font-semibold text-primary-foreground/90">
              Temos <span className="text-accent font-bold">10 vagas</span> para novos clientes
            </span>
            <span className="text-accent font-extrabold text-sm md:text-base">
              •
            </span>
            <span className="text-sm md:text-base font-bold text-accent underline underline-offset-2 group-hover:text-primary-foreground transition-colors">
              Garanta condições especiais →
            </span>
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
