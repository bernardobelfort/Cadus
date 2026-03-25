import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { formatPhone } from '@/lib/masks';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    <div className="card-cadus">
      <h2 className="text-xl font-display font-800 text-foreground">Como falar com você?</h2>
      <p className="text-muted-foreground text-sm mt-1 mb-6">Para a clínica entrar em contato, se precisar.</p>

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

      <div className="flex gap-3 mt-8">
        <button onClick={onBack} className="btn-outline flex-1">
          <ArrowLeft size={18} /> Voltar
        </button>
        <button onClick={() => { if (validate()) onNext(); }} className="btn-primary flex-1">
          Continuar <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StepPatientContact;
