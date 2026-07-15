import { PDFParse } from "pdf-parse";
import fs from 'fs'

export const readPdf = async (caminho) => {
     
    const buffer = fs.readFileSync(caminho);
    const parser = new PDFParse({ data: buffer });
    const obra = await parser.getText();
    await parser.destroy();
    await fs.unlinkSync(caminho)
  

    const resul = obra.text;

    if (!resul || resul.trim().length === 0) {
      return res.status(418).json({ mensagem: "deu não man" });
    }

    return resul
}