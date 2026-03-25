import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { getFirstName } from '@/lib/masks';
import { MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientComplaint = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [error, setError] = useState('');
  const firstName = getFirstName(patientData.nome || '');
  const charCount = patientData.queixa?.length || 0;

  const handleSubmit = () => {
    if (!patientData.queixa?.trim()) {
      setError('Por favor, descreva brevemente o motivo.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <div className="card-cadus">
      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{
          background: 'linear-gradient(145deg, hsl(184, 40%, 92%), hsl(184, 40%, 86%))',
          boxShadow: '0 8px 24px rgba(13, 92, 99, 0.1)'
        }}>
          <MessageCircle size={36} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          {firstName ? `${firstName}, por que você busca atendimento?` : 'Por que você busca atendimento?'}
        </h2>
        <p className="text-muted-foreground/80 mt-2 font-body">Conte brevemente o que está sentindo.</p>
      </div>

      <div>
        <textarea
          className="input-cadus min-h-[140px] resize-none"
          value={patientData.queixa || ''}
          onChange={(e) => updatePatientData({ queixa: e.target.value })}
          placeholder="Descreva aqui sua queixa principal..."
          maxLength={2000}
          rows={5}
        />
        <div className="flex justify-between mt-2">
          <p className="text-xs text-muted-foreground/70">Escreva com suas palavras, sem termos técnicos.</p>
          <span className="text-xs text-muted-foreground/50">{charCount}/2000</span>
        </div>
        {error && <p className="error-text mt-2">{error}</p>}
      </div>

      <button onClick={handleSubmit} className="btn-primary w-full mt-8 group">
        Continuar <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>

      <button onClick={onBack} className="w-full mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1.5 font-body py-2">
        <ArrowLeft size={16} /> Voltar
      </button>
    </div>
  );
};

export default StepPatientComplaint;
