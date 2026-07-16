import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/find/:email", async (req, res) => {
  try {
    const parametro = req.params.email;
    const findThatGuy = await prisma.usuarios.findUnique({
      where: {
        email: parametro,
      },
      select:{
        id: true,
        nome: true,
        email:true,
        created_at: true
      }
    });
    if (!findThatGuy) {
      return res
        .status(404)
        .json({
          mensagem: `O usuario com o email ${parametro} não foi encontrado!`,
        });
    }

    return res.status(200).json(findThatGuy);
  } catch (error) {
        return res.status(404).json({
            erro: error.menssage
        })
  }
});

export default router;
