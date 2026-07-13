import { Groq } from "groq-sdk/client.js";
import dotenv from "dotenv/config";


const IA = new Groq({ apiKey: process.env.GROQAPI });
export const reqIa = async (promptCompleto, resul) => {
try {
    const iaResponde = await IA.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    max_tokens:3500,

    messages: [
      {
        role: "system",
        content: `${promptCompleto}`,
      },
      {
        role: "user",
        content: resul,
      },
    ],
  });
  const resposta = iaResponde.choices[0].message.content;
  return resposta;
} catch (error) {
   throw error
   return;
   
}
};

export const chatIA = async (material, promptChat, histo) => {
  const iaResponde = await IA.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    max_tokens: 3500,
    messages: [
      {
        role: "system",
        content: `${promptChat} \n\n## material \n ${material}` 
      },
      ...histo
    ]
  });
  const respostaChat = iaResponde.choices[0].message.content;
  return respostaChat
};
