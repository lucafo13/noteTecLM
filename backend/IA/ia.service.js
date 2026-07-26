import { Groq } from "groq-sdk/client.js";
import dotenv from "dotenv/config";
import { promptJson } from "./prompts/prompt.json.js";

const IA = new Groq({ apiKey: process.env.GROQAPI });
export const reqIa = async (promptCompleto, resul) => {
  try {
    const iaResponde = await IA.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 3500,
      // response_format: { type: "json_object" },
      messages: [
        { role: "system", content: `${promptCompleto}` },
        { role: "user", content: resul },
      ],
    });

    const resposta = iaResponde.choices[0].message.content;

    return resposta;
  } catch (error) {
    console.error("Erro na chamada à IA (reqIa):", error?.message || error);
    throw error;
  }
};

export const chatIA = async (resumo, promptChat, historico) => {
  try {
    console.log(historico);
    const newHisto = historico.map((msg) => ({
      role: msg.key.toLowerCase() === "ia" ? "assistant" : "user",
      content: msg.menssage,
    }));
    const iaResponde = await IA.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 3500,
      messages: [
        {
          role: "system",
          content: `${promptChat} \n\n## material \n ${resumo}`,
        },
        ...newHisto,
      ],
    });
    const respostaChat = iaResponde.choices[0].message.content;
    return respostaChat;
  } catch (error) {
    console.log(`Èrro: ${error.message}`)
  }
};

export const jsonIa = async (resumo) => {
  const iaResponde = await IA.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: promptJson },
      { role: "user", content: resumo },
    ],
  });
  const respostaJson = JSON.parse(iaResponde.choices[0].message.content);
  return respostaJson;
};
