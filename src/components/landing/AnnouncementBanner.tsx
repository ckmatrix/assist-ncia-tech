import { Sparkles } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-hero overflow-hidden">
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground mx-8">
          <Sparkles className="w-4 h-4" />
          🚀 LANÇAMENTO EM BREVE — Temos 10 vagas para novos clientes — Garanta condições especiais!
          <Sparkles className="w-4 h-4" />
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground mx-8">
          <Sparkles className="w-4 h-4" />
          🚀 LANÇAMENTO EM BREVE — Temos 10 vagas para novos clientes — Garanta condições especiais!
          <Sparkles className="w-4 h-4" />
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground mx-8">
          <Sparkles className="w-4 h-4" />
          🚀 LANÇAMENTO EM BREVE — Temos 10 vagas para novos clientes — Garanta condições especiais!
          <Sparkles className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
