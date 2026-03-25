

## Simplificar Tela de Gênero

### Mudanças em `src/components/registration/StepPatientGender.tsx`

**Opções simplificadas (4 apenas):**
- Masculino
- Feminino
- Outro
- Prefiro não informar

**Lógica condicional:**

1. **Masculino / Feminino** → nenhum campo extra, segue direto
2. **Outro** → aparece campo de texto "Como você se identifica?" + campos de pronome (Ela/Dela, Ele/Dele, Elu/Delu, Outro) + campo "Nome social (opcional)"
3. **Prefiro não informar** → aparece campos de pronome + campo "Nome social (opcional)" (sem o campo de texto de gênero)

**Remover:**
- Lista de 12 gêneros (cisgênero, transgênero, genderqueer, etc.)
- Subtítulo "Queremos que você se sinta acolhido(a) aqui."

**Manter:**
- Ícone Heart centralizado
- Título "Como você se identifica?"
- Animação `animate-in fade-in` nos campos condicionais
- Botões Continuar/Voltar no padrão atual

### Arquivo a editar
- `src/components/registration/StepPatientGender.tsx`

