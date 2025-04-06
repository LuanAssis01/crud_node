import { Router } from "express"
import atendimentoController from "../controllers/atendimentoController.js"

const router = Router()

// GET
router.get("/atendimentos/", atendimentoController.listar)

// POST
router.post("/atendimentos/", atendimentoController.criar)

// PUT
router.put("/atendimento/:id", atendimentoController.atualizar)

// DELETE
router.delete("/atendimento/:id", atendimentoController.apagar)

export default router
