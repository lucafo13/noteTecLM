import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import auth from "../../middleware/auth.js";

const router = Router();
const prisma = new PrismaClient();

router.get("/resumos/:id",auth, async (req, res) => {
  try {
    const { id } = req.params
    const findResu = await prisma.resumos.findUnique({
      where: {
        id: Number(id)
      },
    });

    if(!findResu){
        return res.status(404).json({mensagem: "Resumo não encontrado"})
    }
    if(findResu.user_id !== req.user.id){
        return res.status(403).json({mensagem: "sem permissão"})
    }

    return res.status(200).json({resumo: findResu})
  } catch (error) {
    return res.status(404).json({erro: error.message})
  }
});

export default router;
