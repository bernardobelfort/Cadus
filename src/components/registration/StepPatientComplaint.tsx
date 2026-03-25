import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientComplaint = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!patientData.queixa?.trim()) {
      setError('Por favor, descreva por que está buscando atendimento.');
      return;
    }
    setError('');
    onNext();
  };

  const charCount = patientData.queixa?.length || 0;

  return (
    <div className="card-cadus p-8 md:p-10">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
          <MessageCircle size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Por que você busca atendimento?
        </h2>
        <p className="text-muted-foreground mt-2 font-body">
          Escreva com suas próprias palavras. Não precisa usar termos médicos.
        </p>
      </div>

      <div>
        <label className="label-cadus">Descreva sua queixa principal *</label>
        <textarea
          className="input-cadus min-h-[140px] resize-y"
          value={patientData.queixa || ''}
          onChange={(e) => updatePatientData({ queixa: e.target.value })}
          placeholder="Ex: Estou com dificuldade para engolir há alguns meses e sinto dor ao falar..."
          maxLength={2000}
        />
        <div className="flex justify-between mt-1">
          <p className="text-xs text-muted-foreground">O profissional vai ler exatamente o que você escrever aqui.</p>
          <span className="text-xs text-muted-foreground">{charCount}/2000</span>
        </div>
        {error && <p className="error-text">{error}</p>}
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

export default StepPatientComplaint;
