class Tabelas{
    init(conn){
        this.conn = conn
        this.criarTabelaAtendimento()
    }

    criarTabelaAtendimento(){
        const query_sql = 
        `
        CREATE TABLE IF NOT EXISTS atendimento (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        data_atendimento DATE,
        servico VARCHAR(100),
        cliente VARCHAR(100),
        status_atendimento ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
        );
        `

        this.conn.query(query_sql, (error) => {
            if(error){
                console.error("Deu ruim \n" + error.message)
                return
            }
            console.log("Deu bom")
        })
    }
}



export default new Tabelas()