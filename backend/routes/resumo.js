import { Router } from "express";
import upload from "../storage/multer.upload.js";
import { readPdf } from "../storage/pdfReader.js";
const router = Router();
import { reqIa } from "../IA/ia.service.js";
import path from 'path'
import { fileURLToPath } from 'url'

import promptCompleto from "../IA/prompts/prompt.context.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



router.post("/resu", upload.single("file"), async (req, res) => {
  try {
    const caminho = path.join(process.cwd(), 'public', req.file.filename);
    console.log("1")
    const resul = await readPdf(caminho);
    console.log('pdf')
    // const IA = new GoogleGenAI({ apiKey: process.env.APIAI });

    const resposta =  await reqIa(promptCompleto, resul);
    console.log('2')
    res.status(200).json({ texto: resposta, PDF: resul });
    console.log('3')
  } catch (error) {
    throw error
    return res.status(409).json({error: error})
  }
});



export default router