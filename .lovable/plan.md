

## Dois problemas para corrigir

### 1. Validação de CPF relaxada (modo teste)

Atualmente `validateCPF` faz validação matemática completa. Substituir por uma validação simples que aceita qualquer sequência de 11 digitos.

**Arquivo:** `src/lib/masks.ts`
- `validateCPF`: mudar para apenas verificar se tem 11 digitos (sem checagem de digitos verificadores nem rejeição de sequências repetidas)

Isso afeta automaticamente `StepPatientCPF.tsx`, `StepProfPersonal.tsx` e `StepPatientPersonal.tsx`.

### 2. Bug do `formatName` com acentos

O problema: `\b\w` e `\B\w` em regex JS não tratam caracteres acentuados como "word characters". Então após "ã" em "João", o "O" é tratado como início de palavra e fica maiúsculo → "JoãO".

**Arquivo:** `src/lib/masks.ts`
- Reescrever `formatName` sem usar `\b\w` / `\B\w`. Usar split por espaço, capitalizar apenas o primeiro caractere de cada palavra e lowercase o restante.

**Arquivos editados:** `src/lib/masks.ts` (apenas)

