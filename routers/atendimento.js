import { Router } from "express"

const router = Router()

//get
router.get("/atendimentos/", (req, res) => {
    res.send("Listando todos os atendimentos..")
})

//post
router.post("/atendimentos/", (req, res) => {
    res.send("Criando novo atendimento")
})

//put
router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params

    res.send(`Atualizando atendimento ${id}`)
})

//delete
router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params

    res.send(`Apagando atendimento ${id}`)
})

export default router