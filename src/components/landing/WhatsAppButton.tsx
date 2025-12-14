import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Tenho interesse no sistema Assistência Tech. Gostaria de saber mais informações.");

const WhatsAppButton = () => {
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const calculateOffset = () => {
      const cookieConsent = localStorage.getItem("cookieConsent");
      const hasCookieBanner = !cookieConsent;

      const baseOffset = 24; // posição padrão, mais próxima da borda inferior
      const footerExtraOffset = 120; // quanto ele sobe quando encosta na linha de Termos/Privacidade/Cookies
      const cookieBannerHeight = hasCookieBanner ? 80 : 0;
      const extraCookieOffset = hasCookieBanner ? 32 : 0;

      const scrolledToFooter =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 160; // ajuste fino da altura do rodapé

      const scrollOffset = scrolledToFooter ? footerExtraOffset : 0;

      setBottomOffset(baseOffset + cookieBannerHeight + extraCookieOffset + scrollOffset);
    };

    calculateOffset();
    const interval = setInterval(calculateOffset, 500);
    window.addEventListener("scroll", calculateOffset);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", calculateOffset);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      style={{ bottom: `${bottomOffset}px` }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  );
};

export default WhatsAppButton;
