

## Redesign Completo do Formulario de Cadastro

### Problemas identificados (via screenshot e codigo)

1. **Cores dos icones inconsistentes**: cada step usa uma cor diferente (teal, blue, violet, amber, rose, emerald) — parece aleatorio, nao intencional
2. **Subtextos genericos e quebram em 2 linhas**: "Queremos saber como te chamar", "Precisamos saber sua data de nascimento" — nao agregam valor e as vezes ocupam 2 linhas desnecessariamente
3. **Design monotono**: todos os steps sao identicos — icone redondo, titulo, subtexto, input, botao. Zero diferenciacao visual
4. **Falta contexto de progresso**: usuario nao sabe em que etapa esta (ex: "Etapa 3 de 10")
5. **Card muito grande e vazio** em steps simples (nome, CPF) — muito espaco branco sem proposito
6. **Icones no hero sao palidos** — backgrounds pastel com icone quase invisivel

### O que NAO sera modificado
- StepProfile (primeira pagina) — esta OK
- Animacoes de transicao entre paginas — esta OK
- Logica de validacao e store

### Plano de mudancas

**1. Padronizacao visual — cor unica nos icones hero**
- Todos os icon-hero usarao `icon-hero-teal` (cor primaria do sistema) em vez de cores diferentes por step
- Isso cria identidade visual consistente e profissional
- Os icones dentro usarao `text-primary` uniformemente

**2. Subtextos reescritos — uteis, informativos, 1 linha**
Cada step tera um subtexto que realmente ajuda o usuario:
- Nome: "Digite nome e sobrenome como no documento"
- CPF: "Usado como login seguro na plataforma"
- Nascimento: "Necessario para o prontuario clinico"
- Genero: "Informacao importante para seu atendimento"
- Contato: "Enviaremos lembretes de consulta por WhatsApp"
- Endereco: "O CEP preenche automaticamente rua e bairro"
- SUS: "Dados opcionais para pacientes do SUS"
- Queixa: "Ajuda o profissional a se preparar para o atendimento"
- Acesso: "Ultima etapa — seu CPF sera o login"

**3. Indicador de etapa visivel**
- Adicionar badge discreto abaixo do subtexto: "Etapa 3 de 10" em texto pequeno com cor muted
- Isso da contexto e senso de progresso alem da barra

**4. Redesign do card e layout dos steps**
- Reduzir padding do card de `p-8 md:p-10` para `p-6 md:p-8` — mais compacto
- Icon hero: reduzir de 72px para 56px — mais proporcionado
- Adicionar um micro-detalhe visual: linha decorativa sutil (2px, gradiente teal) entre o header e o conteudo do formulario
- Titulo: manter `text-2xl` (remover `md:text-3xl` que causa assimetria em telas medias)

**5. Inputs mais sofisticados**
- Adicionar icone inline dentro dos inputs principais (UserRound no nome, Hash no CPF, Calendar na data, Phone no telefone) — posicionado a esquerda com `pl-12`
- Isso da contexto visual ao campo sem precisar de label em alguns casos

**6. Botao Continuar — adicionar numero da proxima etapa**
- Em vez de apenas "Continuar →", mostrar contexto: botao permanece "Continuar" mas sem mudanca (ja esta bom)

**7. Steps profissionais — mesma padronizacao**
- StepProfPersonal, StepProfClinic, StepProfAccess: padronizar para usar `icon-hero-teal` e subtextos uteis
- StepProfPersonal subtexto: "Dados para validacao do seu registro profissional"
- StepProfClinic subtexto: "Selecione onde voce atuara no Cadus"

**8. SuccessScreen — pequeno refinamento**
- Manter confetti e animacoes, apenas alinhar com o novo padding/sizing

### Arquivos editados
- `src/index.css` (ajustar icon-hero size, card padding, adicionar classe decorativa)
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
- `src/pages/Registration.tsx` (passar stepNumber/totalSteps como props)

### Resultado esperado
Formulario com identidade visual coesa (teal uniforme), subtextos uteis em 1 linha, indicador de etapa, inputs com icones contextuais, proporcoes mais equilibradas. Profissional e original.

