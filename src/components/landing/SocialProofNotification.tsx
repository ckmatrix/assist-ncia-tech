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
  
  // Track used combinations to avoid repetition
  const usedCombinations = useRef<Set<string>>(new Set());
  const availableNames = useRef<string[]>([...names]);
  const availableCities = useRef<string[]>([...cities]);

  const getUniqueItem = <T,>(arr: T[], available: React.MutableRefObject<T[]>, original: T[]): T => {
    if (available.current.length === 0) {
      available.current = [...original];
    }
    const index = Math.floor(Math.random() * available.current.length);
    const item = available.current[index];
    available.current.splice(index, 1);
    return item;
  };

  const generateNotification = () => {
    const name = getUniqueItem(names, availableNames, names);
    const city = getUniqueItem(cities, availableCities, cities);
    const plan = plans[Math.floor(Math.random() * plans.length)];
    
    const combinationKey = `${name}-${city}`;
    
    // Ensure unique combination
    if (usedCombinations.current.has(combinationKey)) {
      // If we've used all combinations, reset
      if (usedCombinations.current.size >= names.length * cities.length * 0.5) {
        usedCombinations.current.clear();
      }
      return; // Skip this notification
    }
    
    usedCombinations.current.add(combinationKey);
    
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
      <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-72 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3 pr-4">
          <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-success" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {notification.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {notification.city}
            </p>
            <p className="text-xs text-primary font-medium mt-1">
              Assinou o plano {notification.plan}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              há {notification.minutes} minuto{notification.minutes > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
