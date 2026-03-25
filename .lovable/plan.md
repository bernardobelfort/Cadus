

## Separar Data de Nascimento e Criar Tela de Identidade de Gênero Inclusiva

### Mudanças

**1. Separar StepPatientAbout em duas telas**

**Tela 4 — StepPatientBirthdate (nova)**
- Ícone `Calendar` centralizado
- Título: `"{nome}, quando você nasceu?"`
- Apenas o campo de data de nascimento
- Clean, rápido, uma pergunta só

**Tela 5 — StepPatientGender (nova)**
- Ícone `Heart` centralizado
- Título: `"Como você se identifica?"`
- Subtítulo: `"Queremos que você se sinta acolhido(a) aqui."`

**Opções de gênero (baseado em pesquisa de boas práticas inclusivas):**

Grid 2 colunas com as opções:
- Mulher cisgênero
- Homem cisgênero
- Mulher transgênero
- Homem transgênero
- Não-binário
- Genderqueer
- Genderfluid
- Agênero
- Intersexo
- Dois-espíritos
- Prefiro não informar
- Outro (abre campo de texto livre)

**Lógica condicional — pronome e nome social:**
- Se a pessoa selecionar **Mulher cisgênero** ou **Homem cisgênero** → segue direto, sem perguntas extras
- Se selecionar **qualquer outra opção** → aparece animado:
  - "Qual pronome você prefere?" (Ela/Dela, Ele/Dele, Elu/Delu, Outro com campo livre)
  - "Nome social (opcional)" — campo de texto para como prefere ser chamado

**2. Atualizar Registration.tsx**
- `patientSteps = 10` (era 9, agora tem birthdate + gender separados)
- Inserir `StepPatientBirthdate` no case 4 e `StepPatientGender` no case 5
- Deslocar os demais steps (Contact→6, Address→7, SUS→8, Complaint→9, Access→10)

**3. Remover StepPatientAbout.tsx** (substituído pelos dois novos)

### Arquivos
- **Criar** `src/components/registration/StepPatientBirthdate.tsx`
- **Criar** `src/components/registration/StepPatientGender.tsx`
- **Remover** `src/components/registration/StepPatientAbout.tsx`
- **Editar** `src/pages/Registration.tsx` — atualizar steps e imports

