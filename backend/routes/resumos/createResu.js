import { Router } from "express";
import { PrimsaClient, Prisma, PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/cadResu", async (req, res) => {
  try {
    const resu = req.body;
    const findR = await prisma.resumos.findUnique({
      where: {
        conteudo: resu.conteudo,
      },
    });


    const createR = await prisma.resumos.create({
      data: {
        titulo: resu.titulo,
        materia: resu.materia,
        conteudo: resu.conteudo,
        pdf_name: resu.pdf_name,
        user_id: resu.user_id,
      },
    });

    return res.status(201).json({ mensagem: "Resumo cadastrado com sucesso" });
  } catch (error) {
    return res
      .status(400)
      .json({ mensagem: "não foi possivel realizar o cadastro do resumo" });
  }
});
