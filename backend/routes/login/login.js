import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv/config"
import jwt from "jsonwebtoken";

import cookieParser from "cookie-parser";
const prisma = new PrismaClient();
const router = Router();
const { TOKEN } = process.env

router.post("/login", async (req, res) => {
  try {
    const userLogin = await prisma.usuarios.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!userLogin) {
      return res.status(404).json({ mensagem: "usuario nao encontrado" });
    }
    const hash = userLogin.senha_hash;
    const certeza = await bcrypt.compare(req.body.senha, hash);
    if (!certeza) {
      return res.status(404).json({ mensagem: "credencias nao batem" });
    }
    console.log('a')
    const token = jwt.sign(
      {id: userLogin.id, nome: userLogin.nome, email: userLogin.email },
      TOKEN,
      {
        expiresIn:"1 day"
      
      },
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
      path: '/'
    })
    return res.status(200).json({ mensagem: `usuario com o email ${userLogin.email} logado com muito sucesso! `});
  } catch (error) {
    console.log(error.message)
  
    return res.status(500).json({
      erro: error
    });
  }
});

export default router;
