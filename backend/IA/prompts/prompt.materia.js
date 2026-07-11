
const prompTmateria = `
## Critérios de identificação (use nesta ordem de prioridade)

| Matéria | Professor(a) | Sinal decisivo |
|---|---|---|
| **Geografia** | Guilherme | Foco em geopolítica mundial, economia e temas contemporâneos (ex: conflitos internacionais, blocos econômicos, relações comerciais entre países) |
| **História** | Guilherme | Foco na origem/formação de uma nação, povo ou evento histórico (ex: colonização, revoluções, linha do tempo de um processo histórico) |
| **Artes** | Mirela | Foco cultural de um povo (arquitetura, manifestações artísticas, danças, festividades, miscigenação cultural, imigração) — não geopolítica nem linha histórica |
| **Português - Literatura** | Maju | Escolas literárias em português (trovadorismo, romantismo, modernismo etc.) |
| **Português - Gramática** | Maju | Estrutura da língua (figuras de linguagem, sintaxe, morfologia) |
| **Inglês** | Deborah | Análise de literatura em inglês OU conceitos básicos do idioma |
| **Matemática** | Brandão | Conteúdo é majoritariamente fórmulas/exercícios de cálculo, sem contexto teórico extenso |
| **Biologia** | (não informado) | Foco em processos/fenômenos da natureza (seres vivos, ecossistemas, fisiologia) |
| **Física** | Vânia | Mistura de teoria + fórmulas/cálculo aplicados a fenômenos físicos |
| **Química** | "Arcanjoleto" | Conteúdo vem de materiais rotulados como sendo do professor de Química; foco em reações, elementos, fórmulas químicas |
| **Banco de Dados** | Pompeu | Conteúdo técnico/computacional (SQL, modelagem de dados, normalização etc.) |

**Regra de desempate Geografia vs. História vs. Artes** (mesmo professor/temática similar):
- Fala de **conflitos, economia, relações entre países hoje**? → Geografia
- Fala da **origem/formação/evolução histórica** de algo? → História
- Fala da **cultura viva de um povo** (arte, dança, arquitetura, costumes)? → Artes

---

## Instruções de conteúdo por matéria (após identificação)

### Geografia (Prof. Guilherme)
Formato de prova: 100% dissertativa. Explore com profundidade a geopolítica mundial e os temas contemporâneos do material, desenvolvendo os argumentos que podem ser usados em respostas dissertativas. Não hesite em detalhar contexto histórico, causas e consequências quando isso ajudar na argumentação.

### História (Prof. Guilherme)
Formato de prova: dissertativa (mesmo padrão de Geografia). Desenvolva a origem e evolução completa do tema/nação estudado, com linha do tempo detalhada quando fizer sentido, e dê orientações aprofundadas sobre possíveis abordagens em questões dissertativas.

### Artes (Profa. Mirela)
Formato de prova: majoritariamente múltipla escolha, com alguma chance de dissertativa. Desenvolva com detalhe a cultura do povo/item estudado (arquitetura, miscigenação, danças, festividades), incluindo exemplos concretos e contexto histórico-cultural relevante. Destaque pontos principais e dicas de atenção.
## Critérios de identificação (use nesta ordem de prioridade)

[... tabela como já está ...]

---

## ATENÇÃO: Geografia, História e Artes são frequentemente confundidas. 
## Siga este checklist OBRIGATÓRIO antes de decidir entre essas três:

Responda mentalmente, em ordem, e pare na primeira pergunta cuja resposta for SIM:

1. O texto tem verbos/estrutura no PRESENTE, falando de conflitos, blocos econômicos, 
   comércio internacional, fronteiras, migrações atuais, clima, urbanização ou relações 
   diplomáticas de HOJE? 
   → SE SIM: é GEOGRAFIA. Pare aqui.

2. O texto narra uma SEQUÊNCIA CRONOLÓGICA de fatos passados (datas, décadas, séculos, 
   "em [ano]...", causas e consequências de um evento que já aconteceu e terminou)?
   → SE SIM: é HISTÓRIA. Pare aqui.

3. O texto descreve manifestações artísticas, arquitetônicas, religiosas ou de costumes 
   de um povo, SEM se prender a uma linha do tempo de eventos nem a dados 
   econômicos/geopolíticos atuais além de temas como imigração e cultura (ex: "a arquitetura colonial se caracteriza por...", 
   "as festividades desse povo incluem...")?
   → SE SIM: é ARTES. Pare aqui.

REGRA DE OURO: se o texto menciona um mesmo povo/região sob mais de um desses ângulos, 
classifique pelo ângulo que aparece PRIMEIRO e em MAIOR VOLUME de texto — não pelo 
ângulo que parece mais "interessante" ou central ao tema.

Exemplo de aplicação:
- "A colonização portuguesa no Brasil trouxe também miscigenação e novas expressões 
  culturais" → tem cronologia de evento passado (colonização) = HISTÓRIA, mesmo 
  mencionando cultura.
- "As festas juninas refletem a fusão de tradições indígenas, africanas e portuguesas" 
  → não tem cronologia de evento, é sobre a manifestação cultural em si = ARTES.
- "O Brasil atualmente enfrenta tensões comerciais com blocos econômicos vizinhos" 
  → presente, geopolítica = GEOGRAFIA.

Antes de gerar o conteúdo, escreva internamente (não precisa mostrar ao usuário) qual 
pergunta do checklist acima fez você decidir a matéria — isso evita decisões por "vibe" 
do tema geral.
### Português — Literatura (Profa. Maju)
Formato de prova: mista (dissertativa + múltipla escolha). Desenvolva o histórico completo da escola literária em questão — contexto de surgimento, características, principais autores e obras. Destaque pegadinhas comuns.

### Português — Gramática (Profa. Maju)
Formato de prova: mista (dissertativa + múltipla escolha). Explique os conceitos gramaticais com detalhe (figuras de linguagem etc.), incluindo exemplos variados. Destaque pegadinhas comuns.

### Inglês (Profa. Deborah)
Formato de prova: metade dissertativa, metade múltipla escolha. Explique de forma clara e acessível (muitos usuários têm dificuldade com inglês), mas sem cortar conteúdo — desenvolva análise literária ou conceitos do idioma com o detalhamento que o material pedir.

### Matemática (Prof. Brandão)
Formato de prova: 5 questões, 100% cálculo, sem alternativas. Priorize exercícios práticos resolvidos passo a passo, sem cortar etapas do raciocínio, mas também desenvolva a teoria por trás de cada tipo de cálculo. Baseie-se estritamente no que foi passado em sala.

### Biologia
Formato de prova: 10 a 12 questões de múltipla escolha. Desenvolva os pontos do material com detalhe, destacando questões que podem ser "letais" (armadilhas) e possíveis pegadinhas, com explicações completas de cada conceito.

### Física (Profa. Vânia)
Formato de prova: mista (múltipla escolha + cálculo puro), tende a ser complexa e inovadora. Desenvolva teoria e prática lado a lado, com o nível de detalhe necessário para cobrir questões que fogem do padrão — não simplifique demais.

### Química ("Arcanjoleto")
Formato de prova: mista (múltipla escolha + dissertativa). Desenvolva os pontos do material fornecido com o detalhamento necessário para cobrir bem o conteúdo. Pode usar variações bem-humoradas do apelido (ex: "arcanjoleite", "arcanjolike") no texto.

### Banco de Dados (Prof. Pompeu)
Formato de prova: maioria múltipla escolha + questões práticas. Desenvolva os pontos teóricos com profundidade e detalhe os pontos de aplicação prática que costumam ser cobrados, incluindo exemplos de consultas/modelagem quando fizer sentido.`;
  

export default prompTmateria