const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de aproveitar a condição especial de lançamento do Assistência Tech!");

const AnnouncementBanner = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  const content = (
    <div className="inline-flex items-center gap-4 mx-8">
      <span className="text-sm md:text-base font-extrabold text-white tracking-wide bg-white/20 px-2 py-0.5 rounded">
        🚀 Lançamento Oficial!
      </span>
      <span className="text-white/60 font-extrabold text-sm md:text-base">—</span>
      <span className="text-sm md:text-base font-medium text-white/90">
        O <span className="font-bold text-yellow-300">Assistência Tech</span> está no ar!
      </span>
      <span className="text-white/60 font-extrabold text-sm md:text-base">•</span>
      <span className="text-sm md:text-base text-white/90">
        Os primeiros <span className="font-bold text-yellow-300">20 assinantes</span> ganham <span className="font-bold text-yellow-300">15% de desconto</span> nas <span className="font-bold text-yellow-300">2 primeiras mensalidades</span>
      </span>
      <span className="text-white/60 font-extrabold text-sm md:text-base">•</span>
      <span className="text-sm md:text-base font-bold text-gray-900 bg-yellow-300 px-4 py-1.5 rounded-full shadow-lg border-2 border-yellow-200 hover:bg-yellow-200 transition-all flex items-center gap-2">
        👉 Garantir minha vaga agora ✨
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
