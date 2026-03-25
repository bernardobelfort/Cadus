

## Redesign Premium do StepProfile

### Problemas atuais (visto no screenshot)
- Cards genéricos e sem vida: bordas cinza fracas, fundo branco plano, zero personalidade
- Emojis (❤️ 🩺) ao lado do título parecem amadores e baratos
- Ícones pequenos (w-12 h-12) sem impacto visual
- Chevron genérico à direita sem propósito claro
- Card externo (card-cadus) adiciona uma camada desnecessária que achata tudo
- Sem diferenciação visual entre as duas opções — parecem a mesma coisa

### Novo design

**Layout**: Remover o card-cadus wrapper externo. Dois cards grandes empilhados verticalmente, cada um com identidade visual própria e forte.

**Card Paciente (teal)**:
- Ícone grande (`w-16 h-16`) com gradiente teal vibrante e glow sutil, centralizado no topo do card
- Ícone: `Heart` (lucide) dentro do círculo — não emoji
- Background: gradiente suave `from-primary/5 to-transparent`
- Borda: `border-2 border-primary/20`, no hover `border-primary/50` com sombra teal
- Título "Sou Paciente" em bold, descrição abaixo
- Layout vertical centralizado (ícone → título → descrição)
- Seleção: borda primary sólida, background `bg-primary/8`, checkmark animado no canto

**Card Profissional (amber/secondary)**:
- Mesmo layout, ícone `Stethoscope` com gradiente amber
- Background: gradiente suave `from-secondary/5 to-transparent`
- Borda: `border-2 border-secondary/20`, hover `border-secondary/50` com sombra amber

**Interações**:
- Hover: `scale-[1.02]`, sombra elevada colorida, borda mais visível
- Seleção: scale volta ao normal, borda sólida, checkmark com bounce
- Auto-advance mantido (350ms)

**Header**: Título sem wrapper card — diretamente no topo com tipografia grande e "Cadus" em primary

### Resultado
Cards com personalidade, ícones lucide grandes e bonitos (sem emojis), cores distintas entre paciente e profissional, interações ricas.

### Arquivo
- `src/components/registration/StepProfile.tsx`

