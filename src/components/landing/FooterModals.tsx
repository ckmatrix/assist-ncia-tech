import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface FooterModalsProps {
  aboutOpen: boolean;
  setAboutOpen: (open: boolean) => void;
  statusOpen: boolean;
  setStatusOpen: (open: boolean) => void;
  termsOpen: boolean;
  setTermsOpen: (open: boolean) => void;
  privacyOpen: boolean;
  setPrivacyOpen: (open: boolean) => void;
}

const FooterModals = ({
  aboutOpen,
  setAboutOpen,
  statusOpen,
  setStatusOpen,
  termsOpen,
  setTermsOpen,
  privacyOpen,
  setPrivacyOpen,
}: FooterModalsProps) => {
  useEffect(() => {
    const handleOpenPrivacy = () => setPrivacyOpen(true);
    document.addEventListener('openPrivacyModal', handleOpenPrivacy);
    return () => document.removeEventListener('openPrivacyModal', handleOpenPrivacy);
  }, [setPrivacyOpen]);

  const systemServices = [
    { name: "Plataforma Web", status: "operational" },
    { name: "API de Integração", status: "operational" },
    { name: "Banco de Dados", status: "operational" },
    { name: "Serviço de Notificações", status: "operational" },
    { name: "Painel do Cliente", status: "operational" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case "down":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operacional";
      case "degraded":
        return "Degradado";
      case "down":
        return "Fora do ar";
      default:
        return "Verificando...";
    }
  };

  return (
    <>
      {/* About Us Modal */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Sobre Nós</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A <strong className="text-foreground">Assistência Tech</strong> nasceu no segundo semestre de 2025 com a iniciativa de criar um sistema que realmente atenda às dores dos lojistas de assistência técnica, oferecendo qualidade e custo atrativo.
            </p>
            <p>
              Entendemos os desafios diários enfrentados por quem trabalha com reparos e manutenção de equipamentos. Por isso, desenvolvemos uma plataforma completa e intuitiva que integra todas as funcionalidades necessárias para o dia a dia de uma assistência técnica: desde o cadastro de ordens de serviço até o controle financeiro e gestão de estoque.
            </p>
            <p>
              Nossa missão é democratizar o acesso a ferramentas profissionais de gestão, permitindo que assistências técnicas de todos os tamanhos possam organizar seus processos, aumentar a produtividade e oferecer um atendimento de excelência aos seus clientes.
            </p>
            <h3 className="text-lg font-semibold text-foreground pt-4">Nossos Valores</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Inovação:</strong> Buscamos constantemente melhorar nossa plataforma com novas funcionalidades.</li>
              <li><strong>Transparência:</strong> Acreditamos em relações claras e honestas com nossos clientes.</li>
              <li><strong>Suporte:</strong> Oferecemos atendimento humanizado e eficiente.</li>
              <li><strong>Acessibilidade:</strong> Preços justos para que todos possam profissionalizar seu negócio.</li>
            </ul>
            <p className="pt-4">
              Estamos apenas começando nossa jornada, mas já trabalhamos para ser a principal referência em sistemas de gestão para assistências técnicas no Brasil, ajudando nossos clientes a crescerem de forma organizada e profissional.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* System Status Modal */}
      <Dialog open={statusOpen} onOpenChange={setStatusOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Status do Sistema</DialogTitle>
            <DialogDescription>
              Monitoramento em tempo real dos nossos serviços
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-green-600">Todos os sistemas operacionais</span>
            </div>
            <div className="space-y-2 mt-4">
              {systemServices.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <span className="text-sm font-medium">{service.name}</span>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(service.status)}
                    <span className="text-sm text-muted-foreground">
                      {getStatusText(service.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center pt-4">
              Última atualização: {new Date().toLocaleString("pt-BR")}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Use Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Termos de Uso</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground text-sm">
            <p className="text-xs">Última atualização: Janeiro de 2025</p>
            
            <h3 className="text-base font-semibold text-foreground">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e utilizar a plataforma Assistência Tech, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nossos serviços.
            </p>

            <h3 className="text-base font-semibold text-foreground">2. Descrição do Serviço</h3>
            <p>
              A Assistência Tech fornece uma plataforma de gestão para assistências técnicas, incluindo funcionalidades de controle de ordens de serviço, gestão de clientes, controle de estoque, relatórios financeiros e painel de acompanhamento para clientes.
            </p>

            <h3 className="text-base font-semibold text-foreground">3. Cadastro e Conta</h3>
            <p>
              Para utilizar nossos serviços, você deve criar uma conta fornecendo informações precisas e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
            </p>

            <h3 className="text-base font-semibold text-foreground">4. Uso Aceitável</h3>
            <p>Você concorda em não:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Utilizar o serviço para fins ilegais ou não autorizados</li>
              <li>Tentar acessar áreas restritas do sistema</li>
              <li>Compartilhar suas credenciais com terceiros</li>
              <li>Interferir no funcionamento normal da plataforma</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground">5. Pagamentos e Assinaturas</h3>
            <p>
              Os planos de assinatura são cobrados mensalmente. O não pagamento pode resultar na suspensão ou cancelamento do serviço. Reembolsos são concedidos conforme nossa política de reembolso.
            </p>

            <h3 className="text-base font-semibold text-foreground">6. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo, marcas, logos e software da plataforma são propriedade da Assistência Tech e protegidos por leis de propriedade intelectual.
            </p>

            <h3 className="text-base font-semibold text-foreground">7. Limitação de Responsabilidade</h3>
            <p>
              A Assistência Tech não se responsabiliza por danos indiretos, incidentais ou consequentes resultantes do uso ou impossibilidade de uso da plataforma.
            </p>

            <h3 className="text-base font-semibold text-foreground">8. Modificações</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após a publicação na plataforma.
            </p>

            <h3 className="text-base font-semibold text-foreground">9. Contato</h3>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato através do e-mail: contato@assistenciatech.com.br
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Política de Privacidade</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground text-sm">
            <p className="text-xs">Última atualização: Janeiro de 2025</p>
            
            <h3 className="text-base font-semibold text-foreground">1. Informações que Coletamos</h3>
            <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dados de cadastro (nome, e-mail, telefone, CNPJ)</li>
              <li>Informações de pagamento</li>
              <li>Dados de clientes e ordens de serviço cadastrados na plataforma</li>
              <li>Comunicações com nosso suporte</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground">2. Como Usamos suas Informações</h3>
            <p>Utilizamos as informações coletadas para:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Fornecer e manter nossos serviços</li>
              <li>Processar transações e enviar notificações relacionadas</li>
              <li>Melhorar e personalizar a experiência do usuário</li>
              <li>Enviar comunicações sobre atualizações e novidades</li>
              <li>Prevenir fraudes e garantir a segurança</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground">3. Compartilhamento de Dados</h3>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços que nos auxiliam na operação da plataforma, sempre sob acordos de confidencialidade.
            </p>

            <h3 className="text-base font-semibold text-foreground">4. Segurança dos Dados</h3>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações, incluindo criptografia, controle de acesso e monitoramento contínuo.
            </p>

            <h3 className="text-base font-semibold text-foreground">5. Seus Direitos</h3>
            <p>Você tem o direito de:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimentos fornecidos</li>
              <li>Solicitar portabilidade dos dados</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground">6. Cookies</h3>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
            </p>

            <h3 className="text-base font-semibold text-foreground">7. Retenção de Dados</h3>
            <p>
              Mantemos suas informações pelo tempo necessário para fornecer os serviços contratados ou conforme exigido por lei. Após o cancelamento da conta, os dados são excluídos em até 90 dias.
            </p>

            <h3 className="text-base font-semibold text-foreground">8. Contato</h3>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato: privacidade@assistenciatech.com.br
            </p>

            <h3 className="text-base font-semibold text-foreground">9. LGPD</h3>
            <p>
              Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterModals;
