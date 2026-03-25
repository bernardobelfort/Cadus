import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { formatCPF, validateCPF, getFirstName } from '@/lib/masks';
import { ShieldCheck, ArrowRight, ArrowLeft, Lock } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientCPF = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [error, setError] = useState('');
  const firstName = getFirstName(patientData.nome || '');

  const handleSubmit = () => {
    if (!patientData.cpf || !validateCPF(patientData.cpf)) {
      setError('Por favor, informe um CPF válido.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className="card-cadus p-8 md:p-10">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
          <ShieldCheck size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Olá, {firstName}!
        </h2>
        <p className="text-muted-foreground mt-2 font-body">
          Agora precisamos do seu CPF para sua segurança.
        </p>
      </div>

      <div>
        <input
          className="input-cadus text-center text-lg"
          value={patientData.cpf || ''}
          onChange={(e) => updatePatientData({ cpf: formatCPF(e.target.value) })}
          placeholder="000.000.000-00"
          inputMode="numeric"
          autoFocus
        />
        {error && <p className="error-text text-center">{error}</p>}
        <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-muted-foreground">
          <Lock size={12} />
          <span>Seus dados estão protegidos</span>
        </div>
      </div>

      <button onClick={handleSubmit} className="btn-primary w-full mt-8">
        Continuar <ArrowRight size={18} />
      </button>

      <button onClick={onBack} className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1 font-body">
        <ArrowLeft size={16} /> Voltar
      </button>
    </div>
  );
};

export default StepPatientCPF;
