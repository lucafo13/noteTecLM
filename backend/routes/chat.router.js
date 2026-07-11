import { Router } from "express";
import { chatIA } from "../IA/ia.service.js";
import promptChat from '../IA/prompts/prompt.chat.js'


const router = Router()


router.post('/chat', async (req, res) => {
    try {
        const res = await chatIA(req.body.material, promptChat, req.body.histo )
        res.status(200).json({res: res})
    } catch (error) {
        return res.json({error: error})
    }
})

export default router