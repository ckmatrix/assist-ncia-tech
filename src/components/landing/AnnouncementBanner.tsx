const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de aproveitar a condição especial de lançamento do Assistência Tech!");

const AnnouncementBanner = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  const content = (
    <div className="inline-flex items-center gap-4 mx-8">
      <span className="text-sm md:text-base font-extrabold text-white tracking-wide bg-white/20 px-2 py-0.5 rounded">
        🚀 Assistência Tech
      </span>
      <span className="text-white/60 font-extrabold text-sm md:text-base">—</span>
      <span className="text-sm md:text-base font-medium text-white/90">
        Sistema para Assistência Técnica com <span className="font-bold text-yellow-300">📋 OS online</span> e <span className="font-bold text-yellow-300">💬 notificações no WhatsApp</span>
      </span>
      <span className="text-white/60 font-extrabold text-sm md:text-base">•</span>
      <span className="text-sm md:text-base text-white/90">
        Mais <span className="font-bold text-yellow-300">✅ controle</span>, mais <span className="font-bold text-yellow-300">⭐ profissionalismo</span> e mais <span className="font-bold text-yellow-300">💚 tranquilidade</span>
      </span>
      <span className="text-white/60 font-extrabold text-sm md:text-base">•</span>
      <span className="text-sm md:text-base font-bold text-white underline underline-offset-2 group-hover:text-white/80 transition-colors flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
        👉 Quero garantir minha vaga no lançamento
      </span>
    </div>
  );

  return (
    <div 
      className="fixed top-16 left-0 right-0 z-40 bg-gradient-hero overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <div className="py-3 flex items-center whitespace-nowrap animate-marquee-infinite group-hover:[animation-play-state:paused]">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
