
import { z } from "zod";

export const cadSchena = z.object({
  nome: z
    .string()
    .min(5, { "error": "Nome obrigatório" })
    .max(200, { "error": "nome imenso" }),
  email: z.email({ "error": "email inválido" }).max(155, {"error":"Porra de email e esse"}),
  senha: z
    .string()
    .min(10, { "error": "Sua senha deve ter ao menos 10 caracteres" })
    .max(255),
 
});
