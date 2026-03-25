

## Upgrade Visual Premium do Sistema de Cadastro

### Problemas identificados
- Cards com visual genérico: ícones pequenos, sombras fracas, pouco contraste
- StepProfile: botões de Paciente/Profissional esticados e sem impacto visual
- Todos os steps seguem o mesmo template básico sem diferenciação visual
- Header do cadastro sem personalidade
- Inputs e botões sem refinamento premium
- Fundo muito plano e sem profundidade

### Mudanças

**1. CSS global — `src/index.css`**
- Melhorar `.card-cadus`: sombra mais premium com múltiplas camadas, `backdrop-blur`, borda sutil `border border-white/60`
- Melhorar `.input-cadus`: height maior (52px), sombra interna sutil `shadow-inner`, foco com glow teal suave
- Melhorar `.btn-primary`: sombra glow mais forte, efeito hover com `translateY(-1px)`, gradiente mais vibrante
- Adicionar `.btn-back`: classe específica para o botão voltar (mais espaçamento, hover suave)

**2. Registration.tsx — Layout da página**
- Fundo mais rico: gradiente radial com duas camadas (teal suave no topo + padrão sutil de pontos ou mesh gradient)
- Header com glass morphism mais pronunciado (`bg-white/70 backdrop-blur-lg`)
- Progress bar com gradiente animado em vez de cor sólida
- Aumentar `max-w` do container de `480px` para `520px`

**3. StepProfile — Redesign completo**
- Ícone do topo maior (`w-20 h-20`) com gradiente teal vibrante e sombra glow
- Cards de Paciente/Profissional: layout vertical centralizado (ícone grande no centro, título abaixo, descrição abaixo), `aspect-square` ou pelo menos altura fixa para ficarem quadrados e não esticados
- Hover com scale sutil (`hover:scale-[1.02]`) e sombra elevada
- Quando selecionado: borda mais grossa, checkmark animado, background com gradiente suave
- Remover botão "Continuar" separado — clicar no card já avança (auto-advance após 300ms)

**4. Todos os steps do paciente — Upgrade visual**
- Ícone do topo: círculo maior (`w-20 h-20`) com gradiente `from-primary/20 to-primary/5` e borda sutil
- Títulos: tamanho `text-3xl` consistente, tracking mais tight
- Subtítulos: `text-muted-foreground/80` mais sutil
- Inputs: cantos mais arredondados (`rounded-2xl`), padding maior, placeholder mais sutil
- Botão Continuar: gradiente mais vibrante, ícone de seta animado no hover (translateX)
- Botão Voltar: mais espaçamento do botão principal (`mt-5`), texto um pouco maior

**5. StepPatientGender — Melhorar botões de seleção**
- Botões de gênero com ícone pequeno ao lado (♀ ♂ etc via lucide ou emoji)
- Padding maior, rounded-2xl, hover com elevação
- Quando selecionado: background gradiente suave, borda primary, checkmark

**6. StepPatientAccess — Tela final mais impactante**
- Indicadores de força de senha com barrinhas coloridas em vez de apenas checks
- Checkbox de termos mais estilizado

**7. SuccessScreen — Mais celebratória**
- Background com gradiente ou confetti sutil
- Ícone de sucesso maior com animação de pulse
- Tipografia maior e mais impactante

### Arquivos a editar
- `src/index.css` — upgrade das classes globais
- `src/pages/Registration.tsx` — layout premium
- `src/components/registration/StepProfile.tsx` — redesign cards
- `src/components/registration/StepPatientName.tsx` — upgrade visual
- `src/components/registration/StepPatientCPF.tsx` — upgrade visual
- `src/components/registration/StepPatientBirthdate.tsx` — upgrade visual
- `src/components/registration/StepPatientGender.tsx` — upgrade botões
- `src/components/registration/StepPatientContact.tsx` — upgrade visual
- `src/components/registration/StepPatientAddress.tsx` — upgrade visual
- `src/components/registration/StepPatientSus.tsx` — upgrade visual
- `src/components/registration/StepPatientComplaint.tsx` — upgrade visual
- `src/components/registration/StepPatientAccess.tsx` — upgrade visual
- `src/components/registration/SuccessScreen.tsx` — mais celebratória

