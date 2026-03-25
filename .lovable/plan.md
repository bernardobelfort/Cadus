

## Redesign do StepProfile — Cards mais compactos e elegantes

### Problema
Os cards de Paciente e Profissional estão esticados verticalmente com muito espaço vazio (minHeight 210px + padding excessivo), resultando em aparência genérica e desproporcional.

### Mudanças em `src/components/registration/StepProfile.tsx`

1. **Remover `minHeight: 210px`** — deixar o conteúdo definir a altura naturalmente
2. **Layout mais compacto**: reduzir padding de `p-6` para `p-5`, icon-hero menor e inline com texto
3. **Redesign dos cards**: layout horizontal (ícone à esquerda, texto à direita) em vez de vertical empilhado — mais moderno e menos esticado
4. **Hover mais rico**: gradiente de fundo sutil, sombra com glow colorido (teal para paciente, amber para profissional)
5. **Borda inferior colorida** quando selecionado (accent bar de 3px) em vez de apenas mudar a borda inteira
6. **Micro-interação**: seta desliza para a direita no hover
7. **Mudar grid para `flex flex-col gap-3`** — cards empilhados verticalmente (mais estreitos e proporcionais) em vez de lado a lado onde ficam largos demais
8. **Adicionar emoji/badge visual** discreto ("🩺" para profissional, "❤️" para paciente) como diferenciador

### Resultado esperado
Cards compactos, proporcionais, com layout horizontal (ícone + texto lado a lado), empilhados verticalmente, sem espaço vazio excessivo. Visual limpo e premium.

### Arquivo editado
- `src/components/registration/StepProfile.tsx`

