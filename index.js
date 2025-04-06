import express from "express"
import "dotenv/config"
import router from "./routers/index.js"
import conn from "./infraestrutura/conexao.js"
import tabela from "./infraestrutura/tabela.js"

const app = express()
const port = process.env.PORT || 3000


router(app, express)

tabela.init(conn)


app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Deu certo");
});