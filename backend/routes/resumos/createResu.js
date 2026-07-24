import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/cadResu", async (req, res) => {
  try {
    const resu = req.body;
 


    const createR = await prisma.resumos.create({
      data: {
        titulo: resu.titulo,
        materia: resu.materia,
        conteudo: resu.conteudo,
        pdf_name: resu.pdf_name,
        user_id: Number(resu.user_id),
      },
    });

    return res.status(201).json({ mensagem: "Resumo cadastrado com sucesso", createR });
  } catch (error) {
    console.log(error?.message)
    return res
      .status(400)
      .json({ mensagem: "não foi possivel realizar o cadastro do resumo" });
  }
});

export default router