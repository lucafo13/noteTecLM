import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import auth from "../../middleware/auth.js";

const router = Router();
const prisma = new PrismaClient();

router.get("/resumos", auth, async (req, res) => {
  try {
    const usuario = req.user;
    const resumos = await prisma.resumos.findMany({
      where: {
        user_id: Number(usuario.id),
      },
    });
    if (!resumos) {
      return res.status(404).json({ mensagem: "O usuario não possui resumos" });
    }
    const contResu = await prisma.resumos.count({
      where: {
        user_id: Number(usuario.id),
      },
    });
    return res.status(200).json({resumos: resumos, quantidade: contResu})
  } catch (error) {
    console.log(error?.message);
    return res
      .status(404)
      .json({
        erro: error?.message,
        mensagem: "Não foi possivel realizar a ação",
      });
  }
});

export default router;
