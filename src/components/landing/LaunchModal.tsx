import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LogIn, Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import ExpiredModal from "./ExpiredModal";

interface LaunchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ExpiredData {
  companyName?: string;
  paymentUrl?: string;
  trustUnlockAvailable?: boolean;
}

const REMEMBER_KEY = "at_remember_login";

const LaunchModal = ({ open, onOpenChange }: LaunchModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expiredOpen, setExpiredOpen] = useState(false);
  const [expiredData, setExpiredData] = useState<ExpiredData>({});

  // Load saved credentials on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(REMEMBER_KEY);
      if (saved) {
        const { email: savedEmail, password: savedPassword } = JSON.parse(saved);
        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
        setRememberMe(true);
      }
    } catch {}
  }, []);

  // Clear fields when modal closes (unless remember is on)
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setError("");
      setShowPassword(false);
      if (!rememberMe) {
        setEmail("");
        setPassword("");
      }
    }
    onOpenChange(isOpen);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Save or clear remembered credentials
    if (rememberMe) {
      localStorage.setItem(REMEMBER_KEY, JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem(REMEMBER_KEY);
    }

    try {
      const res = await fetch("https://api.assistenciatech.com.br/auth/login-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 401) {
        setError("Email ou senha incorretos.");
        setLoading(false);
        return;
      }

      if (res.status === 403 && data.code === "COMPANY_EXPIRED") {
        setExpiredData({
          companyName: data.companyName,
          paymentUrl: data.paymentUrl,
          trustUnlockAvailable: data.trustUnlockAvailable,
        });
        setExpiredOpen(true);
        handleOpenChange(false);
        setLoading(false);
        return;
      }

      if (res.status === 503 && data.code === "MAINTENANCE_MODE") {
        setError("Sistema em manutenção. Tente novamente em alguns minutos.");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError("Erro ao fazer login. Tente novamente.");
        setLoading(false);
        return;
      }

      window.location.href = `https://app.assistenciatech.com.br/auth/callback?code=${encodeURIComponent(data.code)}`;
    } catch {
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <LogIn className="w-6 h-6 text-primary-foreground" />
              </div>
              Entrar no sistema
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleLogin} className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                disabled={loading}
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer select-none">
                Lembrar meu login
              </label>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="hero"
              className="w-full gap-2"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              {loading ? "Entrando..." : "Entrar"}
            </Button>

            <a
              href="https://app.assistenciatech.com.br/forgot-password"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-primary hover:underline"
            >
              Esqueci minha senha
            </a>
          </form>
        </DialogContent>
      </Dialog>

      <ExpiredModal
        open={expiredOpen}
        onOpenChange={setExpiredOpen}
        companyName={expiredData.companyName}
        paymentUrl={expiredData.paymentUrl}
        trustUnlockAvailable={expiredData.trustUnlockAvailable}
      />
    </>
  );
};

export default LaunchModal;
