
Objetivo

Corrigir de forma definitiva a linha tracejada horizontal da seção “Como funciona?” para que ela termine exatamente no início do ícone do passo 03 no desktop, sem depender de tentativa e erro no `width`.

Diagnóstico

O problema vem da estratégia atual em `src/pages/Index.tsx`:
- a linha usa `left: 16.66%` + `width: calc(66.66% + 8px)`;
- isso assume 3 colunas perfeitas por porcentagem, mas ignora o `gap` fixo do grid (`md:gap-6`, 24px);
- por causa desse gap, o centro real das colunas não fica exatamente em `16.66% / 50% / 83.33%`;
- resultado: qualquer ajuste só no `width` fica instável e nunca encaixa direito em todas as larguras.

Plano de implementação

1. Parar de controlar a linha por `width`
- Remover o ajuste manual baseado em `width: calc(...)`.
- Passar a posicionar a linha com `left` e `right` ao mesmo tempo.

2. Usar geometria real do grid
- Em `src/pages/Index.tsx`, no `motion.svg` da linha horizontal:
  - manter `top-[52px]`, `hidden md:block`, `absolute`;
  - trocar a largura por `right` calculado.
- Base matemática:
  - grid desktop = 3 colunas + 2 gaps de 24px;
  - centro da 1ª coluna = `calc(16.666% - 8px)`;
  - borda esquerda do ícone do passo 03 = `calc(83.333% - 44px)` considerando ícone de 104px;
  - portanto a linha deve usar:
    - `left: calc(16.666% - 8px)`
    - `right: calc(16.666% + 44px)`

3. Preservar o visual atual
- Manter:
  - linha tracejada;
  - animação do `pathLength`;
  - mesma cor/opacidade;
  - versão mobile vertical como está.

4. Ajuste fino mínimo, se necessário
- Se após aplicar a fórmula a linha ainda precisar encostar 2–4px a mais por percepção visual, fazer microajuste no `right` em poucos pixels.
- Esse ajuste será final e pequeno, não mais uma sequência de tentativas em `width`.

Resultado esperado

- A linha vai sair do centro do passo 01 e terminar exatamente na borda esquerda do ícone do passo 03.
- O comportamento ficará consistente no desktop porque passa a considerar o `gap` real do grid, em vez de depender só de porcentagens.

Detalhes técnicos

Arquivo:
- `src/pages/Index.tsx`

Trecho a refatorar:
- bloco do `motion.svg` da linha horizontal na seção “Como funciona?”

Estratégia final recomendada:
```tsx
className="absolute top-[52px] hidden md:block z-0 h-[4px]"
style={{
  left: 'calc(16.666% - 8px)',
  right: 'calc(16.666% + 44px)',
}}
```

Motivo de funcionar melhor:
```text
antes:  posição = left + width  -> frágil por ignorar gap
agora: posição = left + right   -> ancora início e fim com base real
```
