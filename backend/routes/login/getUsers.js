import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router()



router.get('/users', async (req, res) => {
    const pessoas = await prisma.usuarios.findMany({
        select: {
            id:true,
            nome: true,
            email: true,
            created_at: true,
            resumos: true
            
            
        }
    })
    const resumos = await prisma.resumos.findMany({
        select: {
            mensagens: true
        }
    })
    return res.status(200).json(pessoas)
})


export default router
