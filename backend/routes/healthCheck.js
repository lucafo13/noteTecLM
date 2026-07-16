import { Router } from "express";

const router = Router();

router.get('/health', (req, res) => {
  return res.status(200).json({Saude:"Donde estas cr7????? cr7 donde estaaaas"})
})



export default router