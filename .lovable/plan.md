

## Mobile-First Redesign Completo

### Escopo
Todo o sistema precisa ser redesenhado com abordagem mobile-first: projetar primeiro para telas de 360-390px, depois escalar para tablet e desktop. Atualmente o código usa `md:` breakpoints como ajuste secundário, mas os valores base ainda estão pensados para desktop.

### Arquivos a editar

---

#### 1. `tailwind.config.ts` — Container padding mobile
- Reduzir container padding de `1.5rem` para `1rem` no mobile, manter `1.5rem` em `sm:`
- Adicionar breakpoint `xs: 475px` se necessário

#### 2. `src/index.css` — Classes base mobile-first

**`.card-cadus`**: 
- Padding base: `p-5` (mobile) → `md:p-6 lg:p-8`
- Border-radius: `rounded-2xl` (mobile) → `md:rounded-3xl`
- Sombra mais leve no mobile para performance

**`.icon-hero`**: 
- Tamanho: `w-12 h-12` (mobile) → `md:w-14 md:h-14`
- Border-radius: `rounded-xl` → `md:rounded-2xl`
- Margem inferior: `mb-4` → `md:mb-5`

**`.input-cadus`**: 
- Padding: `px-4 py-3` (mobile) → `md:px-5 md:py-3.5`
- Min-height: `48px` (mobile) → `md:52px`
- Font-size: manter `16px` (evita zoom no iOS)

**`.btn-primary`**: 
- Padding: `px-6 py-3.5` (mobile) → `md:px-8 md:py-4`
- Min-height: `50px` (mobile) → `md:56px`
- Font-size: `15px` (mobile) → `md:16px`

**`.btn-back`**: 
- Margin-top: `mt-3` (mobile) → `md:mt-5`

**`.step-header`**: 
- Margin-bottom: `mb-4` → `md:mb-6`
- h2 font-size: `text-xl` (mobile) → `md:text-2xl`
- p font-size: `text-[13px]` (mobile) → `md:text-sm`

**`.step-divider`**: margin-bottom `mb-4` → `md:mb-6`

**`.selection-card`**: padding `py-3 px-4` (mobile) → `md:py-4 md:px-5`

**`.step-badge`**: font-size `text-[11px]` (mobile) → `md:text-xs`

#### 3. `src/pages/Registration.tsx` — Layout mobile-first
- Content area: `py-4 px-3` (mobile) → `md:py-8 md:px-4 lg:py-12`
- `items-start` sempre no mobile (não centrar verticalmente — conteúdo deve fluir do topo)
- Max-width: `max-w-full` mobile → `md:max-w-[520px]`
- Header height: `h-12` (mobile) → `md:h-14`
- Logo font-size: `text-lg` (mobile) → `md:text-xl`

#### 4. `src/components/registration/StepProfile.tsx` — Cards mobile
- Padding cards: `p-5` (mobile) → `md:p-6`
- Ícone: `w-14 h-14` (mobile) → `md:w-16 md:h-16`
- Gap entre cards: `gap-3` (mobile) → `md:gap-4`
- Título: `text-lg` mantém. Descrição: `text-[13px]`
- Header: `text-xl` (mobile) → `md:text-2xl lg:text-3xl`

#### 5. Todos os Step components (10 paciente + 3 profissional)
Padronizar em todos:
- `mt-8` no botão principal → `mt-6` (mobile) → `md:mt-8`
- Inputs com `text-base` (16px — previne zoom iOS)
- Selection cards com padding reduzido no mobile
- Spacing entre campos: `space-y-4` (mobile) → `md:space-y-5`
- Labels: `text-[13px]` (mobile) → `md:text-sm`

#### 6. `src/pages/Index.tsx` — Landing page mobile-first
- Hero section: `py-12` (mobile) → `md:py-20 lg:py-28`
- Hero title: `text-2xl` (mobile) → `sm:text-3xl md:text-4xl lg:text-5xl`
- Hero subtitle: `text-base` (mobile) → `md:text-lg`
- CTA buttons: full-width stacked no mobile (`flex-col w-full`) → `sm:flex-row sm:w-auto`
- Trust badges: `gap-4 text-xs` (mobile) → `md:gap-6 md:text-sm`
- HeroIllustration: `max-w-[300px]` mobile → `md:max-w-[520px]`, blobs menores no mobile
- "Como funciona" section: `py-12` (mobile) → `md:py-20 lg:py-28`, título `text-xl` → `md:text-2xl lg:text-3xl`
- "Para quem" cards: stacked single column sempre, padding `p-6` (mobile) → `md:p-8 lg:p-10`
- CTA final: `py-16` (mobile) → `md:py-24 lg:py-32`, título `text-2xl` → `sm:text-3xl md:text-4xl lg:text-5xl`

#### 7. `src/components/Navbar.tsx` — Nav mobile
- Height: `h-14` (mobile) → `md:h-16`
- Container padding ajustar para mobile
- Mobile menu: slide-down animado com framer-motion em vez de aparecer abruptamente

#### 8. `src/components/Footer.tsx` — Footer mobile
- Grid: single column mobile com alinhamento centralizado → `md:grid-cols-4` com alinhamento left
- Padding: `pt-8 pb-6` (mobile) → `md:pt-14 md:pb-10`
- Gap entre colunas: `gap-6` (mobile) → `md:gap-8`
- Bottom bar: stack vertical centralizado mobile → `md:flex-row`

#### 9. `src/pages/PatientDashboard.tsx` — Dashboard mobile
- Welcome card: `p-5` (mobile) → `md:p-6 lg:p-8`
- Welcome title: `text-xl` → `md:text-2xl`
- Data cards: padding `p-4` mobile → `md:p-6`
- DataRow: sempre stack vertical no mobile (`flex-col`), side-by-side em `sm:`
- Botões: full-width no mobile

#### 10. `src/pages/ProfessionalDashboard.tsx` — Dashboard profissional mobile
- Bottom nav já existe — verificar sizing (touch targets min 44px)
- Patient cards: padding `p-3` mobile → `md:p-4`
- Modal: `max-h-[85vh]` mobile, `p-4` → `md:p-6`
- Search input: touch-friendly sizing

#### 11. `src/components/registration/SuccessScreen.tsx` — Sucesso mobile
- Card padding: `p-5` mobile → `md:p-6 lg:p-8`
- Ícone sucesso: `w-20 h-20` mobile → `md:w-24 md:h-24`
- Título: `text-2xl` → `md:text-3xl`
- Confetti: reduzir partículas no mobile para performance

### Princípios aplicados
- **Touch targets mínimo 44px** em todos os botões e links
- **Font-size mínimo 16px em inputs** (previne zoom automático no iOS)
- **Padding consistente**: base mobile compacto, expandir em breakpoints maiores
- **Simetria perfeita**: todos os cards, inputs e botões com mesmas proporções em qualquer tela
- **Safe areas**: padding inferior extra para bottom nav e gestos do sistema

