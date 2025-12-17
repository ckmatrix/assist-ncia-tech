import { useEffect, useState, useRef } from "react";
import { CheckCircle, X } from "lucide-react";

const names = [
  "João Silva",
  "Maria Santos", 
  "Pedro Oliveira",
  "Ana Costa",
  "Lucas Souza",
  "Juliana Lima",
  "Carlos Ferreira",
  "Fernanda Alves",
  "Rafael Mendes",
  "Camila Rocha",
  "Bruno Martins",
  "Patrícia Gomes",
  "Thiago Ribeiro",
  "Larissa Barbosa",
  "Gustavo Pereira"
];

const cities = [
  "São Paulo, SP",
  "Rio de Janeiro, RJ",
  "Belo Horizonte, MG",
  "Curitiba, PR",
  "Porto Alegre, RS",
  "Salvador, BA",
  "Brasília, DF",
  "Fortaleza, CE",
  "Recife, PE",
  "Campinas, SP"
];

// Peso menor para Enterprise (menos frequente)
const plans = ["Básico", "Básico", "Básico", "Profissional", "Profissional", "Profissional", "Profissional", "Enterprise"];

const getRandomMinutes = (): number => Math.floor(Math.random() * 15) + 1;

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: "",
    city: "",
    plan: "",
    minutes: 0
  });
  
  // Track used indices to ensure no repetition until all shown
  const usedIndices = useRef<Set<number>>(new Set());
  const notificationCount = useRef(0);
  const maxNotifications = names.length; // Show each name only once

  const generateNotification = () => {
    // Stop after showing all unique notifications
    if (notificationCount.current >= maxNotifications) {
      return;
    }

    // Find unused index
    let index: number;
    do {
      index = Math.floor(Math.random() * names.length);
    } while (usedIndices.current.has(index));
    
    usedIndices.current.add(index);
    notificationCount.current++;

    const name = names[index];
    const city = cities[index % cities.length];
    const plan = plans[Math.floor(Math.random() * plans.length)];
    
    setNotification({
      name,
      city,
      plan,
      minutes: getRandomMinutes()
    });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      generateNotification();
    }, 8000);

    const interval = setInterval(() => {
      generateNotification();
    }, 15000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-50 animate-fade-up">
      <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-80 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-center gap-3 pr-4">
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-success" />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">
              {notification.name}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {notification.city}
            </p>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-sm text-primary font-semibold">
            ✅ Assinou o plano {notification.plan}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            há {notification.minutes} minuto{notification.minutes > 1 ? 's' : ''} atrás
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
