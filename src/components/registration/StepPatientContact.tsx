import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { formatPhone, getFirstName } from '@/lib/masks';
import { Phone, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientContact = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!patientData.telefone || patientData.telefone.replace(/\D/g, '').length < 10)
      e.telefone = 'Por favor, informe um telefone válido.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="card-cadus p-8 md:p-10">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
          <Phone size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Como falar com você?
        </h2>
        <p className="text-muted-foreground mt-2 font-body">Para a clínica entrar em contato, se precisar.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="label-cadus">Seu celular ou telefone *</label>
          <input
            className="input-cadus"
            value={patientData.telefone || ''}
            onChange={(e) => updatePatientData({ telefone: formatPhone(e.target.value) })}
            placeholder="(00) 00000-0000"
            inputMode="tel"
          />
          {errors.telefone && <p className="error-text">{errors.telefone}</p>}
        </div>

        <div>
          <label className="label-cadus">Seu e-mail (opcional)</label>
          <input
            type="email"
            className="input-cadus"
            value={patientData.email || ''}
            onChange={(e) => updatePatientData({ email: e.target.value })}
            placeholder="seu@email.com"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Se não tiver e-mail, tudo bem. Você pode usar só o CPF para entrar.
          </p>
        </div>
      </div>

      <button onClick={() => { if (validate()) onNext(); }} className="btn-primary w-full mt-8">
        Continuar <ArrowRight size={18} />
      </button>

      <button onClick={onBack} className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1 font-body">
        <ArrowLeft size={16} /> Voltar
      </button>
    </div>
  );
};

export default StepPatientContact;
