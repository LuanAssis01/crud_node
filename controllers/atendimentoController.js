import atendimentoModel from "../models/atendimentoModel.js"

class AtendimentoController{
    listar(){
        return atendimentoModel.listar()
    }

    criar(body){
        return atendimentoModel.criar(body)
    }

    atualizar(body, id){
        return atendimentoModel.atualizar(body, id)
    }

    apagar(id){
        return atendimentoModel.apagar(id)
    }

}

export default new AtendimentoController()