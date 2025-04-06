class AtendimentoController{
    buscar(){
        return "Buscando atendimentos..."
    }

    criar(){
        return "Criando atendimento..."
    }

    alterar(id){
        return `Alterando atendimento ${id}...`
    }

    apagar(id){
        return `Apagando atendimento ${id}...`
    }

}

export default new AtendimentoController()