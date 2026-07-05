
/* Bibliotequitas */
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { PDFParse } from 'pdf-parse';
import fs from 'fs'
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { GoogleGenAI } from '@google/genai'

/* aura 67 express necessidades */
const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(process.env.APIAI || process.env.PORT || "abc")
const $PORT = process.env.PORT || 3000


app.get('/', (req, res) => res.send("home"))

app.post('/resu', async (req, res) => {
    const storage = multer.diskStorage(
        {
            destination: (req, file, cb) => {
                cb(null, `${__dirname}/public`)
            }, 
            filename: (req, file, cb) => {
                cb(null, Date.now() + '.pdf');  
            }
        }
    )

    const upload = await multer({ storage }).single("file");

    upload(req, res, async (err) => {
        if(err instanceof multer.MulterError){
            return res.status(500).send({code: err.code, message: err.message, field: err.field})
        } else if(err){
            return res.status(500).send({message: err.message})
        }
        const caminho = `${__dirname}/public/${req.file.filename}`;
        const buffer = fs.readFileSync(caminho)
        const parser = new PDFParse({data: buffer})
        const obra = await parser.getText();
        await parser.destroy();

        const resul = obra.text


        if(!resul || resul.trim().length === 0){
            return res.status(418).json({mensagem: "deu não man"})
        };

        
        const prompt = `Apartir de agora você é o responsável por fazer os resumos pela noteTec LM: 
        Contexto: A noteTec LM visa ajudar estudantes da ETEC a passar nas diversas provas que a escola tecnica possui, tendo cada professor um estilo diferente de avaliação, assim ,ao receber um texto extraido de um  PDF você irá detectar a matéria tratada no texto e retornar um resumo da matéria focando em  pontos diferentes: 
        Provas envolvendo geografia: O professor Guilherme de geografia tende a passar todas suas provas como disertativas, além de focar em temas contemporaneos como a geopolitica mundial, em textos de geografia, apresente o resumo e oriente o usuario de como podem ser cobradas as questoes.
        provas envolvendo banco de dados: O professor Pompeu tende a passar suas provas com varias questões de multipla escolha, além de algumas questões envolvendo a pr´tica em si, faça o resumo e apresente os principais pontos a serem cobrados
        O texto qual fará o resumo é este aqui: ${resul}`
        const IA = new GoogleGenAI({apiKey: process.env.APIAI});
        const reqIa = async () => {
            const iaResponde = await IA.models.generateContent({
                model: 'gemini-3.5-flash',
                contents: prompt,
            });
            const resposta = iaResponde.text;
            res.status(200).json({texto: resposta})
        }
        reqIa() 
       


    })

})

// olha esse app listen tesudo  
app.listen($PORT, () => {
    console.log(`My freaking horny API is running here in the ${$PORT} port, be happy`)
})