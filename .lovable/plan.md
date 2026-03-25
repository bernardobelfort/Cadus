

## Melhorias Visuais do Cadastro + Inclusão de Gênero

### Mudanças

**1. Remover contador "1/9" do header** (Registration.tsx, linha 103-105)
- Substituir o `{currentStep}/{totalSteps}` por espaço vazio (para manter simetria do header)

**2. Melhorar visual geral dos cards** (Registration.tsx + cada step)
- Card com `rounded-3xl` e sombra mais premium
- Atualizar `.card-cadus` no `index.css` para `rounded-3xl`, padding `p-8 md:p-10`, sombra mais refinada
- Ícones no topo com círculo maior (`w-18 h-18`) e gradiente suave em vez de `bg-accent` plano

**3. Redesign do StepPatientAbout — Inclusão de gênero**

Substituir a abordagem atual (4 opções fixas de "Sexo") por uma experiência mais inclusiva e sensível:

- **Label**: "Como você se identifica?" em vez de "Sexo"
- **Opções principais** (grid 2 colunas): Feminino, Masculino, Não-binário, Prefiro não informar
- **Se selecionar "Não-binário"**: aparece campo opcional "Qual pronome você prefere?" (Ela/Dela, Ele/Dele, Elu/Delu, Outro)
- **Campo adicional opcional** (para qualquer opção): "Tem um nome social? (opcional)" com input de texto — permite que a pessoa indique como prefere ser chamada se diferente do nome de registro
- Armazenar campos novos: `genero` (renomear `sexo`), `pronome`, `nomeSocial` no store

**4. Atualizar store** (registrationStore.ts)
- Renomear `sexo` → `genero` na interface `PatientData`
- Adicionar `pronome: string` e `nomeSocial: string`

**5. Melhorar estilo dos botões em todos os steps**
- Botão "Continuar" com leve gradiente teal e sombra glow sutil
- Botão "Voltar" apenas texto com ícone, sem borda (como já está nos novos steps)
- Garantir que steps antigos (About, StepProfile) sigam o mesmo padrão visual dos novos (ícone centralizado, título centrado, botão voltar discreto)

**6. StepProfile visual upgrade**
- Adicionar ícone centralizado no topo (como os outros steps)
- Card com `p-8 md:p-10` e `rounded-3xl`

### Arquivos a editar
- `src/index.css` — melhorar `.card-cadus` com `rounded-3xl` e sombra refinada
- `src/pages/Registration.tsx` — remover contador textual
- `src/components/registration/StepPatientAbout.tsx` — redesign completo com gênero inclusivo, pronomes, nome social
- `src/components/registration/StepProfile.tsx` — upgrade visual
- `src/store/registrationStore.ts` — renomear `sexo`→`genero`, adicionar `pronome`, `nomeSocial`

### Fluxo de gênero no StepPatientAbout

```text
┌─────────────────────────────┐
│        ❤️ (ícone)           │
│  Um pouco mais sobre você   │
│  Essas informações ajudam   │
│                             │
│  Data de nascimento         │
│  [____/____/________]       │
│                             │
│  Como você se identifica?   │
│  [Feminino] [Masculino]     │
│  [Não-binário] [Prefiro não]│
│                             │
│  ← se Não-binário:          │
│  Qual pronome você prefere? │
│  [Ela] [Ele] [Elu] [Outro] │
│                             │
│  Nome social (opcional)     │
│  [________________]         │
│  Como prefere ser chamado?  │
│                             │
│  [     Continuar →     ]    │
│       ← Voltar              │
└─────────────────────────────┘
```

