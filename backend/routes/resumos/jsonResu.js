import { Router } from "express";

const router = Router();

import { jsonIa } from "../../IA/ia.service.js";

router.post("/json", async (req, res) => {
  try {
    const resumo = req.body.resumo;

    const respostaJson = await jsonIa(resumo);
    return res.status(201).json(respostaJson);
  } catch (error) {
    console.log(error.message)
    return res.status(409).json(error.message);
  }
  
});

export default router;
