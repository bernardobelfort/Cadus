import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { formatCPF, validateCPF } from '@/lib/masks';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientIdentity = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!patientData.nome?.trim()) e.nome = 'Por favor, informe seu nome completo.';
    if (!patientData.cpf || !validateCPF(patientData.cpf)) e.cpf = 'Por favor, informe um CPF válido.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="card-cadus">
      <h2 className="text-xl font-display font-800 text-foreground">Como você se chama?</h2>
      <p className="text-muted-foreground text-sm mt-1 mb-6">Vamos começar pelo básico. É rapidinho!</p>

      <div className="space-y-4">
        <div>
          <label className="label-cadus">Seu nome completo *</label>
          <input
            className="input-cadus"
            value={patientData.nome || ''}
            onChange={(e) => updatePatientData({ nome: e.target.value })}
            placeholder="Ex: Maria das Graças Silva"
          />
          {errors.nome && <p className="error-text">{errors.nome}</p>}
        </div>

        <div>
          <label className="label-cadus">Seu CPF *</label>
          <input
            className="input-cadus"
            value={patientData.cpf || ''}
            onChange={(e) => updatePatientData({ cpf: formatCPF(e.target.value) })}
            placeholder="000.000.000-00"
            inputMode="numeric"
          />
          {errors.cpf && <p className="error-text">{errors.cpf}</p>}
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

export default StepPatientIdentity;
