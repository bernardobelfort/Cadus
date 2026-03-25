

## Adicionar formas orgânicas atrás da ilustração do hero

### O que fazer

O hero atual ainda usa o SVG inline genérico (`HeroGraphic`). Vamos substituí-lo pela ilustração real (`src/assets/hero-illustration.png`) e adicionar formas orgânicas animadas atrás dela para criar profundidade e identidade visual premium.

### Implementação em `src/pages/Index.tsx`

**Substituir o componente `HeroGraphic` por um novo `HeroIllustration`** que contém:

1. **Container relativo** com a imagem centralizada
2. **Formas orgânicas SVG atrás da imagem** — blobs fluidos usando `<path>` com curvas Bezier:
   - Um blob grande teal claro (`hsl(184, 78%, 22%)` com 10-15% opacidade) deslocado para a esquerda-abaixo
   - Um blob médio amber (`hsl(25, 76%, 63%)` com 8-12% opacidade) deslocado para a direita-acima
   - Um blob menor teal vibrante (`#14919B` com 10% opacidade) sobrepondo parcialmente
3. **Animações sutis com framer-motion**:
   - Blobs com `animate` de rotação lenta (0→360° em 20-30s, infinite) e scale pulsante (0.95→1.05)
   - Cada blob com delay diferente para movimento orgânico assíncrono
4. **Imagem** importada de `@/assets/hero-illustration.png` renderizada com `<img>` sobre os blobs, com `max-w-[480px] w-full h-auto relative z-10`

### Detalhes técnicos

- Blobs gerados com paths SVG tipo: `M400,300Q350,500,200,400Q50,300,200,200Q350,100,400,300Z`
- Usar `motion.div` com `animate={{ rotate: 360 }}` e `transition={{ duration: 25, repeat: Infinity, ease: "linear" }}`
- Manter a animação de entrada existente (`opacity: 0, scale: 0.85 → 1`)

### Arquivo a editar
- `src/pages/Index.tsx` — substituir `HeroGraphic` por `HeroIllustration` com blobs orgânicos + imagem real

