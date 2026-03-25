import { useState, useCallback } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';
import { formatCEP, fetchAddress } from '@/lib/masks';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

interface Props { onNext: () => void; onBack: () => void; }

const StepPatientAddress = ({ onNext, onBack }: Props) => {
  const { patientData, updatePatientData } = useRegistrationStore();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loadingCep, setLoadingCep] = useState(false);

  const cepFilled = !!(patientData.rua && patientData.cidade);

  const handleCep = useCallback(async (value: string) => {
    const formatted = formatCEP(value);
    updatePatientData({ cep: formatted });
    const digits = formatted.replace(/\D/g, '');
    if (digits.length === 8) {
      setLoadingCep(true);
      const addr = await fetchAddress(digits);
      if (addr) updatePatientData(addr);
      setLoadingCep(false);
    }
  }, [updatePatientData]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!patientData.cep || patientData.cep.replace(/\D/g, '').length < 8) e.cep = 'Por favor, informe um CEP válido.';
    if (!patientData.numero?.trim()) e.numero = 'Por favor, informe o número.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="card-cadus">
      <h2 className="text-xl font-display font-800 text-foreground">Onde você mora?</h2>
      <p className="text-muted-foreground text-sm mt-1 mb-6">Digite seu CEP e preenchemos o resto pra você.</p>

      <div className="space-y-4">
        <div>
          <label className="label-cadus">CEP *</label>
          <div className="relative">
            <input
              className="input-cadus"
              value={patientData.cep || ''}
              onChange={(e) => handleCep(e.target.value)}
              placeholder="00000-000"
              inputMode="numeric"
            />
            {loadingCep && <Loader2 size={18} className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-muted-foreground" />}
          </div>
          {errors.cep && <p className="error-text">{errors.cep}</p>}
        </div>

        {cepFilled && (
          <div className="rounded-xl border border-border bg-muted/50 p-4 space-y-1">
            <p className="text-sm text-foreground">{patientData.rua}</p>
            <p className="text-sm text-muted-foreground">{patientData.bairro} — {patientData.cidade}/{patientData.estado}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label-cadus">Número *</label>
            <input
              className="input-cadus"
              value={patientData.numero || ''}
              onChange={(e) => updatePatientData({ numero: e.target.value })}
              placeholder="Nº"
            />
            {errors.numero && <p className="error-text">{errors.numero}</p>}
          </div>
          <div>
            <label className="label-cadus">Complemento</label>
            <input
              className="input-cadus"
              value={patientData.complemento || ''}
              onChange={(e) => updatePatientData({ complemento: e.target.value })}
              placeholder="Apto, bloco..."
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button onClick={onBack} className="btn-outline flex-1"><ArrowLeft size={18} /> Voltar</button>
        <button onClick={() => { if (validate()) onNext(); }} className="btn-primary flex-1">Continuar <ArrowRight size={18} /></button>
      </div>
    </div>
  );
};

export default StepPatientAddress;
