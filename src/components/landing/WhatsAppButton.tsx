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
      
      const footer = document.querySelector("footer");
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      
      // Check if near footer
      const distanceFromBottom = docHeight - (scrollTop + windowHeight);
      const footerHeight = footer?.offsetHeight || 200;
      
      if (distanceFromBottom < footerHeight) {
        // Near footer - move button up
        const overlap = footerHeight - distanceFromBottom;
        setBottomOffset(Math.max(24, overlap + 24 + cookieBannerHeight));
      } else if (cookieBannerHeight > 0) {
        // Cookie banner visible
        setBottomOffset(24 + cookieBannerHeight);
      } else {
        setBottomOffset(24);
      }
    };

    calculateOffset();
    window.addEventListener("scroll", calculateOffset);
    window.addEventListener("resize", calculateOffset);
    
    // Re-check when cookie consent changes
    const interval = setInterval(calculateOffset, 500);

    return () => {
      window.removeEventListener("scroll", calculateOffset);
      window.removeEventListener("resize", calculateOffset);
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{ bottom: `${bottomOffset}px` }}
      className="fixed right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </button>
  );
};

export default WhatsAppButton;
