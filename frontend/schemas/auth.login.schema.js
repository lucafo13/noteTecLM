import z, { email } from "zod"


export const loginSchema = z.object({
    email: z.email({"error": "Email inexistente"}).max(155, {"error":"Email inexistente"}),
    senha: z.string().min(10, {"error":"Senha incapaz de uso"})  
})