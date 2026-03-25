

## Upgrade Visual Premium do Cadastro

### Problemas atuais
- **StepProfile**: cards de Paciente/Profissional são caixinhas básicas sem impacto, ícone do topo genérico
- **Steps do paciente**: todos idênticos visualmente — mesma caixinha teal com ícone, sem variação, sem personalidade
- **Steps do profissional**: completamente sem estilo — sem ícone no topo, sem header visual, layout bruto com h2 simples
- **Inputs/botões**: funcionais mas sem refinamento premium (sem micro-interações, sem estados visuais ricos)
- **Success screen**: básica, sem celebração real
- **Card base**: sombras fracas, sem profundidade visual convincente

### Plano de mudanças

**1. CSS Global (`src/index.css`)**
- Upgrade `.card-cadus`: sombra mais dramática com 4 camadas, borda `border border-white/50`, inner glow sutil
- Novo `.input-cadus:hover`: borda muda de cor suavemente antes do foco
- Novo `.selection-card`: classe base para botões de seleção (gênero, SUS, profile) com hover elevation, borda animada, checkmark consistente
- Novo `.icon-hero`: classe para o ícone circular do topo de cada step, com gradiente e glow padronizado

**2. StepProfile — Redesign completo**
- Cards maiores com `min-h-[220px]`, layout vertical com ícone hero grande (`w-18 h-18`), título bold, descrição, e indicador visual de hover (seta ou glow)
- Borda com gradiente sutil quando hover
- Seleção com background gradiente suave + checkmark animado
- Remover ícone genérico "Users" do topo — substituir por título direto com emoji ou ilustração inline
- Auto-advance mantido

**3. Steps do paciente — Elevar a qualidade**
- Variar as cores dos ícones hero por step (teal, blue, violet, amber) para quebrar monotonia — cada step tem uma "cor de acento" sutil diferente mantendo o teal como base
- Títulos com gradiente text em `text-foreground` mais impactante
- Botão "Continuar" com ícone animado (seta pulsa levemente)
- Botão "Voltar" com estilo mais integrado (rounded-full com bg-muted/40 no hover)
- Inputs com transição de borda mais suave e placeholder mais estilizado

**4. StepPatientGender — Refinar seleção**
- Reduzir mt-14 para mt-6 com um separador visual sutil (linha fina + "ou" centralizado) entre opções primárias e secundárias
- Botões de seleção com ícones inline (lucide: `Mars`, `Venus`, `CircleDot`, `MinusCircle`)

**5. Steps do profissional — Upgrade completo**
- Adicionar header visual com ícone hero (como os steps do paciente)
- `StepProfPersonal`: ícone Stethoscope, título "Seus dados profissionais"
- `StepProfClinic`: ícone Building2, título "Sua clínica"
- `StepProfAccess`: ícone Lock, título "Crie seu acesso"
- Layout de botões Voltar/Continuar: mudar de flex row para stack vertical (como paciente) para consistência
- Nota de validação com ícone e estilo mais premium (não apenas bg-accent plano)

**6. StepPatientAccess — Mais impactante**
- Strength bar com animação de preenchimento suave
- Checkbox de termos como toggle card (não checkbox nativo)

**7. SuccessScreen — Celebratória**
- Confetti particles animados (CSS puro, 6-8 partículas com keyframes)
- Ícone de sucesso com pulse ring animado
- Gradiente de fundo mais vibrante
- Badge "Tudo certo!" com shimmer animation

### Arquivos a editar
- `src/index.css`
- `src/pages/Registration.tsx`
- `src/components/registration/StepProfile.tsx`
- `src/components/registration/StepPatientName.tsx`
- `src/components/registration/StepPatientCPF.tsx`
- `src/components/registration/StepPatientBirthdate.tsx`
- `src/components/registration/StepPatientGender.tsx`
- `src/components/registration/StepPatientContact.tsx`
- `src/components/registration/StepPatientAddress.tsx`
- `src/components/registration/StepPatientSus.tsx`
- `src/components/registration/StepPatientComplaint.tsx`
- `src/components/registration/StepPatientAccess.tsx`
- `src/components/registration/StepProfPersonal.tsx`
- `src/components/registration/StepProfClinic.tsx`
- `src/components/registration/StepProfAccess.tsx`
- `src/components/registration/SuccessScreen.tsx`

