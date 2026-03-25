

## Blobs mais visíveis + correção de texto

### Mudanças

**1. Blobs orgânicos com mais contraste (`src/pages/Index.tsx`, linhas 17-81)**

Os blobs atuais têm opacidade muito baixa (6-12%) e ficam quase invisíveis. Vou:
- Aumentar opacidade de todos os blobs: 0.10→0.22, 0.12→0.25, 0.09→0.18, 0.06→0.14
- Aumentar tamanho dos blobs para envolver melhor a imagem: blob principal de 420px→520px, amber de 300px→380px
- Manter as animações e posicionamentos atuais — só contraste e escala

**2. Texto do CTA (linha 313)**

Trocar:
- `Cadastre-se agora e chegue na clínica já conhecido.`
- → `Cadastre-se agora e chegue na clínica pronto para ser atendido.`

### Arquivo a editar
- `src/pages/Index.tsx`

