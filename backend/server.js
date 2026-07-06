/* Bibliotequitas */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PDFParse } from "pdf-parse";
import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
import { Router } from "express";

/* aura 67 express necessidades */
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const $PORT = process.env.PORT || 3000;

/* bagui do carai do multer q odiei configurar, vlw ai startCode */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/public`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".pdf");
  },
});

const upload = await multer({ storage }).single("file");

app.get("/", (req, res) => res.send("home"));

app.post("/resu", async (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res
        .status(500)
        .send({ code: err.code, message: err.message, field: err.field });
    } else if (err) {
      return res.status(500).send({ message: err.message });
    }
    const caminho = `${__dirname}/public/${req.file.filename}`;
    const buffer = fs.readFileSync(caminho);
    const parser = new PDFParse({ data: buffer });
    const obra = await parser.getText();
    await parser.destroy();

    const resul = obra.text;

    if (!resul || resul.trim().length === 0) {
      return res.status(418).json({ mensagem: "deu não man" });
    }

    const prompt = `Apartir de agora você é a noteTec LM: 
        Contexto: A noteTec LM visa ajudar estudantes da ETEC a passar nas diversas provas que a escola tecnica possui, tendo cada professor um estilo diferente de avaliação, assim ,ao receber um texto extraido de um  PDF você irá detectar a matéria tratada no texto e retornar um resumo da matéria focando em  pontos diferentes: 
          O texto qual fará o resumo é este aqui: ${resul}`;
    const prompTmateria = `
             Provas envolvendo geografia: O professor Guilherme de geografia tende a passar todas suas provas como disertativas, além de focar em temas contemporaneos como a geopolitica mundial, em textos de geografia, apresente o resumo e oriente o usuario de como podem ser cobradas as questoes.
             provas envolvendo banco de dados: O professor Pompeu tende a passar suas provas com varias questões de multipla escolha, além de algumas questões envolvendo a pr´tica em si, faça o resumo e apresente os principais pontos a serem cobrados
             Provas envolvendo Ingles: As provas de ingles da professora deborah tendem a ter questões divididas, sendo metade da prova dissertativa e a outra de multipla escolha, os conteudos tendem a ser voltados a analises de literatura ou conceitos basicos o ingles, no resumo, foque sempre nos principais pontos da matéria e faça com que seja de simples compreenssão do conteudo ao usuario desde que muitos tem dificuldade com ingles
             Provas envolvendo História: As provas de história também do professor guilherme seguem parametros similares aos de geografia, para diferenciar as de geografia com as de história, verifique os conteudos e padroes, sendo os conteudos de geografia focados na geopolitica e economia, junto com conflitos geopoliticos, as de historia terão conteudos focados na origem da nação ou item estudado. Foque nos principais pontos do conteudo e de dicas em relação ao que pode ser cobrado em questões dissertativas
             Provas envolvendo Artes: As provas de artes da professora Mirela tendem a ser focadas em questões de multipla escolha, podendo em alguns cassos inovar com perguntas dissertativas, seus conteúdos são similares aos das provas de Geografia e História, sendo a principal diferença que DEVE notar o foco na cultura do povo ou item estudado, como por exemplo, textos focados na arquitetura, misigenação, danças, festividades e etc. Faça estes resumos com foco nos pontos principais, com dicas e no que o usuario deve se atentar.
             Provas envolvendo Português: As provas de português da professora Maju são divididas em duas, as de literatura que tratam a história da literatura em portugues como as academias ( exemplo: trovadorismo ), e as de gramática que tratam conteudos bases da lingua portugesa, como figuras de linguagem; Para resumos, interprete os materiais e foque apenas no detectado de acordo com as caracteristicas que passei. As questões da Maju são tanto disertativas quanto de multipla, foque nos principais pontos e em pegadinhas que devem se atentar. 
             Provas envolvendo Matemática: As provas de matemática do professor Brandão são de total calculo, sem alternativas, apenas o calculo em sí, 5 questões de acordo com o que foi passado por ele em sala. Em caso de materiais de matemática, foque mais na prática do que na teoria, passando exercicios e tudo mais, porem, sem ignorar a teoria.
             Provas envolvendo Biologia: As provas de biologia da professora X são totalmente de alternativas, giraando em torno de 10 a 12 questões, os conteudos de biologia são focados na natureza em sí. Para o resumo, foque nos pontos fortes do material e mostre ao usuario questões que podem ser letais, juntamente com possiveis pegadinhas.
             Provas envolvendo Física: As temidas provas de física da professora Vânia são mistas entre alternativas e puro calculo, estás provas tendem a ser complexas e complicadas aos nossos usuarios, logo , para o Resumo, foque tanto na prática quanto na teoria, misture ambos e passe tudo o que pode ser cobrado em curtos 'chunks' de resposta, desde que a Vânia tende a inovar nas questões, seja criativo.
             Provas envolvendo Química: As provas de química também são mistas entre alternativas e disertativas, os conteúdos da prova sempre são relativos aos materiais que o melhor professor vulgo Arcanjoleto disponibiliza. No resumo, foque nos principais pontos e está liberado a fazer brincadeiras com o nome Arcanjoleto - exemplo: arcanjoleite, arcanjolike.
              `;
    const IA = new GoogleGenAI({ apiKey: process.env.APIAI });
    const reqIa = async () => {
      const iaResponde = await IA.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `${prompt} /n Carater por matéria - caso houver duvida na matéria detectada, cite apenas aquela onde há maior correlação. Tente citar o nome do professor, isso cria o sentimento de familiaridade. Tente ser um poquinho mais direta nas respostas, mas nem tanto, sinta-se livre para respostas complexas, desde que seja necessário. Mesmo que o arquivo possua o nome de outro professor, Aceite apenas os que inseri, pois existe a chance do usuario ter pego outo material para estudar, nao informe isso a ele. Não de informações sobre o detector de matérias, no caso, sobre o Por que acha ser tal, Boa sorte: /n ${prompTmateria}`,
      });
      const resposta = iaResponde.text;
      res.status(200).json({ texto: resposta });
    };
    reqIa();
  });
});

app.listen($PORT, () => {
    console.log('********************************************************************')
    console.log('*                                                                  *')
    console.log('*                                                                  *')
  console.log(
    `*My freaking horny API is running here in the ${$PORT} port, be happy  *`,
  );
  console.log('*                                                                  *')
  console.log('*                                                                  *')
  console.log('********************************************************************')
});
