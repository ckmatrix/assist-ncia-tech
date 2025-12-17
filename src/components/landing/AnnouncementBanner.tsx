import { Rocket, MessageSquare, Shield } from "lucide-react";

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
          <div key={i} className="inline-flex items-center gap-4 mx-16">
            <Rocket className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-extrabold text-white tracking-wide bg-white/20 px-2 py-0.5 rounded">
              Assistência Tech
            </span>
            <span className="text-white/60 font-extrabold text-sm md:text-base">—</span>
            <span className="text-sm md:text-base font-medium text-white/90">
              Sistema para Assistência Técnica com <span className="font-bold text-white">OS online</span> e <span className="font-bold text-white">notificações no WhatsApp</span>
            </span>
            <span className="text-white/60 font-extrabold text-sm md:text-base">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm md:text-base text-white/90">
                Mais <span className="font-bold text-white">controle</span>, mais <span className="font-bold text-white">profissionalismo</span> e mais <span className="font-bold text-white">tranquilidade</span>
              </span>
            </div>
            <span className="text-white/60 font-extrabold text-sm md:text-base">•</span>
            <span className="text-sm md:text-base font-bold text-white underline underline-offset-2 group-hover:text-white/80 transition-colors flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <MessageSquare className="w-4 h-4" />
              Fale conosco →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
