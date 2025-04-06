import atendimentoModel from "../models/atendimentoModel.js"

class AtendimentoController {
    listar(req, res) {
        atendimentoModel.listar()
            .then((atendimento) => res.status(200).json(atendimento))
            .catch((error) => res.status(400).json(error.message))
    }

    criar(req, res) {
        atendimentoModel.criar(req.body)
            .then((atendimento) => res.status(201).json(atendimento))
            .catch((error) => res.status(400).json(error.message))
    }

    atualizar(req, res) {
        const { id } = req.params
        atendimentoModel.atualizar(req.body, id)
            .then((atendimento) => res.status(202).json(atendimento))
            .catch((error) => res.status(405).json(error.message))
    }

    apagar(req, res) {
        const { id } = req.params
        atendimentoModel.apagar(id)
            .then((atendimento) => res.status(202).json(atendimento))
            .catch((error) => res.status(405).json(error.message))
    }
}

export default new AtendimentoController()
