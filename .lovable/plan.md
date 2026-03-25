

## Redesign da Seção "Para quem é o cadus."

### Problema atual
- Cards simples demais com barra lateral colorida (padrão template)
- Tags/chips espalhadas sem simetria, tamanhos irregulares
- Sem hierarquia visual forte entre os dois perfis
- Layout genérico de "2 cards lado a lado"

### Nova abordagem: Cards premium simétricos com layout estruturado

```text
┌─────────────────────────────────────────────────────────┐
│          Para quem é o cadus.                            │
│          (subtítulo elegante)                            │
│                                                          │
│  ┌──────────────────────┐  ┌──────────────────────────┐  │
│  │     🟢 ícone         │  │     🟠 ícone             │  │
│  │                      │  │                          │  │
│  │  Para você, paciente │  │  Para profissionais      │  │
│  │                      │  │  e equipes               │  │
│  │  Descrição curta     │  │  Descrição curta         │  │
│  │                      │  │                          │  │
│  │  ✓ Benefício 1       │  │  ✓ Benefício 1           │  │
│  │  ✓ Benefício 2       │  │  ✓ Benefício 2           │  │
│  │  ✓ Benefício 3       │  │  ✓ Benefício 3           │  │
│  └──────────────────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Mudanças concretas

**1. Cards completamente redesenhados**
- Remover barra lateral colorida (genérica)
- Ícone centralizado no topo do card dentro de um círculo grande (64x64) com gradiente suave
- Título e descrição centralizados
- Benefícios em **lista vertical alinhada** (não chips/tags espalhados), cada um com ícone CheckCircle alinhado, texto à direita, tudo simétrico
- Hover com elevação suave e borda sutil colorida (teal para paciente, amber para profissional)
- Padding generoso e igual nos dois cards

**2. Simetria perfeita**
- Ambos os cards com exatamente a mesma estrutura, mesma altura, mesmos espaçamentos
- 3 benefícios em cada, todos com o mesmo formato: ícone + texto em linha, alinhados à esquerda dentro do card centralizado
- `grid md:grid-cols-2 gap-8` com cards de altura igual

**3. Subtítulo adicionado**
- Abaixo do título "Para quem é o cadus.", adicionar um subtítulo: "Cada perfil tem seu caminho. Escolha o seu."

**4. Decoração de fundo refinada**
- Manter SVG decorativo mas com formas mais orgânicas (blob sutil em vez de círculos concêntricos)

### Arquivo a editar
- `src/pages/Index.tsx` — reescrever seção "Para quem" (linhas 248-325)

