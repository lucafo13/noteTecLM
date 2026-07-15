import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient();
const router = Router();

router.post("/login", async (req, res) => {
  try {
    const userLogin = await prisma.usuarios.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!userLogin) {
        return res.status(404).json({mensagem:"usuario nao encontrado"})
    }
    const hash = userLogin.senha_hash
    const certeza = await bcrypt.compare(req.body.senha, hash)
    if(!certeza){
        return res.status(404).json({mensagem: "credencias nao batem"})
    }
    return res.status(200).json({mensagem: "usuario logado"})



  } catch (error) {
    return res.status(500).json({erro: [{
        error_code: error.code,
        error_menssage: error.menssage
    }]})
  }
});

export default router;
