

## Redesign da Landing Page — De Genérico para Premium Original

### O que mudar

**1. Hero — Remover badge + Nova ilustração + Layout mais impactante**
- Remover o badge "Clínicas-escola UFPE/NUTES"
- Substituir a ilustração genérica por um elemento visual abstrato em SVG/CSS — formas orgânicas fluidas nas cores da paleta (teal + amber) que remetem a conexão humana sem ser literal. Isso é mais escalável e original que ilustrações stock
- Adicionar um elemento decorativo geométrico sutil no lado direito do hero (círculos concêntricos, arcos) em vez de imagem

**2. Textos — Mais abrangentes (não só saúde)**
- "Sou Profissional" em vez de "Sou Profissional de Saúde"
- Na seção "Para quem": trocar "Para profissionais de saúde" → "Para profissionais e equipes" com descrição incluindo gestores, alunos, profissionais de saúde
- No StepProfile: trocar "Sou Profissional de Saúde" → "Sou Profissional" e a descrição para incluir gestores/alunos
- Trocar ícone Stethoscope por Briefcase ou Building2 (mais abrangente)

**3. Seção "Como funciona" — Layout não-genérico**
- Em vez de 3 cards iguais lado a lado (padrão template), usar layout escalonado: cada step com layout horizontal (ícone + texto) com uma linha conectora vertical entre eles
- Numeração integrada ao ícone (não flutuando separada)
- Adicionar micro-interação: hover revela detalhe extra

**4. Seção "Para quem" — Redesign completo**
- Em vez de 2 cards com lista de bullets (ultra genérico), usar um layout mais visual:
  - Card paciente: destaque grande com ícone expressivo, frase curta impactante, e 2-3 benefícios em chips/tags em vez de lista
  - Card profissional: mesmo estilo mas com accent diferente
- Fundo com forma orgânica sutil (SVG decorativo)

**5. CTA Final — Mais personalidade**
- Em vez de "Pronto para começar?" (genérico), usar copy mais humano: "Seus dados, antes da consulta."
- Adicionar elemento visual decorativo (forma abstrata)
- Dois botões lado a lado em vez de um só (paciente + profissional)

**6. Hero — Elemento visual SVG abstrato**
- Criar um componente SVG inline com formas orgânicas/geométricas: arcos, círculos sobrepostos em teal claro + amber com opacidade
- Isso substitui a ilustração e dá identidade visual única que nenhum template tem

### Arquivos a editar

1. **`src/pages/Index.tsx`** — Rewrite completo: hero sem badge, novo SVG decorativo, seções redesenhadas, textos abrangentes, CTA reimaginado
2. **`src/components/registration/StepProfile.tsx`** — Texto mais abrangente, ícone diferente para profissional
3. **`src/components/Footer.tsx`** — Copy atualizado (remover menção específica a UFPE/NUTES do footer também, tornar mais genérico)

### Resultado
Uma landing page com identidade visual própria: formas abstratas em SVG, layout não-template, copy abrangente para todos os perfis (pacientes, profissionais de saúde, gestores, alunos), e seções com layouts diferenciados que não seguem o padrão "3 cards iguais + CTA chapado".

