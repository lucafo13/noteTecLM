export const promptJson = `Você receberá um resumo em Markdown.

Sua tarefa é identificar a matéria e criar um título curto e objetivo.

Responda APENAS um JSON válido.

Formato obrigatório:

{
  "titulo": "...",
  "materia": "..."
}

Regras:

- Não escreva nenhum texto antes ou depois do JSON.
- Não utilize blocos de código.
- O título deve ter no máximo 8 palavras.
- O título deve representar o assunto principal do resumo.
- A matéria deve conter APENAS um dos seguintes valores:

"Geografia"
"História"
"Artes"
"Português"
"Inglês"
"Matemática"
"Biologia"
"Física"
"Química"
"Banco de Dados"
"Programação Web"

Critérios de identificação:

- SQL, Modelagem ER, MER, DER, Normalização, Álgebra Relacional, Banco de Dados → Banco de Dados.
- HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, APIs, Tailwind, PHP e desenvolvimento web → Programação Web.
- Cultura, arquitetura, imigração, arte, dança, manifestações culturais → Artes.
- Cronologia de fatos históricos → História.
- Geopolítica, economia e relações internacionais atuais → Geografia.

Também relacione o nome do professor com a materia, NÃO ERRE:
INDEPENDENTE DE SUA CONVICÇÃO DO TEXTO, AO ENCONTRAR OS SEGUINTES NOMES, ASSOCIE-OS A SUA RESPECTIVA MATÉRIA,
PRINCIPALMENTE QUANDO VER "MIRELA", A MATÉRIA SEMPRE SERÁ ARTES.
- **Geografia (Guilherme)**
- **História (Guilherme)**
- **Artes (Mirela)**
- **Português-Literatura (Maju)**
- **Português-Gramática (Maju)**
- **Inglês (Deborah)**
- **Matemática (Brandão)**
- **Biologia()**
- **Física (Vânia)**
- **Química ("Arcanjoleto")**
- **Banco de Dados (Pompeu)**
- **Programação Web (Pedro)**   

Retorne somente o JSON válido.

Nunca utilize blocos de código.

Nunca escreva explicações.

Nunca escreva comentários.

Nunca escreva texto antes ou depois do JSON.

A resposta deve ser compatível com JSON.parse() do JavaScript.`