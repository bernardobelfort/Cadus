import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { FileHeart, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const comoChegouOptions = [
  'Encaminhado pelo SUS',
  'Indicação médica',
  'Vim por conta própria',
  'Outro',
];

const StepPatientSus = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!patientData.comoChegou) {
      setError('Por favor, informe como chegou até nós.');
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
          <FileHeart size={36} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Informações do SUS
        </h2>
        <p className="text-muted-foreground/80 mt-2 font-body">Dados complementares do seu atendimento.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="label-cadus">Cartão SUS (opcional)</label>
          <input
            className="input-cadus"
            value={patientData.cartaoSus || ''}
            onChange={(e) => updatePatientData({ cartaoSus: e.target.value.replace(/\D/g, '').slice(0, 15) })}
            placeholder="Número do Cartão SUS"
            inputMode="numeric"
          />
        </div>

        <div>
          <label className="label-cadus">Como chegou até nós? *</label>
          <div className="grid grid-cols-2 gap-2.5">
            {comoChegouOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => updatePatientData({ comoChegou: opt })}
                className={`rounded-xl border-2 py-3 px-3 text-sm font-body font-500 transition-all duration-200 hover:scale-[1.02] ${
                  patientData.comoChegou === opt
                    ? 'border-primary bg-accent text-primary'
                    : 'border-border/60 hover:border-primary/30 bg-card text-foreground'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label-cadus flex items-center gap-3">
            <input
              type="checkbox"
              checked={patientData.temResponsavel || false}
              onChange={(e) => updatePatientData({ temResponsavel: e.target.checked, nomeResponsavel: e.target.checked ? patientData.nomeResponsavel : '' })}
              className="w-5 h-5 rounded-md border-2 border-border accent-primary"
            />
            <span>Possui responsável legal</span>
          </label>
          {patientData.temResponsavel && (
            <input
              className="input-cadus mt-3 animate-in fade-in duration-200"
              placeholder="Nome do responsável"
              value={patientData.nomeResponsavel || ''}
              onChange={(e) => updatePatientData({ nomeResponsavel: e.target.value })}
            />
          )}
        </div>

        {error && <p className="error-text">{error}</p>}
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

export default StepPatientSus;
