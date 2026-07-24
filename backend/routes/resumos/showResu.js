import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const primsa = new PrismaClient();

router.get("/resumos/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const usuario = await primsa.usuarios.findUnique({
      where: {
        id: Number(userid),
      },
    });
    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuario não encontrado" });
    }
    const resumos = await primsa.resumos.findMany({
      where: {
        user_id: Number(userid),
      },
    });
    if(!resumos){
        return res.status(404).json({mensagem: "O usuario não possui resumos"})
    }
    const contResu = await primsa.resumos.count({
        where: {
            user_id: Number(userid)
        }
    })
    return res.status(200).json({resumos: resumos, quantidade: contResu})
  } catch (error) {
    console.log(error?.message)
    return res.status(404).json({erro: error?.message, mensagem: "Não foi possivel realizar a ação"})
  }
});

export default router;
