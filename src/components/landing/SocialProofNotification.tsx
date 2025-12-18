import { useEffect, useState, useRef } from "react";
import { CheckCircle, X } from "lucide-react";

const names = [
  "João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Lucas Souza",
  "Juliana Lima", "Carlos Ferreira", "Fernanda Alves", "Rafael Mendes", "Camila Rocha",
  "Bruno Martins", "Patrícia Gomes", "Thiago Ribeiro", "Larissa Barbosa", "Gustavo Pereira",
  "Marcos Andrade", "Beatriz Nascimento", "Diego Moreira", "Aline Cardoso", "Felipe Ramos",
  "Vanessa Teixeira", "Roberto Cunha", "Tatiane Freitas", "André Monteiro", "Carla Vieira",
  "Leonardo Campos", "Priscila Borges", "Fábio Araújo", "Renata Pinto", "Eduardo Lopes",
  "Daniela Correia", "Rodrigo Nunes", "Amanda Duarte", "Matheus Fonseca", "Jéssica Carvalho",
  "Ricardo Azevedo", "Luciana Machado", "Henrique Dias", "Cristiane Moura", "Vitor Hugo",
  "Simone Medeiros", "Gabriel Santos", "Mariana Almeida", "Alexandre Pires", "Cláudia Reis",
  "Leandro Costa", "Paula Fernandes", "Marcelo Barros", "Adriana Sousa", "Fernando Nogueira",
  "Sandra Oliveira", "Rogério Lima", "Natália Gonçalves", "Vinícius Amaral", "Eliana Castro",
  "Renato Teixeira", "Mônica Freire", "Sérgio Melo", "Letícia Brandão", "Wagner Rocha",
  "Carolina Neves", "Otávio Guimarães", "Débora Sampaio", "Jorge Figueiredo", "Raquel Prado",
  "Antônio Carvalho", "Eliane Batista", "Paulo Henrique", "Fabiana Leal", "Márcio Xavier",
  "Kátia Andrade", "Roberto Vieira", "Viviane Mendes", "Edson Tavares", "Rosana Brito",
  "Flávio Ribeiro", "Denise Macedo", "Cícero Moreira", "Valéria Cruz", "Maurício Sá",
  "Solange Duarte", "Nilton Bastos", "Regina Fontes", "Oswaldo Gomes", "Célia Ramos",
  "Milton Coelho", "Marlene Pinto", "Geraldo Lopes", "Sueli Franco", "Aloísio Cunha",
  "Marta Pereira", "Joaquim Araújo", "Terezinha Lima", "Valdir Costa", "Neusa Ferreira",
  "Ademir Santos", "Inês Correia", "Sebastião Nunes", "Aparecida Borges", "Adilson Campos",
  "Joana Monteiro", "Wilson Alves", "Tereza Souza", "Arnaldo Silva", "Irene Barbosa",
  "Nelson Rodrigues", "Conceição Martins", "Cláudio Fonseca", "Lúcia Nascimento", "Reginaldo Pires",
  "Helena Reis", "Benedito Teixeira", "Rosa Maria", "Domingos Freitas", "Francisca Lopes",
  "Lúcio Medeiros", "Antônia Dias", "Everaldo Melo", "Margarida Moura", "Lindomar Guimarães",
  "Josefa Costa", "Edinaldo Oliveira", "Socorro Lima", "Valdeci Souza", "Iracema Carvalho",
  "Erivaldo Santos", "Dalva Pereira", "Rivaldo Ferreira", "Zuleide Gomes", "Ednaldo Ramos",
  "Severina Cruz", "Claudemir Brito", "Luciene Tavares", "Genival Macedo", "Ivonete Sampaio",
  "Damião Vieira", "Quitéria Prado", "Eronildo Mendes", "Ivanilda Batista", "Cicinho Xavier",
  "Geralda Leal", "Toninho Bastos", "Ivone Fontes", "Arlindo Coelho", "Marilene Franco",
  "Zezinho Cunha", "Teresinha Araújo", "Manoel Santos", "Djanira Correia", "Adão Monteiro",
  "Creuza Alves", "Josias Lima", "Lindalva Barbosa", "Elias Rodrigues", "Raimunda Martins",
  "Isaías Costa", "Aldenora Fonseca", "Natalino Reis", "Zenilda Pires", "Silvestre Freitas",
  "Maura Medeiros", "Justino Dias", "Osmarina Melo", "Valdomiro Guimarães", "Idalina Moura",
  "Esmeraldo Teixeira", "Valdira Nascimento", "Clementino Tavares", "Rosaura Macedo", "Ubiratan Sampaio",
  "Zelinda Vieira", "Josenildo Prado", "Nalva Mendes", "Claudionor Batista", "Gildete Xavier",
  "Edvaldo Leal", "Zilma Bastos", "Januário Fontes", "Odaléia Coelho", "Valdemar Franco"
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
            ✅ Garantiu condição de lançamento
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
