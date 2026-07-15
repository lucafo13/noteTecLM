import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = Router();
const prisma = new PrismaClient();

router.post("/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hash = await bcrypt.hash(cadUser.senha, 10);
    const emailEx = await prisma.usuarios.findUnique({
        where: {
            email: cadUser.email
        }
    })
    if(emailEx){
        return res.status(409).json({mensagem: 'email existe'})
    }
    if(!cadUser.nome || !cadUser.email || !cadUser.senha){
        return res.status(406).json({mensagem: "todos os campos são obrigatorios!!!"})
    }
    const newUser = await prisma.usuarios.create({
      data: {
        nome: nome,
        email: email,
        senha_hash: hash,
      },
    });


    return res.status(201).json(cadUser);
  } catch (error) {
   
    return res.status(409).json({erro: [{
        status: error?.code,
        error: error.menssage
    }]})
  }
});

export default router;
