import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientAbout = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!patientData.dataNascimento) e.dataNascimento = 'Por favor, informe sua data de nascimento.';
    if (!patientData.sexo) e.sexo = 'Por favor, selecione uma opção.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sexOptions = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'];

  return (
    <div className="card-cadus">
      <h2 className="text-xl font-display font-800 text-foreground">Um pouco mais sobre você</h2>
      <p className="text-muted-foreground text-sm mt-1 mb-6">Essas informações ajudam no seu atendimento.</p>

      <div className="space-y-4">
        <div>
          <label className="label-cadus">Sua data de nascimento *</label>
          <input
            type="date"
            className="input-cadus"
            value={patientData.dataNascimento || ''}
            onChange={(e) => updatePatientData({ dataNascimento: e.target.value })}
          />
          {errors.dataNascimento && <p className="error-text">{errors.dataNascimento}</p>}
        </div>

        <div>
          <label className="label-cadus">Sexo *</label>
          <div className="grid grid-cols-2 gap-2">
            {sexOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => updatePatientData({ sexo: opt })}
                className={`px-4 py-3 rounded-xl border-2 text-sm font-body font-500 transition-all duration-200 ${
                  patientData.sexo === opt
                    ? 'border-primary bg-accent text-foreground shadow-sm'
                    : 'border-border text-muted-foreground hover:border-primary/30 hover:bg-accent/50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {errors.sexo && <p className="error-text">{errors.sexo}</p>}
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

export default StepPatientAbout;
