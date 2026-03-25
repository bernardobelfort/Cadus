import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { Lock, ArrowLeft, Check, Eye, EyeOff, Loader2 } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientAccess = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData, completeRegistration } = useRegistrationStore();
  const [confirmSenha, setConfirmSenha] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const senha = patientData.senha || '';
  const hasMin8 = senha.length >= 8;
  const hasUpper = /[A-Z]/.test(senha);
  const hasNumber = /\d/.test(senha);
  const passMatch = senha === confirmSenha && senha.length > 0;
  const strength = [hasMin8, hasUpper, hasNumber].filter(Boolean).length;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!hasMin8 || !hasUpper || !hasNumber) e.senha = 'A senha não atende aos requisitos.';
    if (!passMatch) e.confirm = 'As senhas não coincidem.';
    if (!accepted) e.terms = 'Você precisa aceitar os termos para continuar.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    completeRegistration();
    setLoading(false);
    onNext();
  };

  return (
    <div className="card-cadus">
      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{
          background: 'linear-gradient(145deg, hsl(184, 40%, 92%), hsl(184, 40%, 86%))',
          boxShadow: '0 8px 24px rgba(13, 92, 99, 0.1)'
        }}>
          <Lock size={36} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Crie seu acesso
        </h2>
        <p className="text-muted-foreground/80 mt-2 font-body">Última etapa! Defina uma senha segura.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="label-cadus">CPF (seu login)</label>
          <input className="input-cadus bg-muted/30" value={patientData.cpf || ''} readOnly />
        </div>

        <div>
          <label className="label-cadus">Crie uma senha *</label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              className="input-cadus pr-12"
              value={senha}
              onChange={(e) => updatePatientData({ senha: e.target.value })}
              placeholder="Sua senha"
            />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Strength bar */}
          {senha.length > 0 && (
            <div className="mt-3 animate-in fade-in duration-200">
              <div className="flex gap-1.5 mb-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-1.5 flex-1 rounded-full transition-all duration-300"
                    style={{
                      background: strength >= i
                        ? i === 1 ? 'hsl(0, 72%, 51%)' : i === 2 ? 'hsl(40, 90%, 50%)' : 'hsl(150, 60%, 40%)'
                        : 'hsl(220, 13%, 91%)'
                    }}
                  />
                ))}
              </div>
              <div className="space-y-1.5">
                {[
                  { ok: hasMin8, text: 'Pelo menos 8 caracteres' },
                  { ok: hasUpper, text: 'Uma letra maiúscula' },
                  { ok: hasNumber, text: 'Um número' },
                ].map((req, i) => (
                  <div key={i} className={`flex items-center gap-2 text-xs font-body transition-colors ${req.ok ? 'text-primary' : 'text-muted-foreground/50'}`}>
                    <Check size={13} className={req.ok ? 'opacity-100' : 'opacity-30'} />
                    {req.text}
                  </div>
                ))}
              </div>
            </div>
          )}
          {errors.senha && <p className="error-text">{errors.senha}</p>}
        </div>

        <div>
          <label className="label-cadus">Repita a senha *</label>
          <input
            type={showPass ? 'text' : 'password'}
            className="input-cadus"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            placeholder="Confirme sua senha"
          />
          {errors.confirm && <p className="error-text">{errors.confirm}</p>}
        </div>

        <label className="flex items-start gap-3 cursor-pointer group pt-1">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 w-5 h-5 rounded-md border-2 border-border accent-primary flex-shrink-0"
          />
          <span className="text-sm text-muted-foreground leading-relaxed font-body group-hover:text-foreground transition-colors">
            Li e aceito os <a href="#" className="text-primary underline">Termos de Uso</a> e a <a href="#" className="text-primary underline">Política de Privacidade</a>
          </span>
        </label>
        {errors.terms && <p className="error-text">{errors.terms}</p>}
      </div>

      <button onClick={handleSubmit} disabled={loading} className="btn-primary w-full mt-8 group">
        {loading ? <><Loader2 size={18} className="animate-spin" /> Criando seu cadastro...</> : <><Check size={18} /> Criar minha conta</>}
      </button>

      <button onClick={onBack} disabled={loading} className="w-full mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1.5 font-body py-2">
        <ArrowLeft size={16} /> Voltar
      </button>
    </div>
  );
};

export default StepPatientAccess;
