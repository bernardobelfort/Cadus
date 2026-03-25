import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { formatName } from '@/lib/masks';
import { UserRound, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientName = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [error, setError] = useState('');

  const handleChange = (value: string) => {
    updatePatientData({ nome: formatName(value) });
  };

  const handleSubmit = () => {
    if (!patientData.nome?.trim() || patientData.nome.trim().split(' ').length < 2) {
      setError('Por favor, informe seu nome completo.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className="card-cadus p-8 md:p-10">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
          <UserRound size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Como você se chama?
        </h2>
        <p className="text-muted-foreground mt-2 font-body">
          Queremos saber como te chamar.
        </p>
      </div>

      <div>
        <input
          className="input-cadus text-center text-lg"
          value={patientData.nome || ''}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Seu nome completo"
          autoFocus
        />
        {error && <p className="error-text text-center">{error}</p>}
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

export default StepPatientName;
