import { Router } from "express"
import atendimentoController from "../controllers/atendimentoController.js"

const router = Router()

//get
router.get("/atendimentos/", (req, res) => {
    atendimentoController.listar()
        .then((atendimento) => res.status(200).json(atendimento))
        .catch((error) => res.status(400).json(error.message))
})

//post
router.post("/atendimentos/", (req, res) => {
    atendimentoController.criar(req.body)
        .then((atendimento) => res.status(201).json(atendimento))
        .catch((error) => res.status(400).json(error.message))
})

//put
router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params

    atendimentoController.atualizar(req.body, id)
    .then((atendimento) => res.status(202).json(atendimento))
    .catch((error) => res.status(405).json(error.message))
})

//delete
router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params
    
    atendimentoController.apagar(id)
    .then((atendimento) => res.status(202).json(atendimento))
    .catch((error) => res.status(405).json(error.message))
})

export default router