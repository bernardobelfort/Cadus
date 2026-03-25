import { useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { Heart, ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const genderOptions = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'];
const pronomeOptions = ['Ela/Dela', 'Ele/Dele', 'Elu/Delu', 'Outro'];

const StepPatientGender = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [error, setError] = useState('');
  const [generoOutro, setGeneroOutro] = useState('');
  const [pronomeOutro, setPronomeOutro] = useState('');

  const selectedGenero = patientData.genero || '';
  const showGenderInput = selectedGenero === 'Outro';
  const showExtras = selectedGenero === 'Outro' || selectedGenero === 'Prefiro não informar';

  const handleSelectGenero = (opt: string) => {
    updatePatientData({ genero: opt });
    if (!['Outro', 'Prefiro não informar'].includes(opt)) {
      updatePatientData({ pronome: '', nomeSocial: '' });
      setGeneroOutro('');
      setPronomeOutro('');
    }
    setError('');
  };

  const validate = () => {
    if (!selectedGenero) {
      setError('Por favor, selecione uma opção.');
      return false;
    }
    if (selectedGenero === 'Outro' && !generoOutro.trim()) {
      setError('Por favor, informe como você se identifica.');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;
    if (selectedGenero === 'Outro') {
      updatePatientData({ genero: `Outro: ${generoOutro.trim()}` });
    }
    if (patientData.pronome === 'Outro' && pronomeOutro.trim()) {
      updatePatientData({ pronome: `Outro: ${pronomeOutro.trim()}` });
    }
    onNext();
  };

  return (
    <div className="card-cadus">
      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{
          background: 'linear-gradient(145deg, hsl(184, 40%, 92%), hsl(184, 40%, 86%))',
          boxShadow: '0 8px 24px rgba(13, 92, 99, 0.1)'
        }}>
          <Heart size={36} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-800 text-foreground tracking-tight">
          Como você se identifica?
        </h2>
        <p className="text-muted-foreground/80 mt-2 font-body">Selecione a opção que melhor te representa.</p>
      </div>

      <div className="space-y-5">
        <div>
          <div className="grid grid-cols-2 gap-3">
            {genderOptions.slice(0, 2).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelectGenero(opt)}
                className={`relative rounded-2xl border-2 py-4 px-4 text-center font-display font-600 text-[15px] transition-all duration-300 hover:scale-[1.02] ${
                  selectedGenero === opt
                    ? 'border-primary bg-accent shadow-md'
                    : 'border-border/60 hover:border-primary/30 hover:shadow-md bg-card'
                }`}
              >
                {selectedGenero === opt && (
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check size={12} className="text-primary-foreground" />
                  </div>
                )}
                {opt}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-14">
            {genderOptions.slice(2).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelectGenero(opt)}
                className={`relative rounded-2xl border-2 py-4 px-4 text-center font-display font-600 text-[15px] transition-all duration-300 hover:scale-[1.02] ${
                  selectedGenero === opt || (opt === 'Outro' && selectedGenero.startsWith('Outro'))
                    ? 'border-primary bg-accent shadow-md'
                    : 'border-border/60 hover:border-primary/30 hover:shadow-md bg-card'
                }`}
              >
                {(selectedGenero === opt || (opt === 'Outro' && selectedGenero.startsWith('Outro'))) && (
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check size={12} className="text-primary-foreground" />
                  </div>
                )}
                {opt}
              </button>
            ))}
          </div>
          {error && <p className="error-text mt-3">{error}</p>}
        </div>

        {showGenderInput && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="label-cadus">Como você se identifica?</label>
            <input
              className="input-cadus"
              value={generoOutro}
              onChange={(e) => setGeneroOutro(e.target.value)}
              placeholder="Digite aqui..."
            />
          </div>
        )}

        {showExtras && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-5">
            <div>
              <label className="label-cadus">Qual pronome você prefere? (opcional)</label>
              <div className="grid grid-cols-2 gap-2.5">
                {pronomeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updatePatientData({ pronome: opt })}
                    className={`rounded-xl border-2 py-3 px-3 text-sm font-body font-500 transition-all duration-200 ${
                      patientData.pronome === opt
                        ? 'border-primary bg-accent text-primary'
                        : 'border-border/60 hover:border-primary/30 bg-card text-foreground'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {patientData.pronome === 'Outro' && (
                <input
                  className="input-cadus mt-2.5"
                  value={pronomeOutro}
                  onChange={(e) => setPronomeOutro(e.target.value)}
                  placeholder="Qual pronome?"
                />
              )}
            </div>

            <div>
              <label className="label-cadus">Nome social (opcional)</label>
              <input
                className="input-cadus"
                value={patientData.nomeSocial || ''}
                onChange={(e) => updatePatientData({ nomeSocial: e.target.value })}
                placeholder="Como prefere ser chamado?"
              />
              <p className="text-xs text-muted-foreground/70 mt-1.5">Se preferir ser chamado de outro nome, informe aqui.</p>
            </div>
          </div>
        )}
      </div>

      <button onClick={handleNext} className="btn-primary w-full mt-8 group">
        Continuar <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>

      <button onClick={onBack} className="w-full mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1.5 font-body py-2">
        <ArrowLeft size={16} /> Voltar
      </button>
    </div>
  );
};

export default StepPatientGender;
