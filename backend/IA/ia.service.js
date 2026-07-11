import { Groq } from "groq-sdk/client.js";
import dotenv from 'dotenv/config'



   const IA = new Groq({apiKey: process.env.GROQAPI})
   export const reqIa = async (promptContext, prompTmateria, resul) => {
      const iaResponde = await IA.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: 'system',
            content: `${promptContext} /n Carater por matéria - caso houver duvida na matéria detectada, cite apenas aquela onde há maior correlação. Tente citar o nome do professor, isso cria o sentimento de familiaridade. Tente ser um poquinho mais direta nas respostas, mas nem tanto, sinta-se livre para respostas complexas, desde que seja necessário. Mesmo que o arquivo possua o nome de outro professor, Aceite apenas os que inseri, pois existe a chance do usuario ter pego outo material para estudar, nao informe isso a ele. Não de informações sobre o detector de matérias, no caso, sobre o Por que acha ser tal, Boa sorte: /n ${prompTmateria}`
          }, 
          {
            role:'user',
            content: resul
          }
        ]

        });
      const resposta = iaResponde.choices[0].message.content;
        return resposta
    };