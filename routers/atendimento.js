import { Router } from "express"
import atendimentoController from "../controllers/atendimentoController.js"

const router = Router()

//get
router.get("/atendimentos/", (req, res) => {
    res.send(atendimentoController.buscar())
})

//post
router.post("/atendimentos/", (req, res) => {
    res.send(atendimentoController.criar())
})

//put
router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params

    res.send(atendimentoController.alterar(id))
})

//delete
router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params

    res.send(atendimentoController.apagar(id))
})

export default router