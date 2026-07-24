import { z } from "zod";

export const resumoSchema = z.object({
  titulo: z
    .string()
    .max(100, { error: "Titulo muito grande" })
    .min(5, { error: "Muito curto" }),
  materia: z.string().min(5, { error: "Materia inexistente" }).max(20),
  conteudo: z.string().min(255),
  pdf_name: z.string().min(1).max(150),
  user_id: z.int().min(1),
});
