

## Redesign Premium da Seção CTA "Seus dados, antes da consulta."

### Problema atual
Seção genérica: fundo gradiente escuro, texto centralizado, dois botões. Parece um template básico, não tem personalidade nem impacto visual.

### Nova abordagem: CTA imersivo com elementos visuais diferenciados

**Layout split assimétrico** — em vez de tudo centralizado, criar uma composição mais dinâmica:

```text
Desktop:
┌──────────────────────────────────────────────────────────┐
│  blob    ┌─────────────────────────────────────────┐     │
│  orgânico│                                         │blob │
│          │   Seus dados, antes da consulta.        │     │
│          │                                         │     │
│  ┌────┐  │   Cadastre-se agora e chegue na        │     │
│  │ 5  │  │   clínica pronto para ser atendido.    │     │
│  │min │  │                                         │     │
│  └────┘  │   [Paciente]    [Profissional]          │     │
│          │                                         │     │
│  ┌────┐  └─────────────────────────────────────────┘     │
│  │100%│                                                   │
│  │seg │    ┌────┐                                        │
│  └────┘    │ ✓  │                                        │
│            └────┘                                        │
└──────────────────────────────────────────────────────────┘
```

### Elementos novos

1. **Cards flutuantes animados** ao redor do texto principal — pequenos cards glassmorphism com dados que reforçam a proposta de valor:
   - Card "5 min" com ícone Clock (tempo de cadastro)
   - Card "100% digital" com ícone Smartphone
   - Card checkmark com ícone CheckCircle (dados prontos)
   - Cada card flutua com animação `y: [0, -8, 0]` em loops com delays diferentes

2. **Blobs orgânicos animados** no fundo (mesmo estilo do hero) — 2-3 blobs com rotação lenta e opacidade 15-20%, nas cores teal e amber

3. **Título com mais destaque** — tamanho maior (`text-4xl md:text-5xl`), com o ponto final em amber (`.text-highlight`) mantido

4. **Botões com mais presença** — adicionar sombra glow sutil no botão primário (`shadow-[0_0_30px_rgba(255,255,255,0.15)]`) e aumentar levemente o padding

5. **Animação de entrada** — título e subtítulo entram com fadeUp staggered, os floating cards entram com scale+fade com delays maiores

### Mudanças concretas em `src/pages/Index.tsx` (linhas 340-381)

- Substituir os SVGs decorativos (círculos genéricos) por blobs orgânicos animados com `motion.svg`
- Adicionar 3 floating cards com `motion.div` posicionados absolutos ao redor do conteúdo central
- Aumentar tipografia do título
- Adicionar glow nos botões
- Manter textos atuais (já aprovados)

### Arquivo a editar
- `src/pages/Index.tsx` — reescrever seção CTA final (linhas 340-381)

