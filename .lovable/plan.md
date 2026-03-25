

## Redesign do Fluxo de Cadastro do Paciente

### Problema atual
- **StepPatientAddress tem 10+ campos** numa tela só — assusta o paciente
- O fluxo atual tem 5 etapas mas mal distribuídas (6 campos, 10+ campos, 1 campo, 3 campos)
- Não guia o paciente de forma conversacional e intuitiva
- Parece um formulário burocrático, não uma experiência amigável

### Nova abordagem: micro-steps conversacionais

Dividir o cadastro do paciente em **8 etapas curtas** (1-3 campos cada), com títulos que parecem uma conversa guiando o paciente. Cada tela tem no máximo 3 campos, tornando tudo menos intimidador e mais rápido visualmente.

**Fluxo proposto:**

| Etapa | Título | Campos |
|-------|--------|--------|
| 1 | Escolha seu perfil | Paciente / Profissional |
| 2 | Como você se chama? | Nome completo, CPF |
| 3 | Um pouco mais sobre você | Data nascimento, Sexo |
| 4 | Como falar com você? | Telefone, E-mail (opcional) |
| 5 | Onde você mora? | CEP (auto-preenche rua/bairro/cidade/estado), Número, Complemento |
| 6 | Informações do SUS | Cartão SUS, Como chegou, Responsável legal |
| 7 | Por que você busca atendimento? | Queixa principal |
| 8 | Crie seu acesso | Senha, Confirmar senha, Termos |

### Mudanças de design em cada step

- **Títulos conversacionais** — cada etapa parece uma pergunta amigável, não um formulário
- **Subtítulo de incentivo** — frase curta tipo "Quase lá!" ou "Falta pouco" nas etapas finais
- **Máximo 3 campos por tela** — reduz carga cognitiva drasticamente
- **Campos de endereço simplificados** — CEP auto-preenche tudo, paciente só confirma e adiciona número/complemento. Rua, bairro, cidade e estado ficam readonly quando preenchidos pelo CEP

### Mudanças no fluxo profissional
- Manter compacto como está (3 steps + perfil), apenas ajustar os títulos para serem mais diretos

### Arquivos a criar/editar
- **Criar** `src/components/registration/StepPatientIdentity.tsx` — nome + CPF
- **Criar** `src/components/registration/StepPatientAbout.tsx` — nascimento + sexo
- **Criar** `src/components/registration/StepPatientContact.tsx` — telefone + email
- **Criar** `src/components/registration/StepPatientSus.tsx` — cartão SUS, como chegou, responsável
- **Editar** `src/components/registration/StepPatientAddress.tsx` — simplificar para CEP + número + complemento (campos auto-preenchidos readonly)
- **Remover campos** de `StepPatientPersonal.tsx` (será substituído pelos 3 novos steps)
- **Editar** `src/pages/Registration.tsx` — atualizar steps de 5→8, ajustar labels da barra de progresso
- **Editar** `src/store/registrationStore.ts` — sem mudanças nos dados, apenas o fluxo muda

### Labels da barra de progresso (paciente)
`['Perfil', 'Identidade', 'Sobre você', 'Contato', 'Endereço', 'SUS', 'Queixa', 'Acesso']`

No mobile, os labels ficam ocultos (já acontece com `hidden sm:block`), mostrando apenas as barrinhas de progresso.

