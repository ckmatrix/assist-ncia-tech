import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5511996053510";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Tenho interesse no sistema Assistência Tech. Gostaria de saber mais informações.");

const WhatsAppButton = () => {
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const calculateOffset = () => {
      const cookieConsent = localStorage.getItem("cookieConsent");
      const cookieBannerHeight = !cookieConsent ? 80 : 0;
      
      if (cookieBannerHeight > 0) {
        setBottomOffset(24 + cookieBannerHeight);
      } else {
        setBottomOffset(24);
      }
    };

    calculateOffset();
    const interval = setInterval(calculateOffset, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      style={{ marginBottom: bottomOffset > 24 ? `${bottomOffset - 24}px` : '0' }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  );
};

export default WhatsAppButton;
