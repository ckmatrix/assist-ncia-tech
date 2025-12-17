import { useEffect, useState, useRef } from "react";
import { CheckCircle, X } from "lucide-react";

const names = [
  "João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Lucas Souza",
  "Juliana Lima", "Carlos Ferreira", "Fernanda Alves", "Rafael Mendes", "Camila Rocha",
  "Bruno Martins", "Patrícia Gomes", "Thiago Ribeiro", "Larissa Barbosa", "Gustavo Pereira",
  "Marcos Andrade", "Beatriz Nascimento", "Diego Moreira", "Aline Cardoso", "Felipe Ramos",
  "Vanessa Teixeira", "Roberto Cunha", "Tatiane Freitas", "André Monteiro", "Carla Vieira",
  "Leonardo Campos", "Priscila Borges", "Fábio Araújo", "Renata Pinto", "Eduardo Lopes",
  "Daniela Correia", "Rodrigo Nunes", "Amanda Duarte", "Matheus Fonseca", "Jéssica Carvalho"
];

const cities = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR",
  "Porto Alegre, RS", "Salvador, BA", "Brasília, DF", "Fortaleza, CE",
  "Recife, PE", "Campinas, SP", "Goiânia, GO", "Manaus, AM", "Florianópolis, SC",
  "Vitória, ES", "Natal, RN", "João Pessoa, PB", "Belém, PA", "Londrina, PR"
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
      <div className="bg-card border border-border rounded-lg shadow-lg p-3 w-64 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-1.5 right-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        
        <div className="flex items-center gap-2 pr-4">
          <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
          
          <div className="flex-1">
            <p className="text-xs font-semibold text-foreground">
              {notification.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {notification.city}
            </p>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-t border-border/50">
          <p className="text-xs text-primary font-medium">
            ✅ Assinou o plano {notification.plan}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            há {notification.minutes} minuto{notification.minutes > 1 ? 's' : ''} atrás
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
