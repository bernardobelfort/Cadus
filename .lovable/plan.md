

## Limpar seção CTA e ajustar subtexto

### Mudanças em `src/pages/Index.tsx`

**1. Remover os 3 floating cards (linhas 383-418)**
- Card "5 min", "100% digital" e "Dados prontos" — todos removidos
- Também remove peso desnecessário de animações `motion.div` com `backdrop-blur-md` (pesado para dispositivos mais simples)

**2. Remover o blob 3 pequeno (linhas 372-381)**
- O `motion.svg` com scale pulsante — animação extra desnecessária
- Manter apenas os 2 blobs orgânicos principais (teal e amber) que são leves e já dão identidade visual

**3. Subtexto em uma linha só (linha 439)**
- Trocar `max-w-lg` por `max-w-2xl` para o parágrafo não quebrar em duas linhas
- Texto permanece: "Cadastre-se agora e chegue na clínica pronto para ser atendido."

### Resultado
- Seção mais leve e rápida (menos `motion.div`, sem `backdrop-blur`)
- Visual limpo: gradiente + 2 blobs sutis + texto + botões
- Subtexto em uma linha só

### Arquivo a editar
- `src/pages/Index.tsx` — remover linhas 372-418, ajustar classe do subtexto na linha 439

