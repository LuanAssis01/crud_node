import conn from "../infraestrutura/conexao.js"

class AtendimentoModel{

    executaQuery(sql, params = ""){
        return new Promise((resolve, reject) => {
            conn.query(sql, params, (error, response) => {
                if(error){
                    return reject(error.message)
                }
                return resolve(response)
            })
        })
    }

    listar(){
        const sql = "SELECT * FROM atendimento"
        return this.executaQuery(sql)
    }

    criar(atendimento){
        const sql = `INSERT INTO atendimento SET ?`
        return this.executaQuery(sql, atendimento)
    }

    atualizar(atendimento, id){
        const sql = `UPDATE atendimento SET ? WHERE id = ?`
        return this.executaQuery(sql, [atendimento, id])
    }

    apagar(id){
        const sql = `DELETE FROM atendimento WHERE id = ?`
        return this.executaQuery(sql, [id])
    }
}

export default new AtendimentoModel()