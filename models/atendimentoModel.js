import conn from "../infraestrutura/conexao.js"

class AtendimentoModel{
    listar(){
        const sql = "SELECT * FROM atendimento"

        return new Promise((resolve, reject) => {
            conn.query(sql, {}, (error, response) => {
                if(error){
                    console.error(`Deu merda na listagem\n`)
                    reject(error)
                }
                console.log(`Deu bom a listagem\n`)
                resolve(response)
            })
        })
    }

    criar(atendimento){
        const sql = `INSERT INTO atendimento SET ?`

        return new Promise((resolve, reject) => {
            conn.query(sql, atendimento, (error, response) => {
                if(error){
                    console.error(`Deu merda na listagem\n`)
                    reject(error)
                }
                console.log(`Deu bom a listagem\n`)
                resolve(response)
            })
        })
    }

    atualizar(atendimento, id){
        const sql = `UPDATE atendimento SET ? WHERE id = ?`

        return new Promise((resolve, reject) => {
            conn.query(sql, [atendimento, id], (error, response) => {
                if(error){
                    console.error(`Deu merda na listagem\n`)
                    reject(error)
                }
                console.log(`Deu bom a listagem\n`)
                resolve(response)
            })
        })
    }

    apagar(id){
        const sql = `DELETE FROM atendimento WHERE id = ?`

        return new Promise((resolve, reject) => {
            conn.query(sql, id, (error, response) => {
                if(error){
                    console.error(`Deu merda na listagem\n`)
                    reject(error)
                }
                console.log(`Deu bom a listagem\n`)
                resolve(response)
            })
        })
    }
}

export default new AtendimentoModel()