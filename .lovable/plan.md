

## Substituir ilustração do hero + formas orgânicas

### O que fazer

1. **Copiar a nova imagem** `user-uploads://image-7.png` para `src/assets/hero-illustration.png` (substituindo a atual)

2. **Manter o componente `HeroIllustration`** em `src/pages/Index.tsx` que já tem os blobs orgânicos animados — apenas garantir que a imagem importada é a nova e que os blobs estão bem posicionados para esta ilustração específica (dois personagens em cards fazendo high-five)

3. **Ajustar os blobs orgânicos** para complementar melhor a composição desta imagem:
   - Blob teal grande mais centralizado (a imagem tem dois cards lado a lado)
   - Blob amber deslocado para baixo-direita como contraponto
   - Blob teal vibrante menor entre os dois personagens
   - Manter as animações de rotação e pulsação já implementadas

### Arquivo a editar
- `src/assets/hero-illustration.png` — substituir pelo novo asset
- `src/pages/Index.tsx` — ajustar posicionamento/tamanho dos blobs para a nova composição

