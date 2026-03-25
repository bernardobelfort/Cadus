import { useRegistrationStore } from '@/store/registrationStore';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientSus = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();

  return (
    <div className="card-cadus">
      <h2 className="text-xl font-display font-800 text-foreground">Informações do SUS</h2>
      <p className="text-muted-foreground text-sm mt-1 mb-6">Quase lá! Só mais algumas informações.</p>

      <div className="space-y-4">
        <div>
          <label className="label-cadus">Número do seu Cartão SUS (se tiver)</label>
          <input
            className="input-cadus"
            value={patientData.cartaoSus || ''}
            onChange={(e) => updatePatientData({ cartaoSus: e.target.value })}
            placeholder="Opcional"
          />
        </div>

        <div>
          <label className="label-cadus">Como você chegou até nós?</label>
          <div className="flex flex-col gap-2">
            {['Encaminhado pelo SUS', 'Vim por conta própria'].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => updatePatientData({ comoChegou: opt })}
                className={`px-4 py-3 rounded-xl border-2 text-sm text-left font-body transition-all duration-200 ${
                  patientData.comoChegou === opt
                    ? 'border-primary bg-accent shadow-sm'
                    : 'border-border hover:border-primary/30 hover:bg-accent/50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label-cadus">Você tem responsável legal?</label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => updatePatientData({ temResponsavel: true })}
              className={`px-6 py-3 rounded-xl border-2 text-sm font-body transition-all duration-200 ${
                patientData.temResponsavel === true ? 'border-primary bg-accent shadow-sm' : 'border-border hover:border-primary/30'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => updatePatientData({ temResponsavel: false, nomeResponsavel: '' })}
              className={`px-6 py-3 rounded-xl border-2 text-sm font-body transition-all duration-200 ${
                patientData.temResponsavel === false ? 'border-primary bg-accent shadow-sm' : 'border-border hover:border-primary/30'
              }`}
            >
              Não
            </button>
          </div>
          {patientData.temResponsavel && (
            <div className="mt-3">
              <label className="label-cadus">Nome do responsável legal</label>
              <input
                className="input-cadus"
                value={patientData.nomeResponsavel || ''}
                onChange={(e) => updatePatientData({ nomeResponsavel: e.target.value })}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button onClick={onBack} className="btn-outline flex-1">
          <ArrowLeft size={18} /> Voltar
        </button>
        <button onClick={onNext} className="btn-primary flex-1">
          Continuar <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default StepPatientSus;
