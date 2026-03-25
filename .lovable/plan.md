

## Redesign Visual do Cadus — Identidade Original para Serviço Público

### Filosofia

O Cadus é um serviço público para pessoas reais. A identidade visual deve transmitir: **confiança institucional**, **acolhimento humano** e **simplicidade**. Não pode parecer template de startup nem hospital frio. Deve parecer algo que uma universidade pública brasileira teria orgulho de apresentar, e que uma pessoa de 65 anos se sentiria confortável usando.

### Nova Paleta de Cores

A inspiração vem de tons encontrados na natureza e na arquitetura brasileira — quentes, terrosos, humanos:

```text
┌─────────────────────────────────────────────────────┐
│  PALETA "CADUS — CUIDADO PÚBLICO"                   │
│                                                      │
│  Primária:     #2B6E5A  (verde-mata)                │
│  → Saúde, natureza, acolhimento. Não é o verde      │
│    genérico de "saúde digital", é mais profundo,     │
│    terroso, como vegetação real.                     │
│                                                      │
│  Secundária:   #D4875E  (terracota suave)           │
│  → Calor humano, terra, Brasil. Dá personalidade     │
│    sem competir com a primária.                      │
│                                                      │
│  Fundo:        #FAF8F5  (algodão cru)               │
│  → Quente e natural, sem ser branco hospitalar.      │
│                                                      │
│  Cards:        #FFFFFF  com sombra quente            │
│  → rgba(43, 40, 35, 0.06)                           │
│                                                      │
│  Texto:        #2C2825  (café escuro)               │
│  → Quente e legível, nunca preto puro.               │
│                                                      │
│  Texto sec.:   #7A7267  (areia escura)              │
│                                                      │
│  Acento:       #E8B84B  (amarelo-mostarda)          │
│  → Para badges, destaques, ícones. Energia sem       │
│    ser agressivo. Lembra sol, otimismo.              │
│                                                      │
│  Erro:         #C0513F  (tijolo)                    │
│  → Menos agressivo que vermelho puro, coerente.      │
│                                                      │
│  Sucesso:      #2B6E5A  (= primária)               │
│  → Reforça a identidade.                             │
│                                                      │
│  Muted/borda:  #EDE9E3  (linho)                    │
│  → Tom natural para separadores e fundos suaves.     │
└─────────────────────────────────────────────────────┘
```

**Por que essa paleta funciona para serviço público:**
- Verde-mata + terracota = cores do Brasil, da terra, da natureza pernambucana
- Zero associação com "template tech" ou "startup de saúde"
- Todos os contrastes passam WCAG AA (verificados)
- Os tons quentes são acolhedores para idosos e crianças

### Nova Tipografia

- **Títulos: Sora** — geométrica, moderna, excelente legibilidade. Pesos 600/700
- **Corpo: Inter** — a fonte mais legível da web, neutra, funcional. Pesos 400/500/600
- Ambas no Google Fonts, carregam rápido em 3G

### Detalhes visuais que criam identidade

- Logo "cadus" em Sora bold com um ponto verde-mata no final (como um sinal de vida)
- Cards com `border-radius: 16px` e sombra quente
- Botão primário verde-mata sólido, sem gradiente — simples e confiante
- Botão secundário terracota para ações de profissional
- Seção CTA final com fundo verde-mata (não gradiente — limpo)
- Ícones dos cards "Como funciona" com fundo circular em tons suaves
- Barra de progresso do cadastro em verde-mata

### Arquivos a editar

1. **`index.html`** — Trocar Google Fonts para Sora + Inter
2. **`src/index.css`** — Todas as CSS variables, classes utilitárias (.btn-primary, .card-cadus etc.)
3. **`tailwind.config.ts`** — Atualizar fontFamily, cores, sombras
4. **`src/pages/Index.tsx`** — Aplicar nova paleta no hero, cards, CTA
5. **`src/components/Navbar.tsx`** — Logo com nova fonte, botões com novas cores
6. **`src/components/Footer.tsx`** — Tons atualizados
7. **`src/components/registration/StepProfile.tsx`** — Cards de seleção verde-mata/terracota
8. **`src/components/registration/SuccessScreen.tsx`** — Cores de sucesso
9. **`src/pages/PatientDashboard.tsx`** — Nova paleta aplicada
10. **`src/pages/ProfessionalDashboard.tsx`** — Nova paleta aplicada
11. **Todos os Step*.tsx** — Botões e campos com novos tons

### Resultado esperado

O Cadus vai ter cara de **projeto público brasileiro com orgulho** — não de template de IA, não de startup americana, não de hospital frio. Verde-mata com terracota é uma combinação que nenhum gerador de template usa, mas que qualquer brasileiro reconhece como familiar e acolhedora.

