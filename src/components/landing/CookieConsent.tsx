import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg animate-fade-in">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="w-6 h-6 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{" "}
            <button 
              onClick={() => document.dispatchEvent(new CustomEvent('openPrivacyModal'))}
              className="text-primary hover:underline"
            >
              Política de Privacidade
            </button>.
          </p>
        </div>
        <Button onClick={handleAccept} size="sm" className="shrink-0">
          Aceitar Cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
