import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = Router();
const prisma = new PrismaClient();

router.post("/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hash = await bcrypt.hash(senha, 10);
    const emailEx = await prisma.usuarios.findUnique({
        where: {
            email: email
        }
    })
    if(emailEx){
        return res.status(409).json({mensagem: 'email existe'})
    }
    if(!nome || !email || !senha){
        return res.status(406).json({mensagem: "todos os campos são obrigatorios!!!"})
    }
    const newUser = await prisma.usuarios.create({
      data: {
        nome: nome,
        email: email,
        senha_hash: hash,
      },
      select: {
        nome: true,
        email: true,
        created_at: true
      }
    });



    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(409).json({erro: [{
        status: error?.code,
        error: error.menssage
    }]})
  }
});

export default router;
