import { Router } from "express";
import { chatIA } from "../IA/ia.service.js";
import promptChat from '../IA/prompts/prompt.chat.js'
import { PrismaClient} from '@prisma/client'


const router = Router()
const prisma = new PrismaClient()


router.post('/chat', async (req, res) => {
    try {
        const historico = req.body.historico
        const ultimaMen = historico.at(-1)
        const menDb = await prisma.mensagens.create({ 
            data: {
                role: "User",
                content: ultimaMen.menssage,
                resumo_id: Number(req.body.resumo_id),
            }
        })
        const respostaChat = await chatIA(req.body.resumo, promptChat, historico)
        const iaMenDb = await prisma.mensagens.create({
            data: {
                role: "Ia",
                content: respostaChat,
                resumo_id: Number(req.body.resumo_id)
            }
        })
        res.status(200).json({resposta: respostaChat, criados: [menDb, iaMenDb]})
    } catch (error) {
        return res.status(500).json({erro: error.message})
    }
})

export default router