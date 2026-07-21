import { Router } from "express";
import auth from "../../middleware/auth.js";

const router = Router();

router.get('/me', auth, async(req, res) => {
    try {
        const usuario = req.user
        return res.status(200).json({usuario: usuario})
    } catch (error) {
        return res.status(401).json({ error })
}})

export default router